"use client"

import React, { useState } from 'react'
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, ArrowLeft, Share2, Phone, Mail, Clock, Menu, ChevronDown } from "lucide-react"
import { getImagePath, navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"

// Mock data - trong thực tế sẽ lấy từ database
const getArticleById = (id: string) => {
  const articles = [
    {
      id: "1",
      title: "🎉 RA MẮT TRUNG TÂM NGHIÊN CỨU ỨNG DỤNG CÂN BẰNG CẤU TRÚC CƠ THỂ NAGEN",
      excerpt: "Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng.",
      content: `
        <div class="space-y-6">
          <p class="text-lg font-semibold text-blue-900">✨ Trực thuộc Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng</p>
          
          <p>Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng, cùng sự tham dự của nhiều giáo sư, phó giáo sư, Bác sĩ hàng đầu tại Việt Nam.</p>

          <p>Sự kiện đánh dấu bước tiến quan trọng trong lĩnh vực chăm sóc sức khỏe theo hướng khoa học – một cách tự nhiên – không xâm lấn, đặt nền móng cho một hệ thống nghiên cứu cân bằng cấu trúc cơ thể trên ứng dụng Tấm lót hỗ trợ vòm bàn chân NAGEN cho cộng đồng Người Việt.</p>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">🔹 Các chuyên gia tham dự</h2>
          <div class="bg-blue-50 p-6 rounded-lg">
            <ul class="space-y-3">
              <li><strong>PGS.TS Nguyễn Huy Nga</strong> – Viện trưởng Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng - Nguyên Cục trưởng cục y tế dự phòng</li>
              <li><strong>PGS.TS Lê Nguyên Đương</strong> – Phó Viện trưởng</li>
              <li><strong>Ông Tạ Duy Quy</strong> – Phó Viện trưởng, nguyên Thanh tra Bộ Y tế</li>
              <li><strong>GS.TS.NS.BS.CKII Phạm Vinh Quang</strong> – chuyên gia hàng đầu trong lĩnh vực phẫu thuật lồng ngực, tim mạch và ung bướu - nguyên Giám đốc Trung tâm Huyết học & Truyền máu Bệnh viện Bạch Mai</li>
              <li><strong>Ông Nguyễn Cảnh Thi</strong> - Giám đốc trung tâm nghiên cứu ứng dụng cân bằng cấu trúc cơ thể, đồng thời là Tổng giám đốc Công ty TNHH Nagen</li>
              <li><strong>Bà Nguyễn Thị Yến</strong> - Thành viên sáng lập trung tâm, đồng thời là Chủ tịch Công ty TNHH Nagen</li>
              <li><strong>Tạp chí sức khỏe cộng đồng</strong> - Ấn phẩm uy tín hàng đầu về chăm sóc sức khỏe</li>
              <li>Đại diện các đại lý, đối tác, khách mời</li>
            </ul>
          </div>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">🧾 Lễ trao chứng nhận thành lập</h2>
          <p>Tại sự kiện, Viện trưởng PGS.TS Nguyễn Huy Nga đã chính thức trao chứng nhận thành lập Trung tâm nghiên cứu ứng dụng cân bằng cấu trúc cơ thể Nagen cho ông Nguyễn Cảnh Thi, đồng thời đánh giá đây là:</p>
          
          <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg">
            "Cầu nối giữa y học hiện đại và các giải pháp hỗ trợ cân bằng cấu trúc cơ thể theo hướng tự nhiên, an toàn cho cộng đồng - Trung tâm ra đời rất phù hợp với chủ trương của Đảng và Nhà nước hướng đến các giải pháp chăm sóc sức khỏe thuận tự nhiên và không xâm lấn."
          </blockquote>

          <p>Trung tâm là đơn vị đầu tiên và duy nhất tại Việt Nam nghiên cứu trên ứng dụng Tấm lót hỗ trợ vòm bàn chân từ Mỹ, đánh giá sự cải thiện về các vấn đề mất cân bằng cấu trúc cơ thể liên quan đến sự mất cân bằng của bàn chân.</p>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">💬 Định hướng chiến lược từ Bà Nguyễn Thị Yến</h2>
          <div class="bg-red-50 p-6 rounded-lg space-y-4">
            <p><strong>🔹 Trở thành đơn vị tiên phong</strong> trong nghiên cứu và ứng dụng các giải pháp tối ưu về lĩnh vực bàn chân một cách thuận tự nhiên, cân bằng cấu trúc cơ thể, bắt đầu từ nền tảng bàn chân – gốc rễ của hệ cơ – xương – khớp và tư thế toàn thân.</p>
            
            <p><strong>🔹 Dựa trên nền tảng khoa học</strong> được phát minh bởi Georg Alzner - Tiến sĩ, Bác sĩ phẫu thuật chỉnh hình người Đức – người đã nghiên cứu tấm lót hỗ trợ vòm bàn chân và được cấp bằng sáng chế tại Canada (1969) và Hoa Kỳ (1970).</p>
            
            <p><strong>🔹 Nghiên cứu khoa học</strong> được đưa vào ứng dụng cho mọi lứa tuổi và là một giải pháp thiết yếu trong việc chăm sóc sức khỏe bàn chân liên quan đến cân bằng cấu trúc & chức năng cơ thể.</p>
          </div>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">🔬 Các vấn đề nghiên cứu ứng dụng</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <ul class="space-y-2 text-sm">
                <li>• Bàn chân bẹt, vòng kiềng</li>
                <li>• Chân chữ X</li>
                <li>• Suy giãn tĩnh mạch</li>
                <li>• Viêm can gân chân</li>
                <li>• Đau gót chân, Gai gót chân</li>
                <li>• Đau xương bàn chân</li>
                <li>• Béo phì</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <ul class="space-y-2 text-sm">
                <li>• Nghề nghiệp đi đứng nhiều</li>
                <li>• Đi giày cao gót không phù hợp</li>
                <li>• Người chơi thể thao</li>
                <li>• Chiều dài 2 chân không đều nhau</li>
                <li>• Đau nhức xương khớp</li>
                <li>• Vẹo cột sống</li>
                <li>• Viêm/đứt gân chân Achilles</li>
              </ul>
            </div>
          </div>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">💬 Chia sẻ từ Ông Nguyễn Cảnh Thi – Giám đốc Trung tâm</h2>
          <blockquote class="border-l-4 border-red-500 pl-6 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg">
            "Sự khỏe mạnh là một trạng thái cân bằng, sự cân bằng của bàn chân liên quan mật thiết đến sự cân bằng cấu trúc cơ thể. Mỗi đôi bàn chân khỏe mạnh là nền móng của một cơ thể khỏe mạnh. Trung tâm ra đời với sứ mệnh nghiên cứu, ứng dụng và lan tỏa các giải pháp thuận tự nhiên, mang lại sức khỏe, hạnh phúc và niềm vui cho người dân Việt Nam."
          </blockquote>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">🔹 Trải nghiệm tại sự kiện</h2>
          <div class="bg-green-50 p-6 rounded-lg">
            <p>Ngay trong lễ ra mắt, các khách mời đã được trải nghiệm:</p>
            <ul class="mt-4 space-y-2">
              <li>✓ Kiểm tra bàn chân & kiểm tra sự cân bằng</li>
              <li>✓ Trải nghiệm tấm lót hỗ trợ vòm bàn chân NAGEN</li>
              <li>✓ Cảm nhận thay đổi về sự thăng bằng và giảm nhức mỏi chỉ sau vài bước di chuyển</li>
            </ul>
            <p class="mt-4 font-semibold">Nhiều phản hồi tích cực, có thể nói là "không thể diễn tả nổi" về công dụng tuyệt vời của tấm lót hỗ trợ vòm bàn chân Nagen.</p>
          </div>

          <h2 class="text-xl font-bold text-blue-900 mt-8 mb-4">💥 Cam kết lan tỏa giá trị sức khỏe bền vững</h2>
          <div class="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg">
            <p class="font-semibold mb-4">Sự kiện ra mắt Trung tâm không chỉ là một dấu mốc, mà còn là cam kết lâu dài trong việc:</p>
            <ul class="space-y-2">
              <li>🔹 Nghiên cứu – Ứng dụng – Phổ cập kiến thức về cân bằng cấu trúc cơ thể</li>
              <li>🔹 Đồng hành cùng cộng đồng, giúp trẻ em, người trưởng thành và người cao tuổi phòng ngừa các vấn đề cơ – xương – khớp ngay từ bước chân đầu tiên</li>
            </ul>
          </div>

          <div class="text-center mt-8 p-6 bg-gradient-to-r from-red-100 to-blue-100 rounded-lg">
            <p class="text-lg font-semibold text-red-600">❤️ Hãy theo dõi NAGEN để cùng chúng tôi khám phá những nghiên cứu, ứng dụng và phương pháp giúp cơ thể bạn cân bằng và khỏe mạnh hơn!</p>
            <div class="mt-4 text-sm text-gray-600">
              <p>#nagen #trungtamnghiencuuungdungcanbangcautruccothenagen #tamlothotrovombanchannagen</p>
            </div>
          </div>
        </div>
      `,
      image: "/images/news/trung-tam-nghien-cuu.jpg",
      publishDate: "2025-10-09",
      category: "Sự kiện quan trọng",
      author: "NAGEN Vietnam",
      tags: ["Trung tâm nghiên cứu", "Cân bằng cấu trúc", "Y tế cộng đồng", "Sức khỏe", "Nghiên cứu khoa học"]
    },
  ]
  
  return articles.find(article => article.id === id)
}

const getRelatedArticles = (currentId: string) => {
  return [
    {
      id: "2",
      title: "Nghiên cứu mới về hiệu quả của tấm lót NAGEN",
      image: "/images/news/research-study.jpg",
      publishDate: "2024-03-10",
      category: "Nghiên cứu"
    },
    {
      id: "3", 
      title: "NAGEN hợp tác với các trung tâm y tế toàn quốc",
      image: "/images/news/expansion.jpg",
      publishDate: "2024-03-05",
      category: "Hoạt động"
    }
  ].filter(article => article.id !== currentId)
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const openConsultationModal = () => setIsConsultationModalOpen(true)
  const closeConsultationModal = () => setIsConsultationModalOpen(false)

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
    {
      name: "Dịch vụ",
      href: "#",
      submenu: [
        { name: "Tư vấn sản phẩm", href: "#consultation", action: "consultation" },
        { name: "Đăng ký đo chân", href: "#appointment", action: "appointment" },
      ],
    },
    {
      name: "Bệnh thường gặp",
      href: "#",
      submenu: [
        { name: "Bàn chân bẹt", href: "/benh-thuong-gap/ban-chan-bet" },
        { name: "Chân chữ X, O", href: "/benh-thuong-gap/chan-chu-x-o" },
        { name: "Thoát vị đĩa đệm", href: "/benh-thuong-gap/thoat-vi-dia-dem" },
        { name: "Cong vẹo cột sống", href: "/benh-thuong-gap/cong-veo-cot-song" },
        { name: "Suy giãn tĩnh mạch", href: "/benh-thuong-gap/suy-gian-tinh-mach" },
      ],
    },
    { name: "Đại lý", href: "/dai-ly" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Blog kiến thức", href: "/blog-kien-thuc" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Nghiên cứu khoa học", href: "/studies" },
    { name: "FAQs", href: "/faqs" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  const handleNavigation = (href: string, action?: string) => {
    if (action === "consultation") {
      openConsultationModal()
      return
    }

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

  const article = getArticleById(params.id)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.id)

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
      <header className="sticky top-0 z-[1001] bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
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
                  onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveSubmenu(null)}
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

                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm"
                          onClick={(e) => {
                            e.preventDefault()
                            handleNavigation(subItem.href, (subItem as any).action)
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(item.href)
                      }}
                    >
                      {item.name}
                    </a>
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

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Trang chủ
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/tin-tuc" className="text-blue-600 hover:text-blue-800">
                Tin tức
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 truncate">{article.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/tin-tuc">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại tin tức
              </Button>
            </Link>

            {/* Article Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <Image
                src={getImagePath(article.image)}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  {article.category}
                </Badge>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.publishDate).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Chia sẻ
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3">Thẻ:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Bài viết liên quan</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Image
                        src={getImagePath(relatedArticle.image)}
                        alt={relatedArticle.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <Badge className="mb-2 text-xs">
                          {relatedArticle.category}
                        </Badge>
                        <h3 className="font-semibold line-clamp-2 mb-2">
                          <Link 
                            href={`/tin-tuc/${relatedArticle.id}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {relatedArticle.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(relatedArticle.publishDate).toLocaleDateString('vi-VN')}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Consultation Modal */}
      <UnifiedRegistrationForm
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />
    </>
  )
}