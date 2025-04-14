"use client"

import { useEffect, useRef } from "react"
import type { Plant } from "@/lib/types"

interface WallFacadeVisualizationProps {
  selectedPlants: Plant[]
}

export function WallFacadeVisualization({ selectedPlants }: WallFacadeVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw the wall facade
    drawWallFacade(ctx, canvas.width, canvas.height)

    // Draw plants if selected
    if (selectedPlants.length > 0) {
      drawPlants(ctx, canvas.width, canvas.height, selectedPlants)
    }
  }, [selectedPlants])

  const drawWallFacade = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw wall background
    ctx.fillStyle = "#e5e5e5"
    ctx.fillRect(0, 0, width, height)

    // Draw grid pattern for substrate
    ctx.strokeStyle = "#d4d4d4"
    ctx.lineWidth = 1

    const gridSize = 20
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Draw frame
    ctx.strokeStyle = "#737373"
    ctx.lineWidth = 8
    ctx.strokeRect(0, 0, width, height)

    // Add text if no plants selected
    if (selectedPlants.length === 0) {
      ctx.fillStyle = "#525252"
      ctx.font = "bold 16px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("Your wall facade visualization", width / 2, height / 2)
      ctx.font = "14px sans-serif"
      ctx.fillText("Choose plants to see them on this wall", width / 2, height / 2 + 30)
    }
  }

  const drawPlants = (ctx: CanvasRenderingContext2D, width: number, height: number, plants: Plant[]) => {
    // Divide the wall into sections based on number of plants
    const sectionWidth = width / plants.length

    plants.forEach((plant, index) => {
      const x = index * sectionWidth
      const plantWidth = sectionWidth
      const plantHeight = height

      // Load and draw plant image
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = plant.imageUrl || "/placeholder.svg?height=300&width=200"

      img.onload = () => {
        // Calculate aspect ratio to maintain proportions
        const aspectRatio = img.width / img.height
        let drawWidth = plantWidth
        let drawHeight = drawWidth / aspectRatio

        if (drawHeight > plantHeight) {
          drawHeight = plantHeight
          drawWidth = drawHeight * aspectRatio
        }

        // Center the image in its section
        const xPos = x + (plantWidth - drawWidth) / 2
        const yPos = (plantHeight - drawHeight) / 2

        // Draw with semi-transparency to blend with wall
        ctx.globalAlpha = 0.85
        ctx.drawImage(img, xPos, yPos, drawWidth, drawHeight)
        ctx.globalAlpha = 1.0

        // Add plant name
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
        ctx.fillRect(x, height - 30, plantWidth, 30)
        ctx.fillStyle = "white"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(plant.commonName, x + plantWidth / 2, height - 12)
      }
    })
  }

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-[300px]" style={{ display: "block" }}></canvas>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        {selectedPlants.length === 0
          ? "This visualization will show your selected plants on a wall facade."
          : `Showing ${selectedPlants.length} selected plant${selectedPlants.length > 1 ? "s" : ""} on the wall facade.`}
      </p>
    </div>
  )
}
