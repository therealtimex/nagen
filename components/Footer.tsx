"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getImagePath } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NAGEN",
    "url": "https://nagen.vn",
    "logo": "https://nagen.vn/images/logo_slogan_1.png",
    "description": "NAGEN cung cấp sản phẩm tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ, giúp cải thiện tư thế và giảm đau chân hiệu quả.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84966578008",
      "contactType": "customer service",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://www.facebook.com/people/NAGEN/61576197860425/",
      "https://www.youtube.com/@nagenvn",
      "https://www.tiktok.com/@nagenvn"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VN",
      "addressLocality": "TP.HCM"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200" role="contentinfo">
        {/* Brand Colors Strip */}
        <div className="w-full h-2">
          <div className="bg-red-600 w-full h-1"></div>
          <div className="bg-[#21395D] w-full h-1"></div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* LOGO NAGEN Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image
                    src={getImagePath("/images/logo_slogan_1.png")}
                    alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                    width={180}
                    height={36}
                    className="h-auto"
                    title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
                  />
                </Link>
              </div>

              <nav aria-label="Company navigation">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/thong-diep-ceo"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Thông điệp từ CEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gioi-thieu-nagen"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Giới thiệu Nagen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tuyen-dung"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tuyển dụng
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#dealers"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Danh sách đại lý
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#dealers"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Danh sách cửa hàng
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Copyright */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 leading-relaxed">
                  © {currentYear} Bản quyền thuộc về Công ty TNHH Nagen
                </p>
              </div>

              {/* Social Media */}
              <div className="mt-4">
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/people/NAGEN/61576197860425/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Theo dõi NAGEN trên Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@nagenvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    aria-label="Theo dõi NAGEN trên YouTube"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@nagenvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label="Theo dõi NAGEN trên TikTok"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* SẢN PHẨM Column */}
            <div>
              <h3 className="font-bold text-[#21395D] mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
                SẢN PHẨM
              </h3>
              <nav aria-label="Products navigation">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=sungen"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tấm lót hỗ trợ vòm bàn chân Sungen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=winagen"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tấm lót hỗ trợ vòm bàn chân Winagen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=softgen"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tấm lót hỗ trợ vòm bàn chân Softgen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=endurance"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tấm lót hỗ trợ vòm bàn chân Endurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=silhouette"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Tấm lót hỗ trợ vòm bàn chân Silhouette
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tat-ca-san-pham?category=demlotcaosu"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Đệm lót giày cao su xốp thiên nhiên
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* HỖ TRỢ Column */}
            <div>
              <h3 className="font-bold text-[#21395D] mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
                HỖ TRỢ
              </h3>
              <nav aria-label="Support navigation">
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('contact')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block text-left w-full"
                    >
                      Đặt lịch tư vấn
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        // Trigger appointment modal by dispatching custom event
                        window.dispatchEvent(new CustomEvent('openAppointmentModal'))
                      }}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block text-left w-full"
                    >
                      Đặt lịch đo chân
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const partnersSection = document.getElementById('partners')
                        if (partnersSection) {
                          partnersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block text-left w-full"
                    >
                      Đăng ký đại lý
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Câu hỏi thường gặp
                    </Link>
                  </li>
                  <li>
                    <a
                      href="tel:0966578008"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Hotline: 0966578008
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:nagen@nagen.vn"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Email: nagen@nagen.vn
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* PHÁP LÝ Column */}
            <div>
              <h3 className="font-bold text-[#21395D] mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
                PHÁP LÝ
              </h3>
              <nav aria-label="Legal navigation">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/chinh-sach-bao-mat"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Chính sách bảo mật
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chinh-sach-dai-ly"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Chính sách đại lý
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chinh-sach-san-pham"
                      className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block"
                    >
                      Chính sách sản phẩm
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}