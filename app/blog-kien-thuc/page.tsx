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
import Header from "@/components/Header"


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

            <Header
                onConsultationClick={() => setIsConsultationModalOpen(true)}
                onAppointmentClick={() => setIsConsultationModalOpen(true)}
                currentPage="Blog kiến thức"
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