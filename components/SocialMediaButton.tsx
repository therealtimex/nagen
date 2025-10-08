"use client"

import React from "react"
import { openSocialLink } from "@/lib/social-utils"

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
    e.preventDefault()
    
    const platformNames = {
      facebook: 'Facebook',
      youtube: 'YouTube', 
      tiktok: 'TikTok'
    }
    
    openSocialLink(href, platformNames[platform])
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick(e as any)
        }
      }}
    >
      {children}
    </a>
  )
}