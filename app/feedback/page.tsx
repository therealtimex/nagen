"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, Play, Pause, Volume2, VolumeX, CheckCircle, MapPin, Phone, Mail, X, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/lib/utils"
import Footer from "@/components/Footer"

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
        name: "Nguyễn Văn A",
        location: "Hà Nội",
        occupation: "Khách hàng thân thiết",
        rating: 5,
        content: "Sản phẩm NAGEN đã giúp tôi giảm đau chân hiệu quả. Chất lượng tuyệt vời, dịch vụ chuyên nghiệp.",
        image: "/placeholder.svg?height=80&width=80&text=Avatar1",
        videoUrl: "/videos/feedback/customer1.mp4",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Before",
            "/placeholder.svg?height=200&width=300&text=After"
        ],
        date: "2024-01-15",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 2,
        name: "Trần Thị B",
        location: "TP.HCM",
        occupation: "Khách hàng",
        rating: 5,
        content: "Đội ngũ tư vấn nhiệt tình, sản phẩm chất lượng cao. Tôi rất hài lòng với dịch vụ của NAGEN.",
        image: "/placeholder.svg?height=80&width=80&text=Avatar2",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Product",
            "/placeholder.svg?height=200&width=300&text=Usage"
        ],
        date: "2024-02-20",
        productUsed: "Tấm lót NAGEN",
        verified: true
    },
    {
        id: 3,
        name: "Lê Văn C",
        location: "Đà Nẵng",
        occupation: "Khách hàng",
        rating: 5,
        content: "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng như mô tả, hiệu quả rõ rệt.",
        image: "/placeholder.svg?height=80&width=80&text=Avatar3",
        videoUrl: "/videos/feedback/customer3.mp4",
        additionalImages: [
            "/placeholder.svg?height=200&width=300&text=Doctor",
            "/placeholder.svg?height=200&width=300&text=Hospital"
        ],
        date: "2024-03-10",
        productUsed: "Tấm lót NAGEN",
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

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white shadow-xl border-2 border-white/20 rounded-full w-16 h-16 p-0"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </Button>
            </div>

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

            <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white border-0 shadow-lg">
                    🎥 Video từ {customerName}
                </Badge>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>
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

    if (hasVideo && hasImages) {
        return (
            <div className="space-y-4">
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

                        <div className="flex items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
                            <span>📅 Đánh giá ngày: {new Date(feedback.date).toLocaleDateString('vi-VN')}</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 flex items-center justify-center">
                        <MediaGallery feedback={feedback} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// Contact Form Modal Component
function ContactFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(
                "https://workflow.realtimex.co/api/v1/executions/webhook/flowai/nagen_website_datlich/input",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        event: "tuvan",
                        source_url: typeof window !== "undefined" ? window.location.href : "",
                    }),
                }
            )

            if (response.ok) {
                setIsSubmitted(true)
            }
        } catch (error) {
            console.error("Lỗi khi gửi form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetAndClose = () => {
        setFormData({ name: "", phone: "", email: "", address: "", message: "" })
        setIsSubmitted(false)
        setIsSubmitting(false)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
                {isSubmitted ? (
                    <div className="p-8 text-center">
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Cảm ơn bạn!</h3>
                        <p className="text-gray-600 mb-6">
                            Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ lại trong vòng 24 giờ.
                        </p>
                        <Button onClick={resetAndClose} className="bg-blue-900 hover:bg-blue-800">
                            Đóng
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="bg-red-600 text-white p-6 rounded-t-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">Đăng ký tư vấn miễn phí</h3>
                                    <p className="text-red-100 mt-1">Để lại thông tin để chúng tôi liên hệ</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={resetAndClose} className="text-white hover:bg-red-700">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Họ và tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Nhập họ và tên"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Nhập số điện thoại"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Nhập email (không bắt buộc)"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Địa chỉ
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Nhập địa chỉ (không bắt buộc)"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Ghi chú
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Nhập ghi chú (không bắt buộc)"
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-sm text-blue-800 flex items-start">
                                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Chúng tôi sẽ liên hệ lại trong vòng 24h để tư vấn miễn phí.</span>
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting} 
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold"
                                >
                                    {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
                                    {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                                </Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default function FeedbackPage() {
    const [filter, setFilter] = useState<string>("all")
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
            <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
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
                                        onClick={() => setIsContactModalOpen(true)}
                                        className="relative bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                                    >
                                        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
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