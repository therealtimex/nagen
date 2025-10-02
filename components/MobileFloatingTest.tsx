"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"

// Simple test component to ensure floating buttons work on mobile
export default function MobileFloatingTest() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 left-4 z-[1003] bg-yellow-400 p-2 rounded-lg text-xs max-w-[200px] lg:hidden">
      <p className="font-bold mb-2">Mobile Test - Floating Buttons</p>
      <p className="mb-2">Nếu bạn thấy thông báo này trên mobile, floating buttons sẽ hoạt động.</p>
      <div className="flex gap-2">
        <Button 
          size="sm" 
          onClick={() => setIsVisible(false)}
          className="text-xs"
        >
          Ẩn
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          className="text-xs"
        >
          Test
        </Button>
      </div>
    </div>
  )
}