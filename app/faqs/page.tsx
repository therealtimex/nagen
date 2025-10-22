"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Mail, Clock, Menu, ChevronDown, Facebook, Youtube, Instagram, MapPin, X, Send, CheckCircle, Calendar, User } from "lucide-react";
import FAQAccordion from '@/components/FAQAccordion';
import { getImagePath, navigateTo } from "@/lib/utils";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm";

const faqs = [
  {
    question: 'Hỗ trợ vòm bàn chân là gì?',
    answer: 'Đệm lót vòm bàn chân là thiết bị hỗ trợ bàn chân được thiết kế đặc biệt, đeo bên trong giày.\n\nĐệm lót vòm bàn chân của chúng tôi được thiết kế theo cơ chế sinh học để định vị chính xác xương, dây chằng, cơ và gân của bàn chân, đồng thời hỗ trợ toàn bộ bốn vòm bàn chân.\n\nTư thế đúng rất quan trọng vì khi cơ thể được đặt đúng vị trí, nó có thể hoạt động hiệu quả hơn, giảm đau và mệt mỏi trong nhiều trường hợp, đồng thời tăng cường hiệu suất thể thao.',
    image: "/images/faqs/faq1.png",
    description: "Một thiết bị giúp bạn rời khỏi ghế sofa!"
  },
  {
    question: 'Sự khác biệt giữa dụng cụ hỗ trợ vòm và các thiết bị được thiết kế riêng là gì?',
    answer: 'Một thiết bị được thiết kế riêng, mặc dù hữu ích trong một số trường hợp nhất định, nhưng sẽ không giúp bàn chân của bạn chịu được toàn bộ trọng lượng cơ thể trên vòm bàn chân như mong muốn. Các thiết bị này bắt đầu bằng việc lấy dấu bàn chân của bạn từ máy quét, một hộp xốp mà bạn đặt chân vào, hoặc một khuôn thạch cao.\n\nTám mươi phần trăm các vấn đề liên quan đến bàn chân có thể được giải quyết bằng một tấm lót vòm bàn chân đúc sẵn vừa vặn như của chúng tôi. Tấm lót vòm bàn chân của chúng tôi có thể là một giải pháp thay thế tiết kiệm chi phí hơn cho nhiều người.',
    image: "/images/faqs/faq2.png",
    description: "Sự cân bằng rất quan trọng ở đây…"
  },
  {
    question: 'Sản phẩm hỗ trợ vòm chân của bạn khác với sản phẩm của các cửa hàng thuốc hoặc bách hóa như thế nào?',
    answer: 'Đệm lót vòm bàn chân tại các hiệu thuốc hoặc cửa hàng bách hóa thường được thiết kế để vừa với nhiều kích cỡ vòm bàn chân, hoặc tệ hơn, nhiều cỡ giày. Điều này có nghĩa là chúng thường không có hoặc có rất ít sự hỗ trợ cho vòm xương bàn chân. Điều quan trọng là đệm lót xương bàn chân phải được đặt đúng vị trí.\n\nKhi được đặt đúng vị trí, đệm lót xương bàn chân sẽ giảm áp lực lên phần trước bàn chân và giúp cân bằng cơ thể.\n\nĐiều này sẽ giúp cơ thể hoạt động hiệu quả hơn.\n\nBạn sẽ không bao giờ thấy sản phẩm nào của chúng tôi có kích cỡ dành cho "Nam 8-10". Các kích cỡ của chúng tôi được thiết kế nhỏ hơn một nửa cỡ giày để đảm bảo vừa vặn hoàn hảo và mang lại hiệu suất tối ưu.',
    image: "/images/faqs/faq3.jpg",
    description: "Sự cân bằng rất quan trọng ở đây!"
  },
  {
    question: 'Đệm vòm chân của bạn có vừa với tất cả các loại giày dép của tôi không?',
    answer: 'Bạn không cần giày chuyên dụng để mang miếng lót vòm bàn chân của chúng tôi, nhưng bạn cần một đôi giày vừa vặn, dù bạn có mang miếng lót vòm bàn chân của chúng tôi hay không. Miếng lót vòm bàn chân của chúng tôi sẽ vừa với hầu hết các loại giày, nhưng hãy nhớ rằng các nhà sản xuất giày tự phát triển mẫu giày riêng (gọi là khuôn giày) để sản xuất giày.\n\nDo đó, không có kích cỡ giày tiêu chuẩn. Nếu bạn quen mang giày cỡ 9 cho một đôi giày cụ thể, bạn có thể cần cỡ 9 1/2 hoặc 8 1/2 với kiểu dáng tương tự của một nhà sản xuất khác; bạn cũng có thể mang giày lớn hơn hoặc rộng hơn vào mùa đông so với mùa hè, để phù hợp với tất hoặc tất dài dày hơn.\n\nChúng tôi đặc biệt khuyến khích người dùng mang theo miếng lót vòm bàn chân khi thử giày mới.',
    image: "/images/faqs/faq4.jpg",
    description: "Không cần phải từ bỏ đôi bốt cao bồi của bạn!"
  },
  {
    question: 'Phải mất bao lâu tôi mới bắt đầu cảm thấy thoải mái khi sử dụng đệm vòm chân?',
    answer: 'Nếu bạn đang bị đau chân, có lẽ cơn đau không bắt đầu từ hôm qua. Tương tự như vậy, nếu bạn mới bắt đầu sử dụng miếng lót vòm bàn chân của chúng tôi, bạn có thể sẽ cần một thời gian để làm quen.\n\nThời gian sử dụng miếng lót vòm bàn chân phụ thuộc rất nhiều vào từng cá nhân, và đây không phải là một cuộc đua nên không có khoảng thời gian "đúng" để bàn chân bạn thích nghi với miếng lót vòm bàn chân.\n\nNhiều loại đau chân có thể được giảm bớt gần như ngay lập tức sau khi sử dụng miếng lót vòm bàn chân, đặc biệt là đau gót chân, xương bàn chân và bàn chân trước.\n\nCác vấn đề liên quan đến tình trạng quá phát và vòm bàn chân sụp có thể mất nhiều thời gian hơn một chút.\n\nĐiều quan trọng nhất bạn có thể làm là làm theo hướng dẫn sử dụng miếng lót vòm bàn chân.',
    image: "/images/faqs/faq5.jpg",
    description: "Bạn bè đang trông cậy vào bạn!"
  },
  {
    question: 'Ai nên sử dụng đệm vòm chân?',
    answer: 'Đệm vòm bàn chân có thể giúp ích nếu bạn bị đau hoặc khó chịu ở chân do mất cân bằng sinh học như bàn chân bẹt hoặc vòm bàn chân cao. Nếu công việc đòi hỏi bạn phải đứng liên tục, đệm vòm bàn chân có thể giúp cải thiện tư thế của bạn. Một số vấn đề thường gặp ở chân cũng có thể được giải quyết bằng cách sử dụng đệm vòm bàn chân.\n\nLý do phổ biến nhất khiến một người quyết định dùng đệm vòm bàn chân của chúng tôi là do đau dai dẳng ở bàn chân, chân, mắt cá chân, lưng hoặc đầu gối.\n\nNhưng đó chỉ là một phần của câu chuyện.\n\nNhiều người, ở mọi lứa tuổi, sử dụng đệm vòm bàn chân để cải thiện sự cân bằng, khả năng vận động, sức mạnh và sức bền. Nếu bạn muốn biết chúng tôi có thể làm điều đó như thế nào, hãy xem các nghiên cứu của chúng tôi tại đây.\n\nCho dù bạn đang mong chờ những chuyến đi bộ không đau dọc bãi biển hay đi bộ đường dài, hay đạt được hiệu suất cao nhất trong bất kỳ hoạt động thể thao nào, đệm vòm bàn chân của chúng tôi có thể chính là thứ bạn đang tìm kiếm.',
    image: "/images/faqs/faq6.jpg",
    description: "Các vấn đề về bàn chân có thể xảy ra ở mọi lứa tuổi."
  },
  {
    question: 'Tôi nên biết điều gì về cách bảo dưỡng vòm chân để kéo dài tuổi thọ hiệu quả của chúng?',
    answer: 'Đệm vòm chân có thể sử dụng được trong nhiều năm và hầu như không cần bảo trì.\n\nVì được làm từ polymer rất giống với polymer dùng trong giày thể thao, bạn nên tránh để chúng ở những nơi quá nóng như bộ tản nhiệt, bảng điều khiển xe hơi, v.v.\n\nNgoài ra, chó thường rất thích chúng, nhưng chúng là loại đệm tốt hơn đồ chơi gặm nhấm, vì vậy bạn nên để chúng ở nơi chó cưng không thể với tới. Chó ngoan nhé.\n\nBạn có thể rửa đệm vòm chân bằng nước xà phòng ấm, dùng chất tẩy rửa nhẹ và bàn chải để chúng trông như mới.\n\nÍt nhất thì chúng cũng sẽ trông đẹp hơn.',
    image: "/images/faqs/faq7.jpg",
    description: "Không, thực ra việc bảo quản rất dễ!"
  }
];

// Enhanced Navigation Component
function EnhancedNavigation() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Sản phẩm",
      href: "#products",
      submenu: [
        { name: "Tấm lót hỗ trợ vòm bàn chân Sungen", href: "/tat-ca-san-pham?category=sungen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Winagen", href: "/tat-ca-san-pham?category=winagen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Softgen", href: "/tat-ca-san-pham?category=softgen" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Endurance", href: "/tat-ca-san-pham?category=endurance" },
        { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette", href: "/tat-ca-san-pham?category=silhouette" },
        { name: "Đệm lót giày cao su xốp thiên nhiên", href: "/tat-ca-san-pham?category=demlotcaosu" },
      ],
    },
    { name: "Dịch vụ", href: "/#services" },
    { name: "Đối tác", href: "/#partners" },
    { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
    { name: "Sự kiện", href: "/su-kien" },
    { name: "Liên hệ", href: "/#contact" },
    { name: "FAQs", href: "/faqs" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/") || href.startsWith("http")) {
      navigateTo(href);
      return;
    }
    // Handle anchor links for homepage
    if (href.startsWith("/#")) {
      navigateTo(href);
      return;
    }
  };

  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-[#21395D] text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              0966578008
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              nagen@nagen.vn
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              T2-CN: 24/24
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-[1001] bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="Nagen Logo"
                  width={200}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                          }}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-6 mt-8">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                      >
                        {item.name}
                      </a>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-blue-900"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(subItem.href);
                              }}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="w-full h-[8px]">
          <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
          <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
        </div>
      </header>
    </>
  );
}







const FAQPage = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleFaqSelect = (index: number) => {
    setSelectedFaq(index);
  };

  // Handle custom events from Footer
  useEffect(() => {
    const handleOpenUnifiedRegistration = () => {
      setIsConsultationModalOpen(true);
    };

    window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration);

    return () => {
      window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration);
    };
  }, []);

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <>
      {/* SEO Structured Data - LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NAGEN Vietnam",
            "description": "Chuyên cung cấp tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ, dịch vụ tư vấn và đo vòm bàn chân tại nhà miễn phí toàn quốc.",
            "url": "https://nagen.vn",
            "telephone": "+84966578008",
            "email": "nagen@nagen.vn",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tầng 7, Tòa VP-1, Sunsquare Complex, Số 21 Lê Đức Thọ",
              "addressLocality": "Mỹ Đình 2, Nam Từ Liêm",
              "addressRegion": "Hà Nội",
              "addressCountry": "VN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.038134",
              "longitude": "105.780147"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "image": "https://nagen.vn/images/logo_slogan_1.png",
            "logo": "https://nagen.vn/images/logo_slogan_1.png",
            "sameAs": [
              "https://facebook.com/nagen.vietnam",
              "https://instagram.com/nagen.vietnam",
              "https://youtube.com/@nagen.vietnam",
              "https://tiktok.com/@nagen.vietnam"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+84966578008",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
                "areaServed": "VN"
              }
            ]
          })
        }}
      />

      <EnhancedNavigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Câu Hỏi Thường Gặp
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tìm hiểu thêm về sản phẩm đệm lót vòm bàn chân của chúng tôi qua những câu hỏi phổ biến nhất
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Danh sách câu hỏi
                </h2>
                <FAQAccordion faqs={faqs} onFaqSelect={handleFaqSelect} />
              </div>
            </div>

            {/* Image Display */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hình ảnh minh họa
                </h3>
                {selectedFaq !== null && (
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg bg-gray-50">
                      <Image
                        src={getImagePath(faqs[selectedFaq].image)}
                        alt={faqs[selectedFaq].question}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105 max-h-80"
                      />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium italic">
                        "{faqs[selectedFaq].description}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vẫn còn thắc mắc?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, đừng ngần ngại liên hệ với chúng tôi.
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
                onClick={openConsultationModal}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Đặt lịch tư vấn miễn phí
              </Button>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
                onClick={() => navigateTo("tel:0966578008")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Gọi ngay: 0966578008
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Consultation Modal */}
      <UnifiedRegistrationForm
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />
    </>
  );
};

export default FAQPage;
