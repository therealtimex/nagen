"use client"

import Head from 'next/head';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function StudiesPage() {
  // Structured data for research studies
  const studiesSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nghiên cứu khoa học về tấm lót hỗ trợ vòm bàn chân NAGEN",
    "description": "Khám phá các nghiên cứu khoa học từ California College of Podiatry, Michigan State University về hiệu quả tấm lót hỗ trợ vòm bàn chân NAGEN",
    "author": {
      "@type": "Organization",
      "name": "NAGEN",
      "url": "https://nagen.vn"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NAGEN",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nagen.vn/images/logo_slogan_1.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nagen.vn/studies"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "articleSection": "Nghiên cứu khoa học",
    "keywords": "nghiên cứu khoa học, tấm lót hỗ trợ vòm bàn chân, NAGEN, Bio Orthotics International, Alzner",
    "about": [
      {
        "@type": "Thing",
        "name": "Tấm lót hỗ trợ vòm bàn chân",
        "description": "Sản phẩm hỗ trợ vòm bàn chân được nghiên cứu khoa học"
      },
      {
        "@type": "Thing", 
        "name": "Nghiên cứu sinh cơ học",
        "description": "Nghiên cứu về cơ chế hoạt động của tấm lót hỗ trợ vòm bàn chân"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studiesSchema) }}
      />
      <Head>
        <title>Nghiên cứu khoa học về tấm lót hỗ trợ vòm bàn chân NAGEN - Bằng chứng khoa học</title>
        <meta name="description" content="Khám phá các nghiên cứu khoa học từ California College of Podiatry, Michigan State University về hiệu quả tấm lót hỗ trợ vòm bàn chân NAGEN. Bằng chứng khoa học chứng minh giảm đau, cải thiện cân bằng." />
        <meta name="keywords" content="nghiên cứu khoa học NAGEN, tấm lót hỗ trợ vòm bàn chân, bằng chứng khoa học, California College of Podiatry, Michigan State University, East Carolina University, Armstrong Atlantic State University, Bio Orthotics International, Alzner" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nagen.vn/studies" />
        <meta property="og:title" content="Nghiên cứu khoa học về tấm lót hỗ trợ vòm bàn chân NAGEN" />
        <meta property="og:description" content="Khám phá các nghiên cứu khoa học từ các trường đại học uy tín về hiệu quả tấm lót hỗ trợ vòm bàn chân NAGEN" />
        <meta property="og:url" content="https://nagen.vn/studies" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://nagen.vn/images/logo_slogan_1.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header currentPage="Nghiên cứu khoa học" />
        
        {/* Hero Section */}
        <div className="bg-[#21395D] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Nghiên cứu khoa học
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Khám phá bằng chứng khoa học đằng sau các sản phẩm chỉnh hình của chúng tôi. Nghiên cứu của chúng tôi chứng minh hiệu quả của các sản phẩm Bio Orthotics International trong việc cải thiện sức khỏe bàn chân, giảm đau và nâng cao chất lượng cuộc sống.
              </p>
            </div>
          </div>
        </div>

        {/* Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              
              {/* Study 1: California College of Podiatry */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-blue-100 text-blue-800">Nghiên cứu sinh cơ học</Badge>
                  <CardTitle className="text-2xl text-blue-900">1. California College of Podiatry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Khi xem xét kết quả từ hai nguồn dữ liệu (CCPM và Genovation Corp.), một số mô hình đã xuất hiện.
                  </p>
                  <p>
                    Sự cải thiện chính nằm ở việc giảm áp lực hoặc lực tác động lên phần trước bàn chân. Tất cả các phép đo được thực hiện đều cho thấy tăng lực ở khu vực này giảm đáng kể. Điều này dường như đã đạt được mà không gây ra sự mất ổn định không mong muốn.
                  </p>
                  <p>
                    Đường viền địa hình cao giữa bàn chân gần như chắc chắn là nguyên nhân gây ra điều này và thực sự có vẻ mang lại lợi ích là mang lại sự ổn định tổng thể cho bàn chân. Xét về tính hữu ích tổng thể, điều này dường như đã đạt được trong khi vẫn mang lại sự hỗ trợ gan bàn chân hiệu quả khác thường.
                  </p>
                  <p>
                    Dữ liệu tĩnh và động hỗ trợ điều này, cũng như đồ họa cho thấy bàn chân bị ngăn lại, v.v. Có thể quan sát thấy trong đồ họa động những thay đổi tích cực ở cột giữa, những thay đổi trong các mô hình áp lực cho thấy sự hỗ trợ được tăng cường, v.v.
                  </p>
                  <p>
                    Vì thiết bị là một "trung tính" không có hiện tượng nghiêng ngoài/nghiêng ngoài, v.v., và phần còn lại của thiết bị dường như được thiết kế tốt nhưng có thể không phải là nguyên nhân gây ra những thay đổi này, nên dường như các đường viền địa hình giữa bàn chân cao có thể là một phương pháp tiếp cận chức năng trong một số thiết kế.
                  </p>
                  <p>
                    Do hầu hết các thiết kế thông thường đều tạo ra bàn chân hơi gập lưng bàn chân (sau khi đặt giá đỡ, v.v.), ở đây chúng ta có một thiết bị rõ ràng cho thấy triển vọng về chức năng sau khi đặt lại bàn chân ở tư thế gập mu bàn chân. Những thay đổi bất thường ở tâm áp lực cũng được ghi nhận.
                  </p>
                  <p>
                    Độ ổn định mặt phẳng đứng đã được ghi nhận trong suốt nghiên cứu bằng cách "theo dõi" khối lượng trung tâm qua trục trung bình theo chiều dọc và với các dữ liệu động và kết quả đồ họa khác.
                  </p>
                  <p>
                    Giá đỡ Alzner® dường như là một thiết kế khác thường, vừa hỗ trợ vừa ổn định với ít tác dụng phụ không mong muốn.
                  </p>
                </CardContent>
              </Card>

              {/* Study 2: Michigan State University */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-green-100 text-green-800">Nghiên cứu trọng tâm</Badge>
                  <CardTitle className="text-2xl text-blue-900">2. Michigan State University</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Một nghiên cứu của Đại học Bang Michigan đánh giá về dụng cụ chỉnh hình Alzner đã xác định rằng khi được lắp đặt đúng cách, dụng cụ này sẽ thay đổi đáng kể trọng tâm của một người. Sự thay đổi trọng tâm này giúp cải thiện sự cân bằng và giảm áp lực lên các cơ và dây chằng được sử dụng khi đứng và đi bộ.
                  </p>
                  <p>
                    Nghiên cứu này được thúc đẩy bởi nhiều báo cáo cho thấy dụng cụ chỉnh hình rất hiệu quả trong việc phân bố lại áp lực quá mức lên gót chân và xương bàn chân trên vòm bàn chân được hỗ trợ. Điều này giúp giảm lực tác động lên mắt cá chân, đầu gối, khớp hông và lưng dưới.
                  </p>
                  <p>
                    Các nghiên cứu trước đây tại Đại học Bang Michigan về dụng cụ chỉnh hình đã phát hiện ra rằng chúng có thể mang lại sự thay đổi trong cơ chuyển động cơ thể nói chung và chức năng cơ và khớp.
                  </p>
                  <p>
                    Dụng cụ chỉnh hình thực hiện điều này bằng cách thực sự thay đổi chuyển động của bàn chân, từ đó thay đổi chuyển động của khớp mắt cá chân, đầu gối và hông trong quá trình chuyển động của phần thân trên, đồng thời thay đổi đáng kể lực và mô-men xoắn tác động lên cơ thể bằng cách thay đổi sự phân bố áp lực lên mặt gan bàn chân (phần dưới) của bàn chân.
                  </p>
                  <p>
                    Sự thay đổi này của COP (Tâm áp lực) ở lòng bàn chân được phát hiện có tác động tích cực đáng kể đến hiệu quả hoạt động của cơ và giảm đáng kể tình trạng đau và khó chịu, được xác nhận bằng phép đo GRF (Lực Phản lực Mặt đất) khi mang chỉnh hình.
                  </p>
                  <p>
                    Dữ liệu động học cho thấy sự khác biệt lớn khi mang chỉnh hình. Việc giảm mô men (hoặc mô men xoắn) tác động lên các khớp chi dưới cho thấy CG (Trọng tâm) của toàn bộ cơ thể đã bị dịch chuyển về phía trước. Sự giảm này dẫn đến giảm đáng kể mô men xoắn tác động lên các khớp, điều này có thể giải thích cho việc giảm đau và mệt mỏi được báo cáo một cách truyền miệng của người sử dụng chỉnh hình Alzner.
                  </p>
                </CardContent>
              </Card>

              {/* Study 3: East Carolina University */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-purple-100 text-purple-800">Nghiên cứu cân bằng</Badge>
                  <CardTitle className="text-2xl text-blue-900">3. East Carolina University</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nghiên cứu này, được thực hiện tại Phòng thí nghiệm Cơ sinh học thuộc Khoa Khoa học Thể dục và Thể thao, Trường Sức khỏe và Hiệu suất Con người thuộc Đại học East Carolina, đã đánh giá sự cân bằng và độ ổn định khi đứng trên mặt phẳng đứng dốc trong ba điều kiện bàn chân.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Các điều kiện bàn chân bao gồm:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>Không sử dụng nệm vòm</li>
                      <li>Sử dụng nệm vòm Alzner®</li>
                      <li>Sử dụng nệm vòm tùy chỉnh</li>
                    </ul>
                  </div>
                  <p>
                    Sự cân bằng được đánh giá trong tư thế đứng bình thường khi tác động lực 200 Newton lên người đối tượng và khi đứng với lực.
                  </p>
                  <p>
                    Lực được hướng xuống dưới và về phía trước khớp mắt cá chân. Do đó, nó tạo ra một lực xoắn gập mu bàn chân bị cản lại bởi các cơ bắp chân.
                  </p>
                  <p>
                    Tâm áp lực dưới bàn chân phải và diện cơ đồ từ cơ Gastrocnemius và cơ chày trước đã được đánh giá.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Kết quả chính:</h4>
                    <p className="text-green-700">
                      Sự cải thiện về sự cân bằng và độ ổn định trong giai đoạn tác động lực đứng với nệm Alzner®.
                    </p>
                  </div>
                  <p>
                    Tải trọng được tác động trong khoảng thời gian gần ba giây và khiến các đối tượng nghiêng người về phía trước, đồng thời diện cơ Gastrocnemius tăng đáng kể trong thời gian này, cho thấy sự gia tăng nỗ lực cơ bắp.
                  </p>
                  <p>
                    Khi sử dụng dụng cụ hỗ trợ Alzner®, chuyển động về phía trước của trọng tâm áp lực và biên độ của diện cơ ít hơn đáng kể so với các điều kiện khác.
                  </p>
                  <p>
                    Những kết quả này cho thấy các đối tượng giữ thăng bằng tốt hơn và ổn định hơn khi sử dụng dụng cụ hỗ trợ Alzner® trong quá trình chịu tải đứng, hướng về phía trước.
                  </p>
                  <p>
                    Những kết quả này cũng cho thấy dụng cụ hỗ trợ Alzner® có thể cải thiện sự cân bằng và ổn định trong các hoạt động vận động khác.
                  </p>
                  <p>
                    Sự gia tăng ít hơn của diện cơ Gastrocnemius khi sử dụng dụng cụ hỗ trợ Alzner® so với các điều kiện khác cho thấy cần ít nỗ lực cơ bắp hơn để duy trì thăng bằng trong điều kiện này.
                  </p>
                  <p>
                    Nỗ lực cơ bắp giảm có thể mang lại sức bền tốt hơn cho mọi người khi thực hiện các hoạt động vận động như thể thao.
                  </p>
                </CardContent>
              </Card>

              {/* Study 4: Armstrong Atlantic State University */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-orange-100 text-orange-800">Nghiên cứu người cao tuổi</Badge>
                  <CardTitle className="text-2xl text-blue-900">4. Armstrong Atlantic State University</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Trong một nghiên cứu được thiết kế để kiểm tra và phân tích lợi ích của nệm vòm chân trong việc ngăn ngừa té ngã ở người cao tuổi, những người mà tai nạn như vậy có thể là một vấn đề sức khỏe nghiêm trọng, Đại học Bang Armstrong Atlantic đã tuyển dụng sáu mười bảy người tham gia trong độ tuổi từ 60 đến 87 và lắp nệm vòm chân cho họ.
                  </p>
                  <p>
                    Nghiên cứu đã sử dụng cả bài kiểm tra Đứng dậy và Đi lại Theo Thời gian (TUG) và Thang đo Cân bằng Berg (BBS) để đánh giá tình trạng của những người tham gia nghiên cứu.
                  </p>
                  <p>
                    BBS là một công cụ dự đoán đáng tin cậy và đã được ghi chép đầy đủ để đánh giá nguy cơ té ngã của một người.
                  </p>
                  <p>
                    Bài kiểm tra TUG đo lường cả khả năng vận động chức năng và khả năng cân bằng đứng của cá nhân.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Kết quả nghiên cứu:</h4>
                    <p className="text-green-700">
                      Các nhà nghiên cứu đã tìm thấy sự cải thiện đáng kể về mặt thống kê trong điểm số về khả năng cân bằng, vận động chức năng và giảm đau khi sử dụng nệm.
                    </p>
                  </div>
                  <p>
                    Nhiều người tham gia cũng ghi nhận những lợi ích đáng kể do chính họ tự báo cáo, được trình bày chi tiết bên dưới.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Nghiên cứu đã đặt ra và trả lời ba câu hỏi rất quan trọng về nệm vòm chân:</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-800">1. Có sự khác biệt nào về điểm số BBS và TUG giữa những người đeo nệm vòm chân so với nhóm chứng không đeo nệm không?</h5>
                        <p className="text-blue-700 mt-1">
                          Các nhà nghiên cứu nhận thấy sự cải thiện đáng kể ở cả hai điểm số khi sử dụng nệm vòm so với trường hợp không sử dụng, phản ánh sự cải thiện đáng kể về khả năng vận động và thăng bằng chức năng trong nhiều tình trạng bệnh lý khác nhau.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">2. Có sự khác biệt nào về tình trạng đau chân, mắt cá chân, đầu gối, hông và lưng được báo cáo trong thời gian đeo nệm sáu tuần không?</h5>
                        <p className="text-blue-700 mt-1">
                          Những người tham gia đã báo cáo giảm đáng kể tình trạng đau chân, đầu gối, hông và lưng. Kết quả nghiên cứu này về đau mắt cá chân chưa có kết luận rõ ràng, mặc dù nhiều báo cáo tự đánh giá từ người tham gia cho thấy tình trạng đau mắt cá chân cũng giảm.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">3. Những lợi ích tự đánh giá của người cao tuổi khi sử dụng nệm vòm là gì?</h5>
                        <p className="text-blue-700 mt-1">
                          Hơn 85% người tham gia nghiên cứu cho biết họ nhận được lợi ích từ việc đeo nệm vòm. Cụ thể, ngoài việc giảm đau như đã đề cập ở trên, người dùng còn cho biết họ cảm thấy thăng bằng và tự tin hơn đáng kể trong các hoạt động như đi bộ, chạy bộ, chơi golf và tập thể dục. Họ cũng cảm thấy mình đi bộ tốt hơn và có thể đứng lâu hơn mà ít đau hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>


          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#21395D] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Trải nghiệm giải pháp được chứng minh khoa học
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Tham gia cùng hàng nghìn khách hàng hài lòng đã trải nghiệm những lợi ích đã được chứng minh của các giải pháp chỉnh hình dựa trên nghiên cứu của chúng tôi.
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button size="lg" className="bg-white text-[#21395D] hover:bg-gray-100 inline-flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Quay lại trang chủ
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}