"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from '@/components/FAQAccordion';

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
    description: "Sự cân bằng rất quan trọng ở đây… "
  },
];

const FAQPage = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  const handleFaqSelect = (index: number) => {
    setSelectedFaq(index);
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div>
          <FAQAccordion faqs={faqs} onFaqSelect={handleFaqSelect} />
        </div>
        <div>
          {selectedFaq !== null && (
            <div>
              <Image src={faqs[selectedFaq].image} alt={faqs[selectedFaq].question} width={300} height={225} />
              <p>{faqs[selectedFaq].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQPage;