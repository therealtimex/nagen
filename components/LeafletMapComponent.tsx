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

          // Set bounds to show Vietnam territory including Hoang Sa and Truong Sa
          const vietnamBounds = L.latLngBounds(
            [8.8, 103.0], // Southwest corner (very tight bound)
            [23.0, 115.5] // Northeast corner (tight bound including Hoang Sa and Truong Sa)
          )
          
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

            // Fit bounds with padding only if bounds is valid, but constrain to Vietnam
            if (bounds.isValid()) {
              // Ensure bounds don't exceed Vietnam territory
              const constrainedBounds = bounds.intersects(vietnamBounds) ? bounds : vietnamBounds
              map.fitBounds(constrainedBounds.isValid() ? constrainedBounds : vietnamBounds, {
                padding: [20, 20],
                maxZoom: 16,
              })
            } else {
              // Default to Vietnam bounds if no valid dealer bounds
              map.fitBounds(vietnamBounds, {
                padding: [5, 5],
                maxZoom: 9,
              })
            }
          } else {
            // Show all Vietnam if no dealers
            map.fitBounds(vietnamBounds, {
              padding: [5, 5],
              maxZoom: 9,
            })
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
      setTimeout(() => {
        map.setView([selectedDealer.lat, selectedDealer.lng], 15, {
          animate: true,
          duration: 0.5,
        })
        // Force map invalidation after view change
        setTimeout(() => {
          map.invalidateSize()
        }, 600) // Wait for animation to complete
      }, 100)
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
    // Use a more reliable approach for view changes
    const timeoutId = setTimeout(() => {
      map.setView(center, zoom, { animate: true, duration: 0.5 })
      
      // Multiple invalidations to ensure proper rendering
      setTimeout(() => {
        map.invalidateSize()
      }, 100)
      
      setTimeout(() => {
        map.invalidateSize()
      }, 600) // After animation completes
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [map, center, zoom])

  return null
}

const LeafletMapComponent = ({ dealers, onSelectDealer, selectedDealer, userLocation, onBookAppointment }: LeafletMapComponentProps) => {
  // Vietnam bounds including Hoang Sa and Truong Sa - very tight bounds to focus only on Vietnam
  const vietnamBounds = L.latLngBounds(
    [8.8, 103.0], // Southwest corner (very tight bound - Ca Mau area)
    [23.0, 115.5] // Northeast corner (tight bound including Hoang Sa and Truong Sa)
  )
  
  const [mapCenter, setMapCenter] = useState<[number, number]>([15.8, 107.8]) // Center of Vietnam mainland
  const [mapZoom, setMapZoom] = useState(8) // Much higher zoom to focus only on Vietnam
  const [isMapReady, setIsMapReady] = useState(false)
  const [mapKey, setMapKey] = useState(0) // Key to force map re-render
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

  const territoryIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
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
      // Default to center of Vietnam to show entire territory including Hoang Sa and Truong Sa
      setMapCenter([15.8, 107.8])
      setMapZoom(8)
    }
    
    // Force map re-render when selected dealer changes
    setIsMapReady(prev => !prev)
    setMapKey(prev => prev + 1)
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

  // Additional effect to handle selected dealer changes more aggressively
  useEffect(() => {
    if (selectedDealer) {
      // Force multiple re-renders to ensure map displays correctly
      const timeouts = [
        setTimeout(() => setMapKey(prev => prev + 1), 50),
        setTimeout(() => setMapKey(prev => prev + 1), 200),
        setTimeout(() => setMapKey(prev => prev + 1), 500),
      ]

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout))
      }
    }
  }, [selectedDealer?.id]) // Only trigger when dealer ID changes

  const handleMarkerClick = (dealer: Dealer) => {
    if (onSelectDealer) {
      onSelectDealer(dealer)
    }
    
    // Additional handling to ensure map updates correctly
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event('resize'))
      }
    }, 100)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-[500px] relative">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[1000] p-3 border-b">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-blue-900 text-sm">Bản đồ đại lý NAGEN - Lãnh thổ Việt Nam</h4>
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
            {selectedDealer && (
              <div className="text-xs text-blue-600 font-medium">
                📍 {selectedDealer.name}
              </div>
            )}
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
            key={mapKey} // Force re-render when key changes
            center={mapCenter}
            zoom={mapZoom}
            minZoom={8} // Much higher minZoom to show only Vietnam
            maxZoom={18} // Allow detailed zoom
            maxBounds={vietnamBounds} // Restrict panning to Vietnam bounds
            maxBoundsViscosity={1.0} // Make bounds sticky
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Nagen &copy; <a href="https://nagen.vn">nagen.vn</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
              minZoom={8} // Much higher minZoom to show only Vietnam territory
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
