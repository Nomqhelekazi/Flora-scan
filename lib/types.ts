export interface Plant {
  id: string
  commonName: string
  scientificName: string
  type: string
  growthSpeed: string
  nativeStatus: string
  lifespan: string
  biodiversityValue: string
  imageUrl: string
  windResistance: string
  sunExposure: string
  height: number
  droughtResistant: boolean
  description: string
  ecologicalBenefits: string[]
  faunaDependency?: string[]
  bloomingSeason: string
  maintenanceLevel?: string
  dormancyPeriod?: string
  temperatureTolerance?: {
    min: number
    max: number
  }
}
