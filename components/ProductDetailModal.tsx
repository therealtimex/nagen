"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Star,
  Search,
  Filter,
  ArrowRight,
  Heart,
  ChevronDown,
  CheckCircle,
  Microscope,
  Shield,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getImagePath } from "@/lib/utils"
import { Product } from "@/lib/products"
import { categoryDisplayNames } from "@/lib/constants";



// Product Detail Modal Component
export default function ProductDetailModal({ product, isOpen, onClose }: { product: Product; isOpen: boolean; onClose: () => void }) {
  const displayCategory = categoryDisplayNames[product.category] || product.category;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image Section */}
          <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src={getImagePath(product.image || "/placeholder.svg")}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* {product.discount && (
                <Badge className="absolute top-4 right-4 z-10 bg-green-600 text-white">-{product.discount}</Badge>
              )} */}

            </div>
          </div>

          {/* Product Info Section */}
          <div className="p-6 overflow-y-auto max-h-[80vh]">
            <DialogHeader>
              <div className="mb-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                  {displayCategory}
                </Badge>
              </div>
              <DialogTitle className="text-2xl font-bold text-blue-900">{product.name}</DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="details">Chi tiết</TabsTrigger>
                <TabsTrigger value="features">Tính năng</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Mô tả sản phẩm</h4>
                    <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                  </div>



                  {product.tags && product.tags.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-100">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <h4 className="font-medium text-blue-900">Tính năng nổi bật</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Thiết kế công thái học, hỗ trợ vòm bàn chân tối ưu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vật liệu cao cấp, bền bỉ theo thời gian</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Giảm đau và mệt mỏi khi đứng hoặc đi bộ lâu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Phù hợp với nhiều loại giày dép khác nhau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Được nghiên cứu và phát triển bởi các chuyên gia y tế</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-gray-200 mt-6">
                  <h4 className="font-medium text-blue-900 mb-2">Thông số kỹ thuật</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Chất liệu:</span> <span className="font-medium">Cao su tự nhiên</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Xuất xứ:</span> <span className="font-medium">Việt Nam</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Bảo hành:</span> <span className="font-medium">12 tháng</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500">Kích cỡ:</span> <span className="font-medium">Nhiều kích cỡ</span>
                    </div>
                  </div>
                </div>
              </TabsContent>


            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
