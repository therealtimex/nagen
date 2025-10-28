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

// Enhanced Navigation with Submenus
function EnhancedNavigation({
  onConsultationClick,
  onAppointmentClick
}: {
  onConsultationClick: () => void
  onAppointmentClick: () => void
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current)
        }
      }
    }
  }, [])

  const menuItems = [
    {
      name: "Sản phẩm",
      href: "#products",
      submenu: [
        { name: "Tấm lót hỗ trợ vòm bàn chân Sungen", href: "/san-pham/sungen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Winagen", href: "/san-pham/winagen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Softgen", href: "/san-pham/softgen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Endurance", href: "/san-pham/endurance" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette", href: "/san-pham/silhouette" },
        { name: "Đệm lót giày cao su xốp thiên nhiên", href: "/san-pham/dem-lot-cao-su" },
      ],
    },
    {
      name: "Dịch vụ",
      href: "#",
      submenu: [
        { name: "Tư vấn sản phẩm", href: "#consultation", action: "consultation" },
        { name: "Đăng ký đo chân", href: "#appointment", action: "appointment" },
      ],
    },
    {
      name: "Vấn đề thường gặp",
      href: "#",
      submenu: [
        { name: "Bàn chân bẹt", href: "/benh-thuong-gap/ban-chan-bet" },
        { name: "Chân chữ X, O", href: "/benh-thuong-gap/chan-chu-x-o" },
        { name: "Thoát vị đĩa đệm", href: "/benh-thuong-gap/thoat-vi-dia-dem" },
        { name: "Cong vẹo cột sống", href: "/benh-thuong-gap/cong-veo-cot-song" },
        { name: "Suy giãn tĩnh mạch", href: "/benh-thuong-gap/suy-gian-tinh-mach" },
        { name: "Đau cơ xương khớp", href: "/benh-thuong-gap/dau-co-xuong-khop" },
        { name: "Mất cân bằng cấu trúc", href: "/benh-thuong-gap/mat-can-bang-cau-truc" },
      ],
    },
    { name: "Đại lý", href: "/dai-ly" },
    // { name: "Đăng ký", href: "/dang-ky" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Blog kiến thức", href: "/blog-kien-thuc" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Nghiên cứu khoa học", href: "/studies" },
    { name: "Câu hỏi thường gặp", href: "/faqs" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  const handleMouseEnter = (itemName: string, hasSubmenu: boolean) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    if (hasSubmenu) {
      setActiveSubmenu(itemName)
    }
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150) // 150ms delay before hiding
  }

  const handleNavigation = (href: string, action?: string) => {
    // Handle service actions
    if (action === "consultation") {
      onConsultationClick()
      return
    }
    if (action === "appointment") {
      onAppointmentClick()
      return
    }

    // Check if it's an external link (starts with / or http)
    if (href.startsWith("/") || href.startsWith("http")) {
      window.location.href = href
      return
    }

    // Handle anchor links
    const targetId = href.substring(1) // Remove the '#'
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-[#21395D] text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              0966578008
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              nagen@nagen.vn
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              T2-CN: 24/24
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-[1001] transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
          } border-b border-gray-200 relative`}
      >
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                  width={200}
                  height={40}
                  priority
                  title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name, !!item.submenu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2 ${item.name === "Liên hệ" ? "text-blue-900 font-semibold border-b-2 border-blue-900" : ""
                      }`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {/* Submenu with bridge area */}
                  {item.submenu && activeSubmenu === item.name && (
                    <>
                      {/* Invisible bridge to prevent gap issues */}
                      <div className="absolute top-full left-0 w-full h-2 bg-transparent z-40"></div>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavigation(subItem.href, (subItem as any).action)
                            }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent border-gray-300 hover:bg-gray-100">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[280px] sm:w-[350px] p-0 z-[9999]" side="right">
                <div className="flex flex-col h-full bg-white">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-900 to-red-600">
                    <div className="text-lg font-semibold text-white">Menu</div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {menuItems.map((item) => (
                      <div key={item.name} className="mb-1">
                        {item.submenu ? (
                          <div>
                            <button
                              type="button"
                              className="w-full text-left py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium flex items-center justify-between rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] touch-manipulation"
                              onClick={() => {
                                setMobileActiveSubmenu(
                                  mobileActiveSubmenu === item.name ? null : item.name
                                )
                              }}
                            >
                              <span className="text-base font-semibold">{item.name}</span>
                              <ChevronDown
                                className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${mobileActiveSubmenu === item.name ? 'rotate-180 text-blue-600' : 'text-gray-500'
                                  }`}
                              />
                            </button>

                            {/* Submenu với animation */}
                            {mobileActiveSubmenu === item.name && (
                              <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-200 pl-4 animate-in slide-in-from-top-2 duration-300">
                                {item.submenu.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block text-sm text-gray-600 hover:text-blue-900 py-3 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-colors leading-relaxed min-h-[44px] flex items-center touch-manipulation"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      handleNavigation(subItem.href, (subItem as any).action)
                                    }}
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className={`block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation ${item.name === "Liên hệ" ? "text-blue-900 font-semibold bg-blue-50 rounded" : ""
                              }`}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavigation(item.href)
                            }}
                          >
                            <span className="text-base font-semibold">{item.name}</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="p-4 border-t bg-gray-50">
                    <div className="text-center text-sm text-gray-500">
                      <p>NAGEN - Tấm lót hỗ trợ vòm bàn chân</p>
                      <p className="text-xs mt-1">Hotline: 0966578008</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="w-full h-[8px]">
          <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
          <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
        </div>
      </header>
    </>
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
              "https://facebook.com/nagen.vietnam",
              "https://instagram.com/nagen.vietnam",
              "https://youtube.com/@nagen.vietnam",
              "https://tiktok.com/@nagen.vietnam"
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

      <EnhancedNavigation
        onConsultationClick={() => setIsConsultationModalOpen(true)}
        onAppointmentClick={() => setIsConsultationModalOpen(true)}
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
                  href="https://m.me/nagen.vietnam"
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
                href="https://facebook.com/nagen.vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">Facebook</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagen.vietnam</p>
                  <span className="inline-flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                    Theo dõi <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/nagen.vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-pink-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">Instagram</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagen.vietnam</p>
                  <span className="inline-flex items-center text-pink-600 font-medium text-xs sm:text-sm">
                    Theo dõi <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://youtube.com/@nagen.vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-200"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-700 transition-colors">
                    <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg mb-1 sm:mb-2">YouTube</h4>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagen.vietnam</p>
                  <span className="inline-flex items-center text-red-600 font-medium text-xs sm:text-sm">
                    Đăng ký <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </span>
                </div>
              </a>

              <a
                href="https://tiktok.com/@nagen.vietnam"
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
                  <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">@nagen.vietnam</p>
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
                href="https://zalo.me/g/cwzecr533"
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