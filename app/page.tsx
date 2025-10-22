"use client"

import Head from "next/head"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  Play,
  Facebook,
  Youtube,
  Instagram,
  Zap,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Users,
  Send,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import DealerLocator from "@/components/DealerLocator"
import NoSSRWrapper from "@/components/NoSSRWrapper"
import { getImagePath, navigateTo } from "@/lib/utils"

import { type Product, productData } from "@/lib/products"
import FloatingActionButtons from "@/components/FloatingActionButtons"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"

// Type definitions
interface FormData {
  name: string
  phone: string
  email: string
  address: string
  message: string
  contactMethod: string[]
  service: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
}

interface PartnerFormData {
  name: string
  phone: string
  email: string
  address: string
  message: string
  contactMethod: string[]
}

// Define family member keys as a union type
type FamilyMemberKey = "grandfather" | "grandmother" | "father" | "mother" | "children" | "others"

interface FamilyMembers {
  grandfather: number
  grandmother: number
  father: number
  mother: number
  children: number
  others: number
}

interface AppointmentFormData {
  name: string
  birthDate: string
  phone: string
  address: string
  appointmentTime: string
  email: string
  shoeSize: string
  problems: string
  familyMembers: FamilyMembers
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FamilyMemberItem {
  key: FamilyMemberKey
  label: string
}

// Standardized CTA Button Component
function CTAButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  [key: string]: any
}) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500",
    secondary: "bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-900 hover:bg-blue-50 focus:ring-blue-500",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Button>
  )
}

// Enhanced Navigation with Submenus
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
    { name: "Đăng ký", href: "/dang-ky" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Sự kiện", href: "/su-kien" },
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
    }, 150) // 150ms delay before hiding
  }

  const handleNavigation = (href: string) => {
    // Check if it's an external link (starts with / or http)
    if (href.startsWith("/") || href.startsWith("http")) {
      navigateTo(href)
      return
    }

    // Handle anchor links
    const targetId = href.substring(1) // Remove the '#'
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
                    className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {/* Submenu with bridge area */}
                  {item.submenu && activeSubmenu === item.name && (
                    <>
                      {/* Invisible bridge to prevent gap issues */}
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
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-900 to-red-600">
                    <div className="text-lg font-semibold text-white">Menu</div>
                  </div>

                  {/* Navigation */}
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

                            {/* Submenu với animation */}
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

                  {/* Footer */}
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

// Enhanced Customer Feedback Slider
function EnhancedFeedbackSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      role: "Khách hàng thân thiết",
      content: "Sản phẩm NAGEN đã giúp tôi giảm đau chân hiệu quả. Chất lượng tuyệt vời, dịch vụ chuyên nghiệp.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Avatar1",
      location: "Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị B",
      role: "Khách hàng",
      content: "Đội ngũ tư vấn nhiệt tình, sản phẩm chất lượng cao. Tôi rất hài lòng với dịch vụ của NAGEN.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Avatar2",
      location: "TP.HCM",
    },
    {
      id: 3,
      name: "Lê Văn C",
      role: "Khách hàng",
      content: "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng như mô tả, hiệu quả rõ rệt.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Avatar3",
      location: "Đà Nẵng",
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-blue-900 mb-2">Khách hàng nói gì về Tấm lót hỗ trợ vòm bàn chân NAGEN?</div>
        <p className="text-gray-600">Hơn 4 triệu người tin dùng trên toàn thế giới</p>
      </div>

      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Image
                    src={getImagePath(testimonial.image || "/placeholder.svg")}
                    alt={`Ảnh đại diện khách hàng ${testimonial.name} - Đánh giá sản phẩm NAGEN`}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    loading="lazy"
                    title={`Khách hàng ${testimonial.name} từ ${testimonial.location}`}
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-red-600 font-medium">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-red-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Hero Content Component with Read More functionality
function HeroContent() {

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#21395D] mb-4 sm:mb-6 text-center leading-tight">
        TẤM LÓT HỖ TRỢ VÒM BÀN CHÂN NAGEN
      </h1>
      <p className="text-base sm:text-lg text-[#21395D] leading-relaxed text-justify whitespace-pre-line px-2 sm:px-0">
        <strong>Tấm lót hỗ trợ vòm bàn chân Nagen</strong> do <strong>Bio Orthotics International, Inc sản xuất tại Mỹ</strong>, là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay. Mỗi người có kích thước vòm bàn chân khác nhau, chúng tôi cung cấp đa dạng kích cỡ phù hợp riêng với từng người, cho nhiều lứa tuổi
      </p>


      {/* Product Image */}
      <div className="my-4 sm:my-6 max-w-5xl mx-auto flex justify-center px-2 sm:px-0">
        <Image
          src={getImagePath("/images/20200624_161136PS.webp")}
          alt="Bộ sưu tập tấm lót hỗ trợ vòm bàn chân NAGEN - Sungen, Winagen, Softgen, Endurance, Silhouette"
          width={1200}
          height={400}
          className="w-full rounded-lg sm:rounded-xl shadow-lg"
          priority
          title="Các dòng sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN chất lượng cao"
        />
      </div>
    </div>
  )
}

// Simplified Contact Form with Basic Information Only
function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    contactMethod: [],
    service: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [ctvValue, setCtvValue] = useState("")

  // Thêm useEffect để lấy giá trị ctv từ URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const ctv = urlParams.get("ctv")
      if (ctv) {
        setCtvValue(ctv)
      }
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

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
      // Tạo object data với thông tin ctv
      const submissionData = {
        ...formData,
        event: "tuvan",
        ctv: ctvValue, // Thêm giá trị ctv vào data
        source_url: typeof window !== "undefined" ? window.location.href : "", // Safe access to window
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

      // Nếu cần, bạn có thể đọc dữ liệu phản hồi từ server
      const result = await response.json()
      console.log("Response từ API:", result)
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
          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Gửi thành công!</div>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Cảm ơn bạn đã liên hệ với NAGEN. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
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
            src="/images/logo_slogan_1.png"
            alt="NAGEN Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        <CardTitle className="text-blue-900 text-lg sm:text-xl">Tư vấn sản phẩm miễn phí</CardTitle>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">Vui lòng điền thông tin để nhận tư vấn miễn phí từ chuyên gia NAGEN</p>
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
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                inputMode="numeric"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-12 text-base ${errors.phone ? "border-red-500" : ""}`}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email
            </label>
            <Input
              type="email"
              inputMode="email"
              placeholder="Nhập địa chỉ email (không bắt buộc)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-12 text-base ${errors.email ? "border-red-500" : ""}`}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
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

          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí và đặt lịch hẹn phù hợp.</span>
            </p>
          </div>

          <div className="pt-4">
            <CTAButton
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold"
            >
              {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
              {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
            </CTAButton>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// Partner Registration Form Component
function PartnerRegistrationForm({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<PartnerFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    contactMethod: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [ctvValue, setCtvValue] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const ctv = urlParams.get("ctv")
      if (ctv) {
        setCtvValue(ctv)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        event: "partner",
        ctv: ctvValue,
        source_url: typeof window !== "undefined" ? window.location.href : "",
      }

      const response = await fetch(
        "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_doitac/input",
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

      const result = await response.json()
      console.log("Response từ API:", result)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Lỗi khi gửi request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
      contactMethod: [],
    })
    setIsSubmitted(false)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
            <div className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Chúng tôi đã nhận được đăng ký đối tác của bạn.</p>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Đội ngũ NAGEN sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn chi tiết.</p>
            <CTAButton onClick={handleClose} className="w-full sm:w-auto">Đóng</CTAButton>
          </div>
        ) : (
          <>
            <div className="bg-red-600 text-white p-4 sm:p-6 rounded-t-lg">
              <div className="mb-4">
                <Image
                  src="/images/logo_slogan_1.png"
                  alt="NAGEN Logo"
                  width={120}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-lg sm:text-xl font-bold">Đăng ký làm đối tác</div>
                  <p className="text-red-100 mt-1 text-sm sm:text-base">Tham gia mạng lưới đại lý NAGEN</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-white hover:bg-red-700 flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <span className="text-xl">×</span>
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  inputMode="email"
                  placeholder="Nhập địa chỉ email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Địa chỉ <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Nhập địa chỉ kinh doanh dự kiến"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tin nhắn</label>
                <Textarea
                  placeholder="Chia sẻ về kế hoạch kinh doanh và lý do muốn trở thành đối tác NAGEN"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-base resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">Cách thức liên lạc ưu tiên</label>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 h-4 w-4 text-red-600 focus:ring-red-500"
                      value="email"
                      checked={formData.contactMethod.includes("email")}
                      onChange={(e) => {
                        const value = e.target.value
                        const isChecked = e.target.checked
                        setFormData((prev) => ({
                          ...prev,
                          contactMethod: isChecked
                            ? [...prev.contactMethod, value]
                            : prev.contactMethod.filter((method) => method !== value),
                        }))
                      }}
                    />
                    <span className="text-sm text-gray-700 select-none">Email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 h-4 w-4 text-red-600 focus:ring-red-500"
                      value="phone"
                      checked={formData.contactMethod.includes("phone")}
                      onChange={(e) => {
                        const value = e.target.value
                        const isChecked = e.target.checked
                        setFormData((prev) => ({
                          ...prev,
                          contactMethod: isChecked
                            ? [...prev.contactMethod, value]
                            : prev.contactMethod.filter((method) => method !== value),
                        }))
                      }}
                    />
                    <span className="text-sm text-gray-700 select-none">Điện thoại</span>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                  Bằng việc gửi đăng ký, bạn đồng ý với{" "}
                  <Link href="/terms-of-use" className="text-blue-600 hover:underline font-medium">
                    điều khoản sử dụng
                  </Link>{" "}
                  và{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                    chính sách bảo mật
                  </Link>{" "}
                  của NAGEN.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 bg-transparent h-12 text-base font-medium order-2 sm:order-1"
                  disabled={isSubmitting}
                >
                  Hủy
                </Button>
                <CTAButton
                  type="submit"
                  className="flex-1 h-12 text-base font-semibold order-1 sm:order-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                </CTAButton>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// Appointment Booking Form Component
function AppointmentBookingForm({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    birthDate: "",
    phone: "",
    address: "",
    appointmentTime: "",
    email: "",
    shoeSize: "",
    problems: "",
    familyMembers: {
      grandfather: 0,
      grandmother: 0,
      father: 0,
      mother: 0,
      children: 0,
      others: 0,
    },
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [ctvValue, setCtvValue] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const ctv = urlParams.get("ctv")
      if (ctv) {
        setCtvValue(ctv)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submissionData = {
        ...formData,
        event: "dochan",
        ctv: ctvValue,
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

      const result = await response.json()
      console.log("Response từ API:", result)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Lỗi khi gửi request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFamilyMemberChange = (member: FamilyMemberKey, value: string) => {
    setFormData({
      ...formData,
      familyMembers: {
        ...formData.familyMembers,
        [member]: Math.max(0, Number.parseInt(value) || 0),
      },
    })
  }

  const resetForm = () => {
    setFormData({
      name: "",
      birthDate: "",
      phone: "",
      address: "",
      appointmentTime: "",
      email: "",
      shoeSize: "",
      problems: "",
      familyMembers: {
        grandfather: 0,
        grandmother: 0,
        father: 0,
        mother: 0,
        children: 0,
        others: 0,
      },
    })
    setIsSubmitted(false)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</div>
            <p className="text-gray-600 mb-4">Bạn hãy chuẩn bị trải nghiệm một khía cạnh mới của dịch vụ khách hàng.</p>
            <p className="text-gray-600 mb-6">Chúng tôi ở đây để giúp đỡ và mong nhận được phản hồi từ bạn.</p>
            <CTAButton onClick={handleClose}>Đóng</CTAButton>
          </div>
        ) : (
          <>
            <div className="bg-red-600 text-white p-6 rounded-t-lg">
              <div className="mb-4">
                <Image
                  src="/images/logo_slogan_1.png"
                  alt="NAGEN Logo"
                  width={120}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold">Đặt lịch đo chân</div>
                  <p className="text-red-100 mt-1">Đo vòm bàn chân miễn phí tại nhà</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-red-700">
                  ×
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900 text-lg border-b pb-2">Thông tin cá nhân</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Ngày tháng năm sinh <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Nhập số điện thoại"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Địa chỉ <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập địa chỉ chi tiết"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Thời gian hẹn đo vòm bàn chân <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="datetime-local"
                      value={formData.appointmentTime}
                      onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Size giày <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={formData.shoeSize}
                      onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
                      required
                    >
                      <option value="">Chọn size giày</option>
                      {Array.from({ length: 20 }, (_, i) => i + 35).map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Hãy chia sẻ vấn đề bạn đang gặp phải (nếu có)
                  </label>
                  <Textarea
                    placeholder="Mô tả chi tiết tình trạng bàn chân, cảm giác đau nhức, khó chịu..."
                    rows={3}
                    value={formData.problems}
                    onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
                  />
                </div>
              </div>

              {/* Family Members Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-900 text-lg border-b pb-2">Dịch vụ cho người thân</h4>
                <p className="text-gray-600 text-sm">
                  Chúng tôi rất vui, khi bạn cho phép chúng tôi hỗ trợ miễn phí đo vòm bàn chân cho người thân của bạn
                  trong lịch hẹn lần này, vui lòng chọn mong muốn của bạn:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {(
                    [
                      { key: "grandfather", label: "Ông" },
                      { key: "grandmother", label: "Bà" },
                      { key: "father", label: "Bố" },
                      { key: "mother", label: "Mẹ" },
                      { key: "children", label: "Con" },
                      { key: "others", label: "Khác" },
                    ] as FamilyMemberItem[]
                  ).map((member) => (
                    <div key={member.key} className="flex items-center space-x-3">
                      <label className="text-sm font-medium text-gray-700 min-w-[60px]">{member.label}:</label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        placeholder="0"
                        value={formData.familyMembers[member.key] || ""}
                        onChange={(e) => handleFamilyMemberChange(member.key, e.target.value)}
                        className="w-20"
                      />
                      <span className="text-sm text-gray-500">người</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 bg-transparent"
                  disabled={isSubmitting}
                >
                  Hủy
                </Button>
                <CTAButton type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Đang gửi..." : "Đặt lịch hẹn"}
                  {!isSubmitting && <Calendar className="w-4 h-4" />}
                </CTAButton>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// Main Homepage Content Component
function HomePageContent() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isUnifiedRegistrationOpen, setIsUnifiedRegistrationOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleScheduleClick = () => {
    setIsAppointmentModalOpen(true);
  };

  // Listen for custom events from footer
  useEffect(() => {
    const handleOpenAppointmentModal = () => {
      setIsAppointmentModalOpen(true);
    };

    const handleOpenUnifiedRegistration = () => {
      setIsUnifiedRegistrationOpen(true);
    };

    window.addEventListener('openAppointmentModal', handleOpenAppointmentModal);
    window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration);

    return () => {
      window.removeEventListener('openAppointmentModal', handleOpenAppointmentModal);
      window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NAGEN Vietnam",
            "description": "Chuyên cung cấp tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ, dịch vụ tư vấn và đo vòm bàn chân tại nhà miễn phí toàn quốc.",
            "url": "https://nagen.vn",
            "telephone": "+84966578008",
            "email": "nagen@nagen.vn",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tầng 7, Tòa VP-1, Sunsquare Complex, Số 21 Lê Đức Thọ",
              "addressLocality": "Mỹ Đình 2, Nam Từ Liêm",
              "addressRegion": "Hà Nội",
              "addressCountry": "VN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.038134",
              "longitude": "105.780147"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "image": "https://nagen.vn/images/logo_slogan_1.png",
            "logo": "https://nagen.vn/images/logo_slogan_1.png",
            "sameAs": [
              "https://facebook.com/nagen.vietnam",
              "https://instagram.com/nagen.vietnam",
              "https://youtube.com/@nagen.vietnam",
              "https://tiktok.com/@nagen.vietnam"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+84966578008",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
                "areaServed": "VN"
              },
              {
                "@type": "ContactPoint",
                "email": "nagen@nagen.vn",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
                "areaServed": "VN"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sản phẩm tấm lót hỗ trợ vòm bàn chân NAGEN",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Tấm lót hỗ trợ vòm bàn chân Endurance",
                    "description": "Tấm lót hỗ trợ vòm bàn chân cao cấp cho hoạt động thể thao"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Tấm lót hỗ trợ vòm bàn chân Silhouette",
                    "description": "Tấm lót hỗ trợ vòm bàn chân mỏng nhẹ cho giày công sở"
                  }
                }
              ]
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Dịch vụ tư vấn miễn phí",
                "description": "Tư vấn miễn phí về sản phẩm tấm lót hỗ trợ vòm bàn chân phù hợp",
                "price": "0",
                "priceCurrency": "VND"
              },
              {
                "@type": "Offer",
                "name": "Dịch vụ đo vòm bàn chân tại nhà",
                "description": "Dịch vụ đo vòm bàn chân chuyên nghiệp tại nhà khách hàng",
                "areaServed": "VN"
              }
            ]
          })
        }}
      />

      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <section id="home" className="relative bg-[#FFFFFF] text-[#21395D] py-10 lg:py-18 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Video Section */}
            <div className="mt-4 mb-8">
              <div
                className="aspect-video bg-black/20 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300 group max-w-2xl mx-auto"
                onClick={handlePlayVideo}
              >
                <div className="">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white/90 font-medium">Video giới thiệu NAGEN</p>
                  <p className="text-white/70 text-sm mt-1">2 phút • Xem ngay</p>
                </div>
              </div>
            </div>
            <HeroContent />
          </div>
        </div>
      </section>

      {/* Enhanced Product Image and Research Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Text and CTA - Bottom */}
            <div className="w-full">
              {/* Text Content - Full width */}
              <div className="space-y-4">
                <p className="text-lg text-[#21395D] leading-relaxed text-justify">
                  Khởi nguồn từ nghiên cứu của Georg Alzner - TS.BS phẫu thuật chỉnh hình người Đức, người đã nghiên cứu tấm lót hỗ trợ vòm bàn chân và được cấp bằng sáng chế tại Canada (1969) và Hoa Kỳ (1970). Trải qua gần 60 năm, thiết kế của Alzner đã chứng minh được tính hiệu quả trong các nghiên cứu khoa học cũng như trong quá trình sử dụng của hàng triệu khách hàng tại Hoa Kỳ và trên toàn thế giới.
                </p>
                <p className="text-lg text-[#21395D] leading-relaxed text-justify">
                  Các nhà khoa học đã công bố một loạt các nghiên cứu chứng minh cách tấm lót hỗ trợ vòm bàn chân Nagen cải thiện chức năng của vòm. Đại học Michigan, East Carolina, Armstrong và California
                </p>
                <div className="flex justify-center mt-6">
                  <CTAButton
                    variant="primary"
                    onClick={() => navigateTo("/studies")}
                    className="
                      bg-[#21395D] hover:bg-[#1a2d4a] text-white
                      px-6 md:px-8 py-3 md:py-4 rounded-lg
                      text-base md:text-lg font-semibold
                      min-w-[200px] max-w-[320px]
                      transition-all duration-300
                      shadow-lg hover:shadow-xl
                      hover:scale-105
                    "
                  >
                    Xem thêm nghiên cứu khoa học
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section id="products" className="pt-4 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Các dòng sản phẩm của NAGEN</h2>
            <p className="text-gray-600 text-lg">Khám phá bộ sưu tập tấm lót hỗ trợ vòm bàn chân chất lượng cao</p>
          </div>

          <div className="space-y-4 mb-6">
            {productData.map((product, index) => (
              <div key={product.id}>
                {/* Product Item */}
                <div className="py-4">
                  {/* Product Title - Always first on mobile, hidden on desktop (will be shown in info section) */}
                  <div className="md:hidden mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{product.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    {/* Product Image */}
                    <div className="order-1 md:order-1">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                        <Image
                          src={getImagePath(product.image)}
                          alt={`${product.name} - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ NAGEN`}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          title={`${product.name} - Giải pháp hỗ trợ bàn chân hiệu quả`}
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="order-2 md:order-2 space-y-4">
                      {/* Product Title - Only shown on desktop */}
                      <h3 className="hidden md:block text-xl font-bold text-blue-900">{product.name}</h3>
                      <p className="text-[#21395D] text-lg leading-relaxed">{product.description}</p>
                      <CTAButton
                        variant="primary"
                        className="group bg-[#21395D] hover:bg-[#1a2d4a] text-white"
                        onClick={() => navigateTo(`/tat-ca-san-pham?category=${product.category}`)}
                      >
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </CTAButton>
                    </div>
                  </div>
                </div>

                {/* Brand Color Separator Line - except for last item */}
                {index < productData.length - 1 && (
                  <div className="flex h-2">
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-[#21395D]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <CTAButton variant="primary" size="lg" className="group" onClick={() => navigateTo("/tat-ca-san-pham")}>
              Xem tất cả sản phẩm
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Khách hàng nói gì về NAGEN</h2>
            <p className="text-gray-600 text-lg">Hơn 4 triệu người tin dùng trên toàn thế giới</p>
          </div>
          <EnhancedFeedbackSlider />
          <div className="flex justify-center mt-8">
            <CTAButton variant="primary" size="lg" className="group bg-[#21395D] hover:bg-[#1a2d4a] text-white" onClick={() => navigateTo("/feedback")}>
              Xem tất cả
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Dịch vụ chuyên nghiệp</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Dịch vụ tư vấn và kiểm tra vòm bàn chân tại nhà miễn phí toàn quốc</h2>
              <p className="text-[#21395D] text-lg leading-relaxed">
                Đại lý NAGEN đồng hành cùng quý khách mọi nông thôn đến thành phố, tại nhà của bạn. Hãy đặt lịch đăng ký dịch vụ chúng tôi sẽ đến tư vấn tại nơi ở của quý khách
              </p>
              <div className="space-y-4">
                {[
                  "Đo vòm bàn chân miễn phí",
                  "Tư vấn sản phẩm phù hợp",
                  "Dịch vụ tại nhà trong nội thành",
                  "Hỗ trợ sau bán hàng 24/7",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <CTAButton size="lg" onClick={() => setIsAppointmentModalOpen(true)}>
                <Calendar className="w-5 h-5" />
                Hãy đăng ký đặt lịch
              </CTAButton>
            </div>
            <div className="aspect-video bg-black/10 rounded-xl relative overflow-hidden">
              <video
                src={getImagePath("/images/do-vom-ban-chan-tai-nha.mp4")}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Store Locator Section - Now with Google Maps */}
      <section id="dealers" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Hệ thống đại lý NAGEN</h2>
            <p className="text-gray-600 text-lg">Tìm đại lý gần bạn nhất để được tư vấn và trải nghiệm sản phẩm</p>
          </div>

          <DealerLocator onBookAppointment={() => setIsAppointmentModalOpen(true)} />
        </div>
      </section>

      {/* Partner Registration Section - Updated */}
      <section id="partners" className="py-12 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-800 mb-4">Cơ hội kinh doanh</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Đối tác kinh doanh</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Tham gia mạng lưới đại lý NAGEN và cùng chúng tôi mang đến giải pháp chăm sóc bàn chân chất lượng cao cho
              khách hàng trên toàn quốc
            </p>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center">
              <CTAButton size="lg" onClick={() => setIsUnifiedRegistrationOpen(true)} className="w-full max-w-md mb-4">
                <Send className="w-5 h-5" />
                Đăng ký ngay
              </CTAButton>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Hoặc liên hệ trực tiếp:</p>
              <p className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <a
                  href="tel:0966578008"
                  className="hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'tel:0966578008';
                  }}
                >
                  0966578008
                </a>
              </p>
              <p className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <a
                  href="mailto:nagen@nagen.vn"
                  className="hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:nagen@nagen.vn';
                  }}
                >
                  nagen@nagen.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Về chúng tôi</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">NAGEN và sứ mệnh phụng sự khách hàng</h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  NAGEN với sứ mệnh "Nuôi dưỡng từng bước chân" giúp con người trở về sự cân bằng, được nuôi dưỡng, chăm sóc, điều phục mỗi ngày một cách tự nhiên; Chúng tôi mong muốn mang lại sức khỏe, hạnh phúc và niềm vui cho người dân Việt Nam.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  Mang Tấm lót hỗ trợ vòm bàn chân trở thành sự nuôi dưỡng thiết yếu cho mọi người dân Việt Nam; Từ khi bạn lên 6 đến khi bạn già đi, tôi với bạn là hình với bóng. Mọi con thôn đến thành phố, mỗi bước chân bạn đi được nuôi dưỡng bằng tấm lót hỗ trợ vòm bàn chân tốt nhất.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  NAGEN đang hợp tác phân phối sản phẩm đến nhiều bệnh viện và tổ chức y tế; Trung tâm nghiên cứu cân bằng cấu trúc cơ thể Nagen là nơi tiếp nối các công trình nghiên cứu quốc tế, tại Việt Nam, trung tâm ứng dụng giá trị của sản phẩm, nghiên cứu trên sự trải nghiệm của khách hàng về sự cân bằng cấu trúc cơ thể khi sử dụng tấm lót hỗ trợ vòm bàn chân Nagen.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                  NAGEN đang triển khai xây dựng chuỗi cửa hàng trên toàn quốc, cùng Đại lý mang đến cho quý khách dịch vụ đo chân, tư vấn miễn phí tận nhà, trải nghiệm sản phẩm trực tiếp trong môi trường chuyên nghiệp.
                </p>
              </div>
              <CTAButton
                size="lg"
                className="group transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => navigateTo("/gioi-thieu-nagen")}
              >
                Tìm hiểu thêm về NAGEN
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </CTAButton>
            </div>
            <div className="aspect-video bg-black/10 rounded-xl flex items-center justify-center relative overflow-hidden">
              <Image
                src={getImagePath("/images/cham-soc-ban-chan-chuyen-nghiep.png")}
                alt="Dịch vụ chăm sóc bàn chân chuyên nghiệp NAGEN - Tư vấn và đo vòm bàn chân 3D"
                width={600}
                height={400}
                className="object-cover"
                loading="lazy"
                title="NAGEN - Dịch vụ chăm sóc và tư vấn bàn chân chuyên nghiệp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-800 mb-4">Câu hỏi thường gặp</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Câu hỏi thường gặp về tấm lót hỗ trợ vòm bàn chân</h2>
            <p className="text-gray-600 text-lg">Tìm hiểu thêm về sản phẩm và dịch vụ của NAGEN</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {/* FAQ Item 1 - Image Left, Content Right */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={getImagePath("/images/faqs/faq1.png")}
                      alt="Hỗ trợ vòm bàn chân là gì - Giải thích về tấm lót hỗ trợ vòm bàn chân NAGEN"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      title="Tìm hiểu về tấm lót hỗ trợ vòm bàn chân và lợi ích của nó"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">Hỗ trợ vòm bàn chân là gì?</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Đệm lót vòm bàn chân là thiết bị hỗ trợ bàn chân được thiết kế đặc biệt, đeo bên trong giày.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Đệm lót vòm bàn chân của chúng tôi được thiết kế theo cơ chế sinh học để định vị chính xác xương,
                    dây chằng, cơ và gân của bàn chân, đồng thời hỗ trợ toàn bộ bốn vòm bàn chân.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium italic">"Một thiết bị giúp bạn rời khỏi ghế sofa!"</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 - Content Left, Image Right */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 lg:order-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                    Sự khác biệt giữa dụng cụ hỗ trợ vòm và các thiết bị được thiết kế riêng là gì?
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Một thiết bị được thiết kế riêng, mặc dù hữu ích trong một số trường hợp nhất định, nhưng sẽ không
                    giúp bàn chân của bạn chịu được toàn bộ trọng lượng cơ thể trên vòm bàn chân như mong muốn.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Tám mươi phần trăm các vấn đề liên quan đến bàn chân có thể được giải quyết bằng một tấm lót vòm bàn
                    chân đúc sẵn vừa vặn như của chúng tôi. Tấm lót vòm bàn chân của chúng tôi có thể là một giải pháp
                    thay thế tiết kiệm chi phí hơn cho nhiều người.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800 font-medium italic">"Sự cân bằng rất quan trọng ở đây…"</p>
                  </div>
                </div>
                <div className="relative max-w-sm mx-auto lg:order-2">
                  <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={getImagePath("/images/faqs/faq2.png")}
                      alt="Sự khác biệt giữa dụng cụ hỗ trợ vòm và các thiết bị được thiết kế riêng - So sánh sản phẩm NAGEN"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      title="So sánh ưu điểm của tấm lót hỗ trợ vòm bàn chân NAGEN với các sản phẩm khác"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 - Image Left, Content Right */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={getImagePath("/images/faqs/faq3.jpg")}
                      alt="Sản phẩm hỗ trợ vòm chân NAGEN khác biệt như thế nào - Công nghệ độc quyền từ Mỹ"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      title="Khám phá công nghệ độc quyền và sự khác biệt của tấm lót NAGEN"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                    Sản phẩm hỗ trợ vòm chân của bạn khác với sản phẩm của các cửa hàng thuốc như thế nào?
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Đệm lót vòm bàn chân tại các hiệu thuốc hoặc cửa hàng bách hóa thường được thiết kế để vừa với nhiều
                    kích cỡ vòm bàn chân, hoặc tệ hơn, nhiều cỡ giày.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Các kích cỡ của chúng tôi được thiết kế nhỏ hơn một nửa cỡ giày để đảm bảo vừa vặn hoàn hảo và mang
                    lại hiệu suất tối ưu. Bạn sẽ không bao giờ thấy sản phẩm nào của chúng tôi có kích cỡ dành cho "Nam
                    8-10".
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-purple-800 font-medium italic">"Sự cân bằng rất quan trọng ở đây!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AppointmentBookingForm isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
      <UnifiedRegistrationForm isOpen={isUnifiedRegistrationOpen} onClose={() => setIsUnifiedRegistrationOpen(false)} />


      <FloatingActionButtons onScheduleClick={handleScheduleClick} />
    </div>
  )
}

// Main HomePage Component with NoSSRWrapper
const HomePage = () => {
  return (
    <>
      <Head>
        <title>NAGEN</title>
      </Head>
      <NoSSRWrapper>
        <HomePageContent />
      </NoSSRWrapper>
    </>
  );
};

export default HomePage;
