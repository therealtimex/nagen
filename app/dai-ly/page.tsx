"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  Facebook,
  Youtube,
  Instagram,
  ChevronDown,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getImagePath, navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import FloatingActionButtons from "@/components/FloatingActionButtons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

// Enhanced Navigation Component (same as main page)
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
    { name: "Dịch vụ", href: "#services" },
    { name: "Đối tác", href: "#partners" },
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
                    className={`text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2 ${
                      item.name === "Đại lý" ? "text-blue-900 font-semibold" : ""
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
                            className={`block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation ${
                              item.name === "Đại lý" ? "bg-blue-50 text-blue-900 border-blue-200" : ""
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

// Dealer Registration Form Component
function DealerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại chỉ được chứa số và các ký tự +, -, (), khoảng trắng"
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      const submissionData = {
        ...formData,
        event: "dang_ky_dai_ly",
        source_url: typeof window !== "undefined" ? window.location.href : "",
      }

      const response = await fetch(
        "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_datlich/input",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        },
      )

      if (!response.ok) {
        throw new Error("Có lỗi khi gửi dữ liệu")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Lỗi khi gửi request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
        <CardContent className="p-6 sm:p-8 text-center">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Đăng ký thành công!</div>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Cảm ơn bạn đã đăng ký trở thành đại lý NAGEN. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để trao đổi chi tiết.
          </p>
          {formData.email && (
            <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-sm text-gray-700">
                📧 Email xác nhận đã được gửi đến: <strong className="break-all">{formData.email}</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="p-4 sm:p-6">
        <div className="mb-4">
          <Image
            src={getImagePath("/images/logo_slogan_1.png")}
            alt="NAGEN Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        <CardTitle className="text-blue-900 text-lg sm:text-xl">Đăng ký trở thành Đại lý</CardTitle>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Vui lòng điền thông tin để đăng ký trở thành đại lý NAGEN
        </p>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Nhập họ và tên"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-12 text-base ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-12 text-base ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email
            </label>
            <Input
              type="email"
              placeholder="Nhập địa chỉ email (không bắt buộc)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-12 text-base ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Địa chỉ</label>
            <Input
              placeholder="Nhập địa chỉ (không bắt buộc)"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="h-12 text-base"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Tin nhắn</label>
            <Textarea
              placeholder="Chia sẻ thêm về kinh nghiệm kinh doanh hoặc câu hỏi của bạn (không bắt buộc)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[100px] text-base"
            />
          </div>

          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để trao đổi chi tiết về chương trình đại lý.</span>
            </p>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold bg-red-600 hover:bg-red-700 text-white"
            >
              {isSubmitting ? "Đang gửi..." : "Đăng ký trở thành Đại lý"}
              {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default function DaiLyPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedNavigation />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#21395D] mb-4">
            ĐẠI LÝ NAGEN
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-4">
              Hãy cùng Nagen xây dựng hệ thống đại lý chuyên nghiệp khắp mọi con thôn, thành phố, mang tấm lót vòm bàn chân tốt nhất cho mọi nhà.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Khi bạn chọn một con đường, bạn cũng sẽ chọn một sứ mệnh: <strong>"Mỗi bước chân - Một nụ cười"</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Tại Nagen, chúng tôi quan tâm hành trình đồng hành cùng bạn xây dựng sự nghiệp kinh doanh bền vững, mỗi bước đi vững chãi của bạn là niềm tự hào của Nagen.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Chúng tôi chú trọng đến sức khỏe thân tâm của bạn! Chúng tôi rất hãnh hiện, bằng đóng góp nhỏ nhoi, khiêm nhường, xin tri ân tới Quý đại lý chương trình Nuôi Dưỡng _ Chuyển Hóa_ Trị liệu Thân Tâm mỗi năm, thông qua đó bạn được Ứng dụng Phương pháp thực tập Hơi thở giúp thay đổi nhận thức, hành vi, lối sống cân bằng sức khỏe Thân Tâm. <strong>Thân khỏe - Tâm an - Trí sáng</strong>.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              Chúng tôi hỗ trợ bạn điều gì khi bạn trở thành đại lý?
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Gia nhập hệ thống đại lý Nagen, bạn không phải tự tìm cách bán hàng – vì mọi tài liệu, quy trình, đào tạo, công cụ marketing tìm kiếm khách hàng đã có sẵn, giúp bạn có thể bắt đầu ngay lập tức.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Ứng dụng phần mềm kinh doanh hỗ trợ việc kinh doanh bứt tốc</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Nền tảng website hỗ trợ đại lý affiliate truyền thông mọi nền tảng</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Bạn tăng trưởng doanh số nhờ có hệ sinh thái chia sẻ đơn hàng tự động từ công ty và toàn bộ đại lý khác.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Bạn được định vị trên bản đồ website NAGEN giúp khách hàng biết đến bạn một cách đáng tin cậy</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              Sản phẩm NAGEN có gì đặc sắc?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót hỗ trợ vòm bàn chân NAGEN được phát minh bởi Tiến sĩ, Bác sĩ phẫu thuật chỉnh hình và chuyên gia vật lý Trị Liệu người Đức, là người thiết lập về lý thuyết bàn chân và dụng cụ chỉnh hình, là người thiết lập về hệ thống tiêu chuẩn vòm bàn chân. Thiết kế Tấm lót vòm bàn chân của Ông được cấp bằng sáng chế và được ứng dụng nghiên cứu chuyên sâu gần 60 năm ở các trường đại học tại Hoa Kỳ.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Đây là thương hiệu Tấm lót vòm bàn chân cao cấp được hàng triệu người dùng trên thế giới đánh giá cao và đáng tin cậy. Nagen là đơn vị phân phối độc quyền tại Việt Nam.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold text-[#21395D] mb-4">
                Sản phẩm đáng tin cậy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Là tấm lót vòm bàn chân cao cấp từ Mỹ, có mặt trên thế giới từ những năm 1969, hơn 90% khách hàng quyết định mua ngay sau khi được trải nghiệm, sản phẩm có tính lan tỏa thuận tự nhiên cao. Đặc biệt, 100% khách hàng thỏa mãn kỳ vọng khi sử dụng sản phẩm.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              Khách hàng của chúng ta là ai?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bàn chân là nền móng của toàn bộ cơ thể. Khi bàn chân mất cân bằng, toàn bộ hệ cơ – xương – khớp sẽ suy yếu theo. Thực tế tại Việt Nam cho thấy, nhu cầu chăm sóc bàn chân và hệ vận động không chỉ còn ở người lớn tuổi mà đang trẻ hóa mạnh mẽ.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Thị trường cực kỳ rộng lớn – hơn 90% dân số có dấu hiệu cần hỗ trợ bàn chân và cấu trúc cơ thể, bao gồm các nhóm điển hình như:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người gặp các vấn đề về bàn chân: Bàn chân bẹt, bàn chân kiễng, chân vòng kiềng (chữ O), chân chữ X</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người có nghề nghiệp phải đi đứng nhiều như: Giáo viên, bác sĩ, công nhân, kỹ sư xây dựng, quản lý bán hàng…</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người chơi thể thao như: Chạy bộ, bóng đá, pickleball, tennis, golf, yoga…</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người đi giày cao gót không phù hợp dẫn đến đau mỏi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người bị viêm/ đứt gân chân Achilles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người viêm cân gan chân, viêm khớp dạng thấp, đau gót chân, gai gót chân, đau xương bàn chân, cong vẹo cột sống</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người bị suy giãn tĩnh mạch chân, hội chứng Marfan, u dây thần kinh Morton</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người có hai chân không bằng nhau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Mẹ bầu bị cân nặng áp lực lên xương khớp, thay đổi dáng đi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Tuổi cao bị đau mỏi cơ xương khớp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Người thừa cân, béo phì, thường xuyên chịu áp lực lớn lên bàn chân và các khớp.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Trẻ em trong giai đoạn phát triển vòm bàn chân, cần hỗ trợ định hình tư thế dáng đi từ sớm.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Có thể nói, chỉ cần còn bước đi - thì sẽ cần đến sản phẩm của NAGEN. Bởi tấm lót hỗ trợ vòm bàn chân của Nagen không chỉ giúp cải thiện những vấn đề đã xuất hiện, mà còn chủ động phòng ngừa trước khi chúng trở thành bệnh lý.
            </p>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#21395D] mb-4">
                Một số dữ liệu thực tế:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Hơn 70% người Việt mắc các vấn đề về dáng đi và mất cân bằng cấu trúc cơ thể mà không biết</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Bàn chân bẹt, chân vòng kiềng, chân chữ X, đau mỏi bàn chân – xuất hiện ở cả trẻ em, người đi làm & người lớn tuổi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  <span>Xu hướng chăm sóc sức khỏe không xâm lấn – tự nhiên – an toàn đang được Đảng và Nhà nước khuyến khích và trở thành xu thế tất yếu.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              Làm thế nào để trở thành Đại lý?
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <span className="text-gray-700 font-medium">Điền form đăng ký bên dưới</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <span className="text-gray-700 font-medium">Ký kết hợp tác</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <span className="text-gray-700 font-medium">Tham gia buổi đào tạo online cùng Nagen</span>
              </div>
            </div>
          </section>

          {/* Registration Form Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white p-6 rounded-lg text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Đăng ký trở thành Đại lý Nagen
              </h2>
              <p className="text-blue-100">
                "Nagen - Nuôi dưỡng từng bước chân"
              </p>
            </div>
            
            <DealerRegistrationForm />
          </section>
        </div>
      </main>

      <FloatingActionButtons onScheduleClick={() => {
        const formElement = document.querySelector('form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }} />
      <Footer />
    </div>
  )
}