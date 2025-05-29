"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  Truck,
  Heart,
  Star,
  CheckCircle,
  Globe,
  Factory,
  Microscope,
  Shield,
  Target,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutNAGENPage() {
  const [activeSection, setActiveSection] = useState("")

  // Smooth scrolling effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["history", "origin", "introduction", "delivery"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-3xl font-bold">
                <span className="text-blue-900">NA</span>
                <span className="text-red-600">GE</span>
                <span className="text-blue-900">N</span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-blue-50 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại trang chủ</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-6">✨ Câu chuyện NAGEN</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Hành trình chăm sóc
              <span className="text-red-300 block">bàn chân Việt Nam</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Từ những nghiên cứu khoa học đầu tiên đến việc trở thành thương hiệu uy tín hàng đầu trong lĩnh vực chăm
              sóc bàn chân tại Việt Nam
            </p>

            {/* Navigation Menu */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { id: "history", label: "Lịch sử phát triển", icon: Calendar },
                { id: "origin", label: "Nguồn gốc sản phẩm", icon: Globe },
                { id: "introduction", label: "Giới thiệu NAGEN", icon: Award },
                { id: "delivery", label: "Hoạt động giao hàng", icon: Truck },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-white text-blue-900 shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Product History */}
      <section id="history" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Lịch sử phát triển</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Hành trình 15 năm phát triển và đổi mới</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Từ năm 2009, NAGEN bắt đầu hành trình nghiên cứu và phát triển các sản phẩm chăm sóc bàn chân. Với sự
                đầu tư không ngừng vào công nghệ và nghiên cứu khoa học, chúng tôi đã tạo ra những sản phẩm chất lượng
                cao được tin tưởng bởi hàng nghìn khách hàng.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {[
                  {
                    year: "2009",
                    title: "Khởi đầu nghiên cứu",
                    desc: "Bắt đầu nghiên cứu về các vấn đề bàn chân phổ biến tại Việt Nam",
                  },
                  {
                    year: "2012",
                    title: "Sản phẩm đầu tiên",
                    desc: "Ra mắt dòng sản phẩm tấm lót hỗ trợ vòm bàn chân đầu tiên",
                  },
                  {
                    year: "2016",
                    title: "Mở rộng thị trường",
                    desc: "Phát triển hệ thống đại lý trên toàn quốc",
                  },
                  {
                    year: "2020",
                    title: "Công nghệ tiên tiến",
                    desc: "Ứng dụng công nghệ đo vòm bàn chân 3D hiện đại",
                  },
                  {
                    year: "2024",
                    title: "Thương hiệu hàng đầu",
                    desc: "Trở thành thương hiệu uy tín #1 trong lĩnh vực chăm sóc bàn chân",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 text-lg mb-1">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=NAGEN+History+Timeline"
                  alt="Lịch sử phát triển NAGEN"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">10K+</div>
                    <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Origin */}
      <section id="origin" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Nguồn gốc sản phẩm</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Nghiên cứu khoa học và công nghệ tiên tiến
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sản phẩm NAGEN được phát triển dựa trên nghiên cứu khoa học sâu sắc về cấu trúc bàn chân người Việt Nam và
              ứng dụng công nghệ hiện đại nhất
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Microscope,
                title: "Nghiên cứu khoa học",
                desc: "Hợp tác với các viện nghiên cứu y khoa hàng đầu để phát triển sản phẩm",
                image: "/placeholder.svg?height=200&width=300&text=Research+Lab",
              },
              {
                icon: Factory,
                title: "Sản xuất hiện đại",
                desc: "Nhà máy sản xuất đạt tiêu chuẩn quốc tế với công nghệ tiên tiến",
                image: "/placeholder.svg?height=200&width=300&text=Modern+Factory",
              },
              {
                icon: Shield,
                title: "Kiểm tra chất lượng",
                desc: "Quy trình kiểm tra chất lượng nghiêm ngặt đảm bảo sản phẩm hoàn hảo",
                image: "/placeholder.svg?height=200&width=300&text=Quality+Control",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Features */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Công nghệ độc quyền NAGEN</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Đo 3D chính xác", desc: "Công nghệ đo vòm bàn chân 3D với độ chính xác cao" },
                { icon: Heart, title: "Vật liệu sinh học", desc: "Sử dụng vật liệu an toàn, thân thiện với da" },
                { icon: Star, title: "Thiết kế ergonomic", desc: "Thiết kế phù hợp với cấu trúc bàn chân người Việt" },
                { icon: CheckCircle, title: "Chứng nhận y tế", desc: "Được chứng nhận bởi Bộ Y tế Việt Nam" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Introduction to NAGEN */}
      <section id="introduction" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800">Giới thiệu NAGEN</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                Sứ mệnh chăm sóc sức khỏe bàn chân Việt Nam
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                NAGEN được thành lập với sứ mệnh mang đến sức khỏe và sự thoải mái cho đôi chân của mọi người Việt Nam.
                Chúng tôi tin rằng một đôi chân khỏe mạnh là nền tảng cho một cuộc sống năng động và hạnh phúc.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-900">Giá trị cốt lõi</h3>
                {[
                  "Chất lượng sản phẩm là ưu tiên hàng đầu",
                  "Dịch vụ khách hàng tận tâm và chuyên nghiệp",
                  "Nghiên cứu và đổi mới không ngừng",
                  "Trách nhiệm xã hội và phát triển bền vững",
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=NAGEN+Mission"
                  alt="Sứ mệnh NAGEN"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Team & Achievements */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-red-600" />
                  Đội ngũ chuyên gia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Đội ngũ NAGEN bao gồm các chuyên gia y khoa, kỹ sư công nghệ và nhân viên tư vấn giàu kinh nghiệm,
                  luôn sẵn sàng mang đến dịch vụ tốt nhất cho khách hàng.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">50+</div>
                    <div className="text-sm text-gray-600">Nhân viên</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900">15+</div>
                    <div className="text-sm text-gray-600">Chuyên gia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">100+</div>
                    <div className="text-sm text-gray-600">Đại lý</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-red-600" />
                  Thành tựu đạt được
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Giải thưởng Sản phẩm chất lượng cao 2023",
                    "Top 10 thương hiệu uy tín ngành Y tế",
                    "Chứng nhận ISO 9001:2015",
                    "Giải thưởng Doanh nghiệp tiêu biểu 2024",
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Product Delivery Activities */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Hoạt động giao hàng</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Dịch vụ giao hàng và chăm sóc khách hàng
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm mua sắm tuyệt vời với dịch vụ giao hàng nhanh chóng và chăm sóc
              khách hàng tận tâm
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">Hệ thống giao hàng toàn quốc</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Với mạng lưới đối tác vận chuyển rộng khắp, NAGEN đảm bảo giao hàng nhanh chóng và an toàn đến tay khách
                hàng trên toàn quốc.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Truck, title: "Giao hàng 24h", desc: "Nội thành Hà Nội & TP.HCM" },
                  { icon: MapPin, title: "Toàn quốc", desc: "Giao hàng đến 63 tỉnh thành" },
                  { icon: Shield, title: "Bảo hành", desc: "12 tháng cho tất cả sản phẩm" },
                  { icon: Phone, title: "Hỗ trợ 24/7", desc: "Tư vấn và chăm sóc khách hàng" },
                ].map((service, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Delivery+Network"
                  alt="Mạng lưới giao hàng NAGEN"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Customer Service Process */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Quy trình chăm sóc khách hàng</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Tư vấn sản phẩm",
                  desc: "Chuyên gia tư vấn sản phẩm phù hợp với nhu cầu",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Đo vòm bàn chân",
                  desc: "Dịch vụ đo vòm bàn chân miễn phí tại nhà",
                  icon: Target,
                },
                {
                  step: "3",
                  title: "Giao hàng nhanh",
                  desc: "Giao hàng trong 24h với đóng gói cẩn thận",
                  icon: Truck,
                },
                {
                  step: "4",
                  title: "Hỗ trợ sau bán",
                  desc: "Chăm sóc và hỗ trợ khách hàng 24/7",
                  icon: Heart,
                },
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
                  )}
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <process.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Khách hàng nói gì về dịch vụ NAGEN</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Chị Nguyễn Thị Lan",
                  location: "Hà Nội",
                  content: "Dịch vụ giao hàng rất nhanh, sản phẩm chất lượng tuyệt vời. Tôi rất hài lòng!",
                  rating: 5,
                },
                {
                  name: "Anh Trần Văn Nam",
                  location: "TP.HCM",
                  content: "Đội ngũ tư vấn nhiệt tình, chuyên nghiệp. Sản phẩm đúng như mong đợi.",
                  rating: 5,
                },
                {
                  name: "Chị Lê Thị Mai",
                  location: "Đà Nẵng",
                  content: "Dịch vụ đo chân tại nhà rất tiện lợi. Cảm ơn NAGEN đã mang đến trải nghiệm tuyệt vời!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Liên hệ với NAGEN</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Bạn có câu hỏi về sản phẩm hoặc dịch vụ? Đội ngũ NAGEN luôn sẵn sàng hỗ trợ bạn 24/7
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Hotline</h3>
              <p className="text-blue-200">024 35632008</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-200">nagen.vn@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Địa chỉ</h3>
              <p className="text-blue-200">Tầng 7, Tòa VP-1, Suntquare Building, Hà Nội</p>
            </div>
          </div>

          <Link href="/">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Quay lại trang chủ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
