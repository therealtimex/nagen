"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Footer from "@/components/Footer"
import FloatingActionButtons from "@/components/FloatingActionButtons"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
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
        { name: "Bàn chân bẹt", href: "/van-de-thuong-gap/ban-chan-bet" },
        { name: "Chân chữ X, O", href: "/van-de-thuong-gap/chan-chu-x-o" },
        { name: "Thoát vị đĩa đệm", href: "/van-de-thuong-gap/thoat-vi-dia-dem" },
        { name: "Cong vẹo cột sống", href: "/van-de-thuong-gap/cong-veo-cot-song" },
        { name: "Suy giãn tĩnh mạch", href: "/van-de-thuong-gap/suy-gian-tinh-mach" },
        { name: "Đau cơ xương khớp", href: "/van-de-thuong-gap/dau-co-xuong-khop" },
        { name: "Mất cân bằng cấu trúc", href: "/van-de-thuong-gap/mat-can-bang-cau-truc" },
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

export default function ThoatViDiaDemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScheduleClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Thoát vị đĩa đệm – Hiểu đúng để phòng và cải thiện hiệu quả</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Thoát vị đĩa đệm là gì?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Thoát vị đĩa đệm là tình trạng phần nhân nhầy bên trong đĩa đệm bị thoát ra ngoài thông qua vết nứt 
            hoặc rách ở bao xơ, chèn ép lên các rễ thần kinh và gây ra đau nhức, tê bì.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Đĩa đệm nằm giữa các đốt sống, có chức năng như "bộ giảm xóc" của cột sống, giúp cơ thể vận động linh hoạt, 
            hấp thụ lực và bảo vệ xương khớp.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nguyên nhân gây thoát vị đĩa đệm</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Do thoái hóa tự nhiên theo tuổi tác</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Theo thời gian, cấu trúc đĩa đệm mất đi độ đàn hồi, lượng nước trong nhân nhầy giảm, 
            làm cho bao xơ dễ bị rách hoặc nứt.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Do thói quen sinh hoạt sai tư thế</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ngồi lâu, cúi người nâng vật nặng sai cách, hoặc nằm – ngồi sai tư thế trong thời gian dài 
            đều làm tăng áp lực lên đĩa đệm.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Do chấn thương hoặc tai nạn</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Va chạm mạnh khi chơi thể thao hoặc tai nạn có thể gây tổn thương đĩa đệm, dẫn đến thoát vị sớm.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Do béo phì và lười vận động</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trọng lượng cơ thể quá lớn làm tăng tải trọng lên cột sống, trong khi ít vận động khiến hệ cơ lưng – bụng yếu đi, 
            không đủ sức nâng đỡ cột sống.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Do bàn chân và tư thế sai lệch</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Một nguyên nhân ít ai ngờ đến: mất cân bằng bàn chân (bàn chân bẹt, chân vòng kiềng, chân chữ X) 
            làm lệch trục cơ thể, khiến áp lực dồn sai lên cột sống – là yếu tố nền gây thoát vị sớm.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Triệu chứng thường gặp của thoát vị đĩa đệm</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau nhức vùng cổ, lưng, thắt lưng – nhất là khi cúi hoặc xoay người.</li>
            <li>Cảm giác tê bì, châm chích lan xuống tay hoặc chân.</li>
            <li>Cơ yếu, khó kiểm soát vận động.</li>
            <li>Đau tăng khi ho, hắt hơi hoặc ngồi lâu.</li>
            <li>Trường hợp nặng có thể gây mất cảm giác hoặc khó kiểm soát đại tiểu tiện.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cách phòng ngừa và cải thiện thoát vị đĩa đệm</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Giữ tư thế đúng</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Khi ngồi, đứng, nâng vật nặng cần giữ lưng thẳng, tránh cúi gập người đột ngột.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Tăng cường vận động nhẹ nhàng</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tập luyện thể thao phù hợp như yoga, bơi lội, đi bộ giúp tăng sức mạnh cơ lưng và cơ bụng, 
            giảm tải lên đĩa đệm.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Duy trì cân nặng hợp lý</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Giảm cân giúp giảm áp lực lên cột sống và khớp, đồng thời hạn chế tình trạng lão hóa sớm.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Khám và kiểm tra định kỳ</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phát hiện sớm thoát vị đĩa đệm giúp can thiệp kịp thời, tránh biến chứng nặng như liệt hoặc teo cơ.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Sử dụng tấm lót hỗ trợ vòm bàn chân</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tấm lót NAGEN giúp cân bằng trục cơ thể, phân bổ lại áp lực khi đứng – đi – chạy, 
            giảm gánh nặng lên cột sống và phòng ngừa thoát vị đĩa đệm hiệu quả.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Khi bàn chân vững, cột sống được nâng đỡ đúng – đó là cách chăm sóc sức khỏe cơ – xương – khớp từ gốc.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tìm hiểu thêm về sản phẩm tấm lót hỗ trợ vòm bàn chân, hấp thụ lực giúp giảm đau mỏi cơ xương khớp và cột sống{" "}
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
      <FloatingActionButtons 
        onScheduleClick={handleScheduleClick}
        onConsultationClick={() => setIsModalOpen(true)}
      />
      
      {/* Registration Modal */}
      <UnifiedRegistrationForm
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}