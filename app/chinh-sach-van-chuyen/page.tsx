import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Truck, Clock, MapPin, CheckCircle, AlertTriangle, Phone, Mail, Package } from "lucide-react"
import Link from "next/link"

export default function ShippingPolicyPage() {
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
          <h1 className="text-3xl font-bold text-blue-900">Chính sách vận chuyển NAGEN</h1>
          <p className="text-gray-600 mt-2">Giao hàng nhanh chóng, an toàn trên toàn quốc</p>
        </div>

        {/* Tổng quan vận chuyển */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <Truck className="w-6 h-6 mr-2 text-blue-600" />
              Tổng quan dịch vụ vận chuyển
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">24 giờ</h3>
                <p className="text-green-700 text-sm">Giao hàng nội thành</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">63 tỉnh thành</h3>
                <p className="text-blue-700 text-sm">Phạm vi giao hàng</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-900">Miễn phí</h3>
                <p className="text-red-700 text-sm">Đơn hàng từ 500k</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                NAGEN hợp tác với các đơn vị vận chuyển uy tín để đảm bảo sản phẩm được giao đến tay khách hàng nhanh
                chóng và an toàn.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Thời gian giao hàng */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Thời gian giao hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Nội thành Hà Nội & TP.HCM
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Giao hàng trong 24 giờ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Giao hàng cùng ngày (đặt trước 14h)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Miễn phí giao hàng</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Các tỉnh thành khác
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm">Giao hàng trong 2-3 ngày</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm">Miễn phí với đơn từ 500.000đ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm">Phí ship 30.000đ (đơn dưới 500k)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Vùng sâu, vùng xa
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm">Giao hàng trong 3-5 ngày</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm">Phí ship 50.000đ</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm">Miễn phí với đơn từ 1.000.000đ</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-sm">Giao đến bưu điện huyện</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phí vận chuyển */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Bảng phí vận chuyển</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 p-3 text-left">Khu vực</th>
                    <th className="border border-gray-300 p-3 text-left">Thời gian giao hàng</th>
                    <th className="border border-gray-300 p-3 text-left">Phí vận chuyển</th>
                    <th className="border border-gray-300 p-3 text-left">Miễn phí từ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3">Nội thành Hà Nội</td>
                    <td className="border border-gray-300 p-3">24 giờ</td>
                    <td className="border border-gray-300 p-3 text-green-600 font-semibold">Miễn phí</td>
                    <td className="border border-gray-300 p-3">Tất cả đơn hàng</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3">Nội thành TP.HCM</td>
                    <td className="border border-gray-300 p-3">24 giờ</td>
                    <td className="border border-gray-300 p-3 text-green-600 font-semibold">Miễn phí</td>
                    <td className="border border-gray-300 p-3">Tất cả đơn hàng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Các tỉnh thành khác</td>
                    <td className="border border-gray-300 p-3">2-3 ngày</td>
                    <td className="border border-gray-300 p-3">30.000đ</td>
                    <td className="border border-gray-300 p-3">500.000đ</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="border border-gray-300 p-3">Vùng sâu, vùng xa</td>
                    <td className="border border-gray-300 p-3">3-5 ngày</td>
                    <td className="border border-gray-300 p-3">50.000đ</td>
                    <td className="border border-gray-300 p-3">1.000.000đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Lưu ý: Phí vận chuyển có thể thay đổi tùy theo trọng lượng và kích thước đơn hàng. Vui lòng liên hệ để
                được tư vấn cụ thể.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Đối tác vận chuyển */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Đối tác vận chuyển</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Đối tác chính</h4>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <Truck className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Giao Hàng Nhanh</h5>
                      <p className="text-gray-600 text-sm">Nội thành Hà Nội & TP.HCM</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Viettel Post</h5>
                      <p className="text-gray-600 text-sm">Toàn quốc</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Truck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Vietnam Post</h5>
                      <p className="text-gray-600 text-sm">Vùng sâu, vùng xa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Cam kết chất lượng</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Đóng gói cẩn thận, chống sốc
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Theo dõi đơn hàng 24/7
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Bảo hiểm hàng hóa 100%
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Giao hàng đúng hẹn
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hỗ trợ khách hàng tận tình
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quy trình giao hàng */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Quy trình giao hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Xác nhận đơn hàng",
                  desc: "NAGEN xác nhận đơn hàng và thông tin giao hàng với khách hàng",
                  time: "Trong 30 phút",
                  color: "bg-blue-600",
                },
                {
                  step: "2",
                  title: "Chuẩn bị hàng hóa",
                  desc: "Kiểm tra chất lượng sản phẩm và đóng gói cẩn thận",
                  time: "2-4 giờ",
                  color: "bg-green-600",
                },
                {
                  step: "3",
                  title: "Bàn giao vận chuyển",
                  desc: "Chuyển hàng cho đối tác vận chuyển và cung cấp mã tracking",
                  time: "4-6 giờ",
                  color: "bg-purple-600",
                },
                {
                  step: "4",
                  title: "Vận chuyển",
                  desc: "Hàng hóa được vận chuyển theo tuyến đường tối ưu",
                  time: "Theo khu vực",
                  color: "bg-orange-600",
                },
                {
                  step: "5",
                  title: "Giao hàng",
                  desc: "Shipper liên hệ và giao hàng tận nơi cho khách hàng",
                  time: "Theo hẹn",
                  color: "bg-red-600",
                },
                {
                  step: "6",
                  title: "Xác nhận nhận hàng",
                  desc: "Khách hàng kiểm tra và xác nhận đã nhận hàng đầy đủ",
                  time: "Ngay lập tức",
                  color: "bg-indigo-600",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div
                    className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
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

        {/* Lưu ý quan trọng */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Lưu ý quan trọng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Khách hàng cần lưu ý
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Cung cấp địa chỉ giao hàng chính xác và đầy đủ
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Đảm bảo có người nhận hàng tại địa chỉ
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Kiểm tra hàng hóa trước khi ký nhận
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Giữ liên lạc với shipper khi cần thiết
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Trường hợp đặc biệt
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thời tiết xấu có thể ảnh hưởng thời gian giao hàng
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Lễ Tết có thể chậm trễ 1-2 ngày
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Địa chỉ sai sẽ phát sinh phí giao lại
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không nhận hàng 3 lần sẽ hủy đơn
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liên hệ vận chuyển */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Liên hệ hỗ trợ vận chuyển</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Hotline vận chuyển</h4>
                <p className="text-blue-700 font-medium">024 35632008</p>
                <p className="text-xs text-gray-500 mt-1">24/7 - Theo dõi đơn hàng</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Email hỗ trợ</h4>
                <p className="text-green-700 font-medium">nagen@nagen.vn</p>
                <p className="text-xs text-gray-500 mt-1">Phản hồi trong 1 giờ</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-red-900 mb-2">Kho hàng</h4>
                <p className="text-red-700 text-sm">Tầng 7, Tòa VP-1, Suntquare Building</p>
                <p className="text-xs text-gray-500 mt-1">Trung tâm phân phối</p>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Cam kết: NAGEN luôn nỗ lực mang đến dịch vụ vận chuyển tốt nhất, đảm bảo sản phẩm đến tay khách hàng
                nhanh chóng và an toàn.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
