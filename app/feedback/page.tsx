"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, Pause, Volume2, VolumeX, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"
import Footer from "@/components/Footer"
import UnifiedRegistrationForm from "@/components/UnifiedRegistrationForm"
import Header from "@/components/Header"

interface CustomerFeedback {
    id: number
    name: string
    age?: number
    location: string
    occupation?: string
    rating: number
    content: string
    image?: string
    videoUrl?: string
    additionalImages?: string[]
    date: string
    productUsed: string
    verified: boolean
}

const feedbackData: CustomerFeedback[] = [
    {
        id: 1,
        name: "Mẹ chị Hà",
        age: 72,
        location: "Hà Nội",
        occupation: "Nghỉ hưu",
        rating: 5,
        content: "Bà đã mổ cột sống, chân kiễng, hai chân không đều nhau, bị tràn dịch khớp gối, không đi lại được. Nhưng khi bỏ tấm lót vào chân, bà đi lại dễ dàng hơn và không còn bị đau mỗi khi đi lại.",
        image: "/placeholder.svg?height=80&width=80&text=Ha",
        videoUrl: "https://drive.google.com/uc?export=download&id=1buihmaWwWGC87sIV2f99qEizkwnIx7oG",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Senior",
            "/placeholder.svg?height=200&width=300&text=Recovery"
        ],
        date: "2024-07-05",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 2,
        name: "Anh Chí",
        age: 38,
        location: "TP.HCM",
        occupation: "Doanh nhân",
        rating: 5,
        content: "Một doanh nhân với đặc thù công việc đi đứng nhiều khi tham gia các triển lãm, đi thăm các nhà máy với trung bình 30.000 bước chân mỗi ngày. Đồng thời, anh cũng tham gia các hoạt động thể thao như chơi golf, chạy bộ, đá bóng. Khi biết đến và sử dụng tấm lót hỗ trợ vòm bàn chân Sungen được 03 tháng, anh Chí chia sẻ những cảm nhận sâu sắc về trải nghiệm của bản thân.",
        image: "/placeholder.svg?height=80&width=80&text=Chi",
        videoUrl: "https://drive.google.com/uc?export=download&id=1uKfwhlsPQX8cdEujkhyutmz8XnxTjFa6",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Business",
            "/placeholder.svg?height=200&width=300&text=Sports"
        ],
        date: "2024-07-18",
        productUsed: "Tấm lót Sungen",
        verified: true
    },
    {
        id: 3,
        name: "Chị Mai",
        age: 32,
        location: "Hà Nội",
        occupation: "Nhân viên văn phòng",
        rating: 5,
        content: "Trước đây cuối ngày là đau gan bàn chân, nhưng dùng tấm lót vòm NAGEN thì đỡ hẳn. Đi lại cả ngày vẫn nhẹ chân, giày ôm hơn và không còn mỏi như trước.",
        image: "/placeholder.svg?height=80&width=80&text=Mai",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Office",
            "/placeholder.svg?height=200&width=300&text=Comfort"
        ],
        date: "2024-01-15",
        productUsed: "Tấm lót vòm NAGEN",
        verified: true
    },
    {
        id: 4,
        name: "Anh Hùng",
        age: 28,
        location: "TP.HCM",
        occupation: "Nhân viên giao hàng",
        rating: 5,
        content: "Đứng – đi liên tục 10–12 tiếng. NAGEN nâng vòm tốt, giảm ê gót rõ rệt. Mang vào đôi giày cũ mà cảm giác như giày mới.",
        image: "/placeholder.svg?height=80&width=80&text=Hung",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Delivery",
            "/placeholder.svg?height=200&width=300&text=Walking"
        ],
        date: "2024-02-20",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 5,
        name: "Cô Lan",
        age: 40,
        location: "Đà Nẵng",
        occupation: "Giáo viên",
        rating: 5,
        content: "Tôi bị bàn chân bẹt nhẹ, hay mỏi cổ chân. Sau 3 tuần dùng NAGEN, dáng đi ổn hơn, hết cảm giác nặng chân khi đứng lớp lâu.",
        image: "/placeholder.svg?height=80&width=80&text=Lan",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Teacher",
            "/placeholder.svg?height=200&width=300&text=Classroom"
        ],
        date: "2024-03-10",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 6,
        name: "Anh Minh",
        age: 35,
        location: "Hải Phòng",
        occupation: "Chạy bộ phong trào",
        rating: 5,
        content: "NAGEN cho cảm giác đệm chắc, tiếp đất ổn định, hạn chế xẹp vòm khi chạy dài. Pace ổn định hơn, chân không bị 'đuối' cuối buổi.",
        image: "/placeholder.svg?height=80&width=80&text=Minh",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Running",
            "/placeholder.svg?height=200&width=300&text=Sport"
        ],
        date: "2024-03-25",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 7,
        name: "Chị Hạnh",
        age: 30,
        location: "Cần Thơ",
        occupation: "Bán hàng retail",
        rating: 5,
        content: "Giày bệt trước đây làm tôi đau lòng bàn chân. Đổi sang lót NAGEN là hết tê mỏi, đứng ca 8 tiếng vẫn ổn.",
        image: "/placeholder.svg?height=80&width=80&text=Hanh",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Retail",
            "/placeholder.svg?height=200&width=300&text=Standing"
        ],
        date: "2024-04-05",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 8,
        name: "Anh Phong",
        age: 42,
        location: "Huế",
        occupation: "Kỹ sư xây dựng",
        rating: 5,
        content: "Mặt bằng gồ ghề dễ đau gót. NAGEN giúp phân bổ lực đều, gót bớt 'chấn' khi di chuyển, cuối ngày vẫn còn sức.",
        image: "/placeholder.svg?height=80&width=80&text=Phong",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Construction",
            "/placeholder.svg?height=200&width=300&text=Engineer"
        ],
        date: "2024-04-18",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 9,
        name: "Chị Thu",
        age: 34,
        location: "Bình Dương",
        occupation: "Mẹ bé 7 tuổi",
        rating: 5,
        content: "Con có dấu hiệu bàn chân bẹt, bác sĩ khuyên dùng lót hỗ trợ vòm. Chọn NAGEN: đi học về không còn than đau, chạy nhảy thoải mái hơn.",
        image: "/placeholder.svg?height=80&width=80&text=Thu",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Mother",
            "/placeholder.svg?height=200&width=300&text=Child"
        ],
        date: "2024-05-10",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 10,
        name: "Anh Tùng",
        age: 50,
        location: "Vũng Tàu",
        occupation: "Quản lý kho",
        rating: 5,
        content: "Tuổi lớn, chân dễ mỏi. NAGEN nâng vòm tốt, giảm áp lực lòng bàn chân. Tôi đã mua thêm 1 đôi cho giày thể thao.",
        image: "/placeholder.svg?height=80&width=80&text=Tung",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Warehouse",
            "/placeholder.svg?height=200&width=300&text=Manager"
        ],
        date: "2024-05-25",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 11,
        name: "Chị My",
        age: 26,
        location: "Hà Nội",
        occupation: "Thiết kế đồ họa",
        rating: 5,
        content: "Ngồi nhiều nhưng vẫn đi bộ chuyển phòng liên tục. Lót NAGEN khiến bước chân êm hơn, giày fit, không trượt bàn chân trong giày.",
        image: "/placeholder.svg?height=80&width=80&text=My",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Designer",
            "/placeholder.svg?height=200&width=300&text=Office"
        ],
        date: "2024-06-08",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 12,
        name: "Bác Quang",
        age: 58,
        location: "Nha Trang",
        occupation: "Nghỉ hưu, đi bộ sáng",
        rating: 5,
        content: "Trước hay đau gót sau 3 km. Dùng NAGEN vài ngày là êm hơn thấy rõ, nay đi 5 km vẫn thoải mái.",
        image: "/placeholder.svg?height=80&width=80&text=Quang",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Walking",
            "/placeholder.svg?height=200&width=300&text=Exercise"
        ],
        date: "2024-06-20",
        productUsed: "Tấm lót NAGEN",
        verified: true
    }
]

function VideoPlayer({ videoUrl, customerName }: { videoUrl: string; customerName: string }) {
    // Convert Google Drive share URL to embeddable format
    const getEmbedUrl = (url: string) => {
        if (url.includes('drive.google.com')) {
            const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1] || url.match(/id=([a-zA-Z0-9-_]+)/)?.[1]
            if (fileId) {
                return `https://drive.google.com/file/d/${fileId}/preview`
            }
        }
        return url
    }

    const embedUrl = getEmbedUrl(videoUrl)

    return (
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{ aspectRatio: '4/3', minHeight: '400px' }}>
            <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video từ ${customerName}`}
            />

            <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white border-0 shadow-lg">
                    🎥 Video từ ${customerName}
                </Badge>
            </div>
        </div>
    )
}

function MediaGallery({ feedback }: { feedback: CustomerFeedback }) {
    const [activeTab, setActiveTab] = useState<'video' | 'images'>('video')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const hasVideo = !!feedback.videoUrl
    const hasImages = !!(feedback.additionalImages && feedback.additionalImages.length > 0)

    if (hasVideo && !hasImages) {
        return <VideoPlayer videoUrl={feedback.videoUrl!} customerName={feedback.name} />
    }

    if (!hasVideo && hasImages) {
        return (
            <div className="space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={getImagePath(feedback.additionalImages![currentImageIndex])}
                        alt={`${feedback.name} - Ảnh ${currentImageIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
                {feedback.additionalImages!.length > 1 && (
                    <div className="flex space-x-2 justify-center">
                        {feedback.additionalImages!.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }

    if (hasVideo && hasImages) {
        return (
            <div className="space-y-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'video'
                            ? 'bg-white text-red-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                            }`}
                    >
                        🎥 Video
                    </button>
                    <button
                        onClick={() => setActiveTab('images')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'images'
                            ? 'bg-white text-red-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                            }`}
                    >
                        📷 Ảnh ({feedback.additionalImages!.length})
                    </button>
                </div>

                {activeTab === 'video' ? (
                    <VideoPlayer videoUrl={feedback.videoUrl!} customerName={feedback.name} />
                ) : (
                    <div className="space-y-4">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={getImagePath(feedback.additionalImages![currentImageIndex])}
                                alt={`${feedback.name} - Ảnh ${currentImageIndex + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {feedback.additionalImages!.length > 1 && (
                            <div className="flex space-x-2 justify-center">
                                {feedback.additionalImages!.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-red-100 rounded-xl p-8 text-center aspect-video flex items-center justify-center w-full shadow-inner border border-gray-200">
            <div>
                <div className="relative mb-6">
                    <Image
                        src={getImagePath(feedback.image || "/placeholder.svg")}
                        alt={feedback.name}
                        width={140}
                        height={140}
                        className="rounded-full mx-auto border-4 border-white shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">{feedback.name}</h4>
                <p className="text-gray-600 font-medium mb-1">{feedback.location}</p>
                {feedback.occupation && (
                    <p className="text-sm text-blue-600">{feedback.occupation}</p>
                )}
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Khách hàng đã xác thực
                </div>
            </div>
        </div>
    )
}

function FeedbackCard({ feedback }: { feedback: CustomerFeedback }) {
    const hasVideo = !!feedback.videoUrl
    const hasImages = !!(feedback.additionalImages && feedback.additionalImages.length > 0)
    const hasMedia = hasVideo || hasImages

    return (
        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-0">
                <div className={hasMedia ? "grid lg:grid-cols-2 gap-0" : "w-full"}>
                    <div className="p-8 space-y-6 bg-white">
                        <div className="flex items-start space-x-4">
                            <div className="relative">
                                <Image
                                    src={getImagePath(feedback.image || "/placeholder.svg")}
                                    alt={feedback.name}
                                    width={70}
                                    height={70}
                                    className="rounded-full border-3 border-blue-100 shadow-md"
                                />
                                {feedback.verified && (
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl text-blue-900 mb-1">{feedback.name}</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center space-x-4">
                                        {feedback.age && <span>🎂 {feedback.age} tuổi</span>}
                                        <span>📍 {feedback.location}</span>
                                    </div>
                                    {feedback.occupation && (
                                        <p className="text-blue-700 font-medium">💼 {feedback.occupation}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-lg font-semibold text-gray-700">({feedback.rating}/5)</span>
                        </div>

                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                            <p className="text-sm text-gray-600 mb-1">Sản phẩm đã sử dụng:</p>
                            <p className="font-bold text-red-600 text-lg">{feedback.productUsed}</p>
                        </div>

                        <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-blue-200 pl-4 bg-blue-50 p-4 rounded-r-lg">
                            "{feedback.content}"
                        </blockquote>

                    </div>

                    {hasMedia && (
                        <div className="bg-gray-50 p-8 flex items-center justify-center">
                            <MediaGallery feedback={feedback} />
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}



export default function FeedbackPage() {
    const [filter, setFilter] = useState<string>("all")
    const [isUnifiedRegistrationOpen, setIsUnifiedRegistrationOpen] = useState(false)
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

    const filteredFeedback = feedbackData.filter(feedback => {
        if (filter === "all") return true
        if (filter === "video") return !!feedback.videoUrl
        if (filter === "5-star") return feedback.rating === 5
        return true
    })

    useEffect(() => {
        // SEO Meta Tags
        document.title = "Phản hồi khách hàng về Tấm lót hỗ trợ vòm bàn chân NAGEN | Đánh giá thật từ người dùng"

        // Meta Description
        const setMetaTag = (name: string, content: string, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
            let meta = document.querySelector(selector) as HTMLMetaElement
            if (meta) {
                meta.setAttribute('content', content)
            } else {
                meta = document.createElement('meta')
                if (property) {
                    meta.setAttribute('property', name)
                } else {
                    meta.setAttribute('name', name)
                }
                meta.setAttribute('content', content)
                document.head.appendChild(meta)
            }
        }

        setMetaTag('description', 'Xem phản hồi thật từ hơn 4 triệu khách hàng về tấm lót hỗ trợ vòm bàn chân NAGEN. Video và ảnh minh chứng từ người dùng thực tế tại Việt Nam.')
        setMetaTag('keywords', 'phản hồi khách hàng NAGEN, đánh giá tấm lót chân, feedback NAGEN, khách hàng nói gì về NAGEN, review tấm lót vòm bàn chân, testimonial NAGEN')
        setMetaTag('author', 'NAGEN Vietnam')
        setMetaTag('robots', 'index, follow')

        // Open Graph Tags
        setMetaTag('og:title', 'Phản hồi khách hàng về Tấm lót NAGEN - Đánh giá thật từ người dùng', true)
        setMetaTag('og:description', 'Hơn 4 triệu người tin dùng NAGEN trên toàn thế giới. Xem video và ảnh phản hồi thật từ khách hàng Việt Nam.', true)
        setMetaTag('og:type', 'website', true)
        setMetaTag('og:url', window.location.href, true)
        setMetaTag('og:site_name', 'NAGEN Vietnam', true)

        // Twitter Card Tags
        setMetaTag('twitter:card', 'summary_large_image')
        setMetaTag('twitter:title', 'Phản hồi khách hàng về Tấm lót NAGEN')
        setMetaTag('twitter:description', 'Xem đánh giá thật từ khách hàng về tấm lót hỗ trợ vòm bàn chân NAGEN')

        // Structured Data for Reviews
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Tấm lót hỗ trợ vòm bàn chân NAGEN",
            "brand": {
                "@type": "Brand",
                "name": "NAGEN"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": feedbackData.length,
                "bestRating": "5",
                "worstRating": "1"
            },
            "review": feedbackData.map(feedback => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": feedback.name
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": feedback.rating,
                    "bestRating": "5"
                },
                "reviewBody": feedback.content,
                "datePublished": feedback.date
            }))
        }

        let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
        if (script) {
            script.textContent = JSON.stringify(structuredData)
        } else {
            script = document.createElement('script')
            script.type = 'application/ld+json'
            script.textContent = JSON.stringify(structuredData)
            document.head.appendChild(script)
        }
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* SEO Structured Data - LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "NAGEN Vietnam",
                        "description": "Chuyên cung cấp tấm lót hỗ trợ vòm bàn chân chất lượng cao từ Mỹ, dịch vụ tư vấn và đo vòm bàn chân tại nhà miễn phí toàn quốc.",
                        "url": "https://nagen.vn",
                        "telephone": "+84966578008",
                        "email": "nagen@nagen.vn",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Tầng 7, Tòa VP-1, Sunsquare Complex, Số 21 Lê Đức Thọ",
                            "addressLocality": "Mỹ Đình 2, Nam Từ Liêm",
                            "addressRegion": "Hà Nội",
                            "addressCountry": "VN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "21.038134",
                            "longitude": "105.780147"
                        },
                        "openingHours": "Mo-Su 00:00-23:59",
                        "priceRange": "$$",
                        "image": "https://nagen.vn/images/logo_nagen_chinh_thuc.png",
                        "logo": "https://nagen.vn/images/logo_nagen_chinh_thuc.png",
                        "sameAs": [
                            "https://facebook.com/nagen.vietnam",
                            "https://instagram.com/nagen.vietnam",
                            "https://youtube.com/@nagen.vietnam",
                            "https://tiktok.com/@nagen.vietnam"
                        ],
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+84966578008",
                                "contactType": "customer service",
                                "availableLanguage": "Vietnamese",
                                "areaServed": "VN"
                            }
                        ]
                    })
                }}
            />

            <UnifiedRegistrationForm isOpen={isUnifiedRegistrationOpen} onClose={() => setIsUnifiedRegistrationOpen(false)} />
            
            <Header
                onConsultationClick={() => setIsUnifiedRegistrationOpen(true)}
                onAppointmentClick={() => setIsAppointmentModalOpen(true)}
            />

            <section className="relative bg-[#21395D] text-white py-4 lg:py-8 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1 mb-2">⭐ Phản hồi khách hàng</Badge>
                        <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-2">
                            Khách hàng nói gì về
                            <span className="text-red-300 inline-block ml-2">Tấm lót hỗ trợ vòm bàn chân NAGEN?</span>
                        </h1>
                        <p className="text-base text-blue-100 leading-relaxed max-w-3xl mx-auto mb-3">
                            Hơn 4 triệu người tin dùng trên toàn thế giới - Những câu chuyện thật từ khách hàng đã sử dụng sản phẩm NAGEN
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                        <Button
                            variant={filter === "all" ? "default" : "outline"}
                            onClick={() => setFilter("all")}
                            className="rounded-full"
                        >
                            Tất cả ({feedbackData.length})
                        </Button>
                        <Button
                            variant={filter === "5-star" ? "default" : "outline"}
                            onClick={() => setFilter("5-star")}
                            className="rounded-full"
                        >
                            5 sao ({feedbackData.filter(f => f.rating === 5).length})
                        </Button>
                        <Button
                            variant={filter === "video" ? "default" : "outline"}
                            onClick={() => setFilter("video")}
                            className="rounded-full"
                        >
                            Có video ({feedbackData.filter(f => f.videoUrl).length})
                        </Button>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        {filteredFeedback.map((feedback) => (
                            <FeedbackCard key={feedback.id} feedback={feedback} />
                        ))}
                    </div>

                    {filteredFeedback.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">Không tìm thấy đánh giá nào phù hợp với bộ lọc.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="relative bg-[#21395D] text-white py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full mb-4 md:mb-6 backdrop-blur-sm">
                            <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4">
                            Bạn cũng muốn chia sẻ trải nghiệm của mình?
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                            Hãy để lại đánh giá và giúp những người khác đưa ra quyết định đúng đắn
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                            <div className="w-full sm:w-auto">
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <Button
                                        size="lg"
                                        onClick={() => setIsUnifiedRegistrationOpen(true)}
                                        className="relative bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                                    >
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                                        <span className="whitespace-nowrap">Để lại thông tin liên hệ</span>
                                    </Button>
                                </div>
                            </div>

                            <Link href="/tat-ca-san-pham" className="w-full sm:w-auto">
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <Button
                                        size="lg"
                                        className="relative bg-white/10 hover:bg-white hover:text-blue-900 text-white border-2 border-white/30 hover:border-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                                    >
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                                        <span className="whitespace-nowrap">Xem tất cả sản phẩm</span>
                                    </Button>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}