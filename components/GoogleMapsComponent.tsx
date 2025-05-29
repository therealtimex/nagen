"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ExternalLink, Navigation, MapPin } from "lucide-react"

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

interface GoogleMapsComponentProps {
  dealers: Dealer[]
  onSelectDealer?: (dealer: Dealer) => void
  selectedDealer?: Dealer | null
  userLocation?: { lat: number; lng: number } | null
}

const GoogleMapsComponent = ({ dealers, onSelectDealer, selectedDealer, userLocation }: GoogleMapsComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load Google Maps API
  useEffect(() => {
    if (!window.google && !document.getElementById("google-maps-script")) {
      const script = document.createElement("script")
      script.id = "google-maps-script"
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dVWTdO6HL8WXuI&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setIsLoaded(true)
      script.onerror = () => setError("Failed to load Google Maps API")
      document.head.appendChild(script)
    } else if (window.google) {
      setIsLoaded(true)
    }

    return () => {
      // Clean up markers when component unmounts
      markers.forEach((marker) => marker.setMap(null))
    }
  }, [])

  // Initialize map when API is loaded
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return

    try {
      // Default center (Hanoi)
      const defaultCenter = { lat: 21.0278, lng: 105.8342 }

      // Create map instance
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: userLocation || defaultCenter,
        zoom: userLocation ? 13 : 12,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      })

      // Create info window
      const infoWindowInstance = new window.google.maps.InfoWindow()

      setMap(mapInstance)
      setInfoWindow(infoWindowInstance)
    } catch (err) {
      console.error("Error initializing Google Maps:", err)
      setError("Failed to initialize Google Maps")
    }
  }, [isLoaded, userLocation])

  // Add markers when map is initialized and dealers data is available
  useEffect(() => {
    if (!map || !infoWindow || !dealers.length) return

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null))
    const newMarkers: google.maps.Marker[] = []

    // Add user location marker if available
    if (userLocation) {
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#3B82F6",
          fillOpacity: 1,
          strokeColor: "white",
          strokeWeight: 2,
        },
        title: "Vị trí của bạn",
        zIndex: 1000,
      })

      userMarker.addListener("click", () => {
        infoWindow.setContent(`
          <div class="p-2">
            <h5 class="font-semibold text-blue-900 text-sm">Vị trí của bạn</h5>
            <p class="text-xs text-gray-600">Vị trí hiện tại được xác định</p>
          </div>
        `)
        infoWindow.open(map, userMarker)
      })

      newMarkers.push(userMarker)
    }

    // Add markers for each dealer
    dealers.forEach((dealer, index) => {
      const label = String.fromCharCode(65 + index) // A, B, C, etc.

      const markerIcon = {
        path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        fillColor: dealer.status === "Đang mở cửa" ? "#22c55e" : "#ef4444",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#ffffff",
        scale: 8,
        labelOrigin: new window.google.maps.Point(0, 0),
      }

      const marker = new window.google.maps.Marker({
        position: { lat: dealer.lat, lng: dealer.lng },
        map,
        title: dealer.name,
        icon: markerIcon,
        label: {
          text: label,
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
        },
        animation: window.google.maps.Animation.DROP,
      })

      // Create info window content
      marker.addListener("click", () => {
        const content = `
          <div class="p-3 min-w-[250px]">
            <h5 class="font-semibold text-blue-900 text-sm mb-2">${dealer.name}</h5>
            <p class="text-xs text-gray-600 mb-2">${dealer.address}</p>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs px-2 py-1 rounded-full ${
                dealer.status === "Đang mở cửa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }">${dealer.status}</span>
              ${dealer.distance ? `<span class="text-xs text-blue-600 font-medium">${dealer.distance}</span>` : ""}
            </div>
            <div class="flex gap-2">
              <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}', '_blank')" 
                      class="flex-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                Chỉ đường
              </button>
              <button onclick="window.open('tel:${dealer.phone}', '_blank')" 
                      class="flex-1 px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700">
                Gọi ngay
              </button>
            </div>
          </div>
        `
        infoWindow.setContent(content)
        infoWindow.open(map, marker)

        // Call onSelectDealer if provided
        if (onSelectDealer) {
          onSelectDealer(dealer)
        }
      })

      newMarkers.push(marker)
    })

    setMarkers(newMarkers)

    // Auto-select dealer if provided
    if (selectedDealer) {
      const selectedMarkerIndex = dealers.findIndex((dealer) => dealer.id === selectedDealer.id)
      if (selectedMarkerIndex !== -1) {
        const selectedMarker = newMarkers[userLocation ? selectedMarkerIndex + 1 : selectedMarkerIndex]
        if (selectedMarker) {
          map.setCenter({ lat: selectedDealer.lat, lng: selectedDealer.lng })
          map.setZoom(15)
          window.google.maps.event.trigger(selectedMarker, "click")
        }
      }
    }

    // Fit bounds to show all markers
    if (newMarkers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      newMarkers.forEach((marker) => bounds.extend(marker.getPosition()!))

      map.fitBounds(bounds)

      // Don't zoom in too far
      const listener = window.google.maps.event.addListener(map, "idle", () => {
        if (map.getZoom()! > 16) {
          map.setZoom(16)
        }
        window.google.maps.event.removeListener(listener)
      })
    }
  }, [map, infoWindow, dealers, selectedDealer, onSelectDealer, userLocation])

  const openInGoogleMaps = () => {
    const center = selectedDealer
      ? `${selectedDealer.lat},${selectedDealer.lng}`
      : userLocation
        ? `${userLocation.lat},${userLocation.lng}`
        : "21.0278,105.8342"

    let query = "NAGEN"
    if (selectedDealer) {
      query = encodeURIComponent(selectedDealer.name + " " + selectedDealer.address)
    }

    window.open(`https://www.google.com/maps/search/${query}/@${center},15z`, "_blank")
  }

  // Handle errors or loading state
  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-[500px] flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Không thể tải bản đồ</h3>
          <p className="text-gray-600 mb-4">
            Đã xảy ra lỗi khi tải Google Maps. Vui lòng thử lại sau hoặc liên hệ với chúng tôi để được hỗ trợ.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Tải lại trang
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bản đồ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-[500px] relative">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-10 p-3 border-b">
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
            <Button variant="outline" size="sm" onClick={openInGoogleMaps} className="text-xs">
              <ExternalLink className="w-3 h-3 mr-1" />
              Mở Google Maps
            </Button>
          </div>
        </div>
      </div>

      {/* Google Maps Container */}
      <div ref={mapRef} className="w-full h-full pt-16"></div>

      {/* Dealer Legend */}
      <div className="absolute top-16 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
        <p className="text-xs font-medium text-gray-700 mb-2">Đại lý trên bản đồ:</p>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {dealers.slice(0, 6).map((dealer, index) => {
            const label = String.fromCharCode(65 + index) // A, B, C, etc.
            return (
              <button
                key={dealer.id}
                onClick={() => {
                  if (onSelectDealer) {
                    onSelectDealer(dealer)
                  }
                  // Trigger marker click
                  const markerIndex = userLocation ? index + 1 : index
                  if (markers[markerIndex]) {
                    window.google.maps.event.trigger(markers[markerIndex], "click")
                  }
                }}
                className={`w-full text-left p-2 rounded text-xs hover:bg-blue-50 transition-colors flex items-center space-x-2 ${
                  selectedDealer?.id === dealer.id ? "bg-blue-100 border border-blue-300" : "bg-white"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    dealer.status === "Đang mở cửa" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {label}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-blue-900 truncate">{dealer.name}</div>
                  <div className="text-gray-600 truncate text-xs">{dealer.distance}</div>
                </div>
              </button>
            )
          })}
          {userLocation && (
            <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ●
              </div>
              <span className="text-xs text-blue-800 font-medium">Vị trí của bạn</span>
            </div>
          )}
        </div>
      </div>

      {/* Selected Dealer Info */}
      {selectedDealer && (
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h5 className="font-semibold text-blue-900 text-sm">{selectedDealer.name}</h5>
              <p className="text-xs text-gray-600 mb-1">{selectedDealer.address}</p>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedDealer.status === "Đang mở cửa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {selectedDealer.status}
                </span>
                {selectedDealer.distance && (
                  <span className="text-xs text-blue-600 font-medium">{selectedDealer.distance}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-1 ml-3">
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-1 px-2"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${selectedDealer.lat},${selectedDealer.lng}`,
                    "_blank",
                  )
                }}
              >
                <Navigation className="w-3 h-3 mr-1" />
                Chỉ đường
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-1 px-2"
                onClick={() => {
                  window.open(`tel:${selectedDealer.phone}`, "_blank")
                }}
              >
                <Phone className="w-3 h-3 mr-1" />
                Gọi ngay
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GoogleMapsComponent
