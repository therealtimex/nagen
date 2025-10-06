"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Clock } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* LOGO NAGEN Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src={getImagePath("/images/logo_slogan_1.png")}
                  alt="Nagen Logo"
                  width={180}
                  height={36}
                  className="h-auto"
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
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@nagenvn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@nagenvn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="TikTok"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* SẢN PHẨM Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
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
            <h3 className="font-bold text-gray-800 mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
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
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2 text-red-600" />
                    Hotline: 0966578008
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:nagen@nagen.vn"
                    className="text-gray-600 hover:text-red-600 transition-colors text-sm leading-relaxed block flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2 text-red-600" />
                    Email: nagen@nagen.vn
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* PHÁP LÝ Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-lg border-b-2 border-red-600 pb-2 inline-block">
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

      {/* Brand Colors Strip */}
      <div className="w-full h-2">
        <div className="bg-red-600 w-full h-1"></div>
        <div className="bg-[#21395D] w-full h-1"></div>
      </div>
    </footer>
  )
}