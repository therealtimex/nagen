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

export default function DauCoXuongKhopPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Đau cơ xương khớp</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Đau cơ xương khớp là gì?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Đau cơ xương khớp là tình trạng đau nhức, cứng hoặc mỏi xuất hiện ở các cơ, xương, khớp và dây chằng, 
            thường ảnh hưởng trực tiếp đến khả năng vận động và chất lượng cuộc sống.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tình trạng này có thể gặp ở mọi độ tuổi, nhưng đặc biệt phổ biến ở người trung niên, 
            người làm việc văn phòng, người vận động thể thao hoặc người lớn tuổi.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Dấu hiệu thường gặp của đau cơ xương khớp</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Cảm giác đau âm ỉ hoặc nhói ở lưng, vai, cổ, đầu gối, hông.</li>
            <li>Cứng khớp, đặc biệt là vào buổi sáng hoặc sau khi ngồi lâu.</li>
            <li>Mỏi cơ, chuột rút, tê tay chân, hoặc đau lan dọc theo cột sống.</li>
            <li>Khó vận động linh hoạt, cảm giác nặng nề khi đi lại, leo cầu thang.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nguyên nhân gây ra đau cơ xương khớp</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Do tư thế sai trong sinh hoạt</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ngồi cong lưng, cúi gập người khi làm việc, hoặc đi đứng lệch trục trong thời gian dài sẽ khiến áp lực dồn không đều 
            lên hệ cơ và khớp, gây đau nhức và mỏi toàn thân.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Do ít vận động hoặc vận động quá mức</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ngồi lâu một chỗ khiến cơ bị co cứng, máu lưu thông kém; ngược lại, vận động quá mức hoặc sai kỹ thuật thể thao 
            cũng có thể dẫn đến vi chấn thương và đau mỏi kéo dài.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Do mất cân bằng cấu trúc bàn chân</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bàn chân là nền móng của cơ thể, khi vòm bàn chân bị lệch (bàn chân bẹt, bàn chân kiễng, chân vòng kiềng, chân chữ X) 
            thì trọng tâm cơ thể sai lệch, dẫn đến chuỗi ảnh hưởng lên đầu gối, hông, cột sống và vai gáy.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Do tuổi tác và trọng lượng cơ thể</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Khi tuổi tăng, mật độ xương giảm, sụn khớp mòn, cơ yếu đi; nếu kết hợp với thừa cân hoặc béo phì, 
            áp lực lên khớp tăng gấp nhiều lần, làm tình trạng đau mỏi nghiêm trọng hơn.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hậu quả nếu không chăm sóc sớm</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Giảm khả năng vận động, ảnh hưởng đến công việc và sinh hoạt.</li>
            <li>Dễ dẫn đến mất cân bằng cơ thể, sai lệch dáng đi và tư thế.</li>
            <li>Nguy cơ chấn thương hoặc thoái hóa sớm nếu không can thiệp kịp thời.</li>
            <li>Tác động tiêu cực đến tâm lý, giấc ngủ và chất lượng sống.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giải pháp chăm sóc và phòng ngừa đau cơ xương khớp</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Duy trì vận động khoa học</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tập luyện các môn nhẹ nhàng như đi bộ, yoga, bơi lội giúp tăng sức bền cơ – khớp và duy trì sự linh hoạt của cơ thể.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Cải thiện tư thế và hỗ trợ bàn chân đúng cách</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sử dụng tấm lót hỗ trợ vòm bàn chân giúp phân bổ lực đều lên 4 vòm bàn chân, đưa cơ thể về trục cân bằng tự nhiên, 
            giảm áp lực lên khớp gối, hông và cột sống – yếu tố quan trọng để giảm đau mỏi và phòng ngừa các vấn đề cơ – xương – khớp.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Duy trì cân nặng và dinh dưỡng hợp lý</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bổ sung canxi, vitamin D, magie, omega-3 từ thực phẩm tự nhiên, hạn chế đường, chất béo bão hòa và đồ uống có cồn 
            để hỗ trợ hệ cơ – xương khỏe mạnh.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Nghỉ ngơi và thư giãn đúng cách</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tránh mang vác vật nặng, ngủ trên nệm có độ cứng vừa phải, và thường xuyên thư giãn cơ bắp bằng cách xoa bóp nhẹ, 
            tắm nước ấm hoặc ngâm chân.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tìm hiểu thêm về các sản phẩm tấm lót bàn chân hỗ trợ cải thiện vấn đề về cơ xương khớp{" "}
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