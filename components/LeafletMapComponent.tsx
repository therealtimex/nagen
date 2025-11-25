"use client"

import { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet"
import { Icon } from "leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Define types for dealer data
export interface Dealer {
  id: string
  name: string
  address: string
  phone: string
  distance?: string
  lat: number
  lng: number
}

interface LeafletMapComponentProps {
  dealers: Dealer[]
  onSelectDealer?: (dealer: Dealer) => void
  selectedDealer?: Dealer | null
  userLocation?: { lat: number; lng: number } | null
  onBookAppointment?: (dealer?: Dealer) => void
}

function MapController({
  dealers,
  selectedDealer,
  userLocation,
}: {
  dealers: Dealer[]
  selectedDealer?: Dealer | null
  userLocation?: { lat: number; lng: number } | null
}) {
  const map = useMap()

  useEffect(() => {
    const handleMapReady = () => {
      try {
        setTimeout(() => {
          map.invalidateSize()

          // Only auto-fit bounds when user location is available and no dealer is selected
          if (userLocation && dealers.length > 0 && !selectedDealer) {
            const bounds = L.latLngBounds([])

            dealers.forEach((dealer) => {
              bounds.extend([dealer.lat, dealer.lng])
            })

            bounds.extend([userLocation.lat, userLocation.lng])

            if (bounds.isValid()) {
              map.fitBounds(bounds, {
                padding: [20, 20],
                maxZoom: 16,
              })
            }
          }
        }, 100)
      } catch (error) {
        console.warn("Map initialization error:", error)
      }
    }

    map.whenReady(handleMapReady)
    map.on("load", handleMapReady)

    map.on("tileload", () => {
      setTimeout(() => map.invalidateSize(), 50)
    })

    if (selectedDealer) {
      map.setView([selectedDealer.lat, selectedDealer.lng], 15, {
        animate: true,
        duration: 0.5,
      })
    }

    return () => {
      map.off("load", handleMapReady)
      map.off("tileload")
    }
  }, [map, dealers, selectedDealer, userLocation])

  return null
}

// Component to recenter map when props change
function ChangeMapView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 0.5 })

    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }, [map, center, zoom])

  return null
}

function VietnamIslands() {
  const map = useMap()
  const [currentZoom, setCurrentZoom] = useState(6)
  const [geoJsonData, setGeoJsonData] = useState<any>(null)

  useEffect(() => {
    fetch('/hoangsa_truongsa.geojson')
      .then(response => response.json())
      .then(data => setGeoJsonData(data))
      .catch(error => console.warn("Could not load islands GeoJSON:", error))
  }, [])

  useEffect(() => {
    if (!map) return

    const handleZoom = () => {
      setCurrentZoom(map.getZoom())
    }

    map.on('zoomend', handleZoom)
    setCurrentZoom(map.getZoom())

    return () => {
      map.off('zoomend', handleZoom)
    }
  }, [map])

  useEffect(() => {
    if (!map || currentZoom <= 5) return

    const hoangSaLabel = L.marker([16.640717, 112.030869], {
      icon: L.divIcon({
        className: 'island-text-label',
        html: '<div style="text-align: center; font-weight: 500; color: #5f6368; font-size: 11px; text-shadow: 0 0 2px white; white-space: nowrap;">Quần Đảo<br/>Hoàng Sa</div>',
        iconSize: [0, 0]
      })
    }).addTo(map)

    const truongSaLabel = L.marker([9.861270, 114.757139], {
      icon: L.divIcon({
        className: 'island-text-label',
        html: '<div style="text-align: center; font-weight: 500; color: #5f6368; font-size: 11px; text-shadow: 0 0 2px white; white-space: nowrap;">Quần Đảo<br/>Trường Sa</div>',
        iconSize: [0, 0]
      })
    }).addTo(map)

    return () => {
      hoangSaLabel.remove()
      truongSaLabel.remove()
    }
  }, [map, currentZoom])

  if (!geoJsonData || currentZoom <= 5) return null

  return (
    <GeoJSON
      data={geoJsonData}
      style={{
        color: "#70757a",
        weight: 0.5,
        fillColor: "#e8eaed",
        fillOpacity: 0.2
      }}
    />
  )
}

const LeafletMapComponent = ({ dealers, onSelectDealer, selectedDealer, userLocation, onBookAppointment }: LeafletMapComponentProps) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([21.0338373, 105.7701789])
  const [mapZoom, setMapZoom] = useState(12)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Create custom icons for markers
  const dealerIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const userLocationIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  // Update map center when selected dealer or user location changes
  useEffect(() => {
    if (selectedDealer) {
      setMapCenter([selectedDealer.lat, selectedDealer.lng])
      setMapZoom(15)
    } else if (userLocation) {
      setMapCenter([userLocation.lat, userLocation.lng])
      setMapZoom(13)
    } else {
      setMapCenter([21.0338373, 105.7701789])
      setMapZoom(12)
    }
  }, [selectedDealer, userLocation])

  const handleMarkerClick = (dealer: Dealer) => {
    if (onSelectDealer) {
      onSelectDealer(dealer)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-[500px] relative">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[1000] p-3 border-b">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-blue-900 text-sm">Bản đồ đại lý NAGEN</h4>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Đại lý NAGEN</span>
              {userLocation && (
                <>
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                  <span>Vị trí của bạn</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Leaflet Map Container */}
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{ paddingTop: "64px" }} // Use inline style instead of pt-16 class
      >
        <div className="w-full h-full">
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            style={{
              height: "100%",
              width: "100%",
              minHeight: "300px", // Ensure minimum height
            }}
            zoomControl={true}
            attributionControl={false}
            scrollWheelZoom={true}
            doubleClickZoom={true}
            dragging={true}
            className="leaflet-container"
          >
            <TileLayer
              attribution='Nagen &copy; <a href="https://nagen.vn">nagen.vn</a>'
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              maxZoom={20}
              minZoom={3}
              subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              tileSize={256}
              detectRetina={true}
              errorTileUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />

            <MapController
              dealers={dealers}
              selectedDealer={selectedDealer}
              userLocation={userLocation}
            />

            <ChangeMapView center={mapCenter} zoom={mapZoom} />

            <VietnamIslands />

            {/* Dealer markers */}
            {dealers.map((dealer) => (
              <Marker
                key={dealer.id}
                position={[dealer.lat, dealer.lng]}
                icon={dealerIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(dealer),
                }}
              >
                <Popup maxWidth={280} minWidth={250} closeButton={true} autoClose={false}>
                  <div className="p-3">
                    <h5 className="font-semibold text-blue-900 text-base mb-2">{dealer.name}</h5>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{dealer.address}</p>

                    {dealer.distance && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-blue-600 font-medium">{dealer.distance}</span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const mapsUrl = `https://maps.google.com/maps?q=${dealer.lat},${dealer.lng}&hl=vi&z=15`
                          window.open(mapsUrl, '_blank')
                        }}
                        className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center font-medium transition-colors"
                      >
                        🧭 Chỉ đường
                      </button>
                      <button
                        onClick={() => {
                          if (onBookAppointment) {
                            onBookAppointment(dealer)
                          }
                        }}
                        className="flex-1 px-3 py-2 text-sm bg-green-600 text-white hover:bg-green-700 rounded-lg text-center font-medium transition-colors"
                      >
                        📅 Đặt lịch
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Add user location marker if available */}
            {userLocation && (
              <Marker position={[userLocation.lat, userLocation.lng]} icon={userLocationIcon}>
                <Popup>
                  <div className="p-3">
                    <h5 className="font-semibold text-blue-900 text-base mb-1">📍 Vị trí của bạn</h5>
                    <p className="text-sm text-gray-600">Vị trí hiện tại được xác định</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default LeafletMapComponent
