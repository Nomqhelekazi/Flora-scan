import Link from "next/link"
import { Leaf } from "lucide-react"

import type { Plant } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PlantCardProps {
  plant: Plant
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={plant.imageUrl || `/placeholder.svg?height=200&width=200`}
          alt={plant.commonName}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90"
          >
            {plant.type}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="line-clamp-1 text-lg">{plant.commonName}</CardTitle>
        <p className="text-sm italic text-muted-foreground">{plant.scientificName}</p>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-medium">Growth:</span>
            <span>{plant.growthSpeed}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Status:</span>
            <span>{plant.nativeStatus}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Lifespan:</span>
            <span>{plant.lifespan}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Biodiversity:</span>
            <span>{plant.biodiversityValue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground" asChild>
          <Link href={`/flora-database/${plant.id}`}>
            <Leaf className="mr-2 h-4 w-4" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
