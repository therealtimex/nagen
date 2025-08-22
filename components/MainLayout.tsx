"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { getImagePath, navigateTo } from "@/lib/utils";

// Enhanced Navigation with Submenus
function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const menuItems = [
    {
      name: "Sản phẩm",
      href: "#products",
      submenu: [
        { name: "Sungen™", href: "#sungen" },
        { name: "Winagen™", href: "#winagen" },
        { name: "Softgen™", href: "#softgen" },
        { name: "Endurance™", href: "#endurance" },
        { name: "Silhouette™", href: "#silhouette" },
        { name: "Đệm lót cao su tự nhiên", href: "#demlotcaosu" },
      ],
    },
    { name: "Dịch vụ", href: "#services" },
    { name: "Đại lý", href: "#dealers" },
    { name: "Đối tác", href: "#partners" },
    { name: "Giới thiệu", href: "#about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        } border-b border-gray-200 relative`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={getImagePath("/images/logo_ngang.png")}
                alt="Nagen Logo"
                width={200}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
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
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
        <div className="w-full h-[8px]">
          <div className="bg-red-600 w-full !h-[8px] md:!h-[12px]"></div>
          <div className="bg-[#21395D] w-full !h-[8px] md:!h-[12px]"></div>
        </div>
      </header>
    </>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <EnhancedNavigation />
      <main>{children}</main>
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

              {/* Social Media Links */}
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
                    onClick={() => navigateTo("/tat-ca-san-pham?category=softgen")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Sungen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=winagen")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Winagen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=softgen")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Softgen™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=endurance")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Endurance™
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/tat-ca-san-pham?category=silhouette")}
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
                    onClick={() => navigateTo("/huong-dan-su-dung")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      navigateTo("/chinh-sach-bao-hanh");
                    }}
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
                    onClick={() => navigateTo("/chinh-sach-doi-tra")}
                    className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigateTo("/chinh-sach-van-chuyen")}
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
    </div>
  );
};

export default MainLayout;