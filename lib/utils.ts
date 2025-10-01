import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BASE_PATH } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImagePath = (imagePath?: string | null): string => {
  if (!imagePath) return `${BASE_PATH}/placeholder.svg`;
  
  // If it's already a full URL (starts with http/https), return as is
  if (imagePath.startsWith('http')) return imagePath;
  
  // If it's a relative path starting with /, add base path
  if (imagePath.startsWith('/')) return `${BASE_PATH}${imagePath}`;
  
  // If it's a relative path without /, add base path with /
  return `${BASE_PATH}/${imagePath}`;
};

/**
 * Navigate to a path with proper base path handling
 * @param path - The path to navigate to (can start with / or not)
 * @param options - Navigation options
 */
export const navigateTo = (
  path: string, 
  options: { replace?: boolean; external?: boolean } = {}
): void => {
  const { replace = false, external = false } = options;
  
  // If it's an external URL, navigate directly
  if (external || path.startsWith('http') || path.startsWith('//')) {
    if (replace) {
      window.location.replace(path);
    } else {
      window.open(path, "_blank", "noopener,noreferrer");
    }
    return;
  }
  
  // Handle internal paths with base path
  const fullPath = getFullPath(path);
  
  if (replace) {
    window.location.replace(fullPath);
  } else {
    window.location.href = fullPath;
  }
};

/**
 * Get full path with base path prefix
 * @param path - The path to process
 * @returns Full path with base path
 */
export const getFullPath = (path: string): string => {
  if (!path) return BASE_PATH || '/';
  
  // If it's already a full URL, return as is
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  // Handle root path
  if (path === '/') return BASE_PATH || '/';
  
  // If path starts with /, add base path
  if (path.startsWith('/')) return `${BASE_PATH}${path}`;
  
  // If path doesn't start with /, add base path with /
  return `${BASE_PATH}/${path}`;
};

/**
 * Get video path for a product
 * @param productId - The product ID
 * @returns Video path or null if not exists
 */
export const getVideoPath = (productId: string): string => {
  return `/videos/products/${productId}.mp4`;
};

/**
 * Check if video exists for a product
 * @param productId - The product ID
 * @returns Promise<boolean> - Whether video exists
 */
export const checkVideoExists = async (productId: string): Promise<boolean> => {
  try {
    const videoPath = getVideoPath(productId);
    const response = await fetch(getImagePath(videoPath), { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
