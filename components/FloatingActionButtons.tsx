"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Facebook, Phone, MessageCircle, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingActionButtonsProps {
  onScheduleClick: () => void
}

export default function FloatingActionButtons({ onScheduleClick }: FloatingActionButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsExpanded(true)
      }
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const handlePhoneCall = () => {
    window.location.href = "tel:02435632008"
  }

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/people/NAGEN/61576197860425/", "_blank", "noopener,noreferrer")
  }

  const handleYouTubeClick = () => {
    window.open("https://www.youtube.com/@nagenvn", "_blank", "noopener,noreferrer")
  }

  const buttons = [
    {
      icon: Calendar,
      label: "Đặt lịch đo chân",
      onClick: onScheduleClick,
      className: "bg-red-600 hover:bg-red-700 text-white",
      ariaLabel: "Đặt lịch đo chân miễn phí",
    },
    {
      icon: Youtube,
      label: "YouTube",
      onClick: handleYouTubeClick,
      className: "bg-[#FF0000] hover:bg-[#CC0000] text-white",
      ariaLabel: "Xem kênh YouTube NAGEN",
    },
    {
      icon: Facebook,
      label: "Facebook",
      onClick: handleFacebookClick,
      className: "bg-[#1877F2] hover:bg-[#166FE5] text-white",
      ariaLabel: "Liên hệ qua Facebook",
    },
    {
      icon: Phone,
      label: "Gọi điện",
      onClick: handlePhoneCall,
      className: "bg-[#10B981] hover:bg-[#059669] text-white",
      ariaLabel: "Gọi điện tư vấn: 024 35632008",
    },
  ]

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[1000] flex flex-col items-end">
        {/* Action buttons - positioned above the toggle button */}
        <div
          className={cn(
            "flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ease-in-out",
            !isMobile || isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          )}
        >
          {buttons.map((button, index) => {
            const Icon = button.icon
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
                    "bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    "pointer-events-none relative",
                  )}
                >
                  {button.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>

                {/* Action button */}
                <Button
                  onClick={button.onClick}
                  className={cn(
                    "rounded-full shadow-lg transition-all duration-200",
                    "flex items-center justify-center",
                    "hover:scale-110 active:scale-95",
                    "md:w-18 md:h-18 w-14 h-14",
                    button.className,
                  )}
                  aria-label={button.ariaLabel}
                >
                  <Icon className="md:w-7 md:h-7 w-6 h-6" />
                </Button>
              </div>
            )
          })}
        </div>

        {isMobile && (
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "rounded-full shadow-lg transition-all duration-300 ease-in-out",
              "bg-[#21395D] hover:bg-[#1a2d4a] text-white",
              "flex items-center justify-center",
              "md:w-18 md:h-18 w-14 h-14",
              isExpanded && "rotate-45",
            )}
            aria-label={isExpanded ? "Đóng menu" : "Mở menu liên hệ"}
            aria-expanded={isExpanded}
          >
            <MessageCircle className="w-7 h-7" />
          </Button>
        )}
      </div>

      {/* Backdrop for mobile */}
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999]"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
