"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin, Calendar, Eye, Search, Filter } from "lucide-react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import "./events.css";

// Mock data cho sự kiện
const eventsData = [
  {
    id: 1,
    title: "Ra mắt sản phẩm mới - Tấm lót hỗ trợ vòm bàn chân NAGEN",
    date: "15/09/2025",
    views: 1000,
    category: "Sản phẩm mới",
    description: "Tấm lót hỗ trợ vòm bàn chân NAGEN chính thức ra mắt với công nghệ tiên tiến.",
    image: "/images/products/tam-lot-ho-tro-vom-ban-chan.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Hội thảo chăm sóc sức khỏe bàn chân",
    date: "20/08/2025",
    views: 850,
    category: "Hội thảo",
    description: "Tham gia hội thảo để tìm hiểu cách chăm sóc sức khỏe bàn chân hiệu quả.",
    image: "/images/events/hoi-thao-cham-soc-ban-chan.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Tư vấn miễn phí về chỉnh hình bàn chân",
    date: "15/06/2025",
    views: 720,
    category: "Tư vấn",
    description: "Đội ngũ chuyên gia NAGEN tư vấn miễn phí về các vấn đề chỉnh hình bàn chân.",
    image: "/images/events/tu-van-mien-phi.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Hội thảo khoa học về chỉnh hình bàn chân",
    date: "10/05/2025",
    views: 680,
    category: "Hội thảo",
    description: "Hội thảo khoa học với sự tham gia của các chuyên gia hàng đầu về chỉnh hình.",
    image: "/images/events/hoi-thao-khoa-hoc.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Giới thiệu công nghệ sản xuất tấm lót NAGEN",
    date: "25/04/2025",
    views: 590,
    category: "Sản phẩm mới",
    description: "Tìm hiểu về quy trình sản xuất và công nghệ tiên tiến trong sản phẩm NAGEN.",
    image: "/images/events/cong-nghe-san-xuat.jpg",
    featured: false
  }
];

const categories = ["Tất cả", "Sản phẩm mới", "Hội thảo", "Tư vấn"];

const SuKienPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Lọc sự kiện
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tất cả" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Phân trang
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <Image
                src={getImagePath("/images/logo_slogan_1.png")}
                alt="NAGEN Logo"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
            <a href="/">
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Quay lại trang chủ</span>
                <span className="sm:hidden">Quay lại</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Brand stripe */}
      <div className="w-full h-2">
        <div className="bg-red-600 w-full h-1"></div>
        <div className="bg-[#21395D] w-full h-1"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <a href="/" className="text-blue-600 hover:underline">Trang chủ</a>
          <span className="text-gray-500 mx-2">›</span>
          <span className="text-gray-700">Sự kiện</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#21395D] mb-4">Sự kiện NAGEN</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cập nhật những sự kiện mới nhất, hội thảo chuyên môn và thông tin sản phẩm từ NAGEN
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm sự kiện..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        {selectedCategory === "Tất cả" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">Sự kiện nổi bật</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {eventsData.filter(event => event.featured).map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={getImagePath(event.image)}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#21395D] mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{event.views}</span>
                        </div>
                      </div>
                      <a href={`/su-kien/${event.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                          Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Events Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#21395D] mb-6">
            {selectedCategory === "Tất cả" ? "Tất cả sự kiện" : `Sự kiện ${selectedCategory}`}
          </h2>
          
          {currentEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không tìm thấy sự kiện nào phù hợp.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <Image
                      src={getImagePath(event.image)}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#21395D] mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{event.views}</span>
                        </div>
                      </div>
                      <a href={`/su-kien/${event.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto">
                          Xem chi tiết
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Trước
            </Button>
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                onClick={() => setCurrentPage(index + 1)}
                className="w-10"
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Sau
            </Button>
          </div>
        )}
      </div>
    </div>
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center mb-4">
                <div className="w-full h-[8px]">
                  <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
                  <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
                </div>
          <h2 className="text-3xl font-bold mb-2 mt-4 text-[#21395D]">Liên hệ với NAGEN</h2>
          <p className="text-[#21395D] text-lg mb-3 max-w-2xl mx-auto">
            Bạn có câu hỏi về sản phẩm hoặc dịch vụ? Đội ngũ NAGEN luôn sẵn sàng hỗ trợ bạn 24/7
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-4 items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Hotline</h3>
              <p className="text-[#21395D]">0966578008</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-[#21395D]">nagen@nagen.vn</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Địa chỉ</h3>
              <p className="text-[#21395D]">Tầng 7, Tòa VP-1, Suntquare Building, Hà Nội</p>
            </div>
          </div>

          <a href="/">
            <Button className="bg-white text-[#21395D] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Quay lại trang chủ
            </Button>
          </a>
        </div>
      </section>


    
  </>
  );
};

export default SuKienPage;