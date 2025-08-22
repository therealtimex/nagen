"use client"

import Head from 'next/head';
import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Shield,
  Truck,
  Award,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Users,
  Target,
  Send,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import DealerLocator from "@/components/DealerLocator"
import NoSSRWrapper from "@/components/NoSSRWrapper"
import { getImagePath, navigateTo } from "@/lib/utils"
import ProductDetailModal from "@/components/ProductDetailModal";
import { Product, productData } from "@/lib/products"

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
        { name: "Sungen™", href: "#sungen" },
        { name: "Winagen™", href: "#winagen" },
        { name: "Softgen™", href: "#softgen" },
        { name: "Endurance™", href: "#endurance" },
        { name: "Silhouette™", href: "#silhouette" },
        { name: "Đệm lót cao su tự nhiên", href: "#demlotcaosu" },

      ],
    },
    { name: "Dịch vụ", href: "#services" },
    { name: "Đại lý", href: "#dealers" },
    { name: "Đối tác", href: "#partners" },
    { name: "Giới thiệu", href: "#about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Liên hệ", href: "#contact" },
  ]

  const handleNavigation = (href: string) => {
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
      <!-- Contact Info Bar -->
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

      <!-- Main Navigation -->
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        } border-b border-gray-200 relative`}>
      <div className="absolute bottom-0 left-0 w-full h-[8px] flex">
        <div className="bg-red-600 w-full !h-[8px] md:!h-[12px]"></div>
      </div>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={getImagePath("/images/logo_ngang.png")}
                alt="Nagen Logo"
                width={200}
                height={40}
                priority
              />
            </Link>

            <!-- Desktop Navigation -->
            <nav className="hidden lg:flex items-center space-x-8">
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

                  <!-- Submenu -->
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

            <!-- Mobile Navigation -->
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
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
        <div className="absolute bottom-0 left-0 w-full h-[8px] flex">
          <div className="bg-red-600 w-full !h-[8px] md:!h-[12px]"></div>
        </div>
      </header>
    </>
  );
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
      else if (!/\S+@\S+\.\S+/).test(formData.email)) newErrors.email = "Email không hợp lệ"
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
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentStep >= step.number ? "bg-red-600 text-white" : "bg-gray-200 text-gray-600"
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
                    value
