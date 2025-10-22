"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Footer from "@/components/Footer"
import FloatingActionButtons from "@/components/FloatingActionButtons"
import { getImagePath, navigateTo } from "@/lib/utils"

// Enhanced Navigation Component
function EnhancedNavigation() {
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
        { name: "Tấm lót hỗ trợ vòm bàn chân Sungen", href: "/tat-ca-san-pham?category=sungen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Winagen", href: "/tat-ca-san-pham?category=winagen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Softgen", href: "/tat-ca-san-pham?category=softgen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Endurance", href: "/tat-ca-san-pham?category=endurance" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette", href: "/tat-ca-san-pham?category=silhouette" },
        { name: "Đệm lót giày cao su xốp thiên nhiên", href: "/tat-ca-san-pham?category=demlotcaosu" },
      ],
    },
    {
      name: "Dịch vụ",
      href: "#",
      submenu: [
        { name: "Tư vấn sản phẩm", href: "/#consultation" },
        { name: "Đăng ký đo chân", href: "/#appointment" },
      ],
    },
    {
      name: "Bệnh thường gặp",
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
    { name: "Đối tác", href: "/#partners" },
    { name: "Đại lý", href: "/dai-ly" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Sự kiện", href: "/su-kien" },
    { name: "Nghiên cứu khoa học", href: "/studies" },
    { name: "FAQs", href: "/faqs" },
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

  const handleNavigation = (href: string) => {
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
              <span className="w-4 h-4 mr-2">🕒</span>
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
                    className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2"
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
                              handleNavigation(subItem.href)
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
                                      handleNavigation(subItem.href)
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
                            className="block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation"
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

export default function DauCoXuongKhopPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedNavigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang chủ
          </Link>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Đau cơ xương khớp</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tổng quan về đau cơ xương khớp</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Đau cơ xương khớp là tình trạng đau nhức ở hệ thống cơ - xương - khớp, bao gồm cơ, xương,
            khớp, dây chằng và gân. Đây là một trong những vấn đề sức khỏe phổ biến nhất, ảnh hưởng đến
            chất lượng cuộc sống và khả năng vận động của hàng triệu người trên thế giới.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Các vùng thường bị đau</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Đau lưng</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Đau lưng dưới (phổ biến nhất)</li>
            <li>Đau lưng giữa</li>
            <li>Đau lưng trên và vai gáy</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Đau khớp</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Đau khớp gối</li>
            <li>Đau khớp hông</li>
            <li>Đau khớp cổ tay</li>
            <li>Đau khớp mắt cá chân</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Đau cơ</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau cơ cổ vai gáy</li>
            <li>Đau cơ lưng</li>
            <li>Đau cơ chân</li>
            <li>Đau cơ tay</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nguyên nhân gây đau</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Nguyên nhân cơ học</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Tư thế không đúng khi ngồi, đứng, nằm</li>
            <li>Mất cân bằng cơ thể từ bàn chân</li>
            <li>Hoạt động quá sức</li>
            <li>Chấn thương thể thao</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Nguyên nhân bệnh lý</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Viêm khớp dạng thấp</li>
            <li>Thoái hóa khớp</li>
            <li>Loãng xương</li>
            <li>Gout</li>
            <li>Fibromyalgia</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Yếu tố nguy cơ</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Tuổi tác</li>
            <li>Béo phì</li>
            <li>Thiếu vận động</li>
            <li>Stress</li>
            <li>Nghề nghiệp (ngồi lâu, nâng vác)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Vai trò của bàn chân</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bàn chân là nền tảng của toàn bộ hệ thống cơ xương khớp:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Hấp thụ lực tác động khi đi bộ, chạy</li>
            <li>Duy trì cân bằng và ổn định cơ thể</li>
            <li>Truyền lực từ mặt đất lên toàn thân</li>
            <li>Ảnh hưởng đến tư thế và căng thẳng cơ</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Chuỗi phản ứng từ bàn chân</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Bàn chân bẹt</strong> → <strong>Mất cân bằng</strong> → <strong>Đầu gối xoay vào trong</strong> →
              <strong>Hông nghiêng</strong> → <strong>Cột sống cong</strong> → <strong>Vai lệch</strong> →
              <strong>Đau cơ xương khớp toàn thân</strong>
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Triệu chứng cần chú ý</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau kéo dài hơn 3 ngày</li>
            <li>Đau tăng dần theo thời gian</li>
            <li>Đau kèm sưng, nóng đỏ</li>
            <li>Hạn chế vận động</li>
            <li>Tê bì, yếu cơ</li>
            <li>Đau ảnh hưởng đến giấc ngủ</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giải pháp hỗ trợ với tấm lót NAGEN</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tấm lót hỗ trợ vòm bàn chân NAGEN giúp:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Cân bằng lại nền tảng cơ thể</li>
            <li>Giảm áp lực lên các khớp</li>
            <li>Cải thiện tư thế tổng thể</li>
            <li>Giảm căng thẳng cơ</li>
            <li>Hỗ trợ hấp thụ lực tác động</li>
            <li>Ngăn ngừa đau mãn tính</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Phương pháp điều trị tích hợp</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Sử dụng tấm lót hỗ trợ</li>
            <li>Vật lý trị liệu</li>
            <li>Tập luyện phục hồi chức năng</li>
            <li>Massage và châm cứu</li>
            <li>Thay đổi lối sống</li>
            <li>Kiểm soát cân nặng</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Phòng ngừa tốt hơn chữa trị</h3>
            <p className="text-green-700">
              Việc sử dụng tấm lót hỗ trợ từ sớm có thể ngăn ngừa nhiều vấn đề về cơ xương khớp.
              Đầu tư cho sức khỏe bàn chân là đầu tư cho sức khỏe toàn thân.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/#consultation">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
                Đăng ký tư vấn miễn phí
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}