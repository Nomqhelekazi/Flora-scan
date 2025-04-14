import type { Plant } from "./types"

// Function to filter plants based on environmental conditions
export function filterPlantsByEnvironment(
  plants: Plant[],
  temperatureRange: number[],
  windResistance: number,
  sunExposure: number,
): Plant[] {
  return plants.filter((plant) => {
    // Temperature compatibility
    let tempCompatible = true
    if (plant.temperatureTolerance) {
      tempCompatible =
        plant.temperatureTolerance.min <= temperatureRange[1] && plant.temperatureTolerance.max >= temperatureRange[0]
    }

    // Wind resistance compatibility
    let windCompatible = true
    if (plant.windResistance) {
      const windMap: Record<string, number> = {
        low: 1,
        medium: 3,
        high: 5,
      }
      const plantWindValue = windMap[plant.windResistance.toLowerCase()] || 3
      windCompatible = Math.abs(plantWindValue - windResistance) <= 1
    }

    // Sun exposure compatibility
    let sunCompatible = true
    if (plant.sunExposure) {
      const sunMap: Record<string, number> = {
        shade: 1,
        partial: 3,
        full: 5,
      }
      const plantSunValue = sunMap[plant.sunExposure.toLowerCase()] || 3
      sunCompatible = Math.abs(plantSunValue - sunExposure) <= 1
    }

    return tempCompatible && windCompatible && sunCompatible
  })
}

// Function to get plant recommendations based on environmental conditions
export function getPlantRecommendations(
  plants: Plant[],
  temperatureRange: number[],
  windResistance: number,
  sunExposure: number,
  limit = 4,
): Plant[] {
  const compatiblePlants = filterPlantsByEnvironment(plants, temperatureRange, windResistance, sunExposure)

  // Calculate match score for each plant
  const scoredPlants = compatiblePlants.map((plant) => {
    let score = 0

    // Temperature score
    if (plant.temperatureTolerance) {
      const avgTemp = (temperatureRange[0] + temperatureRange[1]) / 2
      const plantAvgTemp = (plant.temperatureTolerance.min + plant.temperatureTolerance.max) / 2
      score += 100 - Math.min(100, Math.abs(avgTemp - plantAvgTemp) * 5)
    } else {
      score += 70 // Default score if no temperature data
    }

    // Wind resistance score
    if (plant.windResistance) {
      const windMap: Record<string, number> = {
        low: 1,
        medium: 3,
        high: 5,
      }
      const plantWindValue = windMap[plant.windResistance.toLowerCase()] || 3
      score += 100 - Math.min(100, Math.abs(plantWindValue - windResistance) * 20)
    } else {
      score += 70 // Default score if no wind data
    }

    // Sun exposure score
    if (plant.sunExposure) {
      const sunMap: Record<string, number> = {
        shade: 1,
        partial: 3,
        full: 5,
      }
      const plantSunValue = sunMap[plant.sunExposure.toLowerCase()] || 3
      score += 100 - Math.min(100, Math.abs(plantSunValue - sunExposure) * 20)
    } else {
      score += 70 // Default score if no sun data
    }

    // Calculate final score (average of all scores)
    const finalScore = Math.round(score / 3)

    return {
      ...plant,
      matchScore: finalScore,
    }
  })

  // Sort by match score (highest first) and limit results
  return scoredPlants.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)).slice(0, limit)
}
