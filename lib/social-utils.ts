/**
 * Utility functions for handling social media links
 */

export function openSocialLink(url: string, platform: string): void {
  try {
    // Try to open in new window/tab
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer,width=800,height=600')
    
    // Check if popup was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, show user-friendly message
      const userConfirmed = window.confirm(
        `Trình duyệt đã chặn popup. Bạn có muốn mở ${platform} trong tab hiện tại không?`
      )
      
      if (userConfirmed) {
        window.location.href = url
      }
    } else {
      // Focus the new window
      newWindow.focus()
    }
  } catch (error) {
    console.warn(`Failed to open ${platform} link:`, error)
    
    // Final fallback with user confirmation
    const userConfirmed = window.confirm(
      `Không thể mở ${platform}. Bạn có muốn thử lại không?`
    )
    
    if (userConfirmed) {
      window.location.href = url
    }
  }
}

export function isPopupBlocked(): boolean {
  try {
    const popup = window.open('', '_blank', 'width=1,height=1')
    if (popup) {
      popup.close()
      return false
    }
    return true
  } catch {
    return true
  }
}

export function detectPopupBlocker(): Promise<boolean> {
  return new Promise((resolve) => {
    const popup = window.open('about:blank', '_blank', 'width=1,height=1')
    
    if (!popup) {
      resolve(true)
      return
    }
    
    setTimeout(() => {
      try {
        if (popup.closed || !popup.location || popup.location.href === 'about:blank') {
          resolve(true)
        } else {
          resolve(false)
        }
        popup.close()
      } catch {
        resolve(true)
      }
    }, 100)
  })
}