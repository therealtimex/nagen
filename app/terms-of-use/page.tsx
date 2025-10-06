import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function TermsOfUsePage() {
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
          <h1 className="text-3xl font-bold text-blue-900">Điều khoản sử dụng</h1>
          <p className="text-gray-600 mt-2">Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">1. Chấp nhận điều khoản</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Bằng việc truy cập và sử dụng website NAGEN, bạn đồng ý tuân thủ các điều khoản và điều kiện được quy định
              trong tài liệu này.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">2. Sử dụng website</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Bạn đồng ý sử dụng website này chỉ cho các mục đích hợp pháp và không:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Vi phạm bất kỳ luật pháp nào</li>
              <li>Gây tổn hại đến hệ thống website</li>
              <li>Sử dụng thông tin trái phép</li>
              <li>Đăng tải nội dung không phù hợp</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">3. Sản phẩm và dịch vụ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>NAGEN cam kết:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Cung cấp thông tin sản phẩm chính xác</li>
              <li>Giao hàng đúng thời gian cam kết</li>
              <li>Hỗ trợ khách hàng tận tình</li>
              <li>Bảo hành sản phẩm theo quy định</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">4. Thanh toán và giao hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Khách hàng có trách nhiệm thanh toán đầy đủ theo giá niêm yết. NAGEN sẽ giao hàng theo địa chỉ đã đăng ký
              và không chịu trách nhiệm nếu thông tin giao hàng không chính xác.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">5. Bảo hành và đổi trả</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Sản phẩm được bảo hành 12 tháng kể từ ngày mua. Khách hàng có thể đổi trả trong vòng 7 ngày nếu sản phẩm
              còn nguyên vẹn và chưa sử dụng.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">6. Giới hạn trách nhiệm</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              NAGEN không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp nào phát sinh từ việc sử dụng sản phẩm hoặc
              dịch vụ, ngoại trừ những trường hợp được quy định rõ trong chính sách bảo hành.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">7. Thay đổi điều khoản</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              NAGEN có quyền thay đổi các điều khoản này bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay khi được đăng
              tải trên website.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">8. Liên hệ</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ:</p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Email:</strong> legal@nagen.vn
              </p>
              <p>
                <strong>Điện thoại:</strong> 0966578008
              </p>
              <p>
                <strong>Địa chỉ:</strong> Tầng 7, Tòa VP-1, Suntquare Building, số 21 Lê Đức Thọ, Hà Nội
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
