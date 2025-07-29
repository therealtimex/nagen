import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, CheckCircle, Clock, AlertTriangle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function WarrantyPolicyPage() {
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
          <h1 className="text-3xl font-bold text-blue-900">Chính sách bảo hành NAGEN</h1>
          <p className="text-gray-600 mt-2">Cam kết chất lượng và dịch vụ hậu mãi tốt nhất cho khách hàng</p>
        </div>

        {/* Tổng quan bảo hành */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-600" />
              Tổng quan chính sách bảo hành
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">12 tháng</h3>
                <p className="text-green-700 text-sm">Thời gian bảo hành</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">Miễn phí</h3>
                <p className="text-blue-700 text-sm">Chi phí bảo hành</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-900">Toàn quốc</h3>
                <p className="text-red-700 text-sm">Phạm vi áp dụng</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                NAGEN cam kết bảo hành chất lượng sản phẩm trong 12 tháng kể từ ngày mua hàng với đầy đủ hóa đơn và
                phiếu bảo hành.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Điều kiện bảo hành */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Điều kiện được bảo hành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Được bảo hành
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Lỗi do nhà sản xuất (nứt, vỡ, biến dạng bất thường)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Mất độ đàn hồi trong thời gian bảo hành
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Lỗi kỹ thuật do quá trình sản xuất
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm không đúng thông số kỹ thuật
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Có đầy đủ hóa đơn và phiếu bảo hành
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Không được bảo hành
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hư hỏng do sử dụng sai cách hoặc quá tải
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Mòn tự nhiên do sử dụng lâu dài
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hư hỏng do tác động vật lý mạnh
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm đã qua sửa chữa bởi bên thứ ba
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không có hóa đơn hoặc phiếu bảo hành
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quy trình bảo hành */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Quy trình thực hiện bảo hành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Liên hệ yêu cầu bảo hành",
                  desc: "Gọi hotline 024 35632008 hoặc email nagen@nagen.vn để thông báo lỗi sản phẩm",
                  time: "Ngay lập tức",
                },
                {
                  step: "2",
                  title: "Kiểm tra điều kiện bảo hành",
                  desc: "Cung cấp thông tin hóa đơn, phiếu bảo hành và mô tả chi tiết lỗi sản phẩm",
                  time: "Trong 2 giờ",
                },
                {
                  step: "3",
                  title: "Thu hồi sản phẩm lỗi",
                  desc: "NAGEN sẽ thu hồi sản phẩm tại nhà (miễn phí) hoặc khách hàng gửi về trung tâm bảo hành",
                  time: "1-2 ngày làm việc",
                },
                {
                  step: "4",
                  title: "Kiểm tra và xử lý",
                  desc: "Kiểm tra kỹ thuật và xác định nguyên nhân lỗi, đưa ra phương án xử lý phù hợp",
                  time: "2-3 ngày làm việc",
                },
                {
                  step: "5",
                  title: "Thay thế hoặc sửa chữa",
                  desc: "Thay thế sản phẩm mới hoặc sửa chữa (nếu có thể) và kiểm tra chất lượng",
                  time: "3-5 ngày làm việc",
                },
                {
                  step: "6",
                  title: "Giao trả sản phẩm",
                  desc: "Giao trả sản phẩm đã được bảo hành kèm phiếu bảo hành mới (nếu thay thế)",
                  time: "1-2 ngày làm việc",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.time}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Thông tin cần chuẩn bị */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Thông tin cần chuẩn bị khi yêu cầu bảo hành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Giấy tờ cần thiết</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hóa đơn mua hàng (bản gốc hoặc bản sao)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Phiếu bảo hành có đóng dấu của đại lý
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Chứng minh thư/căn cước công dân
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm cần bảo hành
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Thông tin cần cung cấp</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Ngày mua hàng và nơi mua
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Mô tả chi tiết lỗi sản phẩm
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thời gian phát hiện lỗi
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Cách sử dụng sản phẩm
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cam kết dịch vụ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Cam kết dịch vụ bảo hành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Miễn phí hoàn toàn</h4>
                    <p className="text-gray-600 text-sm">Không thu bất kỳ chi phí nào trong thời gian bảo hành</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Thay thế nhanh chóng</h4>
                    <p className="text-gray-600 text-sm">Thay thế sản phẩm mới trong vòng 7 ngày làm việc</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Hỗ trợ tận nơi</h4>
                    <p className="text-gray-600 text-sm">Thu hồi và giao trả sản phẩm tại nhà miễn phí</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Chất lượng đảm bảo</h4>
                    <p className="text-gray-600 text-sm">Sản phẩm thay thế có chất lượng tương đương hoặc cao hơn</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Hỗ trợ 24/7</h4>
                    <p className="text-gray-600 text-sm">Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Bảo hành mở rộng</h4>
                    <p className="text-gray-600 text-sm">Sản phẩm thay thế được bảo hành thêm 12 tháng</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liên hệ bảo hành */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Liên hệ dịch vụ bảo hành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Hotline bảo hành</h4>
                <p className="text-blue-700 font-medium">024 35632008</p>
                <p className="text-xs text-gray-500 mt-1">24/7 - Miễn phí cuộc gọi</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Email hỗ trợ</h4>
                <p className="text-green-700 font-medium">nagen@nagen.vn</p>
                <p className="text-xs text-gray-500 mt-1">Phản hồi trong 2 giờ</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-red-900 mb-2">Trung tâm bảo hành</h4>
                <p className="text-red-700 text-sm">Tầng 7, Tòa VP-1, Suntquare Building</p>
                <p className="text-xs text-gray-500 mt-1">T2-CN: 8:00-20:00</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Lưu ý: Vui lòng bảo quản hóa đơn và phiếu bảo hành cẩn thận để được hỗ trợ tốt nhất khi cần thiết.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
