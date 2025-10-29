"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Phone,
  Mail,
  Clock,
  Menu,
  ChevronDown,
  Calendar,
  User,
  ArrowLeft,
  Eye,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getImagePath, navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"

// Enhanced Navigation (same as previous)
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
        { name: "Bàn chân bẹt", href: "/van-de-thuong-gap/ban-chan-bet" },
        { name: "Chân chữ X, O", href: "/van-de-thuong-gap/chan-chu-x-o" },
        { name: "Thoát vị đĩa đệm", href: "/van-de-thuong-gap/thoat-vi-dia-dem" },
        { name: "Cong vẹo cột sống", href: "/van-de-thuong-gap/cong-veo-cot-song" },
        { name: "Suy giãn tĩnh mạch", href: "/van-de-thuong-gap/suy-gian-tinh-mach" },
        { name: "Đau cơ xương khớp", href: "/van-de-thuong-gap/dau-co-xuong-khop" },
        { name: "Mất cân bằng cấu trúc", href: "/van-de-thuong-gap/mat-can-bang-cau-truc" },
      ],
    },
    { name: "Đại lý", href: "/dai-ly" },
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
    }, 150)
  }

  const handleNavigation = (href: string, action?: string) => {
    if (action === "consultation") {
      onConsultationClick()
      return
    }
    if (action === "appointment") {
      onAppointmentClick()
      return
    }

    if (href.startsWith("/") || href.startsWith("http")) {
      navigateTo(href)
      return
    }

    const targetId = href.substring(1)
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
                    className={`text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2 ${item.name === "Tin tức" ? "text-blue-900 font-semibold border-b-2 border-blue-900" : ""
                      }`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {item.submenu && activeSubmenu === item.name && (
                    <>
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
                  <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-900 to-red-600">
                    <div className="text-lg font-semibold text-white">Menu</div>
                  </div>

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
                            className={`block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation ${item.name === "Tin tức" ? "text-blue-900 font-semibold bg-blue-50 rounded" : ""
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

export default function RaMatTrungTamNghienCuuCanBangCauTrucPage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  // Handle custom events from Footer
  useEffect(() => {
    const handleOpenUnifiedRegistration = () => {
      setIsConsultationModalOpen(true)
    }

    const handleOpenAppointmentModal = () => {
      setIsAppointmentModalOpen(true)
    }

    window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)
    window.addEventListener('openAppointmentModal', handleOpenAppointmentModal)

    return () => {
      window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)
      window.removeEventListener('openAppointmentModal', handleOpenAppointmentModal)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Ra mắt Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể NAGEN",
            "description": "Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng.",
            "author": {
              "@type": "Person",
              "name": "Ban biên tập NAGEN"
            },
            "datePublished": "2025-10-09",
            "image": "https://nagen.vn/images/tin-tuc/trung-tam-nghien-cuu-cau-truc-co-the.webp",
            "url": "https://nagen.vn/tin-tuc/ra-mat-trung-tam-nghien-cuu-can-bang-cau-truc",
            "publisher": {
              "@type": "Organization",
              "name": "NAGEN Vietnam",
              "logo": "https://nagen.vn/images/logo_slogan_1.png"
            }
          })
        }}
      />

      <EnhancedNavigation
        onConsultationClick={() => setIsConsultationModalOpen(true)}
        onAppointmentClick={() => setIsConsultationModalOpen(true)}
      />
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/tin-tuc" className="hover:text-blue-900">Tin tức</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-900">Ra mắt Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể NAGEN</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center text-blue-900 hover:text-red-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Tin tức
            </Link>

            <div className="mb-6">
              <Badge className="bg-red-600 text-white mb-4">
                Sự kiện
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Ra mắt Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể NAGEN
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">Ban biên tập NAGEN</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">09/10/2025</span>
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">8 phút đọc</span>
                <Eye className="w-4 h-4 mr-1" />
                <span>4,250 lượt xem</span>
              </div>
            </div>

            <Image
              src={getImagePath("/images/tin-tuc/trung-tam-nghien-cuu-cau-truc-co-the.webp")}
              alt="Ra mắt Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể NAGEN"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng, cùng sự tham dự của nhiều giáo sư, phó giáo sư, Bác sĩ hàng đầu tại Việt Nam.
                </p>
              </div>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Sự kiện đánh dấu bước tiến quan trọng</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Trong lĩnh vực chăm sóc sức khỏe theo hướng khoa học – một cách tự nhiên – không xâm lấn, đặt nền móng cho một hệ thống nghiên cứu cân bằng cấu trúc cơ thể trên ứng dụng Tấm lót hỗ trợ vòm bàn chân NAGEN cho cộng đồng Người Việt.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Đội ngũ chuyên gia tham dự</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Lễ ra mắt có sự tham dự của các chuyên gia đầu ngành trong lĩnh vực y tế và chăm sóc sức khỏe:
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">PGS.TS Nguyễn Huy Nga</p>
                          <p className="text-sm text-gray-600">Viện trưởng Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng - Nguyên Cục trưởng cục y tế dự phòng</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">PGS.TS Lê Nguyên Đương</p>
                          <p className="text-sm text-gray-600">Phó Viện trưởng</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">Ông Tạ Duy Quy</p>
                          <p className="text-sm text-gray-600">Phó Viện trưởng, nguyên Thanh tra Bộ Y tế</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">GS.TS.NS.BS.CKII Phạm Vinh Quang</p>
                          <p className="text-sm text-gray-600">Chuyên gia hàng đầu trong lĩnh vực phẫu thuật lồng ngực, tim mạch và ung bướu - nguyên Giám đốc Trung tâm Huyết học & Truyền máu Bệnh viện Bạch Mai</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-red-900">Ông Nguyễn Cảnh Thi</p>
                          <p className="text-sm text-gray-600">Giám đốc trung tâm nghiên cứu ứng dụng cân bằng cấu trúc cơ thể, đồng thời là Tổng giám đốc Công ty TNHH Nagen</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-red-900">Bà Nguyễn Thị Yến</p>
                          <p className="text-sm text-gray-600">Thành viên sáng lập trung tâm, đồng thời là Chủ tịch Công ty TNHH Nagen</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-green-900">Tạp chí sức khỏe cộng đồng</p>
                          <p className="text-sm text-gray-600">Ấn phẩm uy tín hàng đầu về chăm sóc sức khỏe</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-purple-900">Đại diện các đại lý, đối tác</p>
                          <p className="text-sm text-gray-600">Khách mời và đối tác chiến lược</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Lễ trao chứng nhận thành lập</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Tại sự kiện, Viện trưởng PGS.TS Nguyễn Huy Nga đã chính thức trao chứng nhận thành lập Trung tâm nghiên cứu ứng dụng cân bằng cấu trúc cơ thể Nagen cho ông Nguyễn Cảnh Thi, đồng thời đánh giá đây là:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "Cầu nối giữa y học hiện đại và các giải pháp hỗ trợ cân bằng cấu trúc cơ thể theo hướng tự nhiên, an toàn cho cộng đồng - Trung tâm ra đời rất phù hợp với chủ trương của Đảng và Nhà nước hướng đến các giải pháp chăm sóc sức khỏe thuận tự nhiên và không xâm lấn."
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Trung tâm là đơn vị đầu tiên và duy nhất tại Việt Nam nghiên cứu trên ứng dụng Tấm lót hỗ trợ vòm bàn chân từ Mỹ, đánh giá sự cải thiện về các vấn đề mất cân bằng cấu trúc cơ thể liên quan đến sự mất cân bằng của bàn chân. Ứng dụng nghiên cứu được phổ biến rộng rãi cho nhiều thế hệ.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Định hướng chiến lược và tầm nhìn nghiên cứu</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Chia sẻ từ bà Nguyễn Thị Yến - Thành viên sáng lập trung tâm về định hướng chiến lược và tầm nhìn nghiên cứu:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Trở thành đơn vị tiên phong</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Trung tâm định hướng trở thành đơn vị tiên phong trong nghiên cứu và ứng dụng các giải pháp tối ưu về lĩnh vực bàn chân một cách thuận tự nhiên, cân bằng cấu trúc cơ thể, bắt đầu từ nền tảng bàn chân – gốc rễ của hệ cơ – xương – khớp và tư thế toàn thân.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Nền tảng khoa học vững chắc</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Dựa trên nền tảng khoa học được phát minh bởi <strong className="text-blue-900">Georg Alzner</strong> - Tiến sĩ, Bác sĩ phẫu thuật chỉnh hình người Đức – người đã nghiên cứu tấm lót hỗ trợ vòm bàn chân và được cấp bằng sáng chế tại Canada (1969) và Hoa Kỳ (1970). Trung tâm hướng tới kế thừa, khai thác và phát triển các giá trị khoa học này theo hướng phù hợp với đặc điểm cơ thể và thói quen vận động của người Việt Nam.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Ứng dụng cho mọi lứa tuổi</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Nghiên cứu khoa học được đưa vào ứng dụng cho mọi lứa tuổi và là một giải pháp thiết yếu trong việc chăm sóc sức khỏe bàn chân liên quan đến cân bằng cấu trúc & chức năng cơ thể, là một giải pháp nuôi dưỡng để ngăn ngừa các vấn đề xảy ra trong tương lai.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Nghiên cứu thực tiễn</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Trong giai đoạn đầu, Trung tâm tập trung nghiên cứu ứng dụng thực tiễn thông qua sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN, được sản xuất tại Hoa Kỳ và đã được nghiên cứu tại nhiều đại học uy tín quốc tế như Michigan, California, East Carolina và Armstrong Atlantic. Mục tiêu là xây dựng cơ sở dữ liệu lâm sàng và thực nghiệm nhằm đánh giá tác động của việc hỗ trợ vòm bàn chân đối với cân bằng cơ – xương – khớp và hiệu quả vận động.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Các vấn đề nghiên cứu ứng dụng</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Cụ thể, nghiên cứu ứng dụng trên các vấn đề mất cân bằng ảnh hưởng đến cân bằng cấu trúc cơ thể như sau:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">🦶</span>
                      </div>
                      <h4 className="font-bold text-blue-900 text-lg">Vấn đề về bàn chân</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Bàn chân bẹt, vòng kiềng</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Chân chữ X</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Viêm cân gân chân</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Đau gót chân, gai gót chân</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Đau xương bàn chân</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">🏃</span>
                      </div>
                      <h4 className="font-bold text-red-900 text-lg">Vấn đề toàn thân</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Suy giãn tĩnh mạch</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Đau nhức xương khớp</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Vẹo cột sống</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Mất cân bằng gây té ngã</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Béo phì</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">👥</span>
                      </div>
                      <h4 className="font-bold text-green-900 text-lg">Nhóm đối tượng đặc biệt</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Nghề nghiệp đi đứng nhiều</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Đi giày cao gót không phù hợp</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Người chơi thể thao</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Phụ nữ mang bầu</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Người cao tuổi</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">⚕️</span>
                      </div>
                      <h4 className="font-bold text-purple-900 text-lg">Tình trạng đặc thù</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Chiều dài 2 chân không đều</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Viêm/đứt gân chân Achilles</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Thay đổi tuổi tác</li>
                      <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Và nhiều vấn đề khác...</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Chia sẻ từ Giám đốc Trung tâm</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Chia sẻ từ Ông Nguyễn Cảnh Thi – Giám đốc Trung tâm:
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "Sự khỏe mạnh là một trạng thái cân bằng, sự cân bằng của bàn chân liên quan mật thiết đến sự cân bằng cấu trúc cơ thể. Mỗi đôi bàn chân khỏe mạnh là nền móng của một cơ thể khỏe mạnh. Trung tâm ra đời với sứ mệnh nghiên cứu, ứng dụng và lan tỏa các giải pháp thuận tự nhiên, mang lại sức khỏe, hạnh phúc và niềm vui cho người dân Việt Nam."
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Trải nghiệm và phản hồi từ chuyên gia</h2>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Sau phần công bố, các Giáo sư, Phó Giáo sư và chuyên gia đầu ngành đã chia sẻ nhiều cảm nhận sâu sắc khi lắng nghe sứ mệnh – tầm nhìn của Trung tâm, đồng thời được trực tiếp trải nghiệm sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Từ những trải nghiệm đó, các chuyên gia bày tỏ niềm tin và kỳ vọng rằng Trung tâm sẽ lan tỏa những giá trị nhân văn, đóng góp thiết thực cho hành trình nâng cao sức khỏe cộng đồng Việt.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-4">Các hoạt động trải nghiệm tại sự kiện</h3>

                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Ngay trong lễ ra mắt, các khách mời cũng đã được trải nghiệm:
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span><strong className="text-blue-900">Kiểm tra bàn chân & kiểm tra sự cân bằng</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span><strong className="text-blue-900">Trải nghiệm tấm lót hỗ trợ vòm bàn chân NAGEN</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span><strong className="text-blue-900">Cảm nhận thay đổi về sự thăng bằng và giảm nhức mỏi</strong> chỉ sau vài bước di chuyển</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Nhiều phản hồi tích cực, có thể nói là "không thể diễn tả nổi" về công dụng tuyệt vời của tấm lót hỗ trợ vòm bàn chân Nagen. Tất cả đã được ghi nhận và sẽ trở thành dữ liệu nghiên cứu chuyên sâu của Trung tâm trong thời gian tới.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Cam kết lan tỏa giá trị sức khỏe bền vững</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Sự kiện ra mắt Trung tâm không chỉ là một dấu mốc, mà còn là cam kết lâu dài trong việc:
                </p>

                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-red-50 p-6 rounded-xl border-l-4 border-blue-500 my-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">📚</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Nghiên cứu – Ứng dụng – Phổ cập</h4>
                        <p className="text-gray-700">Kiến thức về cân bằng cấu trúc cơ thể được nghiên cứu, ứng dụng và phổ cập rộng rãi</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">🤝</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-900 mb-2">Đồng hành cùng cộng đồng</h4>
                        <p className="text-gray-700">Giúp trẻ em, người trưởng thành và người cao tuổi phòng ngừa các vấn đề cơ – xương – khớp ngay từ bước chân đầu tiên</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-blue-600 to-red-600 text-white p-8 rounded-xl mt-8">
                  <p className="text-xl font-medium mb-2">
                    ❤️ Hãy theo dõi NAGEN để cùng chúng tôi khám phá những nghiên cứu, ứng dụng và phương pháp giúp cơ thể bạn cân bằng và khỏe mạnh hơn!
                  </p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">#nagen</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">#trungtamnghiencuu</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">#canbangcautruc</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              <Badge variant="outline">trung tâm nghiên cứu</Badge>
              <Badge variant="outline">cân bằng cấu trúc</Badge>
              <Badge variant="outline">sự kiện</Badge>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Quan tâm đến nghiên cứu cân bằng cấu trúc cơ thể?
              </h3>
              <p className="text-gray-600 mb-6">
                Liên hệ với chúng tôi để được tư vấn và trải nghiệm sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN
              </p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Registration Modal */}
      {isConsultationModalOpen && (
        <UnifiedRegistrationForm
          isOpen={isConsultationModalOpen}
          onClose={() => setIsConsultationModalOpen(false)}
        />
      )}

      {/* Appointment Modal */}
      {isAppointmentModalOpen && (
        <UnifiedRegistrationForm
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  )
}
