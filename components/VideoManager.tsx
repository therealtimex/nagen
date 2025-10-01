"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, XCircle, Eye, Trash2 } from "lucide-react"
import { productData } from "@/lib/products"
import { checkVideoExists } from "@/lib/utils"

interface VideoStatus {
  productId: string
  productName: string
  hasVideo: boolean
  checking: boolean
}

export default function VideoManager() {
  const [videoStatuses, setVideoStatuses] = useState<VideoStatus[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAllVideos()
  }, [])

  const checkAllVideos = async () => {
    setIsLoading(true)
    const statuses: VideoStatus[] = []

    for (const product of productData) {
      const status: VideoStatus = {
        productId: product.id,
        productName: product.name,
        hasVideo: false,
        checking: true
      }
      statuses.push(status)
    }

    setVideoStatuses(statuses)

    // Check each video
    for (let i = 0; i < statuses.length; i++) {
      const hasVideo = await checkVideoExists(statuses[i].productId)
      setVideoStatuses(prev => 
        prev.map((status, index) => 
          index === i 
            ? { ...status, hasVideo, checking: false }
            : status
        )
      )
    }

    setIsLoading(false)
  }

  const refreshStatus = async (productId: string) => {
    setVideoStatuses(prev =>
      prev.map(status =>
        status.productId === productId
          ? { ...status, checking: true }
          : status
      )
    )

    const hasVideo = await checkVideoExists(productId)
    
    setVideoStatuses(prev =>
      prev.map(status =>
        status.productId === productId
          ? { ...status, hasVideo, checking: false }
          : status
      )
    )
  }

  const totalVideos = videoStatuses.filter(s => s.hasVideo).length
  const totalProducts = videoStatuses.length

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🎥 Quản lý Video Sản phẩm</span>
          <div className="flex items-center space-x-4">
            <Badge variant={totalVideos === totalProducts ? "default" : "secondary"}>
              {totalVideos}/{totalProducts} video
            </Badge>
            <Button onClick={checkAllVideos} size="sm" disabled={isLoading}>
              Làm mới
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Tiến độ video</span>
            <span>{Math.round((totalVideos / totalProducts) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(totalVideos / totalProducts) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Video List */}
        <div className="space-y-3">
          {videoStatuses.map((status) => (
            <div 
              key={status.productId}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {status.checking ? (
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : status.hasVideo ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{status.productName}</h4>
                  <p className="text-sm text-gray-500">ID: {status.productId}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Badge 
                  variant={status.hasVideo ? "default" : "secondary"}
                  className={status.hasVideo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                >
                  {status.hasVideo ? "Có video" : "Chưa có"}
                </Badge>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => refreshStatus(status.productId)}
                  disabled={status.checking}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">📋 Hướng dẫn thêm video:</h4>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Tạo video demo cho sản phẩm (30-90 giây)</li>
            <li>2. Đặt tên file theo ID sản phẩm: <code className="bg-blue-100 px-1 rounded">[product-id].mp4</code></li>
            <li>3. Upload vào thư mục: <code className="bg-blue-100 px-1 rounded">public/videos/products/</code></li>
            <li>4. Click "Làm mới" để cập nhật trạng thái</li>
          </ol>
        </div>

        {/* Quick Actions */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
          </div>
          <Button 
            onClick={() => window.open('/videos/products/', '_blank')}
            variant="outline"
            size="sm"
          >
            <Upload className="w-4 h-4 mr-2" />
            Mở thư mục video
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}