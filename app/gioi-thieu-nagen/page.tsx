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
  Shield,
  Target,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getImagePath } from "@/lib/utils"

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
        <div className="container mx-auto px-4 py-2">
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white py-4 lg:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1 mb-2">✨ Câu chuyện NAGEN</Badge>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-2">
              Hành trình chăm sóc
              <span className="text-red-300 inline-block ml-2">bàn chân Việt Nam</span>
            </h1>
            <p className="text-base text-blue-100 leading-relaxed max-w-3xl mx-auto mb-3">
              Từ những nghiên cứu khoa học đến thương hiệu uy tín hàng đầu trong lĩnh vực chăm sóc bàn chân
            </p>

            {/* Navigation Menu */}
            <div className="flex justify-center mt-2 w-full">
              {[
                { id: "history", label: "Lịch sử", icon: Calendar },
                { id: "origin", label: "Nguồn gốc", icon: Globe },
                { id: "introduction", label: "Giới thiệu", icon: Award },
                { id: "delivery", label: "Giao hàng", icon: Truck },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-2 py-1 mx-1 rounded-full transition-all duration-300 text-xs ${activeSection === item.id
                    ? "bg-white text-blue-900 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                >
                  <item.icon className="w-3 h-3 mr-1" />
                  <span>{item.label}</span>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Lịch sử phát triển sản phẩm</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sungen, Winagen, Softgen, Endurance, Silhouette, Comfort Cushion do Bio Orthotics International sản xuất là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay. Khởi đầu cho những dòng sản phẩm tuyệt vời này đến từ thiết kế của Georg Alzner, một nhà thiết kế giày chỉnh hình bậc thầy.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Georg Alzner, nhà phát minh ra Tấm lót hỗ trợ vòm bàn chân Alznner®, sinh ra tại Romania, bắt đầu đào tạo chuyên gia trị liệu vào năm 1936 và tốt nghiệp năm 1942 với tư cách là bác sĩ chỉnh hình và chuyên gia vật lý trị liệu. Ông đến Tây Đức để tiếp tục học và năm 1948, ông nhận bằng thạc sĩ chuyên khoa chỉnh hình bàn chân.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {[
                  {
                    year: "1936",
                    title: "Khởi đầu sự nghiệp",
                    desc: "Georg Alzner bắt đầu đào tạo chuyên gia trị liệu tại Romania",
                  },
                  {
                    year: "1942",
                    title: "Tốt nghiệp chuyên ngành",
                    desc: "Tốt nghiệp với tư cách là bác sĩ chỉnh hình và chuyên gia vật lý trị liệu",
                  },
                  {
                    year: "1948",
                    title: "Chuyên gia chỉnh hình",
                    desc: "Alzner nhận bằng thạc sĩ chuyên khoa chỉnh hình bàn chân tại Tây Đức",
                  },
                  {
                    year: "1965",
                    title: "Phát minh đột phá",
                    desc: "Alzner nộp đơn xin cấp bằng sáng chế cho sản phẩm hỗ trợ vòm bàn chân",
                  },
                  {
                    year: "1969",
                    title: "Bằng sáng chế đầu tiên",
                    desc: "Chính phủ Canada cấp bằng sáng chế đầu tiên cho loại sản phẩm này",
                  },
                  {
                    year: "1980",
                    title: "Bio Orthotics International",
                    desc: "Donald L. Airey thành lập công ty phân phối sản phẩm hỗ trợ vòm bàn chân",
                  },
                  {
                    year: "1987",
                    title: "Nhà sản xuất độc quyền",
                    desc: "Airey trở thành chủ sở hữu và nhà sản xuất độc quyền các dòng sản phẩm",
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
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/images/lich-su-san-pham.jpg")}
                  alt="Georg Alzner - Nhà sáng lập"
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
                    <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Năm lịch sử</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">Triệu+</div>
                    <div className="text-sm text-gray-600">Người được hỗ trợ</div>
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
              Nguồn gốc sản phẩm từ Bio Orthotics International
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sungen, Winagen, Softgen, Endurance, Silhouette, Đệm lót cao su xốp thiên nhiên, do Bio Orthotics International sản xuất là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">Câu chuyện Bio Orthotics International</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Bio Orthotics International, Inc. được thành lập bởi mục sư Trưởng lão đã nghỉ hưu Donald L. Airey cách đây hơn 45 năm vào năm 1980. Airey đã quyết định trở thành đại lý phân phối khi ông trực tiếp trải nghiệm sự giảm đau chân và đau lưng mà sản phẩm hỗ trợ vòm bàn chân do Alzner thiết kế.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ông đã biến việc giới thiệu sản phẩm tuyệt vời này đến với mọi người trên toàn quốc thành sứ mệnh cá nhân. Ông đã thu hút được một lượng lớn người quan tâm tới sản phẩm là các đại lý từ bờ biển này sang bờ biển khác và phát triển một chương trình quảng cáo để tiếp cận mọi người tại nhà của họ trên khắp cả nước.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700 my-6">
                "Tôi đã phải chịu đựng những vấn đề về chân, chân và lưng trong nhiều năm... đã tốn một khoản tiền nhỏ và không nhận được sự giúp đỡ thực sự nào. Một người bạn đã kể cho tôi về tấm lót hỗ trợ vòm bàn chân. Tôi nghĩ anh ấy bị điên; rằng bất cứ thứ gì như thế thực sự có thể giúp ích... nhưng anh ấy vẫn kiên trì và tôi đã mua chúng. Chúng không cứu sống tôi, nhưng chúng chắc chắn đã cứu mạng tôi."
                <footer className="text-sm mt-2 text-gray-600">- Donald L. Airey</footer>
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/images/nguon-goc-san-pham.jpg")}
                  alt="Bio Orthotics International"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">1980</div>
                    <div className="text-sm text-gray-600">Năm thành lập</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">1987</div>
                    <div className="text-sm text-gray-600">Trở thành nhà sản xuất độc quyền</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Technology Features */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Đặc điểm nổi bật của sản phẩm</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Hỗ trợ 4 vòm", desc: "Hỗ trợ cho cả bốn vòm bàn chân" },
                { icon: Heart, title: "Thông thoáng", desc: "Cung cấp sự thông thoáng cho bề mặt lòng bàn chân" },
                { icon: Star, title: "Mát-xa tự nhiên", desc: "Tạo ra động tác mát-xa có lợi khi đi bộ" },
                { icon: CheckCircle, title: "Công nghệ độc quyền", desc: "Được cấp bằng sáng chế đầu tiên cho loại sản phẩm này" },
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
                Lịch sử công ty TNHH NAGEN
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Công ty TNHH NAGEN là Công ty phân phối Độc quyền Tấm lót hỗ trợ vòm bàn chân tại Lãnh thổ Việt Nam.
                Với sứ mệnh, mang đến cho người dân Việt Nam tấm lót hỗ trợ vòm bàn chân tốt nhất.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trở thành sự nuôi dưỡng thiết yếu cho mọi người dân Việt Nam, Những bước chân đầu đời của một đứa trẻ, cho đến khi bạn già đi tôi với bạn là hình với bóng. Chúng tôi cùng hệ thống Đại lý luôn nỗ lực để từ thôn quê đến thành phố, mỗi bước chân bạn đi được nuôi dưỡng bằng tấm lót hỗ trợ vòm bàn chân tốt nhất.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-900">Sứ mệnh của NAGEN</h3>
                {[
                  "Mang đến cho người dân Việt Nam tấm lót hỗ trợ vòm bàn chân tốt nhất",
                  "Phát triển hệ thống đại lý trên khắp mọi ngóc ngách Việt Nam",
                  "Trở thành đối tác tin cậy của các bệnh viện và phòng khám uy tín",
                  "Nâng cao chất lượng cuộc sống thông qua sức khỏe bàn chân",
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
                  src={getImagePath("/images/Logo2.png")}
                  alt="NAGEN Việt Nam"
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
                  Mạng lưới phân phối
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chúng tôi cùng hệ thống Đại lý luôn nỗ lực để mọi con thôn đến thành phố, mỗi bước chân bạn đi được nuôi dưỡng bằng tấm lót hỗ trợ vòm bàn chân tốt nhất.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">63</div>
                    <div className="text-sm text-gray-600">Tỉnh thành</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900">1000+</div>
                    <div className="text-sm text-gray-600">Đại lý</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-sm text-gray-600">Hỗ trợ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-red-600" />
                  Đối tác tin cậy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chúng tôi tin tưởng những tấm lót hỗ trợ vòm bàn chân của chúng tôi là giải pháp tốt nhất mà những bệnh viện, phòng khám, phục hồi chức năng,… uy tín tại Việt Nam lựa chọn.
                </p>
                <div className="space-y-3">
                  {[
                    "Các bệnh viện hàng đầu tại Việt Nam",
                    "Trung tâm phục hồi chức năng",
                    "Phòng khám chuyên khoa chỉnh hình",
                    "Trung tâm y tế cộng đồng",
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
                  src={getImagePath("/images/gioithieu_giaohang.png")}
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
