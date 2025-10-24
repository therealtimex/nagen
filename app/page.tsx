"use client"

import Image from "next/image"
import { useState } from "react"
import { MessageCircle, Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

// Simple CTA Button Component
function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
  [key: string]: any
}) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#21395D]",
  }

  return (
    <Button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Button>
  )
}

export default function HomePage() {
  const [isUnifiedRegistrationOpen, setIsUnifiedRegistrationOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Compact SEO Banner - TEMPORARILY HIDDEN */}
      <section className="relative bg-white hidden">
        {/* Simple Clean Banner */}
        <div className="relative w-full bg-gradient-to-r from-[#21395D] to-[#2a4a73] py-8 lg:py-12">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-10 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-4 left-10 w-12 h-12 border border-red-400 rounded-full"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Logo */}
              <div className="lg:col-span-1">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                  width={200}
                  height={60}
                  priority
                  className="brightness-0 invert"
                />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 text-white">
                <h1 className="text-2xl lg:text-3xl font-bold mb-3">
                  TẤM LÓT HỖ TRỢ VÒM BÀN CHÂN CHẤT LƯỢNG CAO TỪ MỸ
                </h1>
                <p className="text-lg text-gray-200 mb-4">
                  Giải pháp chăm sóc sức khỏe bàn chân chuyên nghiệp - Được tin dùng bởi hơn 4 triệu người
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <CTAButton
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsUnifiedRegistrationOpen(true)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Tư vấn miễn phí
                  </CTAButton>
                  <CTAButton
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#21395D]"
                    onClick={() => setIsAppointmentModalOpen(true)}
                  >
                    <Calendar className="w-4 h-4" />
                    Đặt lịch đo chân
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Video Section */}
              <div className="mb-12">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:from-gray-200 hover:to-gray-300 transition-all duration-300 group max-w-2xl mx-auto shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#21395D] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a2d4a] transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-[#21395D] font-semibold text-lg">Video giới thiệu NAGEN</p>
                    <p className="text-gray-600 text-sm mt-1">2 phút • Xem ngay</p>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#21395D] mb-4 sm:mb-6 text-center leading-tight">
                  TẤM LÓT HỖ TRỢ VÒM BÀN CHÂN NAGEN
                </h2>
                <p className="text-base sm:text-lg text-[#21395D] leading-relaxed text-justify whitespace-pre-line px-2 sm:px-0">
                  <strong>Tấm lót hỗ trợ vòm bàn chân Nagen</strong> do <strong>Bio Orthotics International, Inc sản xuất tại Mỹ</strong>, là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay. Mỗi người có kích thước vòm bàn chân khác nhau, chúng tôi cung cấp đa dạng kích cỡ phù hợp riêng với từng người, cho nhiều lứa tuổi
                </p>

                {/* Product Image */}
                <div className="my-4 sm:my-6 max-w-5xl mx-auto flex justify-center px-2 sm:px-0">
                  <Image
                    src={getImagePath("/images/20200624_161136PS.webp")}
                    alt="Bộ sưu tập tấm lót hỗ trợ vòm bàn chân NAGEN - Sungen, Winagen, Softgen, Endurance, Silhouette"
                    width={1200}
                    height={400}
                    className="w-full rounded-lg sm:rounded-xl shadow-lg"
                    priority
                    title="Các dòng sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN chất lượng cao"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}