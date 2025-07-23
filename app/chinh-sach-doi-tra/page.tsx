import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, RotateCcw, CheckCircle, Clock, AlertTriangle, Phone, Mail, CreditCard } from "lucide-react"
import Link from "next/link"

export default function ReturnPolicyPage() {
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
          <h1 className="text-3xl font-bold text-blue-900">Chính sách đổi trả NAGEN</h1>
          <p className="text-gray-600 mt-2">Cam kết mang đến sự hài lòng tuyệt đối cho khách hàng</p>
        </div>

        {/* Tổng quan chính sách */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <RotateCcw className="w-6 h-6 mr-2 text-blue-600" />
              Tổng quan chính sách đổi trả
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">7 ngày</h3>
                <p className="text-green-700 text-sm">Thời gian đổi trả</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">Miễn phí</h3>
                <p className="text-blue-700 text-sm">Chi phí đổi trả</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <CreditCard className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-900">100%</h3>
                <p className="text-red-700 text-sm">Hoàn tiền</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                NAGEN cam kết đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng với điều kiện sản phẩm còn nguyên
                vẹn.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Điều kiện đổi trả */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Điều kiện đổi trả sản phẩm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Được đổi trả
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm còn nguyên vẹn, chưa qua sử dụng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Còn đầy đủ bao bì, nhãn mác gốc
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Có hóa đơn mua hàng hợp lệ
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Trong thời hạn 7 ngày kể từ ngày nhận hàng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm không đúng mô tả hoặc bị lỗi
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không vừa size sau khi đo chân chuyên nghiệp
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Không được đổi trả
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm đã qua sử dụng hoặc có dấu hiệu sử dụng
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Bao bì, nhãn mác bị hư hỏng hoặc mất
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Quá thời hạn 7 ngày đổi trả
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không có hóa đơn hoặc chứng từ mua hàng
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm bị hư hỏng do lỗi của khách hàng
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sản phẩm đặc biệt theo yêu cầu riêng
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quy trình đổi trả */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Quy trình đổi trả sản phẩm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Liên hệ yêu cầu đổi trả",
                  desc: "Gọi hotline 024 35632008 hoặc email để thông báo yêu cầu đổi trả sản phẩm",
                  time: "Ngay lập tức",
                  color: "bg-blue-600",
                },
                {
                  step: "2",
                  title: "Cung cấp thông tin",
                  desc: "Cung cấp mã đơn hàng, lý do đổi trả và hình ảnh sản phẩm (nếu cần)",
                  time: "Trong 30 phút",
                  color: "bg-green-600",
                },
                {
                  step: "3",
                  title: "Xác nhận đổi trả",
                  desc: "NAGEN xác nhận yêu cầu và hướng dẫn cách thức gửi trả sản phẩm",
                  time: "Trong 2 giờ",
                  color: "bg-purple-600",
                },
                {
                  step: "4",
                  title: "Gửi trả sản phẩm",
                  desc: "Đóng gói sản phẩm cẩn thận và gửi về địa chỉ NAGEN (miễn phí vận chuyển)",
                  time: "1-2 ngày",
                  color: "bg-orange-600",
                },
                {
                  step: "5",
                  title: "Kiểm tra sản phẩm",
                  desc: "NAGEN kiểm tra tình trạng sản phẩm và xác nhận đủ điều kiện đổi trả",
                  time: "1-2 ngày làm việc",
                  color: "bg-red-600",
                },
                {
                  step: "6",
                  title: "Xử lý đổi trả",
                  desc: "Gửi sản phẩm mới (đổi) hoặc hoàn tiền (trả) theo yêu cầu của khách hàng",
                  time: "2-3 ngày làm việc",
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

        {/* Phương thức hoàn tiền */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Phương thức hoàn tiền</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Hoàn tiền qua chuyển khoản</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Chuyển khoản trực tiếp vào tài khoản ngân hàng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thời gian: 1-3 ngày làm việc
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không mất phí giao dịch
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Áp dụng cho mọi ngân hàng trong nước
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Hoàn tiền qua ví điện tử</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hỗ trợ MoMo, ZaloPay, ViettelPay
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thời gian: Ngay lập tức - 24 giờ
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thuận tiện và nhanh chóng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Không cần cung cấp thông tin ngân hàng
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Lưu ý: Đối với thanh toán bằng thẻ tín dụng, việc hoàn tiền có thể mất 5-10 ngày làm việc tùy thuộc vào
                ngân hàng phát hành thẻ.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trường hợp đặc biệt */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Các trường hợp đặc biệt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Sản phẩm bị lỗi từ nhà sản xuất</h4>
                <p className="text-blue-800 text-sm mb-2">
                  NAGEN sẽ đổi trả ngay lập tức và chịu toàn bộ chi phí vận chuyển. Khách hàng có thể yêu cầu bồi thường
                  thêm nếu gây ra thiệt hại.
                </p>
                <Badge className="bg-blue-600 text-white">Ưu tiên cao nhất</Badge>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Giao hàng sai địa chỉ hoặc sai sản phẩm</h4>
                <p className="text-green-800 text-sm mb-2">
                  NAGEN sẽ thu hồi sản phẩm và giao lại đúng sản phẩm/địa chỉ trong vòng 24 giờ. Khách hàng được bồi
                  thường thêm 10% giá trị đơn hàng.
                </p>
                <Badge className="bg-green-600 text-white">Bồi thường 10%</Badge>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Không hài lòng về chất lượng</h4>
                <p className="text-orange-800 text-sm mb-2">
                  Nếu sản phẩm không đáp ứng kỳ vọng về chất lượng, NAGEN cam kết đổi trả 100% và tư vấn sản phẩm phù
                  hợp hơn.
                </p>
                <Badge className="bg-orange-600 text-white">Tư vấn miễn phí</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thông tin cần chuẩn bị */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Thông tin cần chuẩn bị khi đổi trả</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Giấy tờ cần thiết</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hóa đơn mua hàng (bản gốc hoặc ảnh chụp rõ nét)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Mã đơn hàng hoặc số điện thoại đặt hàng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Chứng minh thư/căn cước công dân
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thông tin tài khoản ngân hàng (nếu hoàn tiền)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Thông tin sản phẩm</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Tên sản phẩm và mã sản phẩm
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Lý do đổi trả cụ thể
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Hình ảnh sản phẩm (nếu có lỗi)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Ngày nhận hàng
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liên hệ đổi trả */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Liên hệ dịch vụ đổi trả</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Hotline đổi trả</h4>
                <p className="text-blue-700 font-medium">024 35632008</p>
                <p className="text-xs text-gray-500 mt-1">24/7 - Hỗ trợ nhanh chóng</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Email hỗ trợ</h4>
                <p className="text-green-700 font-medium">nagen.vn@gmail.com</p>
                <p className="text-xs text-gray-500 mt-1">Phản hồi trong 1 giờ</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                <RotateCcw className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-red-900 mb-2">Địa chỉ gửi trả</h4>
                <p className="text-red-700 text-sm">Tầng 7, Tòa VP-1, Suntquare Building</p>
                <p className="text-xs text-gray-500 mt-1">Miễn phí vận chuyển</p>
              </div>
            </div>
            <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 text-sm">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Cam kết: NAGEN luôn đặt sự hài lòng của khách hàng lên hàng đầu. Chúng tôi sẽ xử lý mọi yêu cầu đổi trả
                một cách nhanh chóng và công bằng nhất.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
