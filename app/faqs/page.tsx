"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  Menu,
  ChevronDown,
  Zap,
  Shield,
  Truck,
  Award,
  MessageCircle,
  Calendar,
  CheckCircle,
  Target,
  Send,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { getImagePath, navigateTo } from "@/lib/utils";
import FAQAccordion from '@/components/FAQAccordion';
import NoSSRWrapper from "@/components/NoSSRWrapper";

const faqs = [
  {
    question: 'Hỗ trợ vòm bàn chân là gì?',
    answer: 'Đệm lót vòm bàn chân là thiết bị hỗ trợ bàn chân được thiết kế đặc biệt, đeo bên trong giày.\n\nĐệm lót vòm bàn chân của chúng tôi được thiết kế theo cơ chế sinh học để định vị chính xác xương, dây chằng, cơ và gân của bàn chân, đồng thời hỗ trợ toàn bộ bốn vòm bàn chân.\n\nTư thế đúng rất quan trọng vì khi cơ thể được đặt đúng vị trí, nó có thể hoạt động hiệu quả hơn, giảm đau và mệt mỏi trong nhiều trường hợp, đồng thời tăng cường hiệu suất thể thao.',
    image: "/public/images/faqs/faq1.png",
    description: "Một thiết bị giúp bạn rời khỏi ghế sofa!"
  },
  {
    question: 'Sự khác biệt giữa dụng cụ hỗ trợ vòm và các thiết bị được thiết kế riêng là gì?',
    answer: 'Một thiết bị được thiết kế riêng, mặc dù hữu ích trong một số trường hợp nhất định, nhưng sẽ không giúp bàn chân của bạn chịu được toàn bộ trọng lượng cơ thể trên vòm bàn chân như mong muốn. Các thiết bị này bắt đầu bằng việc lấy dấu bàn chân của bạn từ máy quét, một hộp xốp mà bạn đặt chân vào, hoặc một khuôn thạch cao.\n\nTám mươi phần trăm các vấn đề liên quan đến bàn chân có thể được giải quyết bằng một tấm lót vòm bàn chân đúc sẵn vừa vặn như của chúng tôi. Tấm lót vòm bàn chân của chúng tôi có thể là một giải pháp thay thế tiết kiệm chi phí hơn cho nhiều người.',
    image: "/public/images/faqs/faq2.png",
    description: "So sánh dụng cụ hỗ trợ vòm và thiết kế riêng."
  },
  {
    question: 'Sản phẩm hỗ trợ vòm chân của bạn khác với sản phẩm của các cửa hàng thuốc hoặc bách hóa như thế nào?',
    answer: 'Đệm lót vòm bàn chân tại các hiệu thuốc hoặc cửa hàng bách hóa thường được thiết kế để vừa với nhiều kích cỡ vòm bàn chân, hoặc tệ hơn, nhiều cỡ giày. Điều này có nghĩa là chúng thường không có hoặc có rất ít sự hỗ trợ cho vòm xương bàn chân. Điều quan trọng là đệm lót xương bàn chân phải được đặt đúng vị trí.\n\nKhi được đặt đúng vị trí, đệm lót xương bàn chân sẽ giảm áp lực lên phần trước bàn chân và giúp cân bằng cơ thể.\n\nĐiều này sẽ giúp cơ thể hoạt động hiệu quả hơn.\n\nBạn sẽ không bao giờ thấy sản phẩm nào của chúng tôi có kích cỡ dành cho "Nam 8-10". Các kích cỡ của chúng tôi được thiết kế nhỏ hơn một nửa cỡ giày để đảm bảo vừa vặn hoàn hảo và mang lại hiệu suất tối ưu.',
    image: "/public/images/faqs/faq3.png",
    description: "Details about our warranty policy."
  },
  {
    question: 'Đệm vòm chân của bạn có vừa với tất cả các loại giày dép của tôi không?',
    answer: 'Bạn không cần giày chuyên dụng để mang miếng lót vòm bàn chân của chúng tôi, nhưng bạn cần một đôi giày vừa vặn, dù bạn có mang miếng lót vòm bàn chân của chúng tôi hay không. Miếng lót vòm bàn chân của chúng tôi sẽ vừa với hầu hết các loại giày, nhưng hãy nhớ rằng các nhà sản xuất giày tự phát triển mẫu giày riêng (gọi là khuôn giày) để sản xuất giày.\n\nDo đó, không có kích cỡ giày tiêu chuẩn. Nếu bạn quen mang giày cỡ 9 cho một đôi giày cụ thể, bạn có thể cần cỡ 9 1/2 hoặc 8 1/2 với kiểu dáng tương tự của một nhà sản xuất khác; bạn cũng có thể mang giày lớn hơn hoặc rộng hơn vào mùa đông so với mùa hè, để phù hợp với tất hoặc tất dài dày hơn.\n\nChúng tôi đặc biệt khuyến khích người dùng mang theo miếng lót vòm bàn chân khi thử giày mới.',
    image: "/public/images/faqs/faq4.png",
    description: "Details about our warranty policy."
  },
  {
    question: 'Phải mất bao lâu tôi mới bắt đầu cảm thấy thoải mái khi sử dụng đệm vòm chân?',
    answer: 'Nếu bạn đang bị đau chân, có lẽ cơn đau không bắt đầu từ hôm qua. Tương tự như vậy, nếu bạn mới bắt đầu sử dụng miếng lót vòm bàn chân của chúng tôi, bạn có thể sẽ cần một thời gian để làm quen.\n\nThời gian sử dụng miếng lót vòm bàn chân phụ thuộc rất nhiều vào từng cá nhân, và đây không phải là một cuộc đua nên không có khoảng thời gian "đúng" để bàn chân bạn thích nghi với miếng lót vòm bàn chân.\n\nNhiều loại đau chân có thể được giảm bớt gần như ngay lập tức sau khi sử dụng miếng lót vòm bàn chân, đặc biệt là đau gót chân, xương bàn chân và bàn chân trước.\n\nCác vấn đề liên quan đến tình trạng quá phát và vòm bàn chân sụp có thể mất nhiều thời gian hơn một chút.\n\nĐiều quan trọng nhất bạn có thể làm là làm theo hướng dẫn sử dụng miếng lót vòm bàn chân.',
    image: "/public/images/faqs/faq5.png",
    description: "Details about our warranty policy."
  },
  {
    question: 'Ai nên sử dụng đệm vòm chân?',
    answer: 'Đệm vòm bàn chân có thể giúp ích nếu bạn bị đau hoặc khó chịu ở chân do mất cân bằng sinh học như bàn chân bẹt hoặc vòm bàn chân cao. Nếu công việc đòi hỏi bạn phải đứng liên tục, đệm vòm bàn chân có thể giúp cải thiện tư thế của bạn. Một số vấn đề thường gặp ở chân cũng có thể được giải quyết bằng cách sử dụng đệm vòm bàn chân.\n\nLý do phổ biến nhất khiến một người quyết định dùng đệm vòm bàn chân của chúng tôi là do đau dai dẳng ở bàn chân, chân, mắt cá chân, lưng hoặc đầu gối.\n\nNhưng đó chỉ là một phần của câu chuyện.\n\nNhiều người, ở mọi lứa tuổi, sử dụng đệm vòm bàn chân để cải thiện sự cân bằng, khả năng vận động, sức mạnh và sức bền. Nếu bạn muốn biết chúng tôi có thể làm điều đó như thế nào, hãy xem các nghiên cứu của chúng tôi tại đây.\n\nCho dù bạn đang mong chờ những chuyến đi bộ không đau dọc bãi biển hay đi bộ đường dài, hay đạt được hiệu suất cao nhất trong bất kỳ hoạt động thể thao nào, đệm vòm bàn chân của chúng tôi có thể chính là thứ bạn đang tìm kiếm.',
    image: "/public/images/faqs/faq6.png",
    description: "Details about our warranty policy."
  },
  {
    question: 'Tôi nên biết điều gì về cách bảo dưỡng vòm chân để kéo dài tuổi thọ hiệu quả của chúng?',
    answer: 'Đệm vòm chân có thể sử dụng được trong nhiều năm và hầu như không cần bảo trì.\n\nVì được làm từ polymer rất giống với polymer dùng trong giày thể thao, bạn nên tránh để chúng ở những nơi quá nóng như bộ tản nhiệt, bảng điều khiển xe hơi, v.v.\n\nNgoài ra, chó thường rất thích chúng, nhưng chúng là loại đệm tốt hơn đồ chơi gặm nhấm, vì vậy bạn nên để chúng ở nơi chó cưng không thể với tới. Chó ngoan nhé.\n\nBạn có thể rửa đệm vòm chân bằng nước xà phòng ấm, dùng chất tẩy rửa nhẹ và bàn chải để chúng trông như mới.',
    image: "/public/images/faqs/faq7.png",
    description: "Details about our warranty policy."
  },
  {
    question: 'Tôi nên biết điều gì về cách bảo dưỡng vòm chân để kéo dài tuổi thọ hiệu quả của chúng?',
    answer: 'Đệm vòm chân có thể sử dụng được trong nhiều năm và hầu như không cần bảo trì.\n\nVì được làm từ polymer rất giống với polymer dùng trong giày thể thao, bạn nên tránh để chúng ở những nơi quá nóng như bộ tản nhiệt, bảng điều khiển xe hơi, v.v.\n\nNgoài ra, chó thường rất thích chúng, nhưng chúng là loại đệm tốt hơn đồ chơi gặm nhấm, vì vậy bạn nên để chúng ở nơi chó cưng không thể với tới. Chó ngoan nhé.\n\nBạn có thể rửa đệm vòm chân bằng nước xà phòng ấm, dùng chất tẩy rửa nhẹ và bàn chải để chúng trông như mới.',
    image: "/public/images/faqs/faq8.png",
    description: "Details about our warranty policy."
  }
];

const logo = require("/public/images/logo_ngang.png");

const FAQPage = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(0);

  const handleFaqSelect = (index: number) => {
    console.log('Selected FAQ index:', index);
    setSelectedFaq(index);
  };

  const handleSoftgenClick = () => {
    navigateTo("/tat-ca-san-pham?category=softgen");
  };

  const handleWinagenClick = () => {
    navigateTo("/tat-ca-san-pham?category=winagen");
  };

  const handleEnduranceClick = () => {
    navigateTo("/tat-ca-san-pham?category=endurance");
  };

  const handleSilhouetteClick = () => {
    navigateTo("/tat-ca-san-pham?category=silhouette");
  };

  const handleHuongDanSuDungClick = () => {
    navigateTo("/huong-dan-su-dung");
  };

  const handleChinhSachBaoHanhClick = () => {
    navigateTo("/chinh-sach-bao-hanh");
  };

  const handleChinhSachDoiTraClick = () => {
    navigateTo("/chinh-sach-doi-tra");
  };

  const handleChinhSachVanChuyenClick = () => {
    navigateTo("/chinh-sach-van-chuyen");
  };


  return (
    <React.Fragment>
      <div className="bg-[#21395D] text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              024 35632008
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

      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 relative`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo_ngang.png"
                alt="Nagen Logo"
                width={200}
                height={40}
                priority
                style={{objectFit: 'contain'}}
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-[8px]">
          <div className="bg-red-600 w-full !h-[8px] md:!h-[12px]"></div>
          <div className="bg-[#21395D] w-full !h-[8px] md:!h-[12px]"></div>
        </div>
      </header>
      <div className="bg-white">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-semibold text-blue-900 mb-5">Frequently Asked Questions</h1>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="md:col-span-2">
              <FAQAccordion faqs={faqs} onFaqSelect={handleFaqSelect} />
            </div>
            <div className="hidden md:block">
              {selectedFaq !== null && (
                <div className="rounded-md shadow-md p-4">
                  <Image
                    src={faqs[selectedFaq].image}
                    alt={faqs[selectedFaq].question}
                    width={300}
                    height={225}
                    className="rounded-md mb-2 shadow-lg object-contain"
                    priority
                  />
                  <p className="text-sm text-gray-600">{faqs[selectedFaq].description}</p>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            {selectedFaq !== null && (
              <div className="rounded-md shadow-md p-4 mt-8">
                <Image
                  src={faqs[selectedFaq].image}
                  alt={faqs[selectedFaq].question}
                  width={300}
                  height={225}
                  className="rounded-md mb-2 shadow-lg object-contain"
                  style={{objectFit: 'contain'}}
                  priority
                />
                <p className="text-sm text-gray-600">{faqs[selectedFaq].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-[#21395D] text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-white">NA</span>
                <span className="text-red-400">GE</span>
                <span className="text-white">N</span>
              </div>
              <p className="text-blue-200 mb-6">
                Đối tác tin cậy trong việc chăm sóc sức khỏe bàn chân của bạn. Chất lượng - Uy tín - Chuyên nghiệp.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/NAGEN/61576197860425/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors hover:scale-110 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@nagenvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors hover:scale-110 cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@nagenvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors hover:scale-110 cursor-pointer"
                  aria-label="TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M9 4.58A4.56 4.56 0 0 0 6.43 7.13 4.56 4.56 0 0 0 4 9.71a4.56 4.56 0 0 0 2.43 2.55 4.56 4.56 0 0 0 2.57 1.21v-4.58a4.58 4.58 0 0 1 4.58-4.58h2.29V15a2.29 2.29 0 0 1-2.29 2.29H9v-4.58a2.29 2.29 0 0 0-2.29-2.29h-2.29v-2.29h2.29A2.29 2.29 0 0 1 9 4.58z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/nagen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors hover:scale-110 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://zalo.me/nagen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors hover:scale-110 cursor-pointer"
                  aria-label="Zalo"
                >
                  <Zap className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a
                    href="#"
                    onClick={handleSoftgenClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Sungen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleWinagenClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Winagen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleSoftgenClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Softgen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleEnduranceClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Endurance™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleSilhouetteClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Silhouette™
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a
                    href="#"
                    onClick={handleHuongDanSuDungClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleChinhSachBaoHanhClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách bảo hành
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Pháp lý</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Điều khoản sử dụng
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleChinhSachDoiTraClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleChinhSachVanChuyenClick}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </footer>
    </React.Fragment>
  );
};

export default FAQPage;