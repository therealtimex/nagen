import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại trang chủ
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">Chính sách bảo mật</h1>
          <p className="text-gray-600 mt-2">Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">1. Thu thập thông tin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>NAGEN thu thập thông tin cá nhân khi bạn:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Đăng ký tài khoản trên website</li>
              <li>Đặt hàng sản phẩm hoặc dịch vụ</li>
              <li>Liên hệ với chúng tôi qua form hoặc email</li>
              <li>Tham gia các chương trình khuyến mãi</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">2. Sử dụng thông tin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Thông tin của bạn được sử dụng để:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Xử lý đơn hàng và cung cấp dịch vụ</li>
              <li>Liên hệ hỗ trợ khách hàng</li>
              <li>Gửi thông tin sản phẩm và khuyến mãi</li>
              <li>Cải thiện chất lượng dịch vụ</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">3. Bảo mật thông tin</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              NAGEN cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật tiên tiến, bao gồm mã hóa dữ
              liệu và kiểm soát truy cập nghiêm ngặt.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">4. Chia sẻ thông tin</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba mà không có sự đồng ý
              của bạn, trừ khi được yêu cầu bởi pháp luật.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">5. Quyền của khách hàng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Bạn có quyền:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Truy cập và cập nhật thông tin cá nhân</li>
              <li>Yêu cầu xóa thông tin cá nhân</li>
              <li>Từ chối nhận email marketing</li>
              <li>Khiếu nại về việc xử lý dữ liệu</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">6. Liên hệ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:</p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong> privacy@nagen.vn
              </p>
              <p>
                <strong>Điện thoại:</strong> 024 35632008
              </p>
              <p>
                <strong>Địa chỉ:</strong> Tầng 7, Tòa VP-1, Suntquare Building, số 21 Lê Đức Thọ, Hà Nội
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
