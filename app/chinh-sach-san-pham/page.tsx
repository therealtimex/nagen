import React from "react"
import { Metadata } from "next"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Chính sách sản phẩm | NAGEN",
  description: "Chính sách bảo hành và chất lượng sản phẩm NAGEN",
}

export default function ChinhSachSanPhamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Chính sách sản phẩm</h1>
          <p className="text-xl opacity-90">Cam kết chất lượng và bảo hành sản phẩm</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#21395D] mb-4">
                Đang nghiên cứu pháp lý
              </h2>
              <p className="text-gray-600 mb-6">
                Chúng tôi đang hoàn thiện chính sách sản phẩm để đảm bảo quyền lợi tốt nhất cho khách hàng.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 text-left">
                <p className="text-green-800 text-sm">
                  <strong>Cam kết chất lượng:</strong> Tất cả sản phẩm NAGEN đều được sản xuất tại Mỹ theo tiêu chuẩn FDA. 
                  Chúng tôi cam kết về chất lượng và hiệu quả của từng sản phẩm được cung cấp.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Để biết thêm về sản phẩm và chính sách, vui lòng liên hệ: 
                <a href="mailto:nagen@nagen.vn" className="text-green-600 hover:underline ml-1">
                  nagen@nagen.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}