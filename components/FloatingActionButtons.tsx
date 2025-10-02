"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { getImagePath, navigateTo } from "@/lib/utils"

interface FloatingActionButtonsProps {
  onScheduleClick: () => void
}

export default function FloatingActionButtons({ onScheduleClick }: FloatingActionButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Đảm bảo component đã mount trên client
    
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 1024 // Thay đổi breakpoint từ 768 thành 1024
      setIsMobile(isMobileDevice)

      if (!isMobileDevice) {
        setIsExpanded(true)
      } else {
        setIsExpanded(false) // Đảm bảo mobile bắt đầu với collapsed state
      }
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  // Không render gì cho đến khi component mount trên client
  if (!isClient) {
    return null
  }

  const handleFacebookClick = () => {
    navigateTo("https://www.facebook.com/people/NAGEN/61576197860425/", { external: true })
  }

  const handleYouTubeClick = () => {
    navigateTo("https://www.youtube.com/@nagenvn", { external: true })
  }

  const handleZaloClick = () => {
    navigateTo("https://zalo.me/2254011402039684095", { external: true })
  }

  const buttons = [
    {
      icon: "/images/icons/calendar.png",
      label: "Đặt lịch đo chân",
      onClick: onScheduleClick,
      className: "bg-red-600 hover:bg-red-700 text-white shadow-red-500/25",
      ariaLabel: "Đặt lịch đo chân miễn phí",
    },
    {
      icon: "/images/icons/youtube.svg",
      label: "YouTube",
      onClick: handleYouTubeClick,
      className: "bg-[#FF0000] hover:bg-[#CC0000] text-white shadow-red-500/25",
      ariaLabel: "Xem kênh YouTube NAGEN",
    },
    {
      icon: "/images/icons/facebook.svg",
      label: "Facebook",
      onClick: handleFacebookClick,
      className: "bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-blue-500/25",
      ariaLabel: "Liên hệ qua Facebook",
    },
    {
      icon: "/images/icons/zalo.svg",
      label: "Zalo",
      onClick: handleZaloClick,
      className: "bg-[#0068FF] hover:bg-[#005ae0] text-white shadow-blue-500/25",
      ariaLabel: "Chat on Zalo",
    },
  ]

  return (
    <>
      {/* Debug info - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-[1003] bg-blue-100 border border-blue-300 p-2 rounded text-xs max-w-[200px] lg:hidden">
          <div>Width: {typeof window !== 'undefined' ? window.innerWidth : 0}px</div>
          <div>isMobile: {isMobile ? 'Yes' : 'No'}</div>
          <div>isExpanded: {isExpanded ? 'Yes' : 'No'}</div>
          <div>isClient: {isClient ? 'Yes' : 'No'}</div>
        </div>
      )}
      
      <div className="floating-buttons-container fixed bottom-4 right-4 z-[1002] flex flex-col items-end">
        {/* Action buttons - positioned above the toggle button */}
        <div
          className={cn(
            "flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ease-in-out",
            // Fallback: show on desktop by default, hide on mobile unless expanded
            "lg:opacity-100 lg:translate-y-0 lg:visible", // Always show on desktop
            !isMobile || isExpanded ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 pointer-events-none invisible",
          )}
        >
          {buttons.map((button, index) => {
            return (
              <div
                key={index}
                className="flex items-center space-x-3 group"
                style={{
                  transitionDelay: !isMobile || isExpanded ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* Label tooltip */}
                <div
                  className={cn(
                    "bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-gray-700/30",
                    "opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out",
                    "pointer-events-none relative",
                  )}
                >
                  {button.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900/95 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>

                {/* Action button */}
                <Button
                  onClick={button.onClick}
                  className={cn(
                    "rounded-full shadow-lg transition-all duration-200 ease-out",
                    "flex items-center justify-center p-0 relative overflow-hidden",
                    "hover:scale-105 active:scale-95 hover:shadow-xl",
                    "lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12", // Responsive sizes
                    "border border-white/10",
                    button.className,
                  )}
                  aria-label={button.ariaLabel}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                  <Image
                    src={getImagePath(button.icon)}
                    alt={button.label}
                    width={48}
                    height={48}
                    className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6 filter relative z-10"
                  />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Toggle button - always visible on mobile */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "rounded-full shadow-lg transition-all duration-300 ease-in-out",
            "bg-[#21395D] hover:bg-[#1a2d4a] text-white",
            "flex items-center justify-center p-0 relative overflow-hidden",
            "border border-white/10 hover:scale-105 active:scale-95",
            "lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12", // Responsive sizes
            isExpanded && "rotate-45",
            // Hide on desktop, show on mobile
            isMobile ? "block" : "hidden"
          )}
          aria-label={isExpanded ? "Đóng menu" : "Mở menu liên hệ"}
          aria-expanded={isExpanded}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
          <MessageCircle className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4 drop-shadow-sm relative z-10" />
        </Button>
      </div>

      {/* Backdrop for mobile */}
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1001]"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
