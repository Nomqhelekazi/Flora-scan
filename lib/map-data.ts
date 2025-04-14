// Map data types
export interface MapRegion {
  id: string
  name: string
  coordinates: {
    x: number
    y: number
  }
  climateZone: number
  averageTemperature: number
  rainfall: number
  windSpeed: number
  description: string
  compatiblePlants: string[] // IDs of plants that thrive in this region
}

export interface City {
  id: string
  name: string
  coordinates: {
    x: number
    y: number
  }
  population: number
  description: string
  climateZone: number
}

// Netherlands map data
export const netherlandsCities: City[] = [
  {
    id: "rotterdam",
    name: "Rotterdam",
    coordinates: { x: 51.5, y: 45.2 },
    population: 651446,
    description: "The Netherlands' second-largest city and Europe's largest port.",
    climateZone: 3,
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    coordinates: { x: 55.3, y: 32.8 },
    population: 872680,
    description: "The capital and most populous city of the Netherlands.",
    climateZone: 2,
  },
  {
    id: "utrecht",
    name: "Utrecht",
    coordinates: { x: 54.8, y: 38.5 },
    population: 359370,
    description: "The fourth-largest city and a major transport hub.",
    climateZone: 2,
  },
  {
    id: "den-haag",
    name: "Den Haag",
    coordinates: { x: 48.2, y: 39.7 },
    population: 545838,
    description: "The seat of the Dutch government and home to the International Court of Justice.",
    climateZone: 3,
  },
  {
    id: "eindhoven",
    name: "Eindhoven",
    coordinates: { x: 58.5, y: 65.3 },
    population: 234394,
    description: "A technology and design hub, known as the 'Brainport' of the Netherlands.",
    climateZone: 4,
  },
  {
    id: "groningen",
    name: "Groningen",
    coordinates: { x: 62.7, y: 18.4 },
    population: 233273,
    description: "The main city in the northern Netherlands with a vibrant university culture.",
    climateZone: 1,
  },
  {
    id: "maastricht",
    name: "Maastricht",
    coordinates: { x: 56.8, y: 78.9 },
    population: 121565,
    description: "One of the oldest cities in the Netherlands, located in the southernmost province.",
    climateZone: 5,
  },
]

// Climate zones in the Netherlands
export const climateZones = [
  {
    id: 1,
    name: "Northern Coastal",
    averageTemperature: 9.5,
    rainfall: 850,
    windSpeed: 6.2,
    description: "Cooler temperatures with strong winds from the North Sea.",
  },
  {
    id: 2,
    name: "Western Coastal",
    averageTemperature: 10.2,
    rainfall: 800,
    windSpeed: 5.8,
    description: "Mild temperatures with moderate rainfall and sea breezes.",
  },
  {
    id: 3,
    name: "Central Lowlands",
    averageTemperature: 10.0,
    rainfall: 780,
    windSpeed: 4.5,
    description: "Moderate climate with average rainfall and less wind than coastal areas.",
  },
  {
    id: 4,
    name: "Eastern Uplands",
    averageTemperature: 9.8,
    rainfall: 750,
    windSpeed: 4.0,
    description: "Slightly cooler with less rainfall and more seasonal temperature variations.",
  },
  {
    id: 5,
    name: "Southern Hills",
    averageTemperature: 10.5,
    rainfall: 775,
    windSpeed: 3.8,
    description: "Warmer temperatures with moderate rainfall and less wind.",
  },
]

// Rotterdam regions with more detailed climate data
export const rotterdamRegions: MapRegion[] = [
  {
    id: "rotterdam-north",
    name: "Rotterdam North",
    coordinates: { x: 45, y: 40 },
    climateZone: 3,
    averageTemperature: 10.2,
    rainfall: 790,
    windSpeed: 5.0,
    description: "Urban area with slightly higher temperatures due to urban heat island effect.",
    compatiblePlants: ["common-yarrow", "butterfly-bush", "common-mallow", "common-st-johns-wort"],
  },
  {
    id: "rotterdam-south",
    name: "Rotterdam South",
    coordinates: { x: 52, y: 52 },
    climateZone: 3,
    averageTemperature: 10.1,
    rainfall: 800,
    windSpeed: 5.2,
    description: "Mixed urban and green areas with moderate temperatures.",
    compatiblePlants: ["common-foxglove", "climbing-hydrangea", "sweet-violet", "water-mint"],
  },
  {
    id: "rotterdam-east",
    name: "Rotterdam East",
    coordinates: { x: 58, y: 45 },
    climateZone: 3,
    averageTemperature: 10.0,
    rainfall: 785,
    windSpeed: 4.8,
    description: "Transition zone between urban and rural areas.",
    compatiblePlants: ["winter-aconite", "water-avens", "sweet-woodruff", "yellow-flag"],
  },
  {
    id: "rotterdam-west",
    name: "Rotterdam West",
    coordinates: { x: 42, y: 47 },
    climateZone: 2,
    averageTemperature: 10.3,
    rainfall: 810,
    windSpeed: 5.5,
    description: "Coastal influence with higher winds and slightly milder winters.",
    compatiblePlants: ["virginia-creeper", "sycamore", "wych-elm", "white-wood-rush"],
  },
]
