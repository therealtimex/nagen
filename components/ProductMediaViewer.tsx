"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"
import { getImagePath, getVideoPath, checkVideoExists } from "@/lib/utils"
import { Product } from "@/lib/products"

interface ProductMediaViewerProps {
  product: Product
}

export default function ProductMediaViewer({ product }: ProductMediaViewerProps) {
  const [hasVideo, setHasVideo] = useState(false)
  const [showVideo, setShowVideo] = useState(false) // Mặc định hiển thị ảnh
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

  // Check video availability
  useEffect(() => {
    const checkVideo = async () => {
      const videoExists = await checkVideoExists(product.id)
      setHasVideo(videoExists)
    }
    checkVideo()
  }, [product.id])

  const handleVideoRef = (video: HTMLVideoElement | null) => {
    setVideoRef(video)
    if (video) {
      video.addEventListener('play', () => setIsPlaying(true))
      video.addEventListener('pause', () => setIsPlaying(false))
    }
  }

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !videoRef.muted
      setIsMuted(videoRef.muted)
    }
  }

  const openFullscreen = () => {
    if (videoRef && videoRef.requestFullscreen) {
      videoRef.requestFullscreen()
    }
  }

  const toggleMedia = () => {
    setShowVideo(!showVideo)
  }

  return (
    <div className="w-full">

      {/* Media Content */}
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-xl overflow-hidden relative group">
        {!showVideo || !hasVideo ? (
          <>
            {/* Image Display */}
            <Image
              src={getImagePath(product.image || "/placeholder.svg")}
              alt={`${product.name} - Tấm lót hỗ trợ vòm bàn chân chất lượng cao từ NAGEN`}
              width={500}
              height={500}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              title={`${product.name} - Giải pháp hỗ trợ bàn chân hiệu quả`}
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </>
        ) : (
          <>
            {/* Video Display */}
            <video
              ref={handleVideoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onLoadStart={() => setIsPlaying(true)}
            >
              <source src={getImagePath(getVideoPath(product.id))} type="video/mp4" />
              <p className="flex items-center justify-center h-full text-gray-500">
                Trình duyệt của bạn không hỗ trợ video.
              </p>
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  onClick={openFullscreen}
                  className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Indicator */}
            <div className="absolute top-4 right-4">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                🔴 LIVE DEMO
              </div>
            </div>
          </>
        )}

        {/* Toggle Arrow Button - Chỉ hiện khi có video */}
        {hasVideo && (
          <button
            onClick={toggleMedia}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            title={showVideo ? "Xem hình ảnh" : "Xem video demo"}
          >
            <div className={`transition-transform duration-300 ${showVideo ? 'rotate-180' : ''}`}>
              <Play className="w-5 h-5" />
            </div>
          </button>
        )}
      </div>

      {/* Media Info */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">
            {showVideo && hasVideo ? 'Video demo sản phẩm' : 'Hình ảnh sản phẩm'}
          </p>
          <p className="text-xs text-gray-500">
            {showVideo && hasVideo 
              ? 'Demo cách sử dụng và lợi ích sản phẩm' 
              : 'Xem chi tiết hình ảnh sản phẩm'
            }
          </p>
        </div>
        <div className="text-right">
          {hasVideo && (
            <p className="text-xs text-green-600 font-medium">
              ✓ {showVideo ? 'Đang xem video' : 'Video có sẵn'}
            </p>
          )}
          {hasVideo && (
            <p className="text-xs text-gray-400 mt-1">
              Click mũi tên để {showVideo ? 'xem ảnh' : 'xem video'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}