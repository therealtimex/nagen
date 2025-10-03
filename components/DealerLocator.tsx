"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Navigation, ChevronLeft, List, Calendar } from "lucide-react"
import { dealerData, getDealersByDistance, type Dealer } from "@/lib/dealers"
import dynamic from "next/dynamic"

const LeafletMapComponent = dynamic(
  () => import("@/components/LeafletMapComponent"),
  { ssr: false }
)

const DealerLocator = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  const [dealers, setDealers] = useState<Dealer[]>(dealerData.filter(dealer => dealer.name !== "NAGEN Thanh Xuân"))
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false)

  // Get user's location
  const getUserLocation = () => {
    setIsLoading(true)
    setError(null)

    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })

          // Sort dealers by distance from user
          const sortedDealers = getDealersByDistance(latitude, longitude)
          setDealers(sortedDealers)
          setIsLoading(false)
        },
        (err) => {
          console.error("Error getting location:", err)
          setError("Không thể xác định vị trí của bạn. Vui lòng cho phép truy cập vị trí.")
          setIsLoading(false)
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      )
    } else {
      setError("Trình duyệt của bạn không hỗ trợ định vị.")
      setIsLoading(false)
    }
  }

  // Handle dealer selection
  const handleSelectDealer = (dealer: Dealer) => {
    setSelectedDealer(dealer)
  }

  return (
    <div className="relative">
      <div className={`grid transition-all duration-300 ${isPanelCollapsed ? "grid-cols-1" : "lg:grid-cols-5"} gap-6`}>
        {/* Collapsible Dealer List Panel */}
        <div
          className={`transition-all duration-300 ${isPanelCollapsed ? "hidden" : "lg:col-span-2"} space-y-4 relative`}
        >
          {/* Collapse Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPanelCollapsed(true)}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border-2 border-blue-200 hover:border-blue-400 lg:flex hidden"
            title="Thu gọn danh sách"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Location Button */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-blue-900 mb-3">Tìm đại lý gần bạn</h3>
            <Button variant="outline" className="w-full" onClick={getUserLocation} disabled={isLoading}>
              <MapPin className="w-4 h-4 mr-2" />
              {isLoading ? "Đang xác định vị trí..." : "Xác định vị trí của tôi"}
            </Button>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            {userLocation && (
              <p className="text-green-600 text-xs mt-2 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Đã xác định vị trí của bạn
              </p>
            )}
          </div>

          {/* Store List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-blue-900 text-sm">Danh sách đại lý</h4>
              <span className="text-xs text-gray-500">{dealers.length} đại lý</span>
            </div>
            {dealers.map((dealer, index) => {
              const label = String.fromCharCode(65 + index) // A, B, C, etc.
              return (
                <Card
                  key={dealer.id}
                  className={`p-3 hover:shadow-lg transition-shadow cursor-pointer border-l-4 ${
                    selectedDealer?.id === dealer.id
                      ? "border-l-blue-600 bg-blue-50"
                      : "border-transparent hover:border-l-blue-600"
                  }`}
                  onClick={() => handleSelectDealer(dealer)}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                            dealer.status === "Đang mở cửa" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {label}
                        </div>
                        <h4 className="font-semibold text-blue-900 text-sm">{dealer.name}</h4>
                      </div>
                      <div
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          dealer.status === "Đang mở cửa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {dealer.status}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed pl-8">{dealer.address}</p>
                    <div className="flex items-center justify-between text-xs pl-8">
                      {dealer.distance && <span className="text-blue-600 font-medium">{dealer.distance}</span>}
                    </div>
                    <div className="flex gap-2 pl-8">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs py-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`,
                            "_blank"
                          )
                        }}
                      >
                        <Navigation className="w-3 h-3 mr-1" />
                        Chỉ đường
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs py-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          onBookAppointment()
                        }}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        Đặt lịch
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Interactive Leaflet Map */}
        <div className={`transition-all duration-300 ${isPanelCollapsed ? "col-span-1" : "lg:col-span-3"} relative`}>
          {/* Expand Button (when collapsed) */}
          {isPanelCollapsed && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPanelCollapsed(false)}
              className="absolute left-3 top-3 z-[1001] bg-white shadow-lg border-2 border-blue-200 hover:border-blue-400"
              title="Hiển thị danh sách đại lý"
            >
              <List className="w-4 h-4 mr-2" />
              Danh sách đại lý
            </Button>
          )}

          <LeafletMapComponent
            dealers={dealers}
            onSelectDealer={handleSelectDealer}
            selectedDealer={selectedDealer}
            userLocation={userLocation}
          />

          {/* Map Instructions */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              Click vào marker trên bản đồ để xem thông tin đại lý • Sử dụng chuột để phóng to/thu nhỏ và di chuyển bản
              đồ
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized layout for smaller screens */}
      <div className="lg:hidden mt-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2 text-sm">Hỗ trợ tìm đại lý</h4>
          <p className="text-xs text-gray-600 mb-3">
            Gọi hotline để được hỗ trợ tìm đại lý gần nhất và đặt lịch hẹn tư vấn
          </p>
          <div className="flex gap-2">
            <Button className="flex-1" size="sm" onClick={() => window.open("tel:0966578008", "_blank")}>
              <Phone className="w-4 h-4 mr-1" />
              0966578008
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <MapPin className="w-4 h-4 mr-1" />
              Chat Zalo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerLocator
