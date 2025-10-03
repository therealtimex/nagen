"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, Play, Pause, Volume2, VolumeX, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { getImagePath } from "@/lib/utils"

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
        name: "Nguyễn Văn Minh",
        age: 45,
        location: "Hà Nội",
        occupation: "Kỹ sư",
        rating: 5,
        content: "Tôi đã sử dụng tấm lót NAGEN được 6 tháng và cảm thấy rất hài lòng. Đau chân của tôi đã giảm đáng kể, đặc biệt là sau những ngày làm việc dài. Chất lượng sản phẩm rất tốt, bền và thoải mái.",
        image: "/placeholder.svg?height=80&width=80&text=Minh",
        videoUrl: "/videos/feedback/customer1.mp4",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Before",
            "/placeholder.svg?height=200&width=300&text=After"
        ],
        date: "2024-01-15",
        productUsed: "Tấm lót Sungen",
        verified: true
    },
    {
        id: 2,
        name: "Trần Thị Lan",
        age: 38,
        location: "TP.HCM",
        occupation: "Giáo viên",
        rating: 5,
        content: "Sau khi sinh con, tôi bị đau chân rất nhiều. Sử dụng tấm lót NAGEN được 3 tháng, tôi cảm thấy đi lại nhẹ nhàng hơn rất nhiều. Sản phẩm thực sự hiệu quả và đáng tin cậy.",
        image: "/placeholder.svg?height=80&width=80&text=Lan",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Product",
            "/placeholder.svg?height=200&width=300&text=Usage"
        ],
        date: "2024-02-20",
        productUsed: "Tấm lót Winagen",
        verified: true
    },
    {
        id: 3,
        name: "Lê Văn Đức",
        age: 52,
        location: "Đà Nẵng",
        occupation: "Bác sĩ",
        rating: 5,
        content: "Với tư cách là bác sĩ, tôi phải đứng nhiều giờ liên tục. Tấm lót NAGEN giúp tôi giảm mệt mỏi và đau nhức ở bàn chân. Tôi cũng đã giới thiệu cho nhiều bệnh nhân và họ đều rất hài lòng.",
        image: "/placeholder.svg?height=80&width=80&text=Duc",
        videoUrl: "/videos/feedback/customer3.mp4",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Doctor",
            "/placeholder.svg?height=200&width=300&text=Hospital"
        ],
        date: "2024-03-10",
        productUsed: "Tấm lót Softgen",
        verified: true
    },
    {
        id: 4,
        name: "Phạm Thị Mai",
        age: 29,
        location: "Hải Phòng",
        occupation: "Nhân viên văn phòng",
        rating: 4,
        content: "Tôi làm việc văn phòng nhưng thường xuyên phải đi lại. Tấm lót NAGEN giúp tôi cảm thấy thoải mái hơn khi đi giày cao gót. Chất lượng tốt, giá cả hợp lý.",
        image: "/placeholder.svg?height=80&width=80&text=Mai",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Office",
            "/placeholder.svg?height=200&width=300&text=Heels"
        ],
        date: "2024-03-25",
        productUsed: "Tấm lót Silhouette",
        verified: true
    },
    {
        id: 5,
        name: "Hoàng Văn Tùng",
        age: 41,
        location: "Cần Thơ",
        occupation: "Tài xế",
        rating: 5,
        content: "Nghề tài xế phải ngồi lái xe nhiều giờ, chân tôi thường bị tê và đau. Từ khi dùng tấm lót NAGEN, tình trạng này đã cải thiện rõ rệt. Sản phẩm rất đáng đầu tư.",
        image: "/placeholder.svg?height=80&width=80&text=Tung",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Driver",
            "/placeholder.svg?height=200&width=300&text=Truck"
        ],
        date: "2024-04-05",
        productUsed: "Tấm lót Endurance",
        verified: true
    },
    {
        id: 6,
        name: "Nguyễn Thị Hương",
        age: 35,
        location: "Huế",
        occupation: "Y tá",
        rating: 5,
        content: "Công việc y tá đòi hỏi phải đứng và đi lại liên tục. Tấm lót NAGEN đã giúp tôi giảm đau chân và cải thiện tư thế đứng. Tôi rất khuyên dùng cho những người cùng nghề.",
        image: "/placeholder.svg?height=80&width=80&text=Huong",
        videoUrl: "/videos/feedback/customer6.mp4",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Nurse",
            "/placeholder.svg?height=200&width=300&text=Medical"
        ],
        date: "2024-04-18",
        productUsed: "Tấm lót Sungen",
        verified: true
    }
]

function VideoPlayer({ videoUrl, customerName }: { videoUrl: string; customerName: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

    const handlePlayPause = () => {
        if (videoRef) {
            if (isPlaying) {
                videoRef.pause()
            } else {
                videoRef.play()
            }
        }
    }

    return (
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg border border-gray-200">
            <video
                ref={setVideoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/placeholder.svg?height=300&width=400&text=Video"
            >
                <source src={videoUrl} type="video/mp4" />
                Video không được hỗ trợ
            </video>

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white shadow-xl border-2 border-white/20 rounded-full w-16 h-16 p-0"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </Button>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                    size="sm"
                    variant="ghost"
                    className="bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 p-0"
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
            </div>

            {/* Video Label */}
            <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white border-0 shadow-lg">
                    🎥 Video từ {customerName}
                </Badge>
            </div>

            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>
        </div>
    )
}

function MediaGallery({ feedback }: { feedback: CustomerFeedback }) {
    const [activeTab, setActiveTab] = useState<'video' | 'images'>('video')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const hasVideo = !!feedback.videoUrl
    const hasImages = !!(feedback.additionalImages && feedback.additionalImages.length > 0)

    // Nếu chỉ có video hoặc chỉ có ảnh, hiển thị trực tiếp
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
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }

    // Nếu có cả video và ảnh, hiển thị tabs
    if (hasVideo && hasImages) {
        return (
            <div className="space-y-4">
                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                            activeTab === 'video'
                                ? 'bg-white text-red-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        🎥 Video
                    </button>
                    <button
                        onClick={() => setActiveTab('images')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                            activeTab === 'images'
                                ? 'bg-white text-red-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        📷 Ảnh ({feedback.additionalImages!.length})
                    </button>
                </div>

                {/* Content */}
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
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
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

    // Fallback - chỉ hiển thị avatar
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
    return (
        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Thông tin khách hàng và nhận xét */}
                    <div className="p-8 space-y-6 bg-white">
                        {/* Header với avatar và thông tin cơ bản */}
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

                        {/* Rating */}
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

                        {/* Sản phẩm sử dụng */}
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                            <p className="text-sm text-gray-600 mb-1">Sản phẩm đã sử dụng:</p>
                            <p className="font-bold text-red-600 text-lg">{feedback.productUsed}</p>
                        </div>

                        {/* Nội dung đánh giá */}
                        <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-blue-200 pl-4 bg-blue-50 p-4 rounded-r-lg">
                            "{feedback.content}"
                        </blockquote>

                        {/* Ngày đánh giá */}
                        <div className="flex items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
                            <span>📅 Đánh giá ngày: {new Date(feedback.date).toLocaleDateString('vi-VN')}</span>
                        </div>
                    </div>

                    {/* Media Gallery */}
                    <div className="bg-gray-50 p-8 flex items-center justify-center">
                        <MediaGallery feedback={feedback} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function FeedbackPage() {
    const [filter, setFilter] = useState<string>("all")

    const filteredFeedback = feedbackData.filter(feedback => {
        if (filter === "all") return true
        if (filter === "video") return !!feedback.videoUrl
        if (filter === "5-star") return feedback.rating === 5
        return true
    })

    // SEO metadata
    useEffect(() => {
        document.title = "Phản hồi khách hàng về Tấm lót hỗ trợ vòm bàn chân NAGEN | Đánh giá thật từ người dùng"
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Xem phản hồi thật từ hơn 4 triệu khách hàng về tấm lót hỗ trợ vòm bàn chân NAGEN. Video và ảnh minh chứng từ người dùng thực tế tại Việt Nam.')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Xem phản hồi thật từ hơn 4 triệu khách hàng về tấm lót hỗ trợ vòm bàn chân NAGEN. Video và ảnh minh chứng từ người dùng thực tế tại Việt Nam.'
            document.head.appendChild(meta)
        }

        // Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'phản hồi khách hàng NAGEN, đánh giá tấm lót chân, feedback NAGEN, khách hàng nói gì về NAGEN, review tấm lót vòm bàn chân')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'keywords'
            meta.content = 'phản hồi khách hàng NAGEN, đánh giá tấm lót chân, feedback NAGEN, khách hàng nói gì về NAGEN, review tấm lót vòm bàn chân'
            document.head.appendChild(meta)
        }

        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Phản hồi khách hàng về Tấm lót NAGEN - Đánh giá thật từ người dùng')
        }

        const ogDescription = document.querySelector('meta[property="og:description"]')
        if (ogDescription) {
            ogDescription.setAttribute('content', 'Hơn 4 triệu người tin dùng NAGEN trên toàn thế giới. Xem video và ảnh phản hồi thật từ khách hàng Việt Nam.')
        }
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md bg-white/95">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src={getImagePath("/images/logo_slogan_1.png")}
                                alt="Nagen Logo"
                                width={220}
                                height={44}
                                priority
                                className="h-8 object-contain"
                            />
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="flex items-center space-x-2 hover:bg-blue-50 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                <span>Quay lại trang chủ</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="w-full h-[8px]">
                <div className="bg-red-600 w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
                <div className="bg-[#21395D] w-full !h-[calc(8px/1.5)] md:!h-[calc(12px/1.5)]"></div>
            </div>

            {/* Hero Section */}
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

            {/* Filters */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
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

                    {/* Feedback Grid */}
                    <div className="space-y-8">
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



            {/* Contact Section */}
            <section className="bg-white" itemScope itemType="https://schema.org/ContactPage">
                {/* Decorative Border */}
                <div className="w-full h-[8px]">
                    <div className="bg-red-600 w-full !h-[calc(6px/1.5)] md:!h-[calc(10px/1.5)]"></div>
                    <div className="bg-[#21395D] w-full !h-[calc(6px/1.5)] md:!h-[calc(10px/1.5)]"></div>
                </div>
                
                <div className="container mx-auto px-4 py-6">
                    <div className="text-center mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                            Bạn cũng muốn chia sẻ trải nghiệm của mình?
                        </h2>
                        <p className="text-base md:text-lg text-red-600 font-medium mb-3">
                            Hãy liên hệ với chúng tôi
                        </p>
                        <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
                            Đội ngũ NAGEN luôn sẵn sàng hỗ trợ bạn 24/7
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-3xl mx-auto" itemScope itemType="https://schema.org/Organization">
                        {/* Hotline */}
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-blue-900 mb-1 text-sm">Hotline</h3>
                            <p className="text-base font-bold text-red-600" itemProp="telephone">
                                <a href="tel:0966578008" className="hover:underline">0966578008</a>
                            </p>
                        </div>

                        {/* Email */}
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-blue-900 mb-1 text-sm">Email</h3>
                            <p className="text-base font-bold text-red-600" itemProp="email">
                                <a href="mailto:nagen@nagen.vn" className="hover:underline">nagen@nagen.vn</a>
                            </p>
                        </div>

                        {/* Địa chỉ */}
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-blue-900 mb-1 text-sm">Địa chỉ</h3>
                            <p className="text-sm text-gray-700" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <span itemProp="streetAddress">Tầng 7, Tòa VP-1, Suntquare Building</span>, 
                                <span itemProp="addressLocality"> Hà Nội</span>
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center pb-4">
                        <Link href="/" aria-label="Quay lại trang chủ NAGEN">
                            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 text-sm md:text-base transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Quay lại trang chủ
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
