"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Award,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getImagePath } from "@/lib/utils"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutNAGENPage() {
  const [activeSection, setActiveSection] = useState("")

  // Smooth scrolling effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["history", "origin", "introduction"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="Giới thiệu" />

      {/* Hero Section */}
      <section className="relative bg-[#21395D] text-white py-4 lg:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1 mb-2">✨ Câu chuyện NAGEN</Badge>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-2">
              Hành trình chăm sóc
              <span className="text-red-300 inline-block ml-2">bàn chân Việt Nam</span>
            </h1>
            <p className="text-base text-blue-100 leading-relaxed max-w-3xl mx-auto mb-3">
              Từ những nghiên cứu khoa học đến thương hiệu uy tín hàng đầu trong lĩnh vực chăm sóc bàn chân
            </p>

            {/* Navigation Menu */}
            <div className="flex justify-center mt-2 w-full">
              {[
                { id: "history", label: "Lịch sử", icon: Calendar },
                { id: "origin", label: "Nguồn gốc", icon: Globe },
                { id: "introduction", label: "Giới thiệu", icon: Award },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-2 py-1 mx-1 rounded-full transition-all duration-300 text-xs ${activeSection === item.id
                    ? "bg-white text-blue-900 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                >
                  <item.icon className="w-3 h-3 mr-1" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Product History */}
      <section id="history" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Lịch sử phát triển</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">Lịch sử phát triển sản phẩm</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sungen, Winagen, Softgen, Endurance, Silhouette, Comfort Cushion do Bio Orthotics International sản xuất là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay. Khởi đầu cho những dòng sản phẩm tuyệt vời này đến từ thiết kế của Georg Alzner, một nhà thiết kế giày chỉnh hình bậc thầy.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Georg Alzner, nhà phát minh ra Tấm lót hỗ trợ vòm bàn chân Alznner®, sinh ra tại Romania, bắt đầu đào tạo chuyên gia trị liệu vào năm 1936 và tốt nghiệp năm 1942 với tư cách là bác sĩ chỉnh hình và chuyên gia vật lý trị liệu. Ông đến Tây Đức để tiếp tục học và năm 1948, ông nhận bằng thạc sĩ chuyên khoa chỉnh hình bàn chân.
              </p>


            </div>

            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/images/lich-su-san-pham.jpg")}
                  alt="Georg Alzner - Nhà sáng lập"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Năm lịch sử</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">Triệu+</div>
                    <div className="text-sm text-gray-600">Người được hỗ trợ</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Origin */}
      <section id="origin" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Nguồn gốc sản phẩm</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
              Nguồn gốc sản phẩm từ Bio Orthotics International
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sungen, Winagen, Softgen, Endurance, Silhouette, Đệm lót cao su xốp thiên nhiên, do Bio Orthotics International sản xuất là những dòng sản phẩm hỗ trợ vòm bàn chân hiệu quả nhất trên thị trường hiện nay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">Câu chuyện Bio Orthotics International</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Bio Orthotics International, Inc. được thành lập bởi mục sư Trưởng lão đã nghỉ hưu Donald L. Airey cách đây hơn 45 năm vào năm 1980. Airey đã quyết định trở thành đại lý phân phối khi ông trực tiếp trải nghiệm sự giảm đau chân và đau lưng mà sản phẩm hỗ trợ vòm bàn chân do Alzner thiết kế.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ông đã biến việc giới thiệu sản phẩm tuyệt vời này đến với mọi người trên toàn quốc thành sứ mệnh cá nhân. Ông đã thu hút được một lượng lớn người quan tâm tới sản phẩm là các đại lý từ bờ biển này sang bờ biển khác và phát triển một chương trình quảng cáo để tiếp cận mọi người tại nhà của họ trên khắp cả nước.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700 my-6">
                "Tôi đã phải chịu đựng những vấn đề về chân, chân và lưng trong nhiều năm... đã tốn một khoản tiền nhỏ và không nhận được sự giúp đỡ thực sự nào. Một người bạn đã kể cho tôi về tấm lót hỗ trợ vòm bàn chân. Tôi nghĩ anh ấy bị điên; rằng bất cứ thứ gì như thế thực sự có thể giúp ích... nhưng anh ấy vẫn kiên trì và tôi đã mua chúng. Chúng không cứu sống tôi, nhưng chúng chắc chắn đã cứu mạng tôi."
                <footer className="text-sm mt-2 text-gray-600">- Donald L. Airey</footer>
              </blockquote>
            </div>

            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/images/nguon-goc-san-pham.jpg")}
                  alt="Bio Orthotics International"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">1980</div>
                    <div className="text-sm text-gray-600">Năm thành lập</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">1987</div>
                    <div className="text-sm text-gray-600">Trở thành nhà sản xuất độc quyền</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Section 3: Introduction to NAGEN */}
     <section id="introduction" className="py-8 bg-white">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
             <Badge className="bg-red-100 text-red-800">Giới thiệu NAGEN</Badge>
             <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
               NAGEN và SỨ MỆNH NUÔI DƯỠNG TỪNG BƯỚC CHÂN NGƯỜI VIỆT
             </h2>
             <h3 className="text-2xl font-semibold text-blue-900">HƠI THỞ và BƯỚC CHÂN</h3>
             <p className="text-gray-600 text-lg leading-relaxed">
               Với sứ mệnh “Nuôi dưỡng từng bước chân”, NAGEN khởi nguồn nhân duyên từ một Phương pháp HƠI THỞ,
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Quá trình mang phương pháp thực tập hơi thở RUNA tới cộng đồng, chúng tôi nhận thấy, hầu hết mọi người mất cân bằng cấu trúc & chức năng cơ thể, các vấn đề xương khớp có thể đến từ mất cân bằng bàn chân. Một sự sắp đặt của Vũ trụ, chúng tôi được kết nối và trở thành Nhà phân phối Độc Quyền Tấm lót hỗ trợ vòm bàn chân của công ty Bio Orthotics International - Hoa Kỳ, có gần 60 năm chuyên sâu trong lĩnh vực sức khỏe bàn chân.
             </p>
             <h3 className="text-2xl font-semibold text-blue-900">NAGEN</h3>
             <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed">
               <li>
                 "Na" khởi nguồn nhân duyên từ Runa, cùng với Runa nuôi dưỡng sức khỏe thân tâm, "Na" cũng là Naturally "Một cách tự nhiên".
               </li>
               <li>
                 "Gen" là DNA - vật chất di truyền, là Generation - nhiều thế hệ.
               </li>
             </ul>
             <p className="text-gray-600 text-lg leading-relaxed">
               Nagen là một ý niệm, hành động nhất quán giúp con người trở về bản nguyên, thuận tự nhiên, cân bằng cơ thể bằng tấm lót hỗ trợ vòm bàn chân đáng tin cậy. Khi biết sản phẩm tuyệt vời này đã giúp đỡ hàng triệu người trên toàn thế giới, chúng tôi vô cùng ngạc nhiên, quả là một kho tàng trí tuệ có thể giúp ích cho bao thế hệ người Việt một cách tự nhiên.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Chúng tôi nhận thấy rất nhiều người dân Việt Nam đang gặp vấn đề từ mất cân bằng bàn chân, có quá nhiều trẻ em và người lớn bị bàn chân bẹt, bàn chân kiễng, dáng chân võng kiềng, hình chữ bát, các vấn đề như cong vẹo cột sống, gù lưng, đau nhức các khớp xương, đau cơ, viêm cân gan chân, suy giãn tĩnh mạch, đau lưng, mỏi cổ, mỏi vai, viêm cân Achines… Thể trạng béo phì, mang bầu, đi bộ, chạy bộ hay chơi các môn thể thao đều áp lực lên xương khớp và vòm bàn chân. Đặc biệt sự thay đổi tuổi tác ở người cao tuổi có thể ảnh hưởng đến khả năng giữ thăng bằng nên rất dễ té ngã.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Và, chúng tôi mong muốn mang lại sức khỏe, hạnh phúc và niềm vui cho người dân Việt Nam. Mang “Tấm lót hỗ trợ vòm bàn chân trở thành sự nuôi dưỡng thiết yếu cho mọi người dân Việt Nam, từ khi bạn lên 6 đến khi bạn già đi, tôi với bạn là Hình với bóng. Mọi con thôn đến thành phố, mỗi bước chân bạn đi được nuôi dưỡng bằng tấm lót hỗ trợ vòm bàn chân tốt nhất”.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               Chúng tôi tin tưởng những tấm lót hỗ trợ vòm bàn chân của chúng tôi là giải pháp tốt nhất để nhiều bệnh viện, phòng khám, phục hồi chức năng uy tín tại Việt Nam lựa chọn. Chúng tôi cùng hệ thống Đại lý luôn nỗ lực đồng hành cùng bạn trên mọi nẻo dải đường hình chữ S."
             </p>
           </div>

           <div className="space-y-6">
             <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden">
               <Image
                 src={getImagePath("/images/Logo2.png")}
                 alt="NAGEN Việt Nam"
                 width={600}
                 height={400}
                 className="object-cover w-full h-full"
                 loading="lazy"
               />
             </div>
           </div>
         </div>


       </div>
     </section>




      <Footer />
    </div>
  )
}
