"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Music,
  Globe,
  Menu,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
import Header from "@/components/Header"



// Standardized CTA Button Component
function CTAButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  [key: string]: any
}) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500",
    secondary: "bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-900 hover:bg-blue-50 focus:ring-blue-500",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Button>
  )
}





// Main Contact Page Component
export default function ContactPage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  // Handle custom events from Footer
  useEffect(() => {
    const handleOpenUnifiedRegistration = () => {
      setIsConsultationModalOpen(true)
    }

    window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)

    return () => {
      window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NAGEN Vietnam",
            "description": "Chuyên cung cấp tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ, dịch vụ tư vấn và đo vòm bàn chân tại nhà miễn phí toàn quốc.",
            "url": "https://nagen.vn",
            "telephone": "+84966578008",
            "email": "nagen@nagen.vn",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tầng 7, Tòa VP-1, Sunsquare Complex, Số 21 Lê Đức Thọ",
              "addressLocality": "Mỹ Đình 2, Nam Từ Liêm",
              "addressRegion": "Hà Nội",
              "addressCountry": "VN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.038134",
              "longitude": "105.780147"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "image": "https://nagen.vn/images/logo_slogan_1.png",
            "logo": "https://nagen.vn/images/logo_slogan_1.png",
            "sameAs": [
              "https://www.facebook.com/tamlotnagen",
              "https://www.instagram.com/nagenvn",
              "https://www.youtube.com/@nagenvn",
              "https://www.tiktok.com/@nagenvn"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+84966578008",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
                "areaServed": "VN"
              },
              {
                "@type": "ContactPoint",
                "email": "nagen@nagen.vn",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
                "areaServed": "VN"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Tấm lót hỗ trợ vòm bàn chân Endurance",
                    "description": "Tấm lót hỗ trợ vòm bàn chân cao cấp cho hoạt động thể thao"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Tấm lót hỗ trợ vòm bàn chân Silhouette",
                    "description": "Tấm lót hỗ trợ vòm bàn chân mỏng nhẹ cho giày công sở"
                  }
                }
              ]
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Dịch vụ tư vấn miễn phí",
                "description": "Tư vấn miễn phí về sản phẩm tấm lót hỗ trợ vòm bàn chân phù hợp",
                "price": "0",
                "priceCurrency": "VND"
              },
              {
                "@type": "Offer",
                "name": "Dịch vụ đo vòm bàn chân tại nhà",
                "description": "Dịch vụ đo vòm bàn chân chuyên nghiệp tại nhà khách hàng",
                "areaServed": "VN"
              }
            ]
          })
        }}
      />

      <Header
        onConsultationClick={() => setIsConsultationModalOpen(true)}
        onAppointmentClick={() => setIsConsultationModalOpen(true)}
        currentPage="Liên hệ"
      />





      {/* Contact Information Cards */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">Liên hệ với NAGEN</h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Chúng tôi cam kết mang đến dịch vụ tư vấn chuyên nghiệp và hỗ trợ khách hàng tận tình nhất
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-base sm:text-lg mb-2">Hotline 24/7</h3>
                <a href="tel:0966578008" className="text-lg sm:text-2xl font-bold text-gray-800 hover:text-blue-900 transition-colors block mb-2">
                  0966578008
                </a>
                <p className="text-xs sm:text-sm text-gray-600">Phản hồi ngay lập tức</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-red-100">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-base sm:text-lg mb-2">Email hỗ trợ</h3>
                <a href="mailto:nagen@nagen.vn" className="text-sm sm:text-lg font-semibold text-gray-800 hover:text-blue-900 transition-colors block mb-2 break-all">
                  nagen@nagen.vn
                </a>
                <p className="text-xs sm:text-sm text-gray-600">Phản hồi trong 2h</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-base sm:text-lg mb-2">Giờ làm việc</h3>
                <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">24/7</p>
                <p className="text-xs sm:text-sm text-gray-600">Hỗ trợ không ngừng nghỉ</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-base sm:text-lg mb-2">Trụ sở chính</h3>
                <p className="text-sm text-gray-800 mb-2">Hà Nội</p>
                <a
                  href="https://maps.google.com/?q=21+Lê+Đức+Thọ,+Mỹ+Đình+2,+Nam+Từ+Liêm,+Hà+Nội"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Xem bản đồ
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Two Column Layout: Contact Channels & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Instant Contact Channels */}
            <div className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 rounded-xl p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Kênh liên hệ nhanh
                </h2>
                <p className="text-gray-600 text-sm">Chọn kênh phù hợp để được hỗ trợ ngay lập tức</p>
              </div>

              <div className="space-y-3 mb-4 sm:mb-6">
                <a
                  href="https://zalo.me/0966578008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Zalo OA</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Chat trực tiếp với chuyên gia</p>
                    <span className="inline-flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                      Chat ngay <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </a>

                <a
                  href="https://m.me/tamlotnagen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Facebook Messenger</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Nhắn tin qua Facebook</p>
                    <span className="inline-flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                      Nhắn tin <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <CTAButton
                  variant="primary"
                  size="default"
                  className="w-full bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Tư vấn miễn phí
                </CTAButton>
                <CTAButton
                  variant="secondary"
                  size="default"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  <Calendar className="w-4 h-4" />
                  Đặt lịch đo chân
                </CTAButton>
              </div>
            </div>

            {/* Location & Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900 to-blue-700">
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Vị trí trụ sở
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Tầng 7, Tòa VP-1, Sunsquare Complex<br />
                  Số 21 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội
                </p>
              </div>
              <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863944141!2d105.78014731533!3d21.03813398599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0x3a4d4b8e8b8b8b8b!2s21%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20M%E1%BB%B9%20%C4%90%C3%ACnh%202%2C%20Nam%20T%E1%BB%AB%20Li%C3%AAm%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1635000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vị trí trụ sở NAGEN"
                />
              </div>
              <div className="p-3 sm:p-4 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href="https://maps.google.com/?q=21+Lê+Đức+Thọ,+Mỹ+Đình+2,+Nam+Từ+Liêm,+Hà+Nội"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Mở Google Maps</span>
                    <span className="sm:hidden">Google Maps</span>
                  </a>
                  <a
                    href="tel:0966578008"
                    className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Gọi ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Social Media & Community Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Kết nối với NAGEN</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Theo dõi chúng tôi trên các kênh social và tham gia cộng đồng để nhận thông tin mới nhất
            </p>
          </div>

          {/* Social Media Channels */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8 text-center flex items-center justify-center">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Kênh Social Media
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/tamlotnagen"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">Facebook</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@tamlotnagen</p>
                  <span className="inline-flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                    Theo dõi <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/nagenvn"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-pink-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">Instagram</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagenvn</p>
                  <span className="inline-flex items-center text-pink-600 font-medium text-xs sm:text-sm">
                    Theo dõi <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@nagenvn"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-700 transition-colors">
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">YouTube</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagenvn</p>
                  <span className="inline-flex items-center text-red-600 font-medium text-xs sm:text-sm">
                    Đăng ký <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@nagenvn"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-gray-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">TikTok</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagenvn</p>
                  <span className="inline-flex items-center text-gray-800 font-medium text-xs sm:text-sm">
                    Theo dõi <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Community Groups */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8 text-center flex items-center justify-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Cộng đồng NAGEN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/groups/nuoiduongbanchannagen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-200"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-2">Cộng đồng người dùng</h4>
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    5,000+ thành viên
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                  Chia sẻ kinh nghiệm, trao đổi về sức khỏe bàn chân và sản phẩm NAGEN
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                    Tham gia ngay <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://zalo.me/g/vtptdj255"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-green-200"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-2">Nhóm hỗ trợ khách hàng</h4>
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    Hỗ trợ 24/7
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                  Nhận hỗ trợ nhanh chóng từ đội ngũ chuyên gia và cộng đồng
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-green-600 font-medium text-xs sm:text-sm">
                    Tham gia ngay <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://zalo.me/g/laqcoh198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-yellow-200"
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-2">Nhóm review & feedback</h4>
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    2,000+ đánh giá
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                  Đánh giá sản phẩm, chia sẻ trải nghiệm thực tế từ người dùng
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-yellow-600 font-medium text-xs sm:text-sm">
                    Tham gia ngay <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <UnifiedRegistrationForm
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  )
}