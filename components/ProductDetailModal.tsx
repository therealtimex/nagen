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

import {
  ArrowLeft,
  Star,
  Search,
  Filter,
  ArrowRight,
  Heart,
  ChevronDown,

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

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Mô tả sản phẩm</h4>
                <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
