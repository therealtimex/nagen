"use client"

import { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { Icon } from "leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Define types for dealer data
export interface Dealer {
  id: string
  name: string
  address: string
  phone: string
  status: "Đang mở cửa" | "Đóng cửa"
  distance?: string
  lat: number
  lng: number
}

interface LeafletMapComponentProps {
  dealers: Dealer[]
  onSelectDealer?: (dealer: Dealer) => void
  selectedDealer?: Dealer | null
  userLocation?: { lat: number; lng: number } | null
}

// Component to handle map events and ensure proper loading
function MapController({
  dealers,
  selectedDealer,
  userLocation,
  onSelectDealer,
}: {
  dealers: Dealer[]
  selectedDealer?: Dealer | null
  userLocation?: { lat: number; lng: number } | null
  onSelectDealer?: (dealer: Dealer) => void
}) {
  const map = useMap()

  useEffect(() => {
    // Ensure map is properly sized and tiles are loaded
    const handleMapReady = () => {
      try {
        // Invalidate size to ensure proper rendering
        setTimeout(() => {
          map.invalidateSize()

          // Set bounds to show all markers
          if (dealers.length > 0) {
            const bounds = L.latLngBounds([])

            // Add dealer locations to bounds
            dealers.forEach((dealer) => {
              bounds.extend([dealer.lat, dealer.lng])
            })

            // Add user location to bounds if available
            if (userLocation) {
              bounds.extend([userLocation.lat, userLocation.lng])
            }

            // Fit bounds with padding only if bounds is valid
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

    // Handle when map is ready
    map.whenReady(handleMapReady)

    // Also trigger on load event
    map.on("load", handleMapReady)

    // Handle tile loading
    map.on("tileload", () => {
      // Ensure map is properly sized when tiles load
      setTimeout(() => map.invalidateSize(), 50)
    })

    // Handle selected dealer changes
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

    // Ensure map is properly sized after view change
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }, [map, center, zoom])

  return null
}

const LeafletMapComponent = ({ dealers, onSelectDealer, selectedDealer, userLocation }: LeafletMapComponentProps) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([21.0285, 105.8542]) // Default to Hanoi
  const [mapZoom, setMapZoom] = useState(12)
  const [isMapReady, setIsMapReady] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Create custom icons for markers
  const openDealerIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const closedDealerIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
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
      setMapCenter([21.0285, 105.8542]) // Default to Hanoi
      setMapZoom(12)
    }
  }, [selectedDealer, userLocation])

  // Handle container resize
  useEffect(() => {
    if (!mapContainerRef.current || typeof window === "undefined") return

    // Check if ResizeObserver is available
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(() => {
        // Delay to ensure container has final size
        setTimeout(() => {
          setIsMapReady((prev) => !prev) // Force re-render
        }, 100)
      })

      resizeObserver.observe(mapContainerRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [])

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
              <span>Mở cửa</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Đóng cửa</span>
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
              minZoom={3}
              tileSize={256}
              detectRetina={true}
              errorTileUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />

            {/* Map Controller for handling events */}
            <MapController
              dealers={dealers}
              selectedDealer={selectedDealer}
              userLocation={userLocation}
              onSelectDealer={onSelectDealer}
            />

            {/* Update map view when center or zoom changes */}
            <ChangeMapView center={mapCenter} zoom={mapZoom} />

            {/* Add markers for dealers */}
            {dealers.map((dealer) => (
              <Marker
                key={dealer.id}
                position={[dealer.lat, dealer.lng]}
                icon={dealer.status === "Đang mở cửa" ? openDealerIcon : closedDealerIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(dealer),
                }}
              >
                <Popup maxWidth={280} minWidth={250} closeButton={true} autoClose={false}>
                  <div className="p-3">
                    <h5 className="font-semibold text-blue-900 text-base mb-2">{dealer.name}</h5>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{dealer.address}</p>

                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          dealer.status === "Đang mở cửa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {dealer.status}
                      </span>
                      {dealer.distance && <span className="text-sm text-blue-600 font-medium">{dealer.distance}</span>}
                    </div>

                    <div className="mb-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Điện thoại:</span> {dealer.phone}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center font-medium transition-colors"
                        style={{ color: "white" }}
                      >
                        🧭 Chỉ đường
                      </a>
                      <a
                        href={`tel:${dealer.phone}`}
                        className="flex-1 px-3 py-2 text-sm bg-green-600 text-white hover:bg-green-700 rounded-lg text-center font-medium transition-colors"
                        style={{ color: "white" }}
                      >
                        📞 Gọi ngay
                      </a>
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
