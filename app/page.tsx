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
import ProductDetailModal from "@/components/ProductDetailModal"
import { type Product, productData } from "@/lib/products"
import FloatingActionButtons from "@/components/FloatingActionButtons"

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
  message?: string
  service?: string
}

interface PartnerFormData {
  name: string
  phone: string
  email: string
  address: string
  experience: string
  investment: string
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuItems = [
    {
      name: "Sản phẩm",
      href: "#products",
      submenu: [
        { name: "Tấm lót hỗ trợ vòm bàn chân Sungen™", href: "#sungen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Winagen™", href: "#winagen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Softgen™", href: "#softgen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Endurance™", href: "#endurance" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette™", href: "#silhouette" },
        { name: "Đệm lót giày cao su xốp thiên nhiên", href: "#demlotcaosu" },
      ],
    },
    { name: "Dịch vụ", href: "#services" },
    { name: "Đối tác", href: "#partners" },
    { name: "Giới thiệu", href: "#about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Liên hệ", href: "#contact" },
  ]

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
              024 35632008
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
        className={`sticky top-0 z-[1001] transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        } border-b border-gray-200 relative`}
      >
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={getImagePath("/images/logo_ngang.png")}
                  alt="Nagen Logo"
                  width={200}
                  height={40}
                  priority
                />
              </Link>
              <p className="text-center text-red-600 font-medium text-sm mt-1">NUÔI DƯỠNG BƯỚC CHÂN</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
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
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-6 mt-8">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavigation(item.href)
                        }}
                      >
                        {item.name}
                      </a>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-blue-900"
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
                  ))}
                </nav>
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
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Khách hàng nói gì về NAGEN?</h3>
        <p className="text-gray-600">Hơn 10,000+ khách hàng tin tưởng</p>
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
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    loading="lazy"
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-600 w-8" : "bg-gray-300 hover:bg-gray-400"
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
  const [isExpanded, setIsExpanded] = useState(false)

  const shortText = `Tấm lót hỗ trợ vòm bàn chân Sungen, Winagen, Softgen, Endurance, Silhouette, Đệm lót cao su xốp tự nhiên do Bio Orthotics International sản xuất là những những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay. Khởi đầu cho những dòng sản phẩm tuyệt vời này đến từ thiết kế của Georg Alzner, một bác sĩ vật lý trị liệu được đào tạo tại Tây Đức và có bằng về thiết kế giày chỉnh hình. Trong hơn 20 năm làm việc với những người bị tật bệnh, ông đã đi đến kết luận rằng hầu hết các cơn đau và sự khó chịu mà khách hàng của ông trải qua đều là do các vấn đề liên quan đến bàn chân của họ. Tuy nhiên, ông thường thấy rằng những đôi giày tùy chỉnh của mình không giúp ích cho tất cả mọi người, vì vậy ông bắt đầu nghiên cứu sản phẩm tấm lót hỗ trợ vòm bàn chân có thể sử dụng trong nhiều loại giày khác nhau.`

  const fullText = `${shortText}

  Khi di cư đến Canada, ông tin rằng cuối cùng ông đã thiết kế được một sản phẩm hỗ trợ vòm bàn chân có khả năng hỗ trợ tối ưu mà bấy lâu nay mình mong muốn. Thiết kế mới của ông hỗ trợ cả bốn vòm bàn chân và bao gồm các kênh luồng khí cung cấp khả năng thông gió cho bề mặt gan bàn chân, giúp tăng đáng kể sự thoải mái cho người sử dụng. Sau khi thử nghiệm và loại bỏ hàng tá các loại vật liệu trước đó, ông đã tìm kiếm được vật liệu mà ông quyết định sử dụng, cho phép phần hỗ trợ uốn cong, từ đó cho phép vòm di chuyển như bình thường với mỗi bước đi. Sự kết hợp này khuyến khích chức năng bàn chân hoạt động chính xác khi đi đứng và trong suốt chu kỳ đi lại.
  
  Năm 1969, văn phòng cấp bằng sáng chế Canada đã đồng ý rằng sản phẩm của ông thực sự độc đáo và cấp cho ông bằng sáng chế cho các phần hỗ trợ vòm bàn chân. Tiếp sau đó, văn phòng cấp bằng sáng chế Hoa Kỳ cũng đã công nhận sáng chế này vào năm 1970. Trải qua hơn 50 năm, thiết kế của Alzner đã chứng minh được tính hiệu quả trong các nghiên cứu khoa học cũng như trong quá trình sử dụng của hơn 4 triệu người dùng trên toàn thế giới.`

  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-lg text-[#21395D] leading-relaxed text-justify whitespace-pre-line">
        {isExpanded ? fullText : shortText}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium"
      >
        {isExpanded ? (
          <>
            Thu gọn
            <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
          </>
        ) : (
          <>
            Xem thêm
            <ChevronDown className="w-4 h-4 transition-transform" />
          </>
        )}
      </button>
    </div>
  )
}

// Enhanced Multi-step Form with Validation
function EnhancedContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
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

  const steps = [
    { number: 1, title: "Thông tin cơ bản", icon: Users },
    { number: 2, title: "Chi tiết yêu cầu", icon: MessageCircle },
    { number: 3, title: "Xác nhận", icon: CheckCircle },
  ]

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

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên"
      if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại"
      if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email không hợp lệ"
    }

    if (step === 2) {
      if (!formData.message.trim()) newErrors.message = "Vui lòng nhập tin nhắn"
      if (!formData.service) newErrors.service = "Vui lòng chọn dịch vụ"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Gửi thành công!</h3>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã liên hệ với NAGEN. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
          </p>
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-sm text-gray-700">
              📧 Email xác nhận đã được gửi đến: <strong>{formData.email}</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-blue-900 text-xl">Đăng ký tư vấn miễn phí</CardTitle>
        <div className="flex items-center justify-between mt-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep >= step.number ? "bg-red-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{step.title}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden sm:block w-16 h-0.5 bg-gray-300 mx-4"></div>}
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Nhập họ và tên"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-red-500" : ""}
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
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={errors.phone ? "border-red-500" : ""}
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
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="Nhập địa chỉ email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
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
                placeholder="Nhập địa chỉ (tùy chọn)"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Dịch vụ quan tâm <span className="text-red-500">*</span>
              </label>
              <select
                className={`w-full p-3 border rounded-lg ${errors.service ? "border-red-500" : "border-gray-300"}`}
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">Chọn dịch vụ</option>
                <option value="consultation">Tư vấn sản phẩm</option>
                <option value="measurement">Đo vòm bàn chân</option>
                <option value="home-service">Dịch vụ tại nhà</option>
                <option value="product-info">Thông tin sản phẩm</option>
              </select>
              {errors.service && (
                <p id="service-error" className="text-red-500 text-sm mt-1">
                  {errors.service}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Tin nhắn <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Mô tả chi tiết tình trạng bàn chân và nhu cầu của bạn"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={errors.message ? "border-red-500" : ""}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Cách thức liên lạc ưu tiên</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded"
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
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded"
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
                  <span className="text-sm">Điện thoại</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded"
                    value="zalo"
                    checked={formData.contactMethod.includes("zalo")}
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
                  <span className="text-sm">Zalo</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Xác nhận thông tin</h3>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Họ tên:</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Điện thoại:</p>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dịch vụ:</p>
                  <p className="font-medium">{formData.service}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tin nhắn:</p>
                <p className="font-medium">{formData.message}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Cách liên lạc ưu tiên:</p>
                <p className="font-medium">{formData.contactMethod.join(", ")}</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-800">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí và đặt lịch hẹn phù hợp.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6 border-t">
          {currentStep > 1 && (
            <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Quay lại
            </Button>
          )}
          <div className="ml-auto">
            {currentStep < 3 ? (
              <CTAButton onClick={nextStep}>
                Tiếp tục
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            ) : (
              <CTAButton onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
                {!isSubmitting && <CheckCircle className="w-4 h-4" />}
              </CTAButton>
            )}
          </div>
        </div>
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
    experience: "",
    investment: "",
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
      experience: "",
      investment: "",
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</h3>
            <p className="text-gray-600 mb-4">Chúng tôi đã nhận được đăng ký đối tác của bạn.</p>
            <p className="text-gray-600 mb-6">Đội ngũ NAGEN sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn chi tiết.</p>
            <CTAButton onClick={handleClose}>Đóng</CTAButton>
          </div>
        ) : (
          <>
            <div className="bg-red-600 text-white p-6 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Đăng ký làm đối tác</h3>
                  <p className="text-red-100 mt-1">Tham gia mạng lưới đại lý NAGEN</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-red-700">
                  ×
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
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

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Địa chỉ <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Nhập địa chỉ kinh doanh dự kiến"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Kinh nghiệm kinh doanh</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="">Chọn mức độ kinh nghiệm</option>
                  <option value="new">Mới bắt đầu</option>
                  <option value="1-3">1-3 năm</option>
                  <option value="3-5">3-5 năm</option>
                  <option value="5+">Trên 5 năm</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Vốn đầu tư dự kiến</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.investment}
                  onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                >
                  <option value="">Chọn mức vốn đầu tư</option>
                  <option value="50-100">50-100 triệu</option>
                  <option value="100-200">100-200 triệu</option>
                  <option value="200-500">200-500 triệu</option>
                  <option value="500+">Trên 500 triệu</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tin nhắn</label>
                <Textarea
                  placeholder="Chia sẻ về kế hoạch kinh doanh và lý do muốn trở thành đối tác NAGEN"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">Cách thức liên lạc ưu tiên</label>
                <div className="flex gap-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
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
                    <span className="text-sm text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
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
                    <span className="text-sm text-gray-700">Điện thoại</span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 mb-4">
                  Bằng việc gửi đăng ký, bạn đồng ý với{" "}
                  <Link href="/terms-of-use" className="text-blue-600 hover:underline">
                    điều khoản sử dụng
                  </Link>{" "}
                  và{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    chính sách bảo mật
                  </Link>{" "}
                  của NAGEN.
                </p>
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
                  {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</h3>
            <p className="text-gray-600 mb-4">Bạn hãy chuẩn bị trải nghiệm một khía cạnh mới của dịch vụ khách hàng.</p>
            <p className="text-gray-600 mb-6">Chúng tôi ở đây để giúp đỡ và mong nhận được phản hồi từ bạn.</p>
            <CTAButton onClick={handleClose}>Đóng</CTAButton>
          </div>
        ) : (
          <>
            <div className="bg-red-600 text-white p-6 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Đặt lịch đo chân</h3>
                  <p className="text-red-100 mt-1">Đo vòm bàn chân chuyên nghiệp tại nhà</p>
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleHeroCTA = () => {
    setIsAppointmentModalOpen(true)
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleScheduleClick = () => {
    setIsAppointmentModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <section id="home" className="relative bg-[#FFFFFF] text-[#21395D] py-10 lg:py-18 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <HeroContent />

            {/* Video Section */}
            <div className="mt-12">
              <div
                className="aspect-video bg-black/20 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300 group max-w-2xl mx-auto"
                onClick={handlePlayVideo}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-white/90 font-medium">Video giới thiệu NAGEN</p>
                  <p className="text-white/70 text-sm mt-1">2 phút • Xem ngay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Image and Research Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Product Image - Top */}
            <div className="text-center mb-12">
              <Image
                src={getImagePath("/images/20200624_161136PS.webp")}
                alt="Product Image"
                width={1200}
                height={400}
                className="w-full rounded-xl shadow-lg"
                priority
              />
            </div>

            {/* Text and CTA - Bottom */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Text Content - Left (2/3 width) */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[#21395D] text-lg leading-relaxed">
                  That design supports all four arches of the foot and helps control arch action. Every design element
                  supports the objective of guiding the foot into a more biomechanically efficient posture for maximum
                  performance and efficiency.
                </p>
                <p className="text-[#21395D] text-lg leading-relaxed">
                  A properly functioning arch improves balance, distributes pressure correctly over the sole of the foot
                  and allows the muscles, ligaments and tendons used during the gait cycle to work more efficiently.
                </p>
                <p className="text-[#21395D] text-lg leading-relaxed">
                  With a family of products like this, you can be sure that we have one that will fit you and your
                  lifestyle perfectly.
                </p>
              </div>

              {/* CTA Button - Right (1/3 width) */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end items-start">
                <CTAButton
                  variant="primary"
                  size="lg"
                  onClick={() => navigateTo("/studies")}
                  className="bg-[#21395D] hover:bg-[#1a2d4a] text-center px-6 py-4"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600 text-lg">Khám phá dòng sản phẩm chất lượng cao của NAGEN</p>
          </div>

          <div className="space-y-8 mb-12">
            {productData.slice(0, 3).map((product, index) => (
              <div key={product.id}>
                {/* Product Item */}
                <div className="grid md:grid-cols-2 gap-8 items-center py-8">
                  {/* Product Image */}
                  <div className="order-2 md:order-1">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                      <Image
                        src={getImagePath(product.image)}
                        alt={product.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="order-1 md:order-2 space-y-4">
                    <h3 className="text-2xl font-bold text-blue-900">{product.name}</h3>
                    <p className="text-[#21395D] text-lg leading-relaxed">{product.description}</p>
                    <CTAButton variant="secondary" className="group" onClick={() => setSelectedProduct(product)}>
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </CTAButton>
                  </div>
                </div>

                {/* Brand Color Separator Line - except for last item */}
                {index < productData.slice(0, 3).length - 1 && (
                  <div className="flex h-2">
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-[#21395D]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
          <EnhancedFeedbackSlider />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Dịch vụ chuyên nghiệp</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Đo vòm bàn chân miễn phí tại nhà</h2>
              <p className="text-[#21395D] text-lg leading-relaxed">
                Chúng tôi cung cấp dịch vụ đo vòm bàn chân chuyên nghiệp với công nghệ hiện đại, giúp bạn tìm được sản
                phẩm phù hợp nhất.
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
                Đặt lịch đo chân
              </CTAButton>
            </div>
            <div className="aspect-video bg-black/10 rounded-xl relative overflow-hidden">
              <video
                src="/images/do-vom-ban-chan-tai-nha.mp4"
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

          <DealerLocator />
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
              <CTAButton size="lg" onClick={() => setIsPartnerModalOpen(true)} className="w-full max-w-md mb-4">
                <Send className="w-5 h-5" />
                Đăng ký ngay
              </CTAButton>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Hoặc liên hệ trực tiếp:</p>
              <p className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <a href="tel:02435632008" className="hover:underline">
                  024 35632008
                </a>
              </p>
              <p className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <a href="mailto:nagen@nagen.vn" className="hover:underline">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">NAGEN - Chăm sóc bàn chân chuyên nghiệp</h2>
              <p className="text-[#21395D] text-lg leading-relaxed">
                Với sứ mệnh mang đến sức khỏe và sự thoải mái cho đôi chân của bạn, NAGEN không ngừng nghiên cứu và phát
                triển các sản phẩm chất lượng cao, được chứng nhận bởi các chuyên gia hàng đầu.
              </p>
              <div className="space-y-4">
                {[
                  "Sản phẩm chất lượng cao",
                  "Đội ngũ chuyên gia giàu kinh nghiệm",
                  "Dịch vụ tận tâm, chu đáo",
                  "Giá cả hợp lý",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
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
                alt="About NAGEN"
                width={600}
                height={400}
                className="object-cover"
                loading="lazy"
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
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {/* FAQ Item 1 - Image Left, Content Right */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative max-w-sm mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/faqs/faq1.png"
                      alt="Hỗ trợ vòm bàn chân là gì"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
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
                      src="/images/faqs/faq2.png"
                      alt="Sự khác biệt giữa dụng cụ hỗ trợ vòm và các thiết bị được thiết kế riêng"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
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
                      src="/images/faqs/faq3.jpg"
                      alt="Sản phẩm hỗ trợ vòm chân khác biệt như thế nào"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
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

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Liên hệ với chúng tôi</h2>
              <p className="text-gray-600 text-lg mb-8">
                Đội ngũ chuyên gia NAGEN luôn sẵn sàng tư vấn và hỗ trợ bạn tìm được giải pháp phù hợp nhất.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Hotline 24/7</h4>
                    <p className="text-gray-600">024 35632008</p>
                    <p className="text-sm text-gray-500">Miễn phí cuộc gọi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Email hỗ trợ</h4>
                    <p className="text-gray-600">nagen@nagen.vn</p>
                    <p className="text-sm text-gray-500">Phản hồi trong 2h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Trụ sở chính</h4>
                    <p className="text-gray-600">
                      Tầng 7, Tòa VP-1, Suntquare Building
                      <br />
                      Số 21 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <EnhancedContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Horizontal Lines */}
      <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
      <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
      <footer className="bg-white text-[#21395D] py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src={getImagePath("/images/logo_ngang.png")}
                alt="NAGEN Logo"
                width={250}
                height={50}
                className="mb-4"
                priority
              />
              <p className="text-[#21395D] mb-6">
                Đối tác tin cậy trong việc chăm sóc sức khỏe bàn chân của bạn. Chất lượng - Uy tín - Chuyên nghiệp.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/NAGEN/61576197860425/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@nagenvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@nagenvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M9 4.58A4.56 4.56 0 0 0 6.43 7.13 4.56 4.56 0 0 0 4 9.71a4.56 4.56 0 0 0 2.43 2.55 4.56 4.56 0 0 0 2.57 1.21v-4.58a4.58 4.58 0 0 1 4.58-4.58h2.29V15a2.29 2.29 0 0 1-2.29 2.29H9v-4.58a2.29 2.29 0 0 0-2.29-2.29h-2.29v-2.29h2.29A2.29 2.29 0 0 1 9 4.58z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-red-600">Sản phẩm</h3>
              <ul className="space-y-2 text-[#21395D]">
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=sungen")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Sungen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=winagen")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Winagen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=softgen")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Softgen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=endurance")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Endurance™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=silhouette")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Silhouette™
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-red-600">Hỗ trợ</h3>
              <ul className="space-y-2 text-[#21395D]">
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/huong-dan-su-dung")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/chinh-sach-bao-hanh")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách bảo hành
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-red-600">Pháp lý</h3>
              <ul className="space-y-2 text-[#21395D]">
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/privacy-policy")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/terms-of-use")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/chinh-sach-doi-tra")}
                    className="hover:text-red-600 transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/chinh-sach-van-chuyen")}
                    className="hover:text-red-600 transition--colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AppointmentBookingForm isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
      <PartnerRegistrationForm isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <FloatingActionButtons onScheduleClick={handleScheduleClick} />
    </div>
  )
}

// Main HomePage Component with NoSSRWrapper
const HomePage = () => (
  <>
    <Head>
      <title>NAGEN</title>
    </Head>
    <NoSSRWrapper>
      <HomePageContent />
    </NoSSRWrapper>
  </>
)

export default HomePage
