"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function MobileTestButtons() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (!isMounted) return null

  const testFacebook = () => {
    window.open('https://www.facebook.com/people/NAGEN/61576197860425/', '_blank', 'noopener,noreferrer')
  }

  const testYoutube = () => {
    window.open('https://www.youtube.com/@nagenvn', '_blank', 'noopener,noreferrer')
  }

  const testZalo = () => {
    window.open('https://zalo.me/2254011402039684095', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed top-20 left-4 z-[1003] bg-yellow-100 border-2 border-yellow-400 p-3 rounded-lg max-w-[250px] lg:hidden">
      <div className="text-xs font-bold mb-2">Mobile Test Panel</div>
      <div className="text-xs mb-2">Width: {windowWidth}px</div>
      <div className="text-xs mb-2">Mobile: {windowWidth < 1024 ? 'Yes' : 'No'}</div>
      <div className="space-y-1">
        <Button size="sm" onClick={testFacebook} className="w-full text-xs">
          Test Facebook
        </Button>
        <Button size="sm" onClick={testYoutube} className="w-full text-xs">
          Test YouTube
        </Button>
        <Button size="sm" onClick={testZalo} className="w-full text-xs">
          Test Zalo
        </Button>
      </div>
    </div>
  )
}