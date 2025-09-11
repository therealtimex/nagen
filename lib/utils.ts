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
      window.open(path, "_blank");
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
