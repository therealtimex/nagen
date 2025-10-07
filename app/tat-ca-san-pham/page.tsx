"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Search,
  Filter,
  ChevronDown,
  CheckCircle,
  Microscope,
  Shield,
  Award,
  Zap,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getImagePath, getVideoPath, checkVideoExists } from "@/lib/utils"
import { Product, productData } from "@/lib/products"
import ProductMediaViewer from "@/components/ProductMediaViewer"
import Footer from "@/components/Footer";

// Product Card Component - Media on left, content on right
function ProductCard({ product, index, onConsultationClick }: { product: Product; index: number; onConsultationClick: () => void }) {

  return (
    <div key={product.id}>
      {/* Product Item */}
      <div className="py-8">
        {/* Product Title - Always first on mobile, hidden on desktop (will be shown in info section) */}
        <div className="md:hidden mb-6">
          <h3 className="text-2xl font-bold text-blue-900">{product.name}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Product Media */}
          <div className="order-1 md:order-1">
            <ProductMediaViewer product={product} />
          </div>

          {/* Product Info */}
          <div className="order-2 md:order-2 space-y-4">
            {/* Product Title - Only shown on desktop */}
            <h3 className="hidden md:block text-2xl font-bold text-blue-900">{product.name}</h3>
            <p className="text-[#21395D] text-lg leading-relaxed">{product.description}</p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
              onClick={onConsultationClick}
            >
              <Calendar className="w-4 h-4" />
              Đặt lịch tư vấn miễn phí
            </Button>
          </div>
        </div>
      </div>


    </div>
  )
}

// Consultation Form Component
function ConsultationForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}

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
      // Tạo object data với thông tin ctv
      const submissionData = {
        ...formData,
        event: "tuvan",
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

  const handleClose = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    })
    setErrors({})
    setIsSubmitting(false)
    setIsSubmitted(false)
    onClose()
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-green-800">Gửi thành công!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã đăng ký tư vấn với NAGEN. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
            </p>
            {formData.email && (
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-700">
                  📧 Email xác nhận đã được gửi đến: <strong className="break-all">{formData.email}</strong>
                </p>
              </div>
            )}
            <Button onClick={handleClose} className="mt-4 bg-green-600 hover:bg-green-700">
              Đóng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="mb-4">
            <Image
              src="/images/logo_slogan_1.png"
              alt="NAGEN Logo"
              width={120}
              height={48}
              className="object-contain"
            />
          </div>
          <DialogTitle className="text-blue-900 text-xl">Đăng ký tư vấn miễn phí</DialogTitle>
          <p className="text-gray-600 mt-2">Vui lòng điền thông tin để nhận tư vấn miễn phí từ chuyên gia NAGEN</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-12 text-base ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email
            </label>
            <Input
              type="email"
              placeholder="Nhập địa chỉ email (không bắt buộc)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-12 text-base ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Địa chỉ</label>
            <Input
              placeholder="Nhập địa chỉ (không bắt buộc)"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="h-12 text-base"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Ghi chú</label>
            <Textarea
              placeholder="Mô tả tình trạng bàn chân hoặc yêu cầu đặc biệt (không bắt buộc)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="text-base"
              rows={3}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 flex items-start">
              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí và đặt lịch hẹn phù hợp.</span>
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-red-600 hover:bg-red-700"
            >
              {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
              {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Scientific Research Section Component
function ScientificResearchSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Nghiên cứu khoa học</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Công nghệ tiên tiến đằng sau sản phẩm NAGEN
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Các sản phẩm của NAGEN được phát triển dựa trên nghiên cứu khoa học sâu sắc về cấu trúc bàn chân người Việt
            Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Microscope,
              title: "Nghiên cứu chuyên sâu",
              desc: "Hợp tác với các viện nghiên cứu y khoa hàng đầu để phát triển sản phẩm",
            },
            {
              icon: Shield,
              title: "Chứng nhận y tế",
              desc: "Sản phẩm được chứng nhận bởi Bộ Y tế và các tổ chức uy tín",
            },
            {
              icon: Award,
              title: "Công nghệ độc quyền",
              desc: "Công nghệ đo vòm bàn chân 3D với độ chính xác cao",
            },
            {
              icon: Zap,
              title: "Vật liệu cao cấp",
              desc: "Sử dụng vật liệu sinh học an toàn, thân thiện với da",
            },
          ].map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quy trình nghiên cứu và phát triển</h3>
              <p className="text-gray-600 mb-6">
                NAGEN đầu tư mạnh mẽ vào nghiên cứu và phát triển để tạo ra những sản phẩm tốt nhất cho khách hàng. Quy
                trình của chúng tôi bao gồm:
              </p>
              <div className="space-y-4">
                {[
                  "Nghiên cứu cấu trúc bàn chân người Việt Nam",
                  "Phát triển công nghệ đo vòm bàn chân 3D",
                  "Thử nghiệm lâm sàng với hàng nghìn người dùng",
                  "Cải tiến liên tục dựa trên phản hồi của khách hàng",
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
              <Image
                src={getImagePath("/images/quy-trinh-nghien-cuu-phat-trien.png")}
                alt="Quy trình nghiên cứu và phát triển tấm lót hỗ trợ vòm bàn chân NAGEN - Công nghệ từ Mỹ"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
                title="Quy trình R&D chuyên nghiệp của NAGEN - Từ nghiên cứu đến sản phẩm hoàn thiện"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>(productData.filter(product => product.id !== "sungen-2"))
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...productData]

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filteredProducts.sort(
          (a, b) => Number.parseInt(a.price.replace(/\D/g, "")) - Number.parseInt(b.price.replace(/\D/g, "")),
        )
        break
      case "price-desc":
        filteredProducts.sort(
          (a, b) => Number.parseInt(b.price.replace(/\D/g, "")) - Number.parseInt(a.price.replace(/\D/g, "")),
        )
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filteredProducts.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
        break
      case "popular":
      default:
        filteredProducts.sort((a, b) => (a.popular === b.popular ? 0 : a.popular ? -1 : 1))
        break
    }

    setProducts(filteredProducts)
  }, [searchTerm, selectedCategory, sortBy])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add this useEffect after the existing useEffect for filtering
  useEffect(() => {
    // Read category from URL query parameters
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const categoryParam = urlParams.get("category")
      if (categoryParam) {
        setSelectedCategory(categoryParam)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
          } border-b border-gray-200`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 ml-4">
              <Image
                src={getImagePath("/images/logo_slogan_1.png")}
                alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                className="h-10 max-h-[40px]"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
                title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
              />
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Quay lại trang chủ</span>
                <span className="sm:hidden">Quay lại</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className="w-full h-[8px]">
        <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
        <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
      </div>
      {/* Hero Section - Reduced Height */}
      <section className="bg-[#21395D] text-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-3">Sản phẩm NAGEN</Badge>
            <h1 className="text-2xl lg:text-4xl font-bold mb-3">Tất cả sản phẩm</h1>
            <p className="text-base text-blue-100 mb-2">
              Khám phá bộ sưu tập đầy đủ các sản phẩm chăm sóc bàn chân chất lượng cao của NAGEN
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          {/* Active Filters Display */}
          {(selectedCategory || searchTerm) && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h3 className="text-sm font-medium text-blue-900">Bộ lọc đang áp dụng:</h3>
                  <div className="flex items-center space-x-2">
                    {selectedCategory && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
                        Danh mục:{" "}
                        {selectedCategory === "sungen"
                          ? "Sungen"
                          : selectedCategory === "winagen"
                            ? "Winagen"
                            : selectedCategory === "softgen"
                              ? "Softgen"
                              : selectedCategory === "endurance"
                                ? "Endurance"
                                : selectedCategory === "silhouette"
                                  ? "Silhouette"
                                  : "Đệm lót giày cao su xốp tự nhiên"}
                        <button
                          onClick={() => {
                            setSelectedCategory("")
                            // Update URL without category parameter
                            const url = new URL(window.location.href)
                            url.searchParams.delete("category")
                            window.history.replaceState({}, "", url)
                          }}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    {searchTerm && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                        Tìm kiếm: "{searchTerm}"
                        <button onClick={() => setSearchTerm("")} className="ml-2 text-green-600 hover:text-green-800">
                          ×
                        </button>
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("")
                    setSortBy("popular")
                    // Clear URL parameters
                    const url = new URL(window.location.href)
                    url.searchParams.delete("category")
                    window.history.replaceState({}, "", url)
                  }}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center space-x-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Tìm kiếm sản phẩm..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-500 w-4 h-4" />
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => {
                    setSelectedCategory(value)
                    // Update URL with category parameter
                    if (typeof window !== "undefined") {
                      if (value) {
                        const url = new URL(window.location.href)
                        url.searchParams.set("category", value)
                        window.history.replaceState({}, "", url)
                      } else {
                        const url = new URL(window.location.href)
                        url.searchParams.delete("category")
                        window.history.replaceState({}, "", url)
                      }
                    }
                  }}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả danh mục</SelectItem>
                    <SelectItem value="sungen">Sungen</SelectItem>
                    <SelectItem value="winagen">Winagen</SelectItem>
                    <SelectItem value="softgen">Softgen</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                    <SelectItem value="silhouette">Silhouette</SelectItem>
                    <SelectItem value="demlotcaosu">Đệm lót giày cao su xốp tự nhiên</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <ChevronDown className="text-gray-500 w-4 h-4" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Phổ biến nhất</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                    <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                {selectedCategory
                  ? `Sản phẩm ${selectedCategory === "sungen"
                    ? "Sungen"
                    : selectedCategory === "winagen"
                      ? "Winagen"
                      : selectedCategory === "softgen"
                        ? "Softgen"
                        : selectedCategory === "endurance"
                          ? "Endurance"
                          : selectedCategory === "silhouette"
                            ? "Silhouette"
                            : "Đệm lót giày cao su xốp tự nhiên"
                  }`
                  : searchTerm
                    ? `Kết quả tìm kiếm: "${searchTerm}"`
                    : "Tất cả sản phẩm"}
              </h2>
              {selectedCategory && (
                <p className="text-gray-500 text-sm mt-1">
                  Khám phá bộ sưu tập{" "}
                  {selectedCategory === "sungen"
                    ? "Sungen"
                    : selectedCategory === "winagen"
                      ? "Winagen"
                      : selectedCategory === "softgen"
                        ? "Softgen"
                        : selectedCategory === "endurance"
                          ? "Endurance"
                          : selectedCategory === "silhouette"
                            ? "Silhouette"
                            : "Đệm lót giày cao su xốp tự nhiên"}{" "}
                  chất lượng cao
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-gray-500">{products.length} sản phẩm</p>
              {(selectedCategory || searchTerm) && (
                <p className="text-xs text-blue-600 mt-1">
                  <Filter className="w-3 h-3 inline mr-1" />
                  Đã lọc
                </p>
              )}
            </div>
          </div>

          {products.length > 0 ? (
            <div className="space-y-8">
              {products.map((product, index) => (
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    index={index}
                    onConsultationClick={() => setIsConsultationModalOpen(true)}
                  />
                  {/* Brand Color Separator Line - except for last item */}
                  {index < products.length - 1 && (
                    <div className="flex h-2">
                      <div className="flex-1 bg-red-600"></div>
                      <div className="flex-1 bg-[#21395D]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Không tìm thấy sản phẩm</h3>
              <p className="text-gray-500 mb-6">Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm của bạn</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                  setSortBy("popular")
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Scientific Research Section */}
      <ScientificResearchSection />

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationForm
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  )
}
