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

export default function CongVeoCotSongPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cong vẹo cột sống: Hiểu đúng để phòng ngừa và cải thiện kịp thời</h1>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Cong vẹo cột sống không chỉ là vấn đề thẩm mỹ mà còn là một bệnh lý cơ – xương – khớp phức tạp, 
            ảnh hưởng trực tiếp đến hệ thần kinh, hô hấp và tuần hoàn. Tình trạng này đang ngày càng trẻ hóa, 
            đặc biệt ở trẻ em và người trưởng thành làm việc văn phòng lâu dài.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">I. Cong vẹo cột sống là gì?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cột sống bình thường nhìn từ phía sau sẽ thẳng và cân đối. Khi bị cong vẹo cột sống, 
            cột sống bị lệch khỏi trục giữa cơ thể, cong sang trái hoặc phải, cong về trước hoặc về sau.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nguyên nhân phổ biến bao gồm: di truyền, sai tư thế khi ngồi – đứng, bàn chân lệch trục, 
            vận động thể thao sai tư thế, mang vật nặng lệch vai, hoặc do các bệnh lý về cơ – xương – khớp.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">II. Dấu hiệu nhận biết cong vẹo cột sống</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Phát hiện sớm là yếu tố quyết định trong việc điều chỉnh và ngăn ngừa biến dạng nặng hơn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Các dấu hiệu thường gặp:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Vai hoặc hông lệch nhau, nhìn nghiêng thấy phần lưng lồi – lõm không đều.</li>
            <li>Khi cúi người về phía trước, một bên xương bả vai hoặc sườn nhô cao hơn bên còn lại.</li>
            <li>Cột sống nghiêng hoặc xoắn nhẹ, có thể quan sát khi đứng thẳng trước gương.</li>
            <li>Thường xuyên đau lưng, mỏi vai gáy, lệch dáng khi đi đứng.</li>
            <li>Trẻ nhỏ thường ngồi cong lưng, nghiêng người, đi xiêu vẹo.</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="text-yellow-800">
              <strong>⚠️ Lưu ý:</strong> Ở giai đoạn đầu, cong vẹo cột sống thường không gây đau rõ rệt, nên dễ bị bỏ qua.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">III. Hậu quả lâu dài nếu không điều chỉnh</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cong vẹo cột sống không chỉ làm biến dạng hình thể, mà còn gây ra nhiều hậu quả nghiêm trọng:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Ảnh hưởng hệ cơ – xương – khớp:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Mất cân bằng trọng lực cơ thể → tăng áp lực lên khớp gối, hông, bàn chân.</li>
            <li>Đau lưng mạn tính, thoái hóa sớm cột sống, thoát vị đĩa đệm.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Ảnh hưởng nội tạng và tuần hoàn:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Cong lệch vùng ngực làm giảm dung tích phổi, khó thở khi vận động.</li>
            <li>Ảnh hưởng đến tuần hoàn máu và tiêu hóa, gây mệt mỏi, mất năng lượng.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Ảnh hưởng tâm lý và thẩm mỹ:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Dáng đi không tự tin, lưng lệch, vai gù.</li>
            <li>Dễ dẫn đến mặc cảm, stress, giảm chất lượng cuộc sống.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">IV. Giải pháp hỗ trợ và phòng ngừa cong vẹo cột sống</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Phòng bệnh luôn hiệu quả hơn chữa bệnh. Các chuyên gia khuyến nghị can thiệp từ sớm bằng việc 
            cải thiện cấu trúc cơ thể và tư thế từ bàn chân – nền móng của toàn cơ thể.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Chỉnh tư thế và luyện tập:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Tập thể dục đều đặn, các bài tăng cường cơ lưng – cơ bụng.</li>
            <li>Duy trì tư thế ngồi, đứng, ngủ đúng trục cột sống.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Hỗ trợ từ bàn chân:</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Các nghiên cứu tại Đại học Michigan và East Carolina (Hoa Kỳ) chỉ ra rằng:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sai lệch cấu trúc bàn chân là nguyên nhân gốc gây lệch trục cơ thể, ảnh hưởng trực tiếp đến cột sống.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Giải pháp hiện đại ngày nay là sử dụng tấm lót hỗ trợ vòm bàn chân NAGEN, giúp:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Cân bằng 4 vòm bàn chân, cải thiện tư thế đứng và dáng đi.</li>
            <li>Giảm lệch trục cơ thể, hỗ trợ điều chỉnh cân bằng từ bàn chân lên đến cột sống.</li>
            <li>Ngăn ngừa thoái hóa xương khớp, đau mỏi lưng và cổ vai gáy.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tìm hiểu thêm về các sản phẩm tấm lót hỗ trợ vòm bàn chân cải thiện các vấn đề về cơ xương khớp và cột sống{" "}
            <Link href="/tat-ca-san-pham" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              tại đây
            </Link>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Phương pháp điều trị tích hợp</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Sử dụng tấm lót hỗ trợ vòm bàn chân</li>
            <li>Vật lý trị liệu và tập luyện chỉnh hình</li>
            <li>Nẹp chỉnh hình (trong một số trường hợp)</li>
            <li>Massage và châm cứu</li>
            <li>Thay đổi lối sống và tư thế</li>
            <li>Phẫu thuật (chỉ trong trường hợp nặng)</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Phát hiện sớm là chìa khóa</h3>
            <p className="text-orange-700">
              Cong vẹo cột sống có thể tiến triển nhanh chóng, đặc biệt ở trẻ em và thanh thiếu niên. 
              Việc phát hiện sớm và can thiệp kịp thời có thể ngăn ngừa biến chứng nghiêm trọng.
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