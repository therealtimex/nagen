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
    Newspaper,
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



// News data
const newsArticles = [
    {
        id: 1,
        title: "Ra mắt Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể NAGEN",
        excerpt: "Ngày 09/10/2025, tại Hà Nội, Trung tâm Nghiên cứu Ứng dụng Cân bằng Cấu trúc Cơ thể Nagen đã chính thức ra mắt dưới sự chứng kiến của các lãnh đạo Viện Nghiên cứu Sức khỏe Người cao tuổi và Y tế Cộng đồng.",
        category: "Sự kiện",
        author: "Ban biên tập NAGEN",
        date: "2025-10-09",
        readTime: "8 phút đọc",
        views: 4250,
        image: "/images/tin-tuc/trung-tam-nghien-cuu-cau-truc-co-the.webp",
        tags: ["trung tâm nghiên cứu", "cân bằng cấu trúc", "sự kiện"],
        slug: "ra-mat-trung-tam-nghien-cuu-can-bang-cau-truc"
    }
]

// Main News Page Component
export default function TinTucPage() {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả")

    const categories = ["Tất cả", "Sự kiện"]

    const filteredNews = selectedCategory === "Tất cả"
        ? newsArticles
        : newsArticles.filter(article => article.category === selectedCategory)

    const handleNewsClick = (article: typeof newsArticles[0]) => {
        navigateTo(`/tin-tuc/${article.slug}`)
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
                        "@type": "NewsMediaOrganization",
                        "name": "Tin Tức NAGEN",
                        "description": "Cập nhật tin tức mới nhất về NAGEN, sản phẩm tấm lót hỗ trợ vòm bàn chân và các hoạt động của công ty",
                        "url": "https://nagen.vn/tin-tuc",
                        "publisher": {
                            "@type": "Organization",
                            "name": "NAGEN Vietnam",
                            "logo": "https://nagen.vn/images/logo_slogan_1.png"
                        },
                        "article": newsArticles.map(article => ({
                            "@type": "NewsArticle",
                            "headline": article.title,
                            "description": article.excerpt,
                            "author": {
                                "@type": "Person",
                                "name": article.author
                            },
                            "datePublished": article.date,
                            "image": `https://nagen.vn${article.image}`,
                            "url": `https://nagen.vn/tin-tuc/${article.slug}`
                        }))
                    })
                }}
            />

            <Header
                onConsultationClick={() => setIsConsultationModalOpen(true)}
                onAppointmentClick={() => setIsConsultationModalOpen(true)}
                currentPage="Tin tức"
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-50 via-white to-blue-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                            Tin Tức NAGEN
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            Cập nhật những tin tức mới nhất về NAGEN, sản phẩm, dịch vụ 
                            và các hoạt động của chúng tôi trong lĩnh vực chăm sóc sức khỏe bàn chân
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center text-blue-900">
                                <Newspaper className="w-5 h-5 mr-2" />
                                <span className="font-medium">{newsArticles.length} bài viết</span>
                            </div>
                            <div className="flex items-center text-red-600">
                                <Users className="w-5 h-5 mr-2" />
                                <span className="font-medium">Cập nhật liên tục</span>
                            </div>
                            <div className="flex items-center text-green-600">
                                <Heart className="w-5 h-5 mr-2" />
                                <span className="font-medium">Tin cậy</span>
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

            {/* News Articles Grid */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((article) => (
                            <Card
                                key={article.id}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                onClick={() => handleNewsClick(article)}
                            >
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={getImagePath(article.image)}
                                        alt={article.title}
                                        width={400}
                                        height={240}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-red-600 text-white">
                                            {article.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <User className="w-4 h-4 mr-1" />
                                        <span className="mr-4">{article.author}</span>
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span className="mr-4">{article.date.split('-').reverse().join('/')}</span>
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Eye className="w-4 h-4 mr-1" />
                                            <span>{article.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lượt xem</span>
                                        </div>

                                        <div className="flex items-center text-blue-900 font-medium group-hover:text-red-600 transition-colors">
                                            <span className="mr-2">Đọc thêm</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {article.tags.map((tag) => (
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