import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính sách bảo mật | NAGEN",
  description: "Chính sách bảo mật thông tin khách hàng của NAGEN",
}

export default function ChinhSachBaoMatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Chính sách bảo mật</h1>
          <p className="text-xl opacity-90">Bảo vệ thông tin khách hàng là ưu tiên hàng đầu</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Đang nghiên cứu pháp lý
              </h2>
              <p className="text-gray-600 mb-6">
                Chúng tôi đang hoàn thiện chính sách bảo mật để đảm bảo tuân thủ đầy đủ các quy định pháp luật hiện hành.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left">
                <p className="text-blue-800 text-sm">
                  <strong>Cam kết:</strong> NAGEN luôn bảo vệ thông tin cá nhân của khách hàng theo các tiêu chuẩn bảo mật cao nhất. 
                  Mọi thông tin sẽ được mã hóa và chỉ sử dụng cho mục đích tư vấn và hỗ trợ khách hàng.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Để biết thêm thông tin, vui lòng liên hệ: 
                <a href="mailto:nagen@nagen.vn" className="text-blue-600 hover:underline ml-1">
                  nagen@nagen.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}