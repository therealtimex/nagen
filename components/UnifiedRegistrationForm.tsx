"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Send, ArrowLeft, User, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"

// Type definitions
interface ConsultationFormData {
  name: string
  phone: string
  email: string
  address: string
  message: string
  contactMethod: string[]
  service: string
}

interface PartnerFormData {
  name: string
  phone: string
  email: string
  address: string
  message: string
  contactMethod: string[]
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
}

type RegistrationType = "consultation" | "partner" | null

interface UnifiedRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
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

export default function UnifiedRegistrationForm({ isOpen, onClose }: UnifiedRegistrationFormProps) {
  const [registrationType, setRegistrationType] = useState<RegistrationType>(null)
  const [consultationFormData, setConsultationFormData] = useState<ConsultationFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    contactMethod: [],
    service: "",
  })
  const [partnerFormData, setPartnerFormData] = useState<PartnerFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    contactMethod: [],
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ctvValue, setCtvValue] = useState("")

  // Get CTV value from URL
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
    const currentFormData = registrationType === "consultation" ? consultationFormData : partnerFormData

    if (!currentFormData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên"
    }

    if (!currentFormData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9+\-\s()]+$/.test(currentFormData.phone)) {
      newErrors.phone = "Số điện thoại chỉ được chứa số và các ký tự +, -, (), khoảng trắng"
    }

    if (registrationType === "partner" && !currentFormData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (currentFormData.email.trim() && !/\S+@\S+\.\S+/.test(currentFormData.email)) {
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
      const currentFormData = registrationType === "consultation" ? consultationFormData : partnerFormData
      const submissionData = {
        ...currentFormData,
        event: registrationType === "consultation" ? "tuvan" : "partner",
        ctv: ctvValue,
        source_url: typeof window !== "undefined" ? window.location.href : "",
      }

      const apiUrl = registrationType === "consultation" 
        ? "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_datlich/input"
        : "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_doitac/input"

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

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
    setConsultationFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
      contactMethod: [],
      service: "",
    })
    setPartnerFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
      contactMethod: [],
    })
    setErrors({})
    setIsSubmitted(false)
    setIsSubmitting(false)
    setRegistrationType(null)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleBackToSelection = () => {
    setRegistrationType(null)
    setErrors({})
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          // Success State
          <div className="p-6 sm:p-8 text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
            <div className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</div>
            {registrationType === "consultation" ? (
              <>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Cảm ơn bạn đã yêu cầu tư vấn sản phẩm với NAGEN. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
                </p>
                {consultationFormData.email && (
                  <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-green-500 mb-6">
                    <p className="text-sm text-gray-700">
                      📧 Email xác nhận đã được gửi đến: <strong className="break-all">{consultationFormData.email}</strong>
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Chúng tôi đã nhận được yêu cầu tư vấn đối tác của bạn.</p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">Đội ngũ NAGEN sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn chi tiết.</p>
              </>
            )}
            <CTAButton onClick={handleClose} className="w-full sm:w-auto">Đóng</CTAButton>
          </div>
        ) : registrationType === null ? (
          // Registration Type Selection
          <>
            <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white p-4 sm:p-6 rounded-t-lg">
              <div className="mb-4">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="NAGEN Logo"
                  width={120}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-lg sm:text-xl font-bold">Tư vấn</div>
                  <p className="text-white/90 mt-1 text-sm sm:text-base">Vui lòng chọn một trong hai lựa chọn dưới đây</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-white hover:bg-white/20 flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <span className="text-xl">×</span>
                </Button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">Bạn cần tư vấn gì?</h3>
                <p className="text-gray-600">Vui lòng chọn một trong hai lựa chọn dưới đây</p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {/* Consultation Registration Option */}
                <button
                  onClick={() => setRegistrationType("consultation")}
                  className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-blue-900 mb-2">Tư vấn sản phẩm</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Nhận tư vấn miễn phí từ chuyên gia NAGEN về sản phẩm tấm lót hỗ trợ vòm bàn chân phù hợp với bạn.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Miễn phí</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Tư vấn chuyên nghiệp</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Phản hồi 24h</span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Partner Registration Option */}
                <button
                  onClick={() => setRegistrationType("partner")}
                  className="group p-6 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <Building className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-red-900 mb-2">Tư vấn trở thành đại lý</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Tham gia mạng lưới đại lý NAGEN và cùng chúng tôi phát triển kinh doanh trên toàn quốc.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Cơ hội kinh doanh</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Hỗ trợ toàn diện</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Đào tạo miễn phí</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Bạn có thể thay đổi lựa chọn bất cứ lúc nào trong quá trình tư vấn
                </p>
              </div>
            </div>
          </>
        ) : (
          // Form Display
          <>
            <div className={`${registrationType === "consultation" ? "bg-blue-600" : "bg-red-600"} text-white p-4 sm:p-6 rounded-t-lg`}>
              <div className="mb-4">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="NAGEN Logo"
                  width={120}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleBackToSelection}
                      className="text-white hover:bg-white/20 h-8 w-8"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div>
                      <div className="text-lg sm:text-xl font-bold">
                        {registrationType === "consultation" ? "Tư vấn sản phẩm miễn phí" : "Tư vấn trở thành đối tác"}
                      </div>
                      <p className={`${registrationType === "consultation" ? "text-blue-100" : "text-red-100"} mt-1 text-sm sm:text-base`}>
                        {registrationType === "consultation" 
                          ? "Vui lòng điền thông tin để nhận tư vấn miễn phí từ chuyên gia NAGEN"
                          : "Tham gia mạng lưới đại lý NAGEN"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-white hover:bg-white/20 flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                >
                  <span className="text-xl">×</span>
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {registrationType === "consultation" ? (
                // Consultation Form Fields
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Nhập họ và tên"
                        value={consultationFormData.name}
                        onChange={(e) => setConsultationFormData({ ...consultationFormData, name: e.target.value })}
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
                        value={consultationFormData.phone}
                        onChange={(e) => setConsultationFormData({ ...consultationFormData, phone: e.target.value })}
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
                      value={consultationFormData.email}
                      onChange={(e) => setConsultationFormData({ ...consultationFormData, email: e.target.value })}
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
                      value={consultationFormData.address}
                      onChange={(e) => setConsultationFormData({ ...consultationFormData, address: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-800 flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí và đặt lịch hẹn phù hợp.</span>
                    </p>
                  </div>
                </>
              ) : (
                // Partner Form Fields
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Nhập họ và tên"
                        value={partnerFormData.name}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
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
                        value={partnerFormData.phone}
                        onChange={(e) => setPartnerFormData({ ...partnerFormData, phone: e.target.value })}
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
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      inputMode="email"
                      placeholder="Nhập địa chỉ email"
                      value={partnerFormData.email}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, email: e.target.value })}
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
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Địa chỉ <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Nhập địa chỉ kinh doanh dự kiến"
                      value={partnerFormData.address}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, address: e.target.value })}
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Tin nhắn</label>
                    <Textarea
                      placeholder="Chia sẻ về kế hoạch kinh doanh và lý do muốn trở thành đối tác NAGEN"
                      rows={4}
                      value={partnerFormData.message}
                      onChange={(e) => setPartnerFormData({ ...partnerFormData, message: e.target.value })}
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
                          checked={partnerFormData.contactMethod.includes("email")}
                          onChange={(e) => {
                            const value = e.target.value
                            const isChecked = e.target.checked
                            setPartnerFormData((prev) => ({
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
                          checked={partnerFormData.contactMethod.includes("phone")}
                          onChange={(e) => {
                            const value = e.target.value
                            const isChecked = e.target.checked
                            setPartnerFormData((prev) => ({
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
                      Bằng việc gửi thông tin, bạn đồng ý với{" "}
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
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBackToSelection}
                  className="flex-1 bg-transparent h-12 text-base font-medium order-2 sm:order-1"
                  disabled={isSubmitting}
                >
                  Quay lại
                </Button>
                <CTAButton
                  type="submit"
                  className="flex-1 h-12 text-base font-semibold order-1 sm:order-2"
                  disabled={isSubmitting}
                  variant={registrationType === "consultation" ? "secondary" : "primary"}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
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