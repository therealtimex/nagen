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
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-4">CHÍNH SÁCH ĐỔI / TRẢ HÀNG – NAGEN</h2>
            <p className="mb-4">Áp dụng cho sản phẩm tấm lót hỗ trợ vòm bàn chân (sản xuất tại Hoa Kỳ).</p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">1. Thời hạn áp dụng</h3>
            <p className="mb-4">Khách hàng có quyền yêu cầu đổi hoặc trả hàng trong vòng 30 ngày kể từ ngày hoàn tất đơn hàng (theo xác nhận giao hàng thành công từ hệ thống).<br />
              Trường hợp khách nhận hàng sau thời gian giao hàng tiêu chuẩn, thời hạn 30 ngày sẽ được tính từ ngày nhận hàng thực tế (có xác nhận từ đơn vị vận chuyển).</p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">2. Điều kiện đổi / trả</h3>
            <p className="mb-4">Sản phẩm chỉ được đổi hoặc trả trong các trường hợp sau:<br />
              - Lỗi sản xuất: sản phẩm có khuyết tật về vật liệu hoặc gia công (ví dụ: bong tróc, biến dạng không do sử dụng, lỗi kết cấu).<br />
              - Lỗi vận chuyển hoặc giao hàng: sản phẩm bị hư hỏng trong quá trình vận chuyển, hoặc giao sai mẫu/kích cỡ so với đơn hàng.<br />
              Khi gửi trả, sản phẩm cần đáp ứng:<br />
              - Còn đầy đủ phụ kiện, bao bì, nhãn mác (nếu có) kèm theo.<br />
              - Không có dấu hiệu sử dụng quá mức, không bị can thiệp, chỉnh sửa hoặc cắt gọt.</p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">3. Trường hợp không chấp nhận đổi / trả</h3>
            <p className="mb-4">
              - Sản phẩm đã qua sử dụng với dấu hiệu mòn, bẩn, biến dạng do người dùng.<br />
              - Sản phẩm hư hỏng do khách hàng bảo quản sai cách, tiếp xúc với nhiệt/ẩm quá mức hoặc sử dụng không theo hướng dẫn.<br />
              - Thiếu một phần phụ kiện hoặc bao bì gốc kèm theo (nếu có).<br />
              - Yêu cầu đổi trả do thay đổi ý thích, không còn nhu cầu, không phải lỗi sản phẩm.
            </p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">4. Quy trình đổi / trả</h3>
            <ol className="list-decimal pl-5 mb-4">
              <li>Khách hàng liên hệ Bộ phận Chăm sóc Khách hàng trong vòng 30 ngày, cung cấp:<br />
                - Thông tin đơn hàng (mã đơn, ngày mua/nhận hàng).<br />
                - Ảnh hoặc video thể hiện lỗi sản phẩm / giao nhầm hàng.</li>
              <li>NAGEN xác nhận tình trạng và thông báo kết quả trong vòng 3 ngày làm việc.</li>
              <li>Khách hàng gửi lại sản phẩm theo hướng dẫn (có thể kèm phiếu đổi/trả).</li>
              <li>Sau khi kiểm tra sản phẩm, NAGEN tiến hành xử lý theo mục 5.</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">5. Hình thức xử lý</h3>
            <p className="mb-4">
              - Đổi sản phẩm mới: nếu còn hàng cùng loại, cùng quy cách.<br />
              - Hoàn tiền 100%: nếu sản phẩm cùng loại không còn hàng, tiền sẽ được hoàn theo phương thức thanh toán ban đầu hoặc chuyển khoản ngân hàng.
            </p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">6. Chi phí đổi / trả</h3>
            <p className="mb-4">NAGEN chịu toàn bộ chi phí vận chuyển trong trường hợp sản phẩm lỗi sản xuất hoặc giao nhầm.<br />
              Khách hàng không phải trả thêm bất kỳ khoản phí nào khi đổi sản phẩm lỗi.</p>

            <h3 className="text-xl font-semibold text-[#21395D] mb-2">7. Lưu ý khi thử sản phẩm</h3>
            <p className="mb-4">Do sản phẩm là tấm lót tiếp xúc trực tiếp với bàn chân:<br />
              - Khách hàng nên thử trong điều kiện sạch sẽ, có tất/vớ để đảm bảo sản phẩm còn tình trạng mới khi cần đổi/trả.<br />
              - Sản phẩm có dấu hiệu sử dụng không hợp vệ sinh có thể không được chấp nhận đổi/trả.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}