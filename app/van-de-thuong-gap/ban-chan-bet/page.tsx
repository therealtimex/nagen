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

export default function BanChanBetPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Bàn chân bẹt</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giới thiệu về bàn chân bẹt</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bàn chân bẹt là tình trạng vòm bàn chân bị sụp xuống, khiến lòng bàn chân gần như chạm hoàn toàn mặt đất khi đứng. 
            Điều này làm giảm khả năng đàn hồi, hấp thụ lực của bàn chân, ảnh hưởng trực tiếp đến dáng đi, sự cân bằng và 
            toàn bộ hệ thống cơ – xương – khớp.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nhiều tài liệu y khoa trên thế giới chỉ ra rằng bàn chân bẹt là một trong những nguyên nhân phổ biến dẫn đến 
            đau gối, đau lưng, viêm cân gan chân và lệch trục cơ thể.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Dấu hiệu nhận biết bàn chân bẹt</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Mất vòm bàn chân</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Khi đứng, toàn bộ lòng bàn chân chạm sát đất, không còn đường cong (vòm) giữa gan bàn chân.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quan sát dấu chân ướt trên nền nhà: nếu không thấy khoảng lõm giữa lòng bàn chân → khả năng cao bị bàn chân bẹt.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Đau hoặc mỏi bàn chân sau khi đứng lâu</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Đau nhiều ở phần giữa bàn chân, gót chân hoặc mu bàn chân.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cảm giác chân nặng, nóng rát hoặc căng tức khi đi bộ lâu, đứng làm việc, hoặc chơi thể thao.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Đau đầu gối, hông, lưng – do lệch trục cơ thể</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Khi bàn chân bị bẹt, trục cơ thể không còn cân bằng, khiến đầu gối, hông và cột sống bị xoay hoặc nghiêng nhẹ.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kết quả là người bệnh dễ gặp:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau đầu gối, đau mỏi hông, đau thắt lưng.</li>
            <li>Mỏi vai gáy, đau cổ do lệch tư thế toàn thân.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Dáng đi sai lệch</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bàn chân bẹt khiến trọng tâm cơ thể đổ vào trong → bàn chân xoay vào khi bước đi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quan sát từ phía sau: gót chân thường nghiêng vào trong, làm dáng đi không vững và kém tự tin.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Giày dép mòn không đều</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phần gót trong của giày bị mòn nhanh hơn bình thường, là dấu hiệu đặc trưng của lệch trục bàn chân.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Ở trẻ em</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trẻ đi hay vấp ngã, chạy nhanh bị mỏi hoặc không thích chạy nhảy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hay than "mỏi chân", "đi lâu đau chân", dáng đi không thẳng.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Đối tượng thường gặp bàn chân bẹt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bàn chân bẹt có thể gặp ở nhiều lứa tuổi, đặc biệt là các nhóm sau:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Trẻ em và thanh thiếu niên</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Do yếu tố di truyền hoặc vòm bàn chân chưa phát triển hoàn thiện. Nếu không được phát hiện sớm, 
            sẽ ảnh hưởng đến dáng đi, khả năng vận động và sự phát triển của hệ cơ – xương - khớp.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Người trưởng thành</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Những người thường xuyên đứng lâu, đi nhiều hoặc chơi thể thao cường độ cao dễ bị sụp vòm bàn chân 
            do áp lực lặp lại liên tục.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Phụ nữ mang thai</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trọng lượng cơ thể tăng nhanh khiến dây chằng và gân bàn chân giãn, làm mất độ cong tự nhiên của vòm bàn chân.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Người cao tuổi</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Do quá trình lão hóa, các cơ và dây chằng bàn chân yếu dần, dẫn đến biến dạng bàn chân và giảm khả năng cân bằng.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hậu quả và nguy cơ của bàn chân bẹt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nếu không phát hiện và hỗ trợ đúng cách, bàn chân bẹt có thể dẫn đến:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Đau nhức bàn chân, gót chân, đầu gối và thắt lưng do phân bố lực sai.</li>
            <li>Mất cân bằng tư thế, tăng nguy cơ té ngã, đặc biệt ở người cao tuổi.</li>
            <li>Tăng áp lực lên khớp và cột sống, gây thoái hóa sớm.</li>
            <li>Ảnh hưởng dáng đi, dáng đứng và sự tự tin trong vận động.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Giải pháp cho người bị bàn chân bẹt</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Tập luyện phục hồi vòm bàn chân</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Các bài tập co duỗi ngón, nhón gót hoặc đi chân trần trên cát giúp kích hoạt cơ và dây chằng bàn chân, 
            hỗ trợ phục hồi vòm tự nhiên.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Chọn giày phù hợp</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nên ưu tiên giày có phần đế hỗ trợ vòm và giảm sốc. Tuy nhiên, giày thông thường không thể điều chỉnh 
            cấu trúc vòm bàn chân như tấm lót chuyên dụng.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Giải pháp khoa học - Tấm lót hỗ trợ vòm bàn chân NAGEN</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sản phẩm hỗ trợ cả bốn vòm bàn chân – vòm dọc trong, vòm dọc ngoài, vòm ngang trước và vòm ngang sau – 
            giúp đưa bàn chân về vị trí sinh học chuẩn, cân bằng toàn cơ thể và giảm áp lực lên hệ cơ – xương – khớp.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Giảm đau nhức và mỏi cơ thể</li>
            <li>Cải thiện dáng đi – dáng đứng</li>
            <li>Hỗ trợ cân bằng và phân bổ lực chính xác</li>
            <li>Ngăn ngừa chấn thương về cơ - xương - khớp</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tìm hiểu thêm về các sản phẩm tấm lót vòm bàn chân bẹt{" "}
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