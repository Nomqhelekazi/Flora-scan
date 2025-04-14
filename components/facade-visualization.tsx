"use client"

import { useState, useMemo, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import type { Plant } from "@/lib/types"

interface FacadeVisualizationProps {
  plants: Plant[]
  title?: string
  description?: string
}

export function FacadeVisualization({ plants, title, description }: FacadeVisualizationProps) {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  const containerRef = useRef<HTMLDivElement>(null)

  // Take only the top 3 plants and memoize to prevent unnecessary re-renders
  const topPlants = useMemo(() => plants.slice(0, 3), [plants])

  // Track when all images are loaded
  const allImagesLoaded = useMemo(() => {
    if (topPlants.length === 0) return true
    return topPlants.every((plant) => !!imagesLoaded[plant.id])
  }, [topPlants, imagesLoaded])

  // Handle image load completion
  const handleImageLoad = (plantId: string) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [plantId]: true,
    }))
  }

  // Handle download of the facade visualization
  const handleDownload = () => {
    if (!containerRef.current) return

    // Create a temporary link element
    const link = document.createElement("a")
    link.download = "green-facade-visualization.png"

    // Use html2canvas or a similar library to capture the visualization
    // For simplicity, we're just linking to the first plant image as an example
    // In a real implementation, you would use a library to capture the entire visualization
    if (topPlants.length > 0 && topPlants[0].imageUrl) {
      link.href = topPlants[0].imageUrl
      link.click()
    }
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div
          className="relative cursor-pointer"
          ref={containerRef}
          onClick={handleDownload}
          title="Click to download visualization"
        >
          {/* Facade background */}
          <div className="relative w-full h-[400px] bg-stone-300">
            <Image
              src="/images/brick-wall-pattern.png"
              alt="Brick wall facade"
              fill
              priority
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />

            {/* Plants visualization - horizontal arrangement */}
            <div className="absolute inset-0 flex flex-row">
              {topPlants.map((plant, index) => (
                <div
                  key={plant.id}
                  className="relative flex-1 border-r-2 border-white/30 last:border-r-0 overflow-hidden"
                  style={{ width: `${100 / topPlants.length}%` }}
                >
                  {/* Plant image with loading state */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {plant.imageUrl ? (
                      <>
                        {!imagesLoaded[plant.id] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                            <Skeleton className="h-full w-full" />
                          </div>
                        )}
                        <Image
                          src={plant.imageUrl || "/placeholder.svg"}
                          alt={plant.commonName}
                          fill
                          className={`object-cover transition-opacity duration-300 opacity-80 ${
                            imagesLoaded[plant.id] ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          onLoad={() => handleImageLoad(plant.id)}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <span className="text-gray-600">{plant.commonName}</span>
                      </div>
                    )}
                  </div>

                  {/* Plant label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold truncate">{plant.commonName}</span>
                      <span className="text-xs italic text-gray-300 truncate">{plant.scientificName}</span>
                      {plant.matchScore && (
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs mt-1 w-fit">
                          {plant.matchScore}% match
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Title overlay */}
            {title && (
              <div className="absolute top-4 left-4 max-w-[60%] bg-black/60 p-3 rounded-md text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                {description && <p className="text-sm text-gray-300">{description}</p>}
              </div>
            )}

            {/* Download hint overlay */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-md text-sm">
              Click to download
            </div>

            {/* Loading overlay - shows only when images are loading */}
            {!allImagesLoaded && topPlants.length > 0 && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white rounded-md p-4 shadow-lg">
                  <div className="animate-spin h-8 w-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto"></div>
                  <p className="text-center mt-2">Loading visualization...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
