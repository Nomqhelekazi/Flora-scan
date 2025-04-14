/**
 * Utility functions for image optimization
 */

// Generate a low-quality placeholder image
export function generatePlaceholderImage(width = 10, height = 10): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`
}

// Preload critical images
export function preloadCriticalImages(imageUrls: string[]): void {
  if (typeof window === "undefined") return

  imageUrls.forEach((url) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = url
    document.head.appendChild(link)
  })
}

// Get optimized image sizes based on viewport
export function getResponsiveImageSizes(): string {
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
}

// Format image URL for optimization
export function getOptimizedImageUrl(url: string): string {
  // If it's already an optimized URL or a placeholder, return as is
  if (url.startsWith("data:") || url.includes("placeholder.svg")) {
    return url
  }

  // For real implementation, you might add query parameters for image optimization services
  // or use Next.js Image Optimization API
  return url
}
