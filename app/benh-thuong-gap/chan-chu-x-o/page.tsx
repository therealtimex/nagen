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
        { name: "Tư vấn sản phẩm", href: "/#consultation" },
        { name: "Đăng ký đo chân", href: "/#appointment" },
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
    { name: "Đối tác", href: "/#partners" },
    { name: "Đại lý", href: "/dai-ly" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Sự kiện", href: "/su-kien" },
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

export default function ChanChuXOPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Chân chữ X, chân chữ O</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giới thiệu về chân chữ X và chân chữ O</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Chân chữ X và chân chữ O là hai dạng biến dạng trục chân phổ biến, xảy ra khi đầu gối hoặc cổ chân 
            không còn nằm trên cùng một đường thẳng sinh học.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ở chân chữ X, hai đầu gối chụm lại trong khi cổ chân cách xa nhau.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ở chân chữ O, hai cổ chân chụm lại nhưng đầu gối lại cách xa nhau.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Đây là những biểu hiện mất cân bằng cấu trúc cơ thể, có thể xuất phát từ bàn chân, đầu gối hoặc khớp háng, 
            gây ra nhiều hệ lụy cho dáng đi, khớp và cột sống.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Đối tượng thường gặp chân chữ X và chân chữ O</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Trẻ em và thanh thiếu niên đang phát triển</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trẻ trong giai đoạn tăng trưởng có cấu trúc xương mềm và dễ bị ảnh hưởng bởi các yếu tố như:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Di truyền từ cha mẹ.</li>
            <li>Tư thế đi – đứng – ngồi sai trong thời gian dài.</li>
            <li>Thiếu canxi hoặc rối loạn chuyển hóa xương.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Người trưởng thành</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ở người trưởng thành, nguyên nhân thường đến từ:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Lệch trục bàn chân (bàn chân bẹt hoặc bàn chân kiễng) làm ảnh hưởng lên khớp gối.</li>
            <li>Tổn thương khớp (chấn thương, thoái hóa sớm, viêm khớp).</li>
            <li>Tăng cân hoặc béo phì, gây áp lực quá mức lên khớp gối.</li>
            <li>Nghề nghiệp đứng nhiều, di chuyển liên tục.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Người cao tuổi</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quá trình thoái hóa khớp và suy yếu cơ khiến cấu trúc chân dần biến dạng, đặc biệt là ở những người 
            đã có nền bàn chân lệch trục từ trước.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hậu quả và nguy cơ của chân chữ X, chân chữ O</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nếu không được can thiệp sớm, biến dạng trục chân có thể gây ra nhiều hậu quả nghiêm trọng:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau khớp gối và hông: Do phân bố lực không đều lên khớp.</li>
            <li>Lệch trục cơ thể: Khi trục chân lệch, toàn bộ hệ cơ – xương – cột sống cũng bị kéo lệch theo.</li>
            <li>Thoái hóa khớp sớm, vẹt mòn sụn và viêm khớp mãn tính.</li>
            <li>Ảnh hưởng dáng đi và dáng đứng: Khiến người mắc mất tự tin, giảm hiệu suất vận động.</li>
            <li>Tăng nguy cơ té ngã ở người lớn tuổi.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giải pháp cải thiện và hỗ trợ chân chữ X, chân chữ O</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Tập luyện phục hồi cấu trúc</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Các bài tập tăng cường cơ đùi, cơ hông và chỉnh trục như ngồi xổm đúng tư thế... có thể giúp cải thiện 
            độ vững chắc và cân bằng của chi dưới.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Kiểm soát cân nặng và tư thế</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duy trì trọng lượng cơ thể hợp lý, đứng và đi đúng tư thế giúp giảm tải áp lực lên khớp gối, 
            ngăn tình trạng nặng hơn.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Sử dụng tấm lót hỗ trợ vòm bàn chân NAGEN</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tấm lót hỗ trợ vòm bàn chân NAGEN được xem là giải pháp hỗ trợ chỉnh trục sinh học tự nhiên, 
            giúp đưa bàn chân về vị trí cân bằng và theo đó là toàn bộ trục cơ thể về vị trí cân bằng.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tìm hiểu thêm về các sản phẩm tấm lót hỗ trợ cải thiện chân chữ X, chân chữ O (chân vòng kiềng){" "}
            <Link href="/tat-ca-san-pham" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              tại đây
            </Link>
          </p>

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