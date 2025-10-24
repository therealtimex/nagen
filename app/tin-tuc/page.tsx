"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, ArrowRight, Phone, Mail, Clock, Menu, ChevronDown } from "lucide-react"
import { getImagePath, navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: "🎉 RA MẮT TRUNG TÂM NGHIÊN CỨU ỨNG DỤNG CÂN BẰNG CẤU TRÚC CƠ THỂ NAGEN",
    excerpt: "Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng.",
    image: "/images/news/trung-tam-nghien-cuu.jpg",
    publishDate: "2025-10-09",
    category: "Sự kiện quan trọng",
    featured: true
  },
  {
    id: 2,
    title: "Nghiên cứu mới về hiệu quả của tấm lót NAGEN trong điều trị bàn chân bẹt",
    excerpt: "Kết quả nghiên cứu từ Đại học Y Hà Nội cho thấy hiệu quả vượt trội của tấm lót NAGEN trong việc cải thiện tình trạng bàn chân bẹt.",
    image: "/images/news/research-study.jpg",
    publishDate: "2024-03-10",
    category: "Nghiên cứu",
    featured: false
  },
  {
    id: 3,
    title: "NAGEN hợp tác với các trung tâm y tế trên toàn quốc",
    excerpt: "Nhằm mang lại dịch vụ chăm sóc sức khỏe bàn chân tốt nhất, NAGEN đã thiết lập mạng lưới hợp tác với các trung tâm y tế tại 63 tỉnh thành.",
    image: "/images/news/expansion.jpg",
    publishDate: "2024-03-05",
    category: "Hoạt động",
    featured: false
  },
  {
    id: 4,
    title: "Hội thảo khoa học về chăm sóc sức khỏe bàn chân",
    excerpt: "NAGEN phối hợp với Hội Chỉnh hình Việt Nam tổ chức hội thảo khoa học về các vấn đề chăm sóc sức khỏe bàn chân.",
    image: "/images/news/seminar.jpg",
    publishDate: "2024-02-28",
    category: "Sự kiện",
    featured: false
  },
  {
    id: 6,
    title: "NAGEN nhận giải thưởng 'Thương hiệu tin cậy 2024'",
    excerpt: "Tại lễ trao giải Thương hiệu tin cậy năm 2024, NAGEN vinh dự nhận giải thưởng trong lĩnh vực chăm sóc sức khỏe.",
    image: "/images/news/award-2024.jpg",
    publishDate: "2024-02-20",
    category: "Giải thưởng",
    featured: false
  }
]

const categories = [
  "Tất cả",
  "Nghiên cứu",
  "Sự kiện",
  "Giải thưởng",
  "Hoạt động"
]

export default function NewsPage() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  const openConsultationModal = () => setIsConsultationModalOpen(true)
  const closeConsultationModal = () => setIsConsultationModalOpen(false)

  const menuItems = [
    {
      name: "Sản phẩm",
      href: "#products",
      submenu: [
        { name: "Tấm lót hỗ trợ vòm bàn chân Sungen", href: "/san-pham/sungen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Winagen", href: "/san-pham/winagen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Softgen", href: "/san-pham/softgen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Endurance", href: "/san-pham/endurance" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette", href: "/san-pham/silhouette" },
        { name: "Đệm lót giày cao su xốp thiên nhiên", href: "/san-pham/dem-lot-cao-su" },
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
      name: "Vấn đề thường gặp",
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
    { name: "Câu hỏi thường gặp", href: "/faqs" },
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
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tin tức NAGEN
              </h1>
              <p className="text-xl text-blue-100">
                Cập nhật những thông tin mới nhất về sản phẩm, nghiên cứu và hoạt động của NAGEN
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map(article => (
            <div key={article.id} className="mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={getImagePath(article.image)}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-red-100 text-red-800">
                      Tin nổi bật
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishDate).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                    </div>
                    <Link href={`/tin-tuc/${article.id}`}>
                      <Button className="bg-blue-900 hover:bg-blue-800">
                        Đọc tiếp
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tất cả" ? "default" : "outline"}
                  className={category === "Tất cả" ? "bg-blue-900 hover:bg-blue-800" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={getImagePath(article.image)}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 hover:text-blue-900 transition-colors">
                    <Link href={`/tin-tuc/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <Link href={`/tin-tuc/${article.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Đọc thêm
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Xem thêm tin tức
            </Button>
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