/**
 * Utility functions for handling social media links
 */

export const SOCIAL_URLS = {
  facebook: {
    primary: "https://facebook.com/people/NAGEN/61576197860425/",
    fallbacks: [
      "https://www.facebook.com/people/NAGEN/61576197860425/",
      "https://m.facebook.com/people/NAGEN/61576197860425/"
    ]
  },
  youtube: {
    primary: "https://www.youtube.com/@nagenvn",
    fallbacks: [
      "https://youtube.com/@nagenvn",
      "https://m.youtube.com/@nagenvn"
    ]
  },
  tiktok: {
    primary: "https://www.tiktok.com/@nagenvn",
    fallbacks: [
      "https://tiktok.com/@nagenvn",
      "https://m.tiktok.com/@nagenvn"
    ]
  }
} as const

export function openSocialLink(platform: keyof typeof SOCIAL_URLS): void {
  const urls = SOCIAL_URLS[platform]
  
  // Try primary URL first
  let opened = false
  
  try {
    const win = window.open(urls.primary, '_blank', 'noopener,noreferrer')
    if (win && !win.closed) {
      opened = true
      return
    }
  } catch (error) {
    console.warn(`Primary ${platform} URL failed:`, error)
  }
  
  // Try fallback URLs
  for (const fallbackUrl of urls.fallbacks) {
    try {
      const win = window.open(fallbackUrl, '_blank', 'noopener,noreferrer')
      if (win && !win.closed) {
        opened = true
        return
      }
    } catch (error) {
      console.warn(`Fallback ${platform} URL failed:`, fallbackUrl, error)
      continue
    }
  }
  
  // Final fallback - navigate in same tab
  if (!opened) {
    window.location.href = urls.primary
  }
}

export function validateSocialUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const validDomains = [
      'facebook.com', 'www.facebook.com', 'm.facebook.com',
      'youtube.com', 'www.youtube.com', 'm.youtube.com',
      'tiktok.com', 'www.tiktok.com', 'm.tiktok.com'
    ]
    
    return validDomains.includes(urlObj.hostname)
  } catch {
    return false
  }
}

export function getSocialPlatform(url: string): keyof typeof SOCIAL_URLS | null {
  try {
    const urlObj = new URL(url)
    
    if (urlObj.hostname.includes('facebook')) return 'facebook'
    if (urlObj.hostname.includes('youtube')) return 'youtube'
    if (urlObj.hostname.includes('tiktok')) return 'tiktok'
    
    return null
  } catch {
    return null
  }
}