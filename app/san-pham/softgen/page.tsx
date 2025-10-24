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

// Dữ liệu sản phẩm Softgen
const product = {
  id: "softgen-1",
  name: "Tấm lót hỗ trợ vòm bàn chân Softgen",
  image: "/images/products/Softgen.jpg",
  category: "softgen",
}

export default function SoftgenProductPage() {
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
            "description": "Tấm lót hỗ trợ vòm bàn chân Softgen - sản phẩm được thiết kế tạo sự dễ chịu tối đa cho mọi lứa tuổi từ trẻ em đến người cao tuổi hay người bị tiểu đường, sử dụng sản phẩm được ví như 'đi trên không trung'.",
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 ml-4">
              <Image
                src={getImagePath("/images/logo_slogan_1.png")}
                alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                className="h-10 max-h-[40px]"
                width={150}
                height={40}
                style={{ objectFit: 'contain' }}
                title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
              />
            </Link>
            <Link href="/tat-ca-san-pham">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Quay lại tất cả sản phẩm</span>
                <span className="sm:hidden">Quay lại</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[8px]">
          <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
          <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
        </div>
      </header>

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
                TẤM LÓT HỖ TRỢ VÒM BÀN CHÂN SOFTGEN
              </h1>
            </div>

            {/* Detailed Content */}
            <div className="prose prose-lg max-w-none">
              {/* Giới thiệu */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Giới thiệu</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Softgen là sản phẩm được thiết kế tạo sự dễ chịu tối đa cho mọi lứa tuổi từ trẻ em đến người cao tuổi hay người bị tiểu đường, sử dụng sản phẩm được ví như <strong>"đi trên không trung"</strong>.
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
                      Sản phẩm có nguồn gốc từ thiết kế gốc của TS.BS Georg Alzner – chuyên gia chỉnh hình người Đức, được sản xuất tại Mỹ bởi Bio Orthotics International, đơn vị có gần 60 năm nghiên cứu chuyên sâu về sức khỏe bàn chân. Sản phẩm đã được cấp bằng sáng chế tại Canada và Hoa Kỳ và hiện nay NAGEN là đơn vị phân phối độc quyền tại Việt Nam, mang đến giải pháp hỗ trợ bàn chân hiệu quả nhất hiện nay.
                    </p>
                  </div>

                  {/* Chất liệu */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Chất liệu</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Được làm bằng vật liệu cao su nhiệt dẻo, chống nước - loại vật liệu được ứng dụng rộng rãi trong các lĩnh vực y tế, hàng không, giày dép, thời trang hàng hiệu; bởi tính an toàn và không độc hại.
                    </p>
                  </div>

                  {/* Công nghệ sản xuất */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Công nghệ sản xuất</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Được sản xuất tại Mỹ với công nghệ sản xuất độc quyền, được chế tạo từ khuôn đúc 300 tấn, vì vậy luôn đảm bảo tính ổn định về hình dạng và cấu trúc.
                    </p>
                  </div>

                  {/* Độ bền vượt trội */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Độ bền vượt trội</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tấm lót có độ bền trung bình 5 năm, chúng tôi có khách hàng đã sử dụng được 10-15 năm, phụ thuộc vào tần suất sử dụng và bảo quản.
                    </p>
                  </div>

                  {/* Kích cỡ đa dạng */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Kích cỡ đa dạng</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Có đầy đủ size cho mọi lứa tuổi, tấm lót được thiết kế để đưa bàn chân vào vị giúp vòm bàn chân hoạt động đúng cách. Vị trí đặt đúng của phần hỗ trợ xương bàn chân là rất quan trọng đối với hiệu quả của tấm lót; do đó, chúng tôi cung cấp sản phẩm có phần hỗ trợ xương bàn chân với nhiều kích cỡ. Chúng tôi sử dụng thiết bị đo bàn chân chuyên biệt để xác định kích thước vòm bàn chân và lựa chọn kích thước riêng cho từng khách hàng.
                    </p>
                  </div>
                </div>
              </section>

              {/* Công dụng sản phẩm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Công dụng sản phẩm</h2>
                
                {/* Media Gallery */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl border border-blue-200">
                    <div className="flex justify-center">
                      <div className="max-w-2xl w-full">
                        <ProductMediaViewer product={product} />
                      </div>
                    </div>
                    
                    {/* Media Note */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-600 text-sm">
                        💡 <strong>Lưu ý:</strong> Hình ảnh thực tế giúp bạn hiểu rõ hơn về cách sử dụng và hiệu quả của sản phẩm Softgen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Tái tạo vòm bàn chân",
                      content: "Tấm lót được thiết kế mô phỏng vòm bàn chân lý tưởng của con người, có thể huấn luyện được bàn chân bất thường sao chép."
                    },
                    {
                      title: "Cân bằng & hấp thụ lực",
                      content: "Tấm lót hỗ trợ cả 4 vòm giúp vòm bàn chân được đặt vào vị trí hoạt động đúng cách, vì vậy cải thiện sự cân bằng, phân bổ áp lực chính xác lên lòng bàn chân; ngoài ra tấm lót có khả năng rèn luyện lại cảm giác bàn chân để não bộ tin tưởng vào bàn chân, từ đó giúp cải thiện chức năng vận động & sự cân bằng."
                    },
                    {
                      title: "Giảm đau mỏi",
                      content: "Tấm lót sẽ hấp thụ lực và phân bổ lực đều trên bàn chân từ đó giảm áp lực lên gót, mu bàn chân, khớp gối, hông và cột sống."
                    },
                    {
                      title: "Điều chỉnh dáng đi",
                      content: "Tấm lót điều chỉnh trọng tâm về đúng trục sinh học của cơ thể từ đó giúp dáng đi thẳng, vững chắc và tự tin."
                    },
                    {
                      title: "Thư giãn và khí huyết lưu thông",
                      content: "Thiết kế vòm bàn chân của tấm lót giúp kích hoạt massage gan bàn chân, tạo cảm giác thư giãn và thoải mái; ngoài ra sẽ kích hoạt cơ soleus từ đó giúp khí huyết lưu thông."
                    },
                    {
                      title: "Giảm rủi ro chấn thương",
                      content: "Khả năng hấp thụ sốc vượt trội giúp giảm nguy cơ: viêm cân gan chân, đau gót, chấn thương khớp, cột sống khi vận động. Bề mặt có ma sát tự nhiên nên tạo độ bám tốt lên bàn chân từ đó giảm nguy cơ té ngã."
                    },
                    {
                      title: "Thoáng khí & vệ sinh",
                      content: "Thiết kế có nhiều lỗ thoáng khí, giúp hạn chế mùi, giữ bàn chân khô ráo và sạch sẽ trong suốt quá trình sử dụng."
                    },
                    {
                      title: "Hỗ trợ phòng ngừa",
                      content: "Bàn chân bẹt, bàn chân kiễng, đau bàn chân, suy giãn tĩnh mạch chi, viêm cân gan chân, viêm gân achilles, đau lưng, cong vẹo cột sống, gù lưng, đau cơ - xương - khớp, mất cân bằng cấu trúc cơ thể."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                      <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sử dụng sản phẩm */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Sử dụng sản phẩm</h2>
                
                <div className="space-y-8">
                  {/* Phù hợp với nhiều nhóm đối tượng */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Phù hợp với nhiều nhóm đối tượng</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Softgen là lựa chọn lý tưởng cho những khách hàng cần cảm giác êm ái, thư giãn nhưng vẫn muốn được nâng đỡ vòm bàn chân đúng cấu trúc sinh học. Sản phẩm phù hợp để sử dụng hằng ngày trong nhà, tại nơi làm việc:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                          <h4 className="font-semibold text-amber-900 mb-2">Người cao tuổi:</h4>
                          <p className="text-gray-700 text-sm">Do lớp đệm mỡ tự nhiên dưới lòng bàn chân đã suy giảm theo thời gian dẫn đến đau lòng bàn chân, giảm khả năng lưu thông khí huyết, dễ bị té ngã.</p>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                          <h4 className="font-semibold text-purple-900 mb-2">Người bị tiểu đường:</h4>
                          <p className="text-gray-700 text-sm">Nhưng vẫn còn cảm giác bàn chân và cần sự êm dịu, massage gan bàn chân.</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h4 className="font-semibold text-blue-900 mb-2">Người gặp các vấn đề về bàn chân:</h4>
                          <p className="text-gray-700 text-sm">Bàn chân bẹt, bàn chân kiễng, chân vòng kiềng (chữ O), chân chữ X</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <h4 className="font-semibold text-green-900 mb-2">Người có nghề nghiệp phải đi đứng nhiều:</h4>
                          <p className="text-gray-700 text-sm">Giáo viên, bác sĩ, công nhân, kỹ sư xây dựng, quản lý bán hàng…</p>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                          <h4 className="font-semibold text-orange-900 mb-2">Người chơi thể thao:</h4>
                          <p className="text-gray-700 text-sm">Chạy bộ, bóng đá, pickleball, tennis, golf, Yoga…</p>
                        </div>
                        
                        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
                          <h4 className="font-semibold text-rose-900 mb-2">Người đi giày cao gót:</h4>
                          <p className="text-gray-700 text-sm">Không phù hợp dẫn đến đau mỏi</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h4 className="font-semibold text-red-900 mb-2">Người bị các bệnh lý:</h4>
                          <p className="text-gray-700 text-sm">Viêm/ đứt gân chân Achilles, viêm cân gan chân, viêm khớp dạng thấp, đau gót chân, gai gót chân, đau xương bàn chân, cong vẹo cột sống</p>
                        </div>
                        
                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                          <h4 className="font-semibold text-indigo-900 mb-2">Người bị suy giãn tĩnh mạch chân:</h4>
                          <p className="text-gray-700 text-sm">Hội chứng Marfan, u dây thần kinh Morton</p>
                        </div>
                        
                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                          <h4 className="font-semibold text-teal-900 mb-2">Người có hai chân không bằng nhau</h4>
                        </div>
                        
                        <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                          <h4 className="font-semibold text-pink-900 mb-2">Mẹ bầu:</h4>
                          <p className="text-gray-700 text-sm">Bị cân nặng áp lực lên xương khớp, thay đổi dáng đi</p>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h4 className="font-semibold text-yellow-900 mb-2">Người thừa cân, béo phì:</h4>
                          <p className="text-gray-700 text-sm">Thường xuyên chịu áp lực lớn lên bàn chân và các khớp</p>
                        </div>
                        
                        <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                          <h4 className="font-semibold text-cyan-900 mb-2">Trẻ em:</h4>
                          <p className="text-gray-700 text-sm">Trong giai đoạn phát triển vòm bàn chân, cần hỗ trợ định hình tư thế dáng đi từ sớm</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Không cần thời gian làm quen */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Không cần thời gian làm quen</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Softgen được thiết kế để hỗ trợ tái tạo vòm bàn chân theo cách tự nhiên, nhẹ nhàng. Nhờ đó, đa số người dùng có thể làm quen gần như ngay lập tức sau khi sử dụng.
                    </p>
                  </div>

                  {/* Sử dụng để ngăn ngừa */}
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Sử dụng để ngăn ngừa</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Softgen được khuyến khích sử dụng như một thói quen chăm sóc bàn chân và hệ xương khớp mỗi ngày, thay vì chỉ dùng khi xuất hiện triệu chứng.
                    </p>
                  </div>

                  {/* Đặt lịch đo chân */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Đặt lịch đo chân để tối ưu hiệu quả sử dụng</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Để đạt hiệu quả cao nhất, khách hàng nên đặt lịch đo vòm bàn chân miễn phí với thiết bị chuyên dụng của NAGEN để được tư vấn đúng kích thước và sản phẩm phù hợp với cấu trúc bàn chân của từng người.
                    </p>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 text-lg"
                      onClick={() => setIsUnifiedRegistrationOpen(true)}
                    >
                      👉 ĐẶT LỊCH TƯ VẤN
                    </Button>
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