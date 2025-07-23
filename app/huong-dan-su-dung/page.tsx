import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getImagePath } from "@/lib/utils"

export default function UsageGuidePage() {
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
          <h1 className="text-3xl font-bold text-blue-900">Hướng dẫn sử dụng sản phẩm NAGEN</h1>
          <p className="text-gray-600 mt-2">Hướng dẫn chi tiết cách sử dụng tấm lót hỗ trợ vòm bàn chân hiệu quả</p>
        </div>

        {/* Giới thiệu */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <Info className="w-6 h-6 mr-2 text-blue-600" />
              Giới thiệu chung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Tấm lót hỗ trợ vòm bàn chân NAGEN được thiết kế để cung cấp sự hỗ trợ tối ưu cho cấu trúc bàn chân, giúp
              giảm đau nhức và tăng sự thoải mái khi đi lại. Để đạt được hiệu quả tốt nhất, vui lòng tuân thủ hướng dẫn
              sử dụng dưới đây.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Sản phẩm NAGEN đã được kiểm nghiệm lâm sàng và chứng nhận an toàn bởi Bộ Y tế Việt Nam.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bước 1: Chuẩn bị */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Bước 1: Chuẩn bị trước khi sử dụng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Kiểm tra sản phẩm</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Kiểm tra tấm lót có bị rách, nứt hay biến dạng không
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Đảm bảo bề mặt sạch sẽ, không có bụi bẩn
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Xác nhận size phù hợp với giày của bạn
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Chuẩn bị giày dép</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Làm sạch bên trong giày
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Tháo lót giày cũ (nếu có)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Đảm bảo giày khô ráo
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bước 2: Lắp đặt */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Bước 2: Lắp đặt tấm lót</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Định vị chính xác</h4>
                      <p className="text-gray-600 text-sm">
                        Đặt tấm lót vào giày, đảm bảo phần hỗ trợ vòm nằm đúng vị trí vòm bàn chân
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Ép chặt và làm phẳng</h4>
                      <p className="text-gray-600 text-sm">
                        Nhấn nhẹ tấm lót để loại bỏ bọt khí và đảm bảo bám chặt vào đế giày
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Kiểm tra độ vừa vặn</h4>
                      <p className="text-gray-600 text-sm">
                        Đi thử và điều chỉnh vị trí nếu cần thiết để đạt cảm giác thoải mái nhất
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/images/huong-dan-su-dung.png")}
                  alt="Hướng dẫn lắp đặt"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bước 3: Sử dụng hàng ngày */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Bước 3: Sử dụng hàng ngày</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Thời gian sử dụng khuyến nghị</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800 text-sm font-medium">Tuần đầu tiên</p>
                    <p className="text-green-700 text-sm">2-4 giờ/ngày để làm quen</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 text-sm font-medium">Tuần thứ 2-3</p>
                    <p className="text-blue-700 text-sm">6-8 giờ/ngày, tăng dần</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                    <p className="text-purple-800 text-sm font-medium">Từ tuần thứ 4</p>
                    <p className="text-purple-700 text-sm">Sử dụng cả ngày nếu cảm thấy thoải mái</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Lưu ý quan trọng</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      Nếu cảm thấy đau hoặc khó chịu, hãy tạm dừng và tham khảo ý kiến chuyên gia
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">Thời gian thích nghi có thể khác nhau tùy theo từng người</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">Sử dụng với tất hoặc vớ để tăng sự thoải mái</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bảo dưỡng và vệ sinh */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Bảo dưỡng và vệ sinh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Vệ sinh hàng ngày</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Lau sạch bằng khăn ẩm sau mỗi lần sử dụng
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Để khô tự nhiên, tránh ánh nắng trực tiếp
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sử dụng xà phòng nhẹ nếu cần thiết
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Bảo quản đúng cách</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Bảo quản ở nơi khô ráo, thoáng mát
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Tránh nhiệt độ cao và hóa chất mạnh
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Thay thế khi có dấu hiệu hư hỏng
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Câu hỏi thường gặp */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900">Câu hỏi thường gặp</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Tôi có thể sử dụng tấm lót với mọi loại giày không?
                </h4>
                <p className="text-gray-600 text-sm">
                  Tấm lót NAGEN phù hợp với hầu hết các loại giày có đế phẳng. Đối với giày cao gót hoặc giày thể thao
                  đặc biệt, vui lòng tham khảo ý kiến chuyên gia.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Bao lâu thì tôi sẽ cảm nhận được hiệu quả?</h4>
                <p className="text-gray-600 text-sm">
                  Hầu hết khách hàng cảm nhận được sự cải thiện trong vòng 1-2 tuần sử dụng đều đặn. Hiệu quả tối ưu
                  thường đạt được sau 4-6 tuần.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Tấm lót có thể giặt được không?</h4>
                <p className="text-gray-600 text-sm">
                  Không nên giặt máy. Vệ sinh bằng khăn ẩm và xà phòng nhẹ, sau đó để khô tự nhiên.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Khi nào cần thay thế tấm lót mới?</h4>
                <p className="text-gray-600 text-sm">
                  Thông thường sau 6-12 tháng sử dụng, tùy thuộc vào tần suất và cường độ sử dụng. Thay thế khi tấm lót
                  bị mòn, nứt hoặc mất độ đàn hồi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liên hệ hỗ trợ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Cần hỗ trợ thêm?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Nếu bạn có bất kỳ thắc mắc nào về cách sử dụng sản phẩm, đội ngũ chuyên gia NAGEN luôn sẵn sàng hỗ trợ.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Hotline</h4>
                <p className="text-blue-700">024 35632008</p>
                <p className="text-xs text-gray-500">24/7</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Email</h4>
                <p className="text-green-700">nagen.vn@gmail.com</p>
                <p className="text-xs text-gray-500">Phản hồi trong 2h</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Tư vấn tại nhà</h4>
                <p className="text-red-700">Miễn phí</p>
                <p className="text-xs text-gray-500">Nội thành Hà Nội & HCM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
