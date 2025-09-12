"use client";
import React, { useState } from 'react';
import Image from "next/image";
import FAQAccordion from '@/components/FAQAccordion';

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

const FAQPage = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  const handleFaqSelect = (index: number) => {
    setSelectedFaq(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Câu Hỏi Thường Gặp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={faqs[selectedFaq].image}
                      alt={faqs[selectedFaq].question}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
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

        </div>
      </div>
    </div>
  );
};

export default FAQPage;
