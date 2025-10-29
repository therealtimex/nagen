"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  CheckCircle,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getImagePath } from "@/lib/utils"
import ProductMediaViewer from "@/components/ProductMediaViewer"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
import Header from "@/components/Header"

// Dữ liệu sản phẩm Đệm lót cao su
const product = {
  id: "demlotcaosu",
  name: "Đệm lót giày cao su thiên nhiên",
  description: "Đệm lót giày cao su thiên nhiên thân thiện với môi trường, được thiết kế để hấp thụ sốc, làm giảm áp lực lên bàn chân, không gây kích ứng hay tác dụng phụ.",
  price: "699.000đ",
  image: "/images/products/Cushion.jpg",
  category: "demlotcaosu",
  rating: 4.8,
  reviewCount: 68,
  popular: true,
  new: false,
  tags: ["comfort", "natural"],
}

export default function DemLotCaoSuProductPage() {
  const [isUnifiedRegistrationOpen, setIsUnifiedRegistrationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": "Đệm lót giày cao su thiên nhiên thân thiện với môi trường, được thiết kế để hấp thụ sốc, làm giảm áp lực lên bàn chân, không gây kích ứng hay tác dụng phụ.",
            "image": `https://nagen.vn${product.image}`,
            "brand": {
              "@type": "Brand",
              "name": "NAGEN"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Bio Orthotics International"
            }
          })
        }}
      />

      <Header
        onConsultationClick={() => setIsUnifiedRegistrationOpen(true)}
        onAppointmentClick={() => setIsUnifiedRegistrationOpen(true)}
      />

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-900">Trang chủ</Link>
                <span>/</span>
                <Link href="/tat-ca-san-pham" className="hover:text-blue-900">Sản phẩm</Link>
                <span>/</span>
                <span className="text-blue-900 font-medium">{product.name}</span>
              </div>
            </nav>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase">
                ĐỆM LÓT GIÀY CAO SU THIÊN NHIÊN
              </h1>
            </div>

            {/* Detailed Content */}
            <div className="prose prose-lg max-w-none">
              {/* Giới thiệu */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Giới thiệu</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Đệm lót giày cao su thiên nhiên thân thiện với môi trường, được thiết kế để hấp thụ sốc, làm giảm áp lực lên bàn chân, không gây kích ứng hay tác dụng phụ. Sản phẩm là lựa chọn phù hợp cho mọi loại giày nhằm hỗ trợ giảm chấn trên mỗi bước đi.
                </p>
              </section>

              {/* Thông tin về sản phẩm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Thông tin về sản phẩm</h2>

                <div className="space-y-8">
                  {/* Nguồn gốc, xuất xứ */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nguồn gốc, xuất xứ</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Được sản xuất tại Mỹ bởi Bio Orthotics International, đơn vị có gần 60 năm nghiên cứu chuyên sâu về sức khỏe bàn chân.
                    </p>
                  </div>

                  {/* Chất liệu */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Chất liệu</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Được làm bằng 100% cao su xốp tự nhiên chất lượng cao, mềm mại mang đến cảm giác êm ái, không gây hại cho cơ thể.
                    </p>
                  </div>

                  {/* Công nghệ sản xuất */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Công nghệ sản xuất</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Được sản xuất tại Mỹ với công nghệ sản xuất độc quyền, được chế tạo từ khuôn đúc 300 tấn, vì vậy luôn đảm bảo tính ổn định về hình dạng và cấu trúc.
                    </p>
                  </div>

                  {/* Độ bền */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Độ bền</h3>
                    <p className="text-gray-700 leading-relaxed">
                      So với nhiều loại mút tổng hợp thông thường, cao su tự nhiên ít bị lún xẹp, giữ được form lâu dài.
                    </p>
                  </div>

                  {/* Kích cỡ đa dạng */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Kích cỡ đa dạng</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sản phẩm thiết kế phù hợp với mọi loại size giày dép.
                    </p>
                  </div>
                </div>
              </section>

              {/* Công dụng sản phẩm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Công dụng sản phẩm</h2>

                {/* Media Gallery */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-amber-50 to-gray-50 p-8 rounded-xl border border-amber-200">
                    <div className="flex justify-center">
                      <div className="max-w-2xl w-full">
                        <ProductMediaViewer product={product} />
                      </div>
                    </div>

                    {/* Media Note */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-600 text-sm">
                        💡 <strong>Lưu ý:</strong> Hình ảnh thực tế giúp bạn hiểu rõ hơn về cách sử dụng và hiệu quả của đệm lót cao su thiên nhiên
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Hấp thụ lực, giảm đau mỏi",
                      content: "Tấm lót hấp thụ và phân tán lực nén tốt, giảm sốc khi đi bộ hoặc chạy bộ, giúp giảm áp lực dồn xuống bàn chân, đầu gối và hông, cột sống."
                    },
                    {
                      title: "Thư giãn, êm ái",
                      content: "Mang lại cảm giác êm ái và thư giãn trên mỗi bước chân."
                    },
                    {
                      title: "Khả năng chống trượt nhẹ",
                      content: "Bề mặt có độ ma sát vừa phải, giúp giữ ổn định khi đi bộ hoặc vận động."
                    },
                    {
                      title: "Thoáng khí",
                      content: "Cấu trúc xốp mở giúp tăng sự thông thoáng, giảm bí chân, hạn chế mùi."
                    },
                    {
                      title: "Giảm rủi ro chấn thương",
                      content: "Khả năng hấp thụ sốc giúp giảm nguy cơ: viêm cân gan chân, đau gót, chấn thương khớp, tác động đến cột sống khi vận động."
                    },
                    {
                      title: "Hỗ trợ phòng ngừa",
                      content: "Hỗ trợ phòng ngừa suy giãn tĩnh mạch chi, viêm cân gan chân, viêm gân achilles, đau lưng, cong vẹo cột sống, gù lưng, đau cơ - xương - khớp."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                      <h3 className="text-xl font-semibold text-amber-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sử dụng sản phẩm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Sử dụng sản phẩm</h2>

                <div className="space-y-8">
                  {/* Dễ dàng sử dụng */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Dễ dàng sử dụng với mọi loại giày</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tấm lót phù hợp với hầu hết các loại giày: giày làm việc, giày thể thao đa năng, giày đi chơi hoặc dép. Chỉ cần đặt tấm lót vào giày và sử dụng ngay, không cần thay đổi thói quen di chuyển hằng ngày.
                    </p>
                  </div>

                  {/* Sử dụng để ngăn ngừa */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Sử dụng để ngăn ngừa</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tấm lót được khuyến khích sử dụng như một giải pháp giảm chấn lên hệ cơ - xương - khớp trên mỗi bước đi hàng ngày.
                    </p>
                  </div>

                  {/* Không cần thời gian làm quen */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Không cần thời gian làm quen</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Tấm lót được thiết kế êm ái nhẹ nhàng theo cách tự nhiên, nhờ đó không cần thời gian làm quen khi sử dụng.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Sử dụng tấm lót như một giải pháp làm quen chân đối với những người có nhu cầu sử dụng các sản phẩm tấm lót hỗ trợ vòm bàn chân.
                      </p>

                      {/* Link to all products */}
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
                        <p className="text-gray-700 mb-4">
                          👉 <strong>Tìm hiểu các loại tấm lót hỗ trợ vòm bàn chân của Nagen:</strong>
                        </p>
                        <Link href="/tat-ca-san-pham">
                          <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3">
                            Xem tất cả sản phẩm NAGEN
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Thực tế đáng lưu ý */}
              <section className="mb-12">
                <div className="bg-blue-900 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Thực tế đáng lưu ý:</h3>
                  <div className="space-y-4 text-blue-100">
                    <p className="leading-relaxed">
                      Các nghiên cứu cho thấy, những người có bàn chân bẹt, bàn chân yếu hoặc vòm chân chưa phát triển đầy đủ, nếu không được hỗ trợ đúng cách, rất dễ gặp phải các vấn đề như sai lệch tư thế, dáng đi thiếu ổn định, ảnh hưởng đến sự phát triển cơ – xương - khớp, thậm chí mất tự tin khi vận động.
                    </p>
                    <p className="leading-relaxed">
                      Đặc biệt, một bộ phận lớn người Việt làm các nghề nghiệp phải đứng lâu, di chuyển nhiều, kết hợp với giày dép không phù hợp và thói quen đi lại sai tư thế, khiến bàn chân phát triển bất thường, dẫn đến đau bàn chân, đau gối, đau lưng mãn tính và các rối loạn về dáng đứng – dáng đi.
                    </p>
                    <p className="leading-relaxed font-semibold text-white">
                      Tất cả bắt nguồn từ nền móng quan trọng nhất của cơ thể là đôi bàn chân - "Nagen - nuôi dưỡng từng bước chân"
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Unified Registration Modal */}
      <UnifiedRegistrationForm
        isOpen={isUnifiedRegistrationOpen}
        onClose={() => setIsUnifiedRegistrationOpen(false)}
      />
    </div>
  )
}