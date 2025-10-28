"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Phone,
    Mail,
    Clock,
    Menu,
    ChevronDown,
    Calendar,
    User,
    ArrowRight,
    BookOpen,
    Heart,
    Users,
    Eye,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getImagePath, navigateTo } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"


// Standardized CTA Button Component
function CTAButton({
    children,
    variant = "primary",
    size = "default",
    className = "",
    ...props
}: {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "default" | "lg"
    className?: string
    [key: string]: any
}) {
    const baseClasses =
        "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variants = {
        primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500",
        secondary: "bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
        outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-blue-500",
        ghost: "text-blue-900 hover:bg-blue-50 focus:ring-blue-500",
    }
    const sizes = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
    }

    return (
        <Button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </Button>
    )
}

// Enhanced Navigation
function EnhancedNavigation({
    onConsultationClick,
    onAppointmentClick
}: {
    onConsultationClick: () => void
    onAppointmentClick: () => void
}) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
    const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null)
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                window.removeEventListener("scroll", handleScroll)
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                }
            }
        }
    }, [])

    const menuItems = [
        {
            name: "Sản phẩm",
            href: "#products",
            submenu: [
                { name: "Tấm lót hỗ trợ vòm bàn chân Sungen", href: "/san-pham/sungen" },
                { name: "Tấm lót hỗ trợ vòm bàn chân Winagen", href: "/san-pham/winagen" },
                { name: "Tấm lót hỗ trợ vòm bàn chân Softgen", href: "/san-pham/softgen" },
                { name: "Tấm lót hỗ trợ vòm bàn chân Endurance", href: "/san-pham/endurance" },
                { name: "Tấm lót hỗ trợ vòm bàn chân Silhouette", href: "/san-pham/silhouette" },
                { name: "Đệm lót giày cao su xốp thiên nhiên", href: "/san-pham/dem-lot-cao-su" },
            ],
        },
        {
            name: "Dịch vụ",
            href: "#",
            submenu: [
                { name: "Tư vấn sản phẩm", href: "#consultation", action: "consultation" },
                { name: "Đăng ký đo chân", href: "#appointment", action: "appointment" },
            ],
        },
        {
            name: "Vấn đề thường gặp",
            href: "#",
            submenu: [
                { name: "Bàn chân bẹt", href: "/van-de-thuong-gap/ban-chan-bet" },
                { name: "Chân chữ X, O", href: "/van-de-thuong-gap/chan-chu-x-o" },
                { name: "Thoát vị đĩa đệm", href: "/van-de-thuong-gap/thoat-vi-dia-dem" },
                { name: "Cong vẹo cột sống", href: "/van-de-thuong-gap/cong-veo-cot-song" },
                { name: "Suy giãn tĩnh mạch", href: "/van-de-thuong-gap/suy-gian-tinh-mach" },
                { name: "Đau cơ xương khớp", href: "/van-de-thuong-gap/dau-co-xuong-khop" },
                { name: "Mất cân bằng cấu trúc", href: "/van-de-thuong-gap/mat-can-bang-cau-truc" },
            ],
        },
        { name: "Đại lý", href: "/dai-ly" },
        { name: "Giới thiệu", href: "/gioi-thieu-nagen" },
        { name: "Blog kiến thức", href: "/blog-kien-thuc" },
        { name: "Tin tức", href: "/tin-tuc" },
        { name: "Nghiên cứu khoa học", href: "/studies" },
        { name: "Câu hỏi thường gặp", href: "/faqs" },
        { name: "Liên hệ", href: "/lien-he" },
    ]

    const handleMouseEnter = (itemName: string, hasSubmenu: boolean) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        if (hasSubmenu) {
            setActiveSubmenu(itemName)
        }
    }

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveSubmenu(null)
        }, 150)
    }

    const handleNavigation = (href: string, action?: string) => {
        if (action === "consultation") {
            onConsultationClick()
            return
        }
        if (action === "appointment") {
            onAppointmentClick()
            return
        }

        if (href.startsWith("/") || href.startsWith("http")) {
            navigateTo(href)
            return
        }

        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

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
            <header
                className={`sticky top-0 z-[1001] transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
                    } border-b border-gray-200 relative`}
            >
                <div className="container mx-auto px-4 py-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/" className="flex items-center space-x-3">
                                <Image
                                    src={getImagePath("/images/logo_slogan_1.png")}
                                    alt="NAGEN - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ"
                                    width={200}
                                    height={40}
                                    priority
                                    title="NAGEN - Thương hiệu tấm lót hỗ trợ vòm bàn chân hàng đầu"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4">
                            {menuItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => handleMouseEnter(item.name, !!item.submenu)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a
                                        href={item.href}
                                        className={`text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center py-4 px-2 ${item.name === "Blog kiến thức" ? "text-blue-900 font-semibold border-b-2 border-blue-900" : ""
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavigation(item.href)
                                        }}
                                    >
                                        {item.name}
                                        {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                                    </a>

                                    {item.submenu && activeSubmenu === item.name && (
                                        <>
                                            <div className="absolute top-full left-0 w-full h-2 bg-transparent z-40"></div>
                                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50">
                                                {item.submenu.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleNavigation(subItem.href, (subItem as any).action)
                                                        }}
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Navigation */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="lg:hidden bg-transparent border-gray-300 hover:bg-gray-100">
                                    <Menu className="h-6 w-6 text-gray-700" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="w-[280px] sm:w-[350px] p-0 z-[9999]" side="right">
                                <div className="flex flex-col h-full bg-white">
                                    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-900 to-red-600">
                                        <div className="text-lg font-semibold text-white">Menu</div>
                                    </div>

                                    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                                        {menuItems.map((item) => (
                                            <div key={item.name} className="mb-1">
                                                {item.submenu ? (
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="w-full text-left py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium flex items-center justify-between rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] touch-manipulation"
                                                            onClick={() => {
                                                                setMobileActiveSubmenu(
                                                                    mobileActiveSubmenu === item.name ? null : item.name
                                                                )
                                                            }}
                                                        >
                                                            <span className="text-base font-semibold">{item.name}</span>
                                                            <ChevronDown
                                                                className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${mobileActiveSubmenu === item.name ? 'rotate-180 text-blue-600' : 'text-gray-500'
                                                                    }`}
                                                            />
                                                        </button>

                                                        {mobileActiveSubmenu === item.name && (
                                                            <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-200 pl-4 animate-in slide-in-from-top-2 duration-300">
                                                                {item.submenu.map((subItem) => (
                                                                    <a
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        className="block text-sm text-gray-600 hover:text-blue-900 py-3 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-colors leading-relaxed min-h-[44px] flex items-center touch-manipulation"
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            handleNavigation(subItem.href, (subItem as any).action)
                                                                        }}
                                                                    >
                                                                        {subItem.name}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <a
                                                        href={item.href}
                                                        className={`block w-full py-4 px-4 text-gray-800 hover:text-blue-900 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-blue-200 min-h-[48px] flex items-center touch-manipulation ${item.name === "Blog kiến thức" ? "text-blue-900 font-semibold bg-blue-50 rounded" : ""
                                                            }`}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleNavigation(item.href)
                                                        }}
                                                    >
                                                        <span className="text-base font-semibold">{item.name}</span>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </nav>

                                    <div className="p-4 border-t bg-gray-50">
                                        <div className="text-center text-sm text-gray-500">
                                            <p>NAGEN - Tấm lót hỗ trợ vòm bàn chân</p>
                                            <p className="text-xs mt-1">Hotline: 0966578008</p>
                                        </div>
                                    </div>
                                </div>
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
    )
}

// Blog data
const blogPosts = [
    {
        id: 1,
        title: "Tầm quan trọng của việc chăm sóc bàn chân hàng ngày",
        excerpt: "Bàn chân là nền tảng của cơ thể, việc chăm sóc đúng cách sẽ giúp bạn duy trì sức khỏe tổng thể và phòng ngừa nhiều vấn đề về xương khớp.",
        category: "Chăm sóc sức khỏe",
        author: "Chuyên gia NAGEN",
        date: "2024-01-15",
        readTime: "5 phút đọc",
        views: 1250,
        image: "/images/blog/foot-care.jpg",
        tags: ["chăm sóc bàn chân", "sức khỏe", "phòng ngừa"],
        slug: "cham-soc-ban-chan-hang-ngay"
    },
    {
        id: 2,
        title: "Hiểu về vòm bàn chân và tầm quan trọng của nó",
        excerpt: "Vòm bàn chân đóng vai trò quan trọng trong việc hấp thụ lực tác động và duy trì thăng bằng. Tìm hiểu cách bảo vệ và hỗ trợ vòm bàn chân hiệu quả.",
        category: "Kiến thức chuyên môn",
        author: "BS. Nguyễn Văn A",
        date: "2024-01-10",
        readTime: "7 phút đọc",
        views: 980,
        image: "/images/blog/foot-arch.jpg",
        tags: ["vòm bàn chân", "giải phẫu", "chức năng"],
        slug: "hieu-ve-vom-ban-chan"
    },
    {
        id: 3,
        title: "Lựa chọn giày phù hợp cho từng loại bàn chân",
        excerpt: "Mỗi loại bàn chân cần một kiểu giày khác nhau. Hướng dẫn chi tiết cách chọn giày phù hợp để bảo vệ sức khỏe chân và tăng cường hiệu suất hoạt động.",
        category: "Hướng dẫn",
        author: "Chuyên gia NAGEN",
        date: "2024-01-05",
        readTime: "8 phút đọc",
        views: 1450,
        image: "/images/blog/shoe-selection.jpg",
        tags: ["chọn giày", "hướng dẫn", "sức khỏe chân"],
        slug: "lua-chon-giay-phu-hop"
    }
]

// Main Blog Page Component
export default function BlogKienThucPage() {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả")

    const categories = ["Tất cả", "Chăm sóc sức khỏe", "Kiến thức chuyên môn", "Hướng dẫn"]

    const filteredPosts = selectedCategory === "Tất cả"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    const handlePostClick = (post: typeof blogPosts[0]) => {
        navigateTo(`/blog-kien-thuc/${post.slug}`)
    }

    // Handle custom events from Footer
    useEffect(() => {
        const handleOpenUnifiedRegistration = () => {
            setIsConsultationModalOpen(true)
        }

        window.addEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)

        return () => {
            window.removeEventListener('openUnifiedRegistration', handleOpenUnifiedRegistration)
        }
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog Kiến Thức NAGEN",
                        "description": "Chia sẻ kiến thức chuyên môn về chăm sóc bàn chân, sức khỏe xương khớp và các giải pháp hỗ trợ vòm bàn chân",
                        "url": "https://nagen.vn/blog-kien-thuc",
                        "publisher": {
                            "@type": "Organization",
                            "name": "NAGEN Vietnam",
                            "logo": "https://nagen.vn/images/logo_slogan_1.png"
                        },
                        "blogPost": blogPosts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "author": {
                                "@type": "Person",
                                "name": post.author
                            },
                            "datePublished": post.date,
                            "image": `https://nagen.vn${post.image}`,
                            "url": `https://nagen.vn/blog-kien-thuc#${post.id}`
                        }))
                    })
                }}
            />

            <EnhancedNavigation
                onConsultationClick={() => setIsConsultationModalOpen(true)}
                onAppointmentClick={() => setIsConsultationModalOpen(true)}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 via-white to-red-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                            Blog Kiến Thức
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            Chia sẻ kiến thức chuyên môn về chăm sóc bàn chân, sức khỏe xương khớp
                            và các giải pháp hỗ trợ vòm bàn chân từ đội ngũ chuyên gia NAGEN
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center text-blue-900">
                                <BookOpen className="w-5 h-5 mr-2" />
                                <span className="font-medium">{blogPosts.length} bài viết</span>
                            </div>
                            <div className="flex items-center text-red-600">
                                <Users className="w-5 h-5 mr-2" />
                                <span className="font-medium">Từ chuyên gia</span>
                            </div>
                            <div className="flex items-center text-green-600">
                                <Heart className="w-5 h-5 mr-2" />
                                <span className="font-medium">Miễn phí</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-blue-900 text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 border border-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                onClick={() => handlePostClick(post)}
                            >
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={getImagePath(post.image)}
                                        alt={post.title}
                                        width={400}
                                        height={240}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-blue-900 text-white">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <User className="w-4 h-4 mr-1" />
                                        <span className="mr-4">{post.author}</span>
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span className="mr-4">{post.date.split('-').reverse().join('/')}</span>
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Eye className="w-4 h-4 mr-1" />
                                            <span>{post.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lượt xem</span>
                                        </div>

                                        <div className="flex items-center text-blue-900 font-medium group-hover:text-red-600 transition-colors">
                                            <span className="mr-2">Đọc thêm</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {post.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>





            {/* Unified Registration Modal */}
            {isConsultationModalOpen && (
                <UnifiedRegistrationForm
                    isOpen={isConsultationModalOpen}
                    onClose={() => setIsConsultationModalOpen(false)}
                />
            )}

            <Footer />
        </div>
    )
}