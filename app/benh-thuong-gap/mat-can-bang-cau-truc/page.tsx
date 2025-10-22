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

export default function MatCanBangCauTrucPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mất cân bằng cấu trúc</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Mất cân bằng cấu trúc là gì?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mất cân bằng cấu trúc là tình trạng các bộ phận của cơ thể không còn thẳng hàng theo trục dọc lý tưởng, 
            dẫn đến sự phân bổ không đều trọng lượng cơ thể và áp lực lên các khớp, cơ, dây chằng. 
            Điều này có thể bắt nguồn từ bàn chân và lan rộng lên toàn bộ cơ thể.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nguyên lý cân bằng cơ thể</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cơ thể con người được thiết kế để hoạt động trong trạng thái cân bằng tối ưu:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Bàn chân là nền tảng, cung cấp sự ổn định</li>
            <li>Các khớp xếp thẳng hàng theo trục dọc</li>
            <li>Trọng lượng phân bổ đều qua các điểm tựa</li>
            <li>Cơ bắp hoạt động hiệu quả, không bị quá tải</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Dấu hiệu mất cân bằng cấu trúc</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Quan sát từ phía sau</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Vai không cân bằng (một bên cao hơn)</li>
            <li>Xương sườn lệch</li>
            <li>Hông không thẳng hàng</li>
            <li>Đầu gối hướng vào trong hoặc ra ngoài</li>
            <li>Bàn chân không song song</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Quan sát từ bên</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Đầu thò ra phía trước</li>
            <li>Vai tròn, gù lưng</li>
            <li>Lưng cong quá mức</li>
            <li>Khung chậu nghiêng</li>
            <li>Đầu gối khóa cứng hoặc cong</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Triệu chứng cơ năng</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau mãn tính ở nhiều vùng</li>
            <li>Mỏi cơ nhanh chóng</li>
            <li>Cảm giác mất thăng bằng</li>
            <li>Khó tập trung</li>
            <li>Giảm hiệu suất vận động</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nguyên nhân gây mất cân bằng</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Từ bàn chân</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Bàn chân bẹt hoặc vòm cao bất thường</li>
            <li>Chênh lệch chiều dài chân</li>
            <li>Biến dạng ngón chân</li>
            <li>Chấn thương bàn chân cũ</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Từ thói quen sinh hoạt</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Ngồi sai tư thế lâu dài</li>
            <li>Mang cặp sách một bên</li>
            <li>Ngủ sai tư thế</li>
            <li>Đi giày không phù hợp</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Từ chấn thương</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Gãy xương không lành đúng cách</li>
            <li>Chấn thương cơ, dây chằng</li>
            <li>Phẫu thuật</li>
            <li>Tai nạn giao thông</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hậu quả của mất cân bằng</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Về thể chất</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Đau mãn tính đa vùng</li>
            <li>Thoái hóa khớp sớm</li>
            <li>Giảm khả năng vận động</li>
            <li>Dễ bị chấn thương</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Về tinh thần</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Giảm tự tin do ngoại hình</li>
            <li>Stress do đau mãn tính</li>
            <li>Hạn chế hoạt động xã hội</li>
            <li>Ảnh hưởng đến công việc</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Về chức năng</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Giảm hiệu suất thể thao</li>
            <li>Mỏi mệt nhanh chóng</li>
            <li>Khó thực hiện công việc nặng</li>
            <li>Rối loạn giấc ngủ</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giải pháp phục hồi cân bằng</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Tấm lót hỗ trợ NAGEN</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Khôi phục nền tảng cân bằng từ bàn chân</li>
            <li>Điều chỉnh trục cơ thể từ dưới lên</li>
            <li>Phân bổ đều áp lực</li>
            <li>Hỗ trợ tư thế tự nhiên</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Vật lý trị liệu</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Bài tập cân bằng và ổn định</li>
            <li>Kéo giãn cơ căng</li>
            <li>Tăng cường cơ yếu</li>
            <li>Điều chỉnh tư thế</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Thay đổi lối sống</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Cải thiện môi trường làm việc</li>
            <li>Tập luyện đều đặn</li>
            <li>Kiểm soát cân nặng</li>
            <li>Chọn giày dép phù hợp</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Quan điểm tổng thể</h3>
            <p className="text-blue-700">
              Cơ thể là một hệ thống liên kết. Vấn đề ở một vùng có thể ảnh hưởng đến toàn bộ cơ thể. 
              Việc khôi phục cân bằng cần được tiếp cận một cách toàn diện, bắt đầu từ nền tảng là bàn chân.
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