"use client"

import React, { useState } from "react"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Building, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"
import Footer from "@/components/Footer"

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

export default function DangKyPage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Đăng ký - NAGEN",
              "description": "Đăng ký tư vấn miễn phí hoặc trở thành đại lý NAGEN. Nhận hỗ trợ chuyên nghiệp về tấm lót hỗ trợ vòm bàn chân từ các chuyên gia hàng đầu.",
              "url": "https://nagen.vn/dang-ky",
              "mainEntity": {
                "@type": "Service",
                "name": "Dịch vụ đăng ký NAGEN",
                "provider": {
                  "@type": "Organization",
                  "name": "NAGEN"
                }
              }
            },
            {
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
              "image": "https://nagen.vn/images/logo_nagen_chinh_thuc.png",
              "logo": "https://nagen.vn/images/logo_nagen_chinh_thuc.png",
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
                }
              ]
            }
          ])
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
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
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Trang chủ
                </Link>
                <Link href="/tat-ca-san-pham" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Sản phẩm
                </Link>
                <Link href="/lien-he" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Liên hệ
                </Link>
              </nav>
            </div>
          </div>
          {/* Brand Colors Strip */}
          <div className="w-full h-2">
            <div className="bg-red-600 w-full h-1"></div>
            <div className="bg-[#21395D] w-full h-1"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-900 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>/</li>
              <li className="text-blue-900 font-medium">Đăng ký</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Đăng ký với NAGEN
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vui lòng chọn loại tư vấn phù hợp để nhận được hỗ trợ tốt nhất từ đội ngũ chuyên gia NAGEN
            </p>
          </div>

          {/* Registration Options */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Consultation Registration Card */}
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">Tư vấn sản phẩm</CardTitle>
                  <p className="text-gray-600 text-sm">
                    Nhận tư vấn miễn phí từ chuyên gia
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Tư vấn miễn phí 100%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Chuyên gia giàu kinh nghiệm</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Phản hồi trong 24 giờ</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Đo vòm bàn chân tại nhà</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <CTAButton 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => setIsRegistrationModalOpen(true)}
                    >
                      <User className="w-4 h-4" />
                      Tư vấn sản phẩm ngay
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>

              {/* Partner Registration Card */}
              <Card className="border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-red-900">Tư vấn trở thành đại lý</CardTitle>
                  <p className="text-gray-600 text-sm">
                    Tham gia mạng lưới kinh doanh NAGEN
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Cơ hội kinh doanh hấp dẫn</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Hỗ trợ marketing toàn diện</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Đào tạo chuyên nghiệp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Chính sách ưu đãi hấp dẫn</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <CTAButton 
                      variant="primary" 
                      className="w-full"
                      onClick={() => setIsRegistrationModalOpen(true)}
                    >
                      <Building className="w-4 h-4" />
                      Đăng ký đại lý ngay
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose NAGEN Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
                Tại sao chọn NAGEN?
              </h2>
              <p className="text-gray-600">
                Chúng tôi cam kết mang đến dịch vụ và sản phẩm chất lượng cao nhất
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Chất lượng đảm bảo</h3>
                <p className="text-sm text-gray-600">
                  Sản phẩm nhập khẩu từ Mỹ với chứng nhận FDA
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Chuyên gia hàng đầu</h3>
                <p className="text-sm text-gray-600">
                  Đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực chăm sóc bàn chân
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Hệ thống toàn quốc</h3>
                <p className="text-sm text-gray-600">
                  Mạng lưới đại lý rộng khắp từ Bắc đến Nam
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-red-50">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-900">
                  Cần hỗ trợ thêm thông tin?
                </CardTitle>
                <p className="text-gray-600">
                  Liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Hotline</h4>
                      <a href="tel:0966578008" className="text-gray-600 hover:text-blue-900 transition-colors">
                        0966578008
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Email</h4>
                      <a href="mailto:nagen@nagen.vn" className="text-gray-600 hover:text-blue-900 transition-colors">
                        nagen@nagen.vn
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Địa chỉ</h4>
                      <p className="text-gray-600 text-sm">
                        Tầng 7, Tòa VP-1, Sunsquare Complex<br />
                        Số 21 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Unified Registration Modal */}
        <UnifiedRegistrationForm 
          isOpen={isRegistrationModalOpen} 
          onClose={() => setIsRegistrationModalOpen(false)} 
        />
      </div>
    </>
  )
}

