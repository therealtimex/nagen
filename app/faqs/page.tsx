"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
import Header from "@/components/Header"

export default function FAQPage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  // Handle custom events from Footer
  useEffect(() => {
    const handleOpenUnifiedRegistration = () => {
      setIsConsultationModalOpen(true)
    }

    window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)

    return () => {
      window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)
    }
  }, [])

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true)
  }

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Câu hỏi thường gặp" />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#21395D] mb-4">
            CÂU HỎI THƯỜNG GẶP
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              1. Tấm lót hỗ trợ vòm là gì?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót vòm chân là thiết bị được thiết kế đặc biệt để đeo bên trong giày.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót vòm bàn chân của chúng tôi được thiết kế theo nguyên lý cơ sinh học để định vị chính xác xương, dây chằng, cơ và gân của bàn chân và hỗ trợ chính xác cả bốn vòm bàn chân.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tư thế đúng rất quan trọng vì khi cơ thể được đặt đúng vị trí, nó có thể hoạt động hiệu quả hơn, giảm đau và mệt mỏi trong nhiều trường hợp và cũng tăng cường hiệu suất thể thao, giúp điều chỉnh lại cấu trúc tự nhiên của bàn chân từ đó cân bằng cấu trúc & chức năng cơ thể.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              2. Làm thế nào để biết tôi cần tấm lót hỗ trợ vòm bàn chân hay không?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót hỗ trợ vòm bàn chân có thể giúp ích nếu bạn bị đau hoặc khó chịu ở chân do mất cân bằng cơ học sinh học như bàn chân bẹt hoặc vòm chân cao...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nếu công việc của bạn đòi hỏi bạn phải đi đứng liên tục hay bạn có tham gia các môn thể thao, tấm lót vòm bàn chân có thể giúp cân bằng, hấp thụ lực và cải thiện tư thế của bạn. Một số vấn đề thường gặp ở bàn chân cũng có thể được giải quyết bằng cách sử dụng tấm lót hỗ trợ vòm bàn chân.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              3. Tấm lót hỗ trợ vòm bàn chân NAGEN có xuất xứ từ đâu?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót hỗ trợ vòm bàn chân NAGEN được sản xuất tại Hoa Kỳ, do Bio Orthotics International Inc – Đơn vị gần 60 năm nghiên cứu và phát triển tấm lót hỗ trợ vòm bàn chân.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sản phẩm được thiết kế bởi Tiến sĩ, Bác sĩ Georg Alzner - Bác sĩ chỉnh hình người Đức từ thập niên 40 và được cấp bằng sáng chế tại Canada năm 1969 và tại Hoa Kỳ năm 1970.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              4. Sản phẩm NAGEN có được nghiên cứu khoa học không?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hiệu quả của tấm lót hỗ trợ vòm bàn chân NAGEN đã được chứng minh qua các nghiên cứu tại các trường Đại học danh tiếng tại Mỹ như:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span><strong>Đại học Michigan:</strong> Cải thiện cân bằng và giảm căng cơ.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span><strong>Đại học East Carolina:</strong> Hỗ trợ giữ thăng bằng khi mang vật nặng.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span><strong>Đại học California:</strong> Giảm áp lực bàn chân trước, cải thiện tư thế.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span><strong>Đại học Armstrong Atlantic:</strong> Giảm đau, tăng vận động và năng lượng ở người cao tuổi.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              5. Tấm lót hỗ trợ vòm bàn chân NAGEN có gì khác biệt so với các loại tấm lót khác có trên thị trường?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trước khi tấm lót hỗ trợ vòm bàn chân Sungen được phát minh. Trong quá khứ, nhiều loại hỗ trợ vòm khác nhau đã được đề xuất và sử dụng. Tuy nhiên, tất cả các dụng cụ hỗ trợ như vậy đều có một hoặc nhiều trong số nhiều khiếm khuyết nghiêm trọng.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót hỗ trợ vòm bàn chân NAGEN được Bác sĩ, Tiến sĩ Georg Alzner thiết kế mô phỏng vòm bàn chân tiêu chuẩn của con người, tấm lót có khả năng huấn luyện bàn chân con người sao chép theo vòm bàn chân tiêu chuẩn đó.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-[#21395D] mb-4">
                Những điểm khác biệt nổi bật của Tấm lót NAGEN:
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Thiết kế tấm lót hoàn toàn khác biệt:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tấm lót bàn chân có một vùng cấu hình lồi, Các vết lõm hình bánh quế được thiết kế để cung cấp đủ không khí bên trong thân tấm lót vòm bàn chân, Tạo sự thông thoáng cho mặt lòng bàn chân và tạo ra tác dụng massage có lợi khi đi bộ
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Phù hợp với mọi độ tuổi – hỗ trợ đồng thời cả 4 vòm bàn chân:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tấm lót giúp bàn chân có vấn đề duy trì chức năng cơ sinh học chính xác bằng cách hỗ trợ nhiều vòm bàn chân của con người. Trong khi phần lớn các miếng lót khác chỉ tác động hiệu quả với trẻ nhỏ dưới 9 tuổi, Tấm lót của Nagen có khả năng tái tạo và hỗ trợ vòm bàn chân ở cả người trưởng thành, nhờ thiết kế hỗ trợ cùng lúc 4 vòm bàn chân – thay vì chỉ 2–3 vòm như các sản phẩm thông thường.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Độ bền vượt trội – tuổi thọ trung bình 5 năm:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Được đúc bằng khuôn nặng hơn 300 tấn, Tấm lót NAGEN có độ bền và ổn định cực cao, không bị xẹp, cong vênh hay biến dạng theo thời gian. Trong khi đó, nhiều sản phẩm khác thường phải thay mới hoặc gia cố chỉ sau vài tháng sử dụng.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Chất liệu cao cấp – thân thiện với sức khỏe và môi trường:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sản phẩm được chế tạo từ vật liệu cao cấp, chống nước, có độ đàn hồi linh hoạt, thoáng khí tốt, không gây hại cho sức khỏe, giúp mang lại cảm giác thoải mái và tự nhiên khi sử dụng hằng ngày.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              6. Sự khác biệt giữa tấm lót hỗ trợ vòm và các tấm lót được thiết kế riêng là gì?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Một tấm lót được thiết kế riêng, mặc dù hữu ích trong một số trường hợp nhất định, sẽ không giúp bàn chân của bạn chịu được toàn bộ trọng lượng cơ thể trên vòm bàn chân như mong muốn. Các tấm lót thiết kế riêng này bắt đầu bằng việc lấy dấu bàn chân của bạn từ máy quét, một hộp xốp mà bạn đặt chân vào, hoặc một khuôn thạch cao.
            </p>
            <p className="text-gray-700 leading-relaxed">
              80% các vấn đề liên quan đến bàn chân có thể được giải quyết bằng cách sử dụng tấm lót hỗ trợ vòm đúc sẵn vừa vặn như của chúng tôi. Tấm lót hỗ trợ vòm của chúng tôi có thể là giải pháp thay thế tiết kiệm chi phí hơn cho nhiều người.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              7. Tấm lót hỗ trợ vòm bàn chân NAGEN có tác dụng gì?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Tái tạo vòm bàn chân tự nhiên.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Cân bằng trọng tâm cơ thể, cải thiện dáng đi.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Giảm đau chân, đầu gối, hông, cột sống.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Hấp thụ và phân bổ lực, giảm mỏi cơ – xương – khớp.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Hỗ trợ lưu thông khí huyết và tăng ổn định khi vận động.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Giúp ngăn ngừa té ngã và chấn thương ở người lớn tuổi.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              8. Ai nên sử dụng tấm lót hỗ trợ vòm bàn chân NAGEN?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Phù hợp cho mọi lứa tuổi, đặc biệt là:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Trẻ em bị bàn chân bẹt, chân chữ X, chân vòng kiềng.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Người lớn đau mỏi do đứng, đi, chơi thể thao nhiều.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Người cao tuổi đau khớp, đau lưng, dễ té ngã.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Phụ nữ mang thai, người béo phì, hoặc phải đi giày cao gót thường xuyên….</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Người suy giãn tĩnh mạch</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Người viêm cân gan chân, viêm khớp dạng thấp, đau gót chân, gai gót chân, đau xương bàn chân, thoát vị đĩa đệm, cong vẹo cột sống…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Người muốn phòng ngừa các vấn đề về chấn thương hay đau mỏi cơ xương khớp</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              9. Sử dụng bao lâu thì có hiệu quả?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thông thường sau 1–2 tuần đầu, người dùng sẽ cảm nhận rõ sự thay đổi: giảm mỏi, bước đi nhẹ hơn, dáng đứng thẳng hơn.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sau 7 tháng sử dụng liên tục, tấm lót bắt đầu tái tạo vòm chân và cân bằng cấu trúc cơ thể.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Sản phẩm được người dùng lâu năm như trên Reddit đánh giá cao.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Hiệu quả thực tế:</strong> Hỗ trợ căn chỉnh bàn chân đúng vị trí, giảm đau khớp chân, lưng. Hiệu quả rõ rệt sau 4-6 tuần sử dụng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Hơn 4 triệu người dùng trên toàn cầu:</strong> Mỹ, canada, UK, Úc, Nam phi, Đài Loan, Việt Nam, Hàn Quốc, Nhật Bản,....
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              10. Phải mất bao lâu tôi mới bắt đầu cảm thấy thoải mái khi sử dụng tấm lót vòm chân?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nếu bạn đang bị đau chân, có lẽ cơn đau không bắt đầu từ hôm qua. Tương tự, nếu bạn mới bắt đầu sử dụng tấm lót vòm bàn chân của chúng tôi, bạn có thể sẽ cần một thời gian để làm quen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thời gian phụ thuộc rất nhiều vào từng cá nhân và đây không phải là một cuộc đua nên không có khoảng thời gian "đúng" để bàn chân của bạn thích nghi với phần hỗ trợ vòm chân.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nhiều loại đau chân có thể được giảm ngay lập tức sau khi sử dụng tấm lót hỗ trợ vòm chân, đặc biệt là đau gót chân, xương bàn chân và bàn chân trước.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Các vấn đề liên quan đến tình trạng bàn chân bẹt và vòm chân sụp, vòm chân cao có thể mất nhiều thời gian hơn một chút.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Điều quan trọng nhất bạn có thể làm là làm theo hướng dẫn sử dụng kèm theo tấm lót hỗ trợ vòm chân.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              11. Tấm lót NAGEN có thể sử dụng với tất cả loại giày không?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tấm lót có thể dễ dàng di chuyển giữa các loại giày thể thao, giày tây, giày làm việc hoặc dép lê. Riêng các dòng Endurance và Silhouette có thiết kế siêu mỏng phù hợp giày hẹp.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              12. Có cần thời gian làm quen khi mới sử dụng không?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vì sự hiện diện của phần hỗ trợ xương bàn chân ở tấm lót nên hầu hết mọi người cần thời gian làm quen. Hướng dẫn làm quen và bạn sẽ có được kết quả tốt nhất khi tuân thủ. Trong vòng 1 - 2 tuần, khách hàng sẽ thoải mái đeo tấm lót cả ngày.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bạn sẽ có cảm giác như quả bóng ở gan bàn chân, cảm giác đó sẽ biến mất nếu bạn tập cho chân quen dần.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              13. Cách vệ sinh tấm lót như thế nào?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Đây là phần dễ nhất. Rửa sạch chúng bằng nước, xà phòng rửa chén và bàn chải rau củ (để làm sạch các lỗ thủng) và lau khô bằng khăn. VUI LÒNG giữ miếng đệm vòm chân tránh xa máy giặt, máy sấy và tránh xa CHÓ! (Chó rất thích chúng).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              14. Có thể thuê sản phẩm không?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Đối với trẻ em từ 6–18 tuổi, sự thay đổi kích thước của trẻ diễn ra nhanh chóng, vì vậy sử dụng dịch vụ cho thuê là một lựa chọn tuyệt vời cho trẻ. Người trên 18 tuổi sử dụng sản phẩm cố định nên cần mua để sử dụng lâu dài.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              15. Làm sao để đăng ký đo chân tại nhà?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Khách hàng có thể:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Đăng ký trực tiếp trên website nagen.vn hoặc thông qua đại lý của chúng tôi</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Nhắn tin qua fanpage NAGEN</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span>Hoặc liên hệ qua hotline 0966578008 để được chuyên viên NAGEN đến tận nhà đo chân và trải nghiệm sản phẩm miễn phí.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              16. Tôi bị tiểu đường hoặc viêm khớp có dùng được không?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hoàn toàn được, với điều kiện vẫn còn cảm giác bàn chân và đang được bác sĩ theo dõi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Đặc biệt, dòng SOFTGEN rất phù hợp cho người tiểu đường, người cao tuổi hoặc bàn chân nhạy cảm.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              17. Tôi nên bắt đầu từ dòng nào?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót Sungen được khuyên dùng cho tất cả mọi người trong các hoạt động đi làm, đi bộ thường ngày.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trẻ em, người chơi thể thao nên sử dụng Tấm lót Winagen để ngăn ngừa chấn thương khi hoạt động. Tấm lót cũng được sử dụng như 1 giải pháp điều trị chấn thương thể thao do hoạt động quá mức.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Giày hẹp, giày tây, giày búp bê nên dùng các dòng: Endurance, Silhouette (siêu mỏng, tinh tế)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#21395D] mb-6">
              18. Ai nên sử dụng tấm lót hỗ trợ vòm chân?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tấm lót hỗ trợ vòm bàn chân có thể giúp ích nếu bạn bị đau hoặc khó chịu ở chân do mất cân bằng sinh học như bàn chân bẹt hoặc vòm bàn chân cao. Nếu công việc đòi hỏi bạn phải đứng liên tục, tấm lót hỗ trợ vòm bàn chân có thể giúp cải thiện tư thế của bạn. Một số vấn đề thường gặp ở bàn chân cũng có thể được giải quyết bằng cách sử dụng tấm lót hỗ trợ vòm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lý do phổ biến nhất khiến mọi người quyết định dùng tấm lót hỗ trợ vòm chân của chúng tôi là do đau dai dẳng và khó chịu ở chân, chân, mắt cá chân, lưng hoặc đầu gối. Tái tạo vòm bàn chân.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Nhưng đó chỉ là một phần của câu chuyện</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nhiều người, ở mọi lứa tuổi, sử dụng tấm lót hỗ trợ vòm chân để cải thiện sự cân bằng, khả năng vận động, sức mạnh và sức bền. Nếu bạn muốn biết chúng tôi có thể làm điều đó như thế nào, hãy xem các nghiên cứu của chúng tôi tại đây.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cho dù bạn mong muốn được đi bộ dọc bãi biển hay đi bộ đường dài mà không bị đau, hay đạt được hiệu suất cao nhất trong bất kỳ hoạt động thể thao nào, thì dụng cụ hỗ trợ vòm chân của chúng tôi có thể chính là thứ bạn đang tìm kiếm.
            </p>
          </section>

          {/* Bottom CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Vẫn còn thắc mắc?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, đừng ngần ngại liên hệ với chúng tôi.
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
                onClick={openConsultationModal}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Đặt lịch tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Consultation Modal */}
      <UnifiedRegistrationForm
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />
    </div>
  )
}