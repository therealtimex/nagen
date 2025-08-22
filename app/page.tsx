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
import MainLayout from "@/components/MainLayout";

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

  return (
    <>
      {/* Optimized Hero Section */}
      <section
        id="home"
        className="relative bg-[#21395D] text-white py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                ✨ Thương hiệu uy tín #1 Việt Nam
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Chăm sóc bàn chân
                <span className="text-red-300 block">chuyên nghiệp</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Sản phẩm tấm lót hỗ trợ vòm bàn chân chất lượng cao, được nghiên cứu và phát triển bởi các chuyên gia
                hàng đầu.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Chứng nhận y tế</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Bảo hành 12 tháng</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Giao hàng 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Tư vấn miễn phí</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200">10,000+ khách hàng tin tưởng</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-blue-200">4.9/5 đánh giá</span>
                </div>
              </div>

              {/*
              <CTAButton size="lg" onClick={handleHeroCTA}>
                <Calendar className="w-5 h-5" />
                Đặt lịch tư vấn miễn phí
              </CTAButton>
              */}
            </div>

            <div className="relative">
              <div
                className="aspect-video bg-black/20 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300 group"
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

      {/* New Section: Product Image and Research */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src={getImagePath("/images/20200624_161136PS.webp")}
              alt="Product Image"
              width={800}
              height={600}
              className="mx-auto rounded-xl shadow-lg"
              priority
            />
            <p className="text-gray-600 text-lg mt-8">
              That design supports all four arches of the foot and helps control arch action. Every design element
              supports the objective of guiding the foot into a more biomechanically efficient posture for maximum
              performance and efficiency.
              <br /><br />
              A properly functioning arch improves balance, distributes pressure correctly over the sole of the foot and
              allows the muscles, ligaments and tendons used during the gait cycle to work more efficiently.
              <br /><br />
              With a family of products like this, you can be sure that we have one that will fit you and your lifestyle
              perfectly.
            </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {productData.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                {product.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white">Bán chạy nhất</Badge>
                )}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={getImagePath(product.image)}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  <CTAButton variant="secondary" className="w-full group" onClick={() => setSelectedProduct(product)}>
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </CTAButton>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Khám phá toàn bộ sản phẩm NAGEN</h3>
              <p className="text-gray-600">Tìm hiểu thêm về các dòng sản phẩm chăm sóc bàn chân chuyên nghiệp</p>
            </div>
            <div className="flex justify-center">
              <CTAButton
                variant="primary"
                size="lg"
                className="w-full max-w-md group transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => navigateTo("/tat-ca-san-pham")}
              >
                Xem tất cả sản phẩm
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </div>
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
              <p className="text-gray-600 text-lg leading-relaxed">
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

          {/* 4-block grid layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top Left: Lợi ích đối tác */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-900 flex items-center text-lg">
                  <Award className="w-5 h-5 mr-2 text-red-600" />
                  Lợi ích đối tác
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    icon: Target,
                    title: "Thị trường tiềm năng lớn",
                    desc: "Ngành chăm sóc sức khỏe đang phát triển mạnh mẽ",
                  },
                  {
                    icon: Shield,
                    title: "Sản phẩm chất lượng cao",
                    desc: "Được chứng nhận y tế, tin cậy từ hàng nghìn khách hàng",
                  },
                  {
                    icon: Users,
                    title: "Hỗ trợ toàn diện",
                    desc: "Đào tạo chuyên nghiệp, marketing và hỗ trợ kinh doanh",
                  },
                  {
                    icon: Zap,
                    title: "Lợi nhuận hấp dẫn",
                    desc: "Chính sách chiết khấu cạnh tranh và thưởng doanh số",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1 text-sm">{benefit.title}</h4>
                      <p className="text-gray-600 text-xs">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Right: Yêu cầu đối tác */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-900 flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Yêu cầu đối tác
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Có kinh nghiệm kinh doanh",
                    "Vị trí kinh doanh thuận lợi",
                    "Cam kết dài hạn",
                    "Đầu tư ban đầu từ 50 triệu",
                    "Đội ngũ nhân viên tận tâm",
                    "Tuân thủ tiêu chuẩn NAGEN",
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bottom Left: Quy trình */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-900 text-lg">Quy trình trở thành đối tác</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Đăng ký thông tin và gửi hồ sơ",
                    "Tư vấn và đánh giá năng lực",
                    "Ký kết hợp đồng đối tác",
                    "Đào tạo và hỗ trợ khởi nghiệp",
                    "Chính thức hoạt động kinh doanh",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bottom Right: Đăng ký */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-900 text-lg">Đăng ký đối tác</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-sm">
                  Tham gia cùng NAGEN để xây dựng một tương lai thành công trong ngành chăm sóc sức khỏe bàn chân.
                </p>
                <CTAButton size="lg" onClick={() => setIsPartnerModalOpen(true)} className="w-full mb-4">
                  <Send className="w-5 h-5" />
                  Đăng ký ngay
                </CTAButton>
                <div className="text-xs text-gray-500 space-y-1">
                  <p className="flex items-center justify-center">
                    <Phone className="w-3 h-3 mr-1 text-blue-600" />
                    024 35632008
                  </p>
                  <p className="flex items-center justify-center">
                    <Mail className="w-3 h-3 mr-1 text-blue-600" />
                    nagen@nagen.vn
                  </p>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-gray-600 text-lg leading-relaxed">
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
    </>
  )
}

// Main HomePage Component with NoSSRWrapper
const HomePage = () => (
  <MainLayout>
    <Head>
      <title>NAGEN</title>
    </Head>
    <NoSSRWrapper>
      <HomePageContent />
    </NoSSRWrapper>
  </MainLayout>
)

export default HomePage
