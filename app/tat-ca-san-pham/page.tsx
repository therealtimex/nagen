"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Star,
  Search,
  Filter,
  ArrowRight,
  Heart,
  ChevronDown,
  CheckCircle,
  Microscope,
  Shield,
  Award,
  Zap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getImagePath } from "@/lib/utils"
import { Product, productData } from "@/lib/products"
import { categoryDisplayNames } from "@/lib/constants";



import ProductDetailModal from "@/components/ProductDetailModal";

// Product Card Component
function ProductCard({ product }: { product: Product }) {

  const displayCategory = categoryDisplayNames[product.category] || product.category;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative h-full flex flex-col">
        <div className="aspect-video flex items-center justify-center relative overflow-hidden">
          <Image
            src={getImagePath(product.image || "/placeholder.svg")}
            alt={product.name}
            width={250}
            height={170}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-blue-900 text-lg mt-2 line-clamp-2">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-end">
          <Button
            className="w-full bg-blue-900 hover:bg-blue-800 text-white group"
            onClick={() => setShowDetail(true)}
          >
            Xem chi tiết
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={product}
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </>
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
                alt="Nghiên cứu và phát triển NAGEN"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
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
                src="/images/logo_slogan.png"
                alt="NAGEN Logo"
                className="h-10 max-h-[40px]"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white py-8 lg:py-12">
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
                          ? "Sungen™"
                          : selectedCategory === "winagen"
                            ? "Winagen™"
                            : selectedCategory === "softgen"
                              ? "Softgen™"
                              : selectedCategory === "endurance"
                                ? "Endurance™"
                                : "Silhouette™"}
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
                    <SelectItem value="sungen">Sungen™</SelectItem>
                    <SelectItem value="winagen">Winagen™</SelectItem>
                    <SelectItem value="softgen">Softgen™</SelectItem>
                    <SelectItem value="endurance">Endurance™</SelectItem>
                    <SelectItem value="silhouette">Silhouette™</SelectItem>
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
                    ? "Sungen™"
                    : selectedCategory === "winagen"
                      ? "Winagen™"
                      : selectedCategory === "softgen"
                        ? "Softgen™"
                        : selectedCategory === "endurance"
                          ? "Endurance™"
                          : "Silhouette™"
                  }`
                  : searchTerm
                    ? `Kết quả tìm kiếm: "${searchTerm}"`
                    : "Tất cả sản phẩm"}
              </h2>
              {selectedCategory && (
                <p className="text-gray-500 text-sm mt-1">
                  Khám phá bộ sưu tập{" "}
                  {selectedCategory === "sungen"
                    ? "Sungen™"
                    : selectedCategory === "winagen"
                      ? "Winagen™"
                      : selectedCategory === "softgen"
                        ? "Softgen™"
                        : selectedCategory === "endurance"
                          ? "Endurance™"
                          : "Silhouette™"}{" "}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
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
              <p className="text-blue-200">nagen@nagen.vn</p>
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
