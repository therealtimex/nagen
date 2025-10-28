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

// Enhanced Navigation (same as blog page)
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

export default function ChamSocBanChanHangNgayPage() {
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
            "headline": "Tầm quan trọng của việc chăm sóc bàn chân hàng ngày",
            "description": "Bàn chân là nền tảng của cơ thể, việc chăm sóc đúng cách sẽ giúp bạn duy trì sức khỏe tổng thể và phòng ngừa nhiều vấn đề về xương khớp.",
            "author": {
              "@type": "Person",
              "name": "Chuyên gia NAGEN"
            },
            "datePublished": "2024-01-15",
            "image": "https://nagen.vn/images/blog/foot-care.jpg",
            "url": "https://nagen.vn/blog-kien-thuc/cham-soc-ban-chan-hang-ngay",
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
            <Link href="/blog-kien-thuc" className="hover:text-blue-900">Blog kiến thức</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-900">Tầm quan trọng của việc chăm sóc bàn chân hàng ngày</span>
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
              <Badge className="bg-blue-900 text-white mb-4">
                Chăm sóc sức khỏe
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Tầm quan trọng của việc chăm sóc bàn chân hàng ngày
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">Chuyên gia NAGEN</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">15/01/2024</span>
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">5 phút đọc</span>
                <Eye className="w-4 h-4 mr-1" />
                <span>1,250 lượt xem</span>
              </div>
            </div>

            <Image
              src={getImagePath("/images/blog/foot-care.jpg")}
              alt="Chăm sóc bàn chân hàng ngày"
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
            <div className="prose prose-lg max-w-none">
              <h2>Tại sao bàn chân lại quan trọng?</h2>
              <p>Bàn chân không chỉ đơn thuần là bộ phận giúp chúng ta di chuyển, mà còn đóng vai trò như một "nền móng" của toàn bộ cơ thể. Khi bàn chân có vấn đề, nó sẽ ảnh hưởng đến toàn bộ chuỗi động học của cơ thể từ mắt cá chân, đầu gối, hông cho đến cột sống.</p>
              
              <h3>Các vấn đề thường gặp khi không chăm sóc bàn chân</h3>
              <ul>
                <li><strong>Đau gót chân:</strong> Thường do viêm cân gan chân hoặc gai gót chân</li>
                <li><strong>Bàn chân bẹt:</strong> Mất vòm bàn chân tự nhiên, gây đau và mệt mỏi</li>
                <li><strong>Ngón chân cái vẹo:</strong> Biến dạng khớp ngón chân cái</li>
                <li><strong>Chai chân:</strong> Do ma sát và áp lực không đều</li>
              </ul>

              <h3>Cách chăm sóc bàn chân đúng cách</h3>
              <ol>
                <li><strong>Vệ sinh hàng ngày:</strong> Rửa chân sạch sẽ, lau khô kỹ giữa các ngón chân</li>
                <li><strong>Chọn giày phù hợp:</strong> Giày có size vừa vặn, không quá chật hoặc rộng</li>
                <li><strong>Sử dụng tấm lót hỗ trợ:</strong> Giúp phân bổ áp lực đều và hỗ trợ vòm bàn chân</li>
                <li><strong>Tập thể dục cho chân:</strong> Các bài tập giãn cơ và tăng cường sức mạnh</li>
                <li><strong>Massage chân:</strong> Giúp lưu thông máu và giảm căng thẳng</li>
              </ol>

              <h3>Khi nào cần tham khảo ý kiến chuyên gia?</h3>
              <p>Bạn nên tham khảo ý kiến chuyên gia khi gặp các triệu chứng sau:</p>
              <ul>
                <li>Đau chân kéo dài hơn 2 tuần</li>
                <li>Sưng, đỏ hoặc nóng ở vùng bàn chân</li>
                <li>Khó khăn khi đi bộ hoặc đứng lâu</li>
                <li>Biến dạng rõ rệt ở bàn chân</li>
              </ul>

              <p>Việc chăm sóc bàn chân không chỉ giúp bạn cảm thấy thoải mái hơn mà còn góp phần quan trọng trong việc duy trì sức khỏe tổng thể. Hãy bắt đầu chăm sóc bàn chân của bạn từ hôm nay!</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              <Badge variant="outline">chăm sóc bàn chân</Badge>
              <Badge variant="outline">sức khỏe</Badge>
              <Badge variant="outline">phòng ngừa</Badge>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Cần tư vấn về sản phẩm hỗ trợ bàn chân?
              </h3>
              <p className="text-gray-600 mb-6">
                Đội ngũ chuyên gia NAGEN sẵn sàng tư vấn miễn phí về các giải pháp phù hợp với tình trạng bàn chân của bạn
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Tư vấn miễn phí ngay
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