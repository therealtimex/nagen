"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"

// Type definitions
interface FormData {
  consultationType: string
  name: string
  phone: string
  email: string
  address: string
}

interface FormErrors {
  consultationType?: string
  name?: string
  phone?: string
  email?: string
}

interface UnifiedRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  defaultType?: "product" | "dealer" | "appointment"
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

export default function UnifiedRegistrationForm({ isOpen, onClose, defaultType }: UnifiedRegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    consultationType: defaultType || "",
    name: "",
    phone: "",
    email: "",
    address: "",
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

    if (!formData.consultationType.trim()) {
      newErrors.consultationType = "Vui lòng chọn nội dung cần tư vấn"
    }

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
      let eventType = "tuvan"
      let apiUrl = "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_datlich/input"
      
      if (formData.consultationType === "dealer") {
        eventType = "partner"
        apiUrl = "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_doitac/input"
      } else if (formData.consultationType === "appointment") {
        eventType = "datlich_docha"
        apiUrl = "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_datlich/input"
      }

      const submissionData = {
        ...formData,
        event: eventType,
        ctv: ctvValue,
        source_url: typeof window !== "undefined" ? window.location.href : "",
      }

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
    setFormData({
      consultationType: defaultType || "",
      name: "",
      phone: "",
      email: "",
      address: "",
    })
    setErrors({})
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
          // Success State
          <div className="p-6 sm:p-8 text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
            <div className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</div>
            {formData.consultationType === "product" ? (
              <>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Cảm ơn bạn đã yêu cầu tư vấn sản phẩm với NAGEN. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
                </p>
                {formData.email && (
                  <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-green-500 mb-6">
                    <p className="text-sm text-gray-700">
                      📧 Email xác nhận đã được gửi đến: <strong className="break-all">{formData.email}</strong>
                    </p>
                  </div>
                )}
              </>
            ) : formData.consultationType === "appointment" ? (
              <>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Cảm ơn bạn đã đặt lịch đo chân với NAGEN.</p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận lịch hẹn và địa điểm đo chân.</p>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Chúng tôi đã nhận được yêu cầu tư vấn đại lý của bạn.</p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">Đội ngũ NAGEN sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn chi tiết.</p>
              </>
            )}
            <CTAButton onClick={handleClose} className="w-full sm:w-auto">Đóng</CTAButton>
          </div>
        ) : (
          // Form Display
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
                  <p className="text-white/90 mt-1 text-sm sm:text-base">Vui lòng điền thông tin để nhận tư vấn từ chuyên gia NAGEN</p>
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
              {/* Consultation Type Selection */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Nội dung cần tư vấn <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
                    <input
                      type="radio"
                      name="consultationType"
                      value="product"
                      checked={formData.consultationType === "product"}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Tư vấn sản phẩm</div>
                      <div className="text-sm text-gray-600">Nhận tư vấn miễn phí về sản phẩm phù hợp với bạn</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all duration-200">
                    <input
                      type="radio"
                      name="consultationType"
                      value="dealer"
                      checked={formData.consultationType === "dealer"}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-4 h-4 text-red-600 focus:ring-red-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Tư vấn trở thành đại lý</div>
                      <div className="text-sm text-gray-600">Tham gia mạng lưới đại lý NAGEN trên toàn quốc</div>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200">
                    <input
                      type="radio"
                      name="consultationType"
                      value="appointment"
                      checked={formData.consultationType === "appointment"}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-4 h-4 text-green-600 focus:ring-green-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Đặt lịch đo chân</div>
                      <div className="text-sm text-gray-600">Đặt lịch hẹn để được đo chân và tư vấn trực tiếp</div>
                    </div>
                  </label>
                </div>
                {errors.consultationType && (
                  <p id="consultation-type-error" className="text-red-500 text-sm mt-2">
                    {errors.consultationType}
                  </p>
                )}
              </div>

              {/* Name and Phone */}
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

              {/* Email */}
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

              {/* Address */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Địa chỉ</label>
                <Input
                  placeholder="Nhập địa chỉ (không bắt buộc)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="h-12 text-base"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800 flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí và đặt lịch hẹn phù hợp.</span>
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6 border-t">
                <CTAButton
                  type="submit"
                  className="w-full h-12 text-base font-semibold"
                  disabled={isSubmitting}
                  variant="secondary"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi thông tin tư vấn"}
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