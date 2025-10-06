import React from "react"
import { Metadata } from "next"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Chính sách đại lý | NAGEN",
  description: "Chính sách hợp tác đại lý của NAGEN",
}

export default function ChinhSachDaiLyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Chính sách đại lý</h1>
          <p className="text-xl opacity-90">Quy định và điều kiện hợp tác đại lý NAGEN</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#21395D] mb-4">
                Đang nghiên cứu pháp lý
              </h2>
              <p className="text-gray-600 mb-6">
                Chúng tôi đang hoàn thiện chính sách đại lý để đảm bảo quyền lợi tốt nhất cho các đối tác.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-left">
                <p className="text-red-800 text-sm">
                  <strong>Thông tin sơ bộ:</strong> NAGEN đang xây dựng hệ thống đại lý toàn quốc với chính sách hỗ trợ toàn diện. 
                  Các đối tác quan tâm có thể đăng ký để nhận thông tin cập nhật sớm nhất.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Để đăng ký làm đại lý hoặc biết thêm thông tin, vui lòng liên hệ: 
                <a href="tel:0966578008" className="text-red-600 hover:underline ml-1">
                  0966578008
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