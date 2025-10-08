"use client"

import React from "react"

interface SocialMediaButtonProps {
  href: string
  className: string
  ariaLabel: string
  children: React.ReactNode
  platform: 'facebook' | 'youtube' | 'tiktok'
}

export default function SocialMediaButton({ 
  href, 
  className, 
  ariaLabel, 
  children,
  platform 
}: SocialMediaButtonProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For problematic platforms, try alternative approaches
    if (platform === 'facebook') {
      e.preventDefault()
      
      // Try multiple Facebook URL formats
      const fallbackUrls = [
        href,
        "https://www.facebook.com/people/NAGEN/61576197860425/",
        "https://m.facebook.com/people/NAGEN/61576197860425/"
      ]
      
      let opened = false
      for (const url of fallbackUrls) {
        try {
          const win = window.open(url, '_blank', 'noopener,noreferrer')
          if (win && !win.closed) {
            opened = true
            break
          }
        } catch (error) {
          continue
        }
      }
      
      if (!opened) {
        // Final fallback - navigate in same tab
        window.location.href = href
      }
    }
    // For YouTube and TikTok, let browser handle normally
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}