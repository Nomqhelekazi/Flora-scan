"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface ComparisonTableProps {
  plants: string[]
}

export function ComparisonTable({ plants }: ComparisonTableProps) {
  // Sample data for demonstration
  const samplePlants = [
    {
      name: "Lavender",
      scientificName: "Lavandula",
      type: "Shrub",
      height: "60 cm",
      growthRate: "Medium",
      sunExposure: "Full",
      soilType: "Well-drained",
      waterNeeds: "Low",
      windResistance: "High",
      biodiversityValue: "High",
      maintenance: "Low",
      droughtResistant: "Yes",
    },
    {
      name: "Sedum",
      scientificName: "Sedum spp.",
      type: "Succulent",
      height: "15 cm",
      growthRate: "Slow",
      sunExposure: "Full",
      soilType: "Poor to medium",
      waterNeeds: "Very Low",
      windResistance: "High",
      biodiversityValue: "Medium",
      maintenance: "Very Low",
      droughtResistant: "Yes",
    },
    {
      name: "Ornamental Grass",
      scientificName: "Various",
      type: "Grass",
      height: "100 cm",
      growthRate: "Fast",
      sunExposure: "Full to Partial",
      soilType: "Adaptable",
      waterNeeds: "Medium",
      windResistance: "High",
      biodiversityValue: "Medium",
      maintenance: "Low",
      droughtResistant: "Yes",
    },
  ]

  // Characteristics to display
  const characteristics = [
    "scientificName",
    "type",
    "height",
    "growthRate",
    "sunExposure",
    "soilType",
    "waterNeeds",
    "windResistance",
    "biodiversityValue",
    "maintenance",
    "droughtResistant",
  ]

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[200px] font-semibold">Characteristic</TableHead>
            {samplePlants.map((plant) => (
              <TableHead key={plant.name} className="min-w-[150px] font-semibold">
                <div className="flex flex-col">
                  <span>{plant.name}</span>
                  <span className="font-normal text-xs text-muted-foreground">{plant.scientificName}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {characteristics.map((char) => (
            <TableRow key={char} className="hover:bg-muted/30">
              <TableCell className="font-medium">
                {char.charAt(0).toUpperCase() + char.slice(1).replace(/([A-Z])/g, " $1")}
              </TableCell>
              {samplePlants.map((plant) => (
                <TableCell key={`${plant.name}-${char}`}>
                  {char === "biodiversityValue" ? (
                    <Badge
                      className={
                        plant[char as keyof typeof plant] === "High"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      }
                    >
                      {plant[char as keyof typeof plant]}
                    </Badge>
                  ) : char === "droughtResistant" ? (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {plant[char as keyof typeof plant]}
                    </Badge>
                  ) : (
                    plant[char as keyof typeof plant]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
