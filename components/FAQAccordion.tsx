"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
  image: string;
  description: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  onFaqSelect: (index: number) => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, onFaqSelect }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    onFaqSelect(index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-md">
          <div
            className="flex items-center justify-between p-4 cursor-pointer text-blue-900 hover:bg-red-50 active:bg-red-100"
            onClick={() => handleAccordionClick(index)}
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <svg
              className={`w-5 h-5 transition-transform transform ${activeIndex === index ? 'rotate-180 text-red-500' : 'text-blue-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 rounded-md text-blue-800">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;