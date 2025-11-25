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
  Play,
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
                  src={getImagePath("/images/logo_nagen_chinh_thuc.png")}
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
                    className={`text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2 ${item.name === "Blog kiến thức" ? "text-blue-900 font-semibold border-b-2 border-blue-900" : ""
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
                            className={`block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation ${item.name === "Blog kiến thức" ? "text-blue-900 font-semibold bg-blue-50 rounded" : ""
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

export default function TamLotHoTroVomBanChanCaoCapTuMyPage() {
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
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ - since 1969",
            "description": "Khám phá lịch sử và chất lượng vượt trội của tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ với hơn 50 năm kinh nghiệm trong ngành.",
            "author": {
              "@type": "Person",
              "name": "NAGEN Vietnam"
            },
            "datePublished": "2024-11-03",
            "image": "https://nagen.vn/images/tin-tuc/Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ - since 1969.jpg",
            "url": "https://nagen.vn/blog-kien-thuc/tam-lot-ho-tro-vom-ban-chan-cao-cap-tu-my-since-1969",
            "publisher": {
              "@type": "Organization",
              "name": "NAGEN Vietnam",
              "logo": "https://nagen.vn/images/logo_nagen_chinh_thuc.png"
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
            <Link href="/blog-kien-thuc" className="hover:text-blue-900">Blog kiến thức</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-900">Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ - since 1969</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog-kien-thuc" 
              className="inline-flex items-center text-blue-900 hover:text-red-600 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog kiến thức
            </Link>

            <div className="mb-6">
              <Badge className="bg-red-600 text-white mb-4">
                Sản phẩm cao cấp
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ - since 1969
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">NAGEN Vietnam</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">03/11/2024</span>
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">5 phút đọc</span>
                <Eye className="w-4 h-4 mr-1" />
                <span>125 lượt xem</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* YouTube Video Section */}
            <div className="mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/gBdLTlUOrJ8"
                  title="Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ - since 1969"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  Từ năm 1969, tấm lót hỗ trợ vòm bàn chân từ Mỹ đã không ngừng phát triển và hoàn thiện để mang đến những giải pháp tối ưu nhất cho sức khỏe bàn chân. Với hơn nửa thế kỷ kinh nghiệm, sản phẩm đã trở thành tiêu chuẩn vàng trong ngành công nghiệp hỗ trợ chân.
                </p>
              </div>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Lịch sử hơn 50 năm phát triển</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ được phát minh bởi <strong className="text-blue-900">Georg Alzner</strong> - Tiến sĩ, Bác sĩ phẫu thuật chỉnh hình người Đức và được cấp bằng sáng chế tại Canada (1969) và Hoa Kỳ (1970). Đây là nền tảng khoa học vững chắc cho sự phát triển của ngành công nghiệp hỗ trợ vòm bàn chân hiện đại.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Công nghệ tiên tiến từ Mỹ</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Sản phẩm được phát triển dựa trên những nghiên cứu khoa học sâu rộng và công nghệ tiên tiến nhất từ Hoa Kỳ:
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-6 my-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">Vật liệu cao cấp</p>
                          <p className="text-sm text-gray-600">Sử dụng các loại vật liệu y tế an toàn, bền bỉ</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-blue-900">Thiết kế ergonomic</p>
                          <p className="text-sm text-gray-600">Phù hợp với cấu trúc giải phẫu tự nhiên của bàn chân</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-red-900">Độ bền vượt trội</p>
                          <p className="text-sm text-gray-600">Có thể sử dụng lâu dài mà không bị biến dạng</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-red-900">Khả năng hấp thụ sốc</p>
                          <p className="text-sm text-gray-600">Giảm thiểu tác động lên khớp và cột sống</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Ưu điểm nổi bật</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">1. Chất lượng được kiểm định</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Mỗi sản phẩm đều trải qua quá trình kiểm định nghiêm ngặt theo tiêu chuẩn FDA của Mỹ, đảm bảo:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>An toàn tuyệt đối cho người sử dụng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>Hiệu quả hỗ trợ được chứng minh lâm sàng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>Độ bền và ổn định cao</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">2. Đa dạng mẫu mã</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Với nhiều dòng sản phẩm khác nhau phù hợp với từng nhu cầu cụ thể:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-3 mt-1">•</span>
                        <span><strong className="text-blue-900">Dòng Endurance:</strong> Dành cho vận động viên và người hoạt động nhiều</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-3 mt-1">•</span>
                        <span><strong className="text-blue-900">Dòng Silhouette:</strong> Thiết kế mỏng, phù hợp với giày cao gót</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-3 mt-1">•</span>
                        <span><strong className="text-blue-900">Dòng Winagen:</strong> Hỗ trợ toàn diện cho mọi hoạt động hàng ngày</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">3. Công nghệ cá nhân hóa</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Khả năng tùy chỉnh theo từng cá nhân:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span>Đo lường chính xác cấu trúc bàn chân</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span>Thiết kế riêng biệt cho từng khách hàng</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">•</span>
                        <span>Điều chỉnh độ cứng và độ hỗ trợ phù hợp</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Quy trình sản xuất nghiêm ngặt</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Mỗi sản phẩm được tạo ra thông qua quy trình 5 bước nghiêm ngặt:
                </p>

                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-red-50 p-6 rounded-xl border-l-4 border-blue-500 my-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Nghiên cứu và phát triển</h4>
                        <p className="text-gray-700">Đầu tư mạnh vào R&D với đội ngũ chuyên gia hàng đầu</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2">Lựa chọn nguyên liệu</h4>
                        <p className="text-gray-700">Chỉ sử dụng vật liệu cao cấp nhất</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-900 mb-2">Sản xuất</h4>
                        <p className="text-gray-700">Quy trình tự động hóa hiện đại</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 mb-2">Kiểm định chất lượng</h4>
                        <p className="text-gray-700">Kiểm tra từng sản phẩm trước khi xuất xưởng</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-900 mb-2">Đóng gói và vận chuyển</h4>
                        <p className="text-gray-700">Bảo quản trong điều kiện tối ưu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-[#21395D] mb-6">Cam kết chất lượng</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Với hơn 50 năm kinh nghiệm, chúng tôi cam kết:
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">✓</span>
                        <span>Sản phẩm chính hãng 100% từ Mỹ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">✓</span>
                        <span>Bảo hành chất lượng lên đến 2 năm</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">✓</span>
                        <span>Dịch vụ tư vấn chuyên nghiệp</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">✓</span>
                        <span>Hỗ trợ khách hàng 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  Tấm lót hỗ trợ vòm bàn chân cao cấp từ Mỹ không chỉ là một sản phẩm, mà là kết quả của hơn nửa thế kỷ nghiên cứu và phát triển không ngừng. Đây chính là lý do tại sao hàng triệu người trên thế giới tin tưởng và lựa chọn sản phẩm này để bảo vệ sức khỏe bàn chân của mình.
                </p>
              </section>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              <Badge variant="outline">tấm lót cao cấp</Badge>
              <Badge variant="outline">made in USA</Badge>
              <Badge variant="outline">since 1969</Badge>
              <Badge variant="outline">chất lượng</Badge>
              <Badge variant="outline">công nghệ tiên tiến</Badge>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Trải nghiệm sản phẩm cao cấp từ Mỹ
              </h3>
              <p className="text-gray-600 mb-6">
                Liên hệ ngay với NAGEN để được tư vấn và trải nghiệm tấm lót hỗ trợ vòm bàn chân cao cấp với hơn 50 năm uy tín
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Tư vấn sản phẩm ngay
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

      <Footer />
    </div>
  )
}