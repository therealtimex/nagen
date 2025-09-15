"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin } from "lucide-react";

const SuKienPage = () => {
  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 ml-4">
              <img
                src="/images/logo_slogan_1.png"
                alt="NAGEN Logo"
                className="h-10 max-h-[40px]"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </a>
            <a href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Quay lại trang chủ</span>
                <span className="sm:hidden">Quay lại</span>
              </Button>
            </a>
          </div>
        </div>
      </header>
      <div className="w-full h-[8px]">
        <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
        <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
      </div>
      <div className="container mx-auto py-8">
      <div className="mb-4">
        {/* Header breadcrumb */}
        <a href="/" className="text-blue-600 hover:underline">
          Trang chủ
        </a>
        <span className="text-gray-500">&gt;</span>
        <span className="text-gray-700">Sự kiện</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Tiêu đề sự kiện */}
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Ra mắt sản phẩm mới - Tấm lót hỗ trợ vòm bàn chân NAGEN
          </h1>

          {/* Ngày đăng + meta */}
          <div className="text-gray-500 mb-2">
            Ngày đăng: 15/09/2025 | Lượt xem: 1000
          </div>

          {/* Mô tả ngắn */}
          <div className="text-gray-700 mb-6">
            Tấm lót hỗ trợ vòm bàn chân NAGEN chính thức ra mắt với nhiều ưu đãi
            hấp dẫn.
          </div>

          {/* Nội dung chi tiết (chia đoạn + heading + ảnh) >*/}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              Giới thiệu sản phẩm
            </h2>
            <p className="text-gray-700">
              Tấm lót hỗ trợ vòm bàn chân NAGEN là sản phẩm được nghiên cứu và phát
              triển bởi các chuyên gia hàng đầu trong lĩnh vực chỉnh hình bàn chân.
            </p>
            <img
              src="/placeholder.png"
              alt="Sản phẩm NAGEN"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-gray-700">
              Sản phẩm được thiết kế đặc biệt để hỗ trợ vòm bàn chân, giúp giảm
              đau nhức, mỏi chân, đồng thời cải thiện dáng đi và phòng ngừa các bệnh
              lý về bàn chân.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900">
              Ưu đãi đặc biệt
            </h2>
            <p className="text-gray-700">
              Nhân dịp ra mắt sản phẩm mới, NAGEN triển khai chương trình ưu đãi đặc
              biệt dành cho khách hàng đăng ký mua sản phẩm trong tháng 9.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          {/* Sidebar: sự kiện nổi bật / xem nhiều */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Sự kiện nổi bật
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Sự kiện 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Sự kiện 2
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Sự kiện 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer: CTA hoặc liên kết sự kiện khác */}
    
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
              <p className="text-[#21395D]">024 35632008</p>
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