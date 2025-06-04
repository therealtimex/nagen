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

export const getFullPath = (path: string): string => {
  if (path.startsWith('http')) return path;
  return path.startsWith('/') ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
};
