import { memo } from "react"
import { Leaf } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Characteristic {
  label: string
  value: string
}

interface PlantRecommendationCardProps {
  name: string
  scientificName: string
  imageUrl: string
  matchScore: number
  characteristics: Characteristic[]
}

// Use React.memo to prevent unnecessary re-renders
export const PlantRecommendationCard = memo(function PlantRecommendationCard({
  name,
  scientificName,
  imageUrl,
  matchScore,
  characteristics,
}: PlantRecommendationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHg/bQFwAAAABJRU5ErkJggg=="
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
          >
            {matchScore}% Match
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm italic text-muted-foreground">{scientificName}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Match Score</span>
            <span className="font-medium">{matchScore}%</span>
          </div>
          <Progress value={matchScore} className="h-2" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {characteristics.map((characteristic) => (
            <div key={characteristic.label} className="flex flex-col">
              <span className="font-medium">{characteristic.label}</span>
              <span>{characteristic.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={`/flora-database/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Leaf className="mr-2 h-4 w-4" />
            View Details
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
})
