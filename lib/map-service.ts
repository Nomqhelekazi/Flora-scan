import type { MapRegion, City } from "./map-data"

export async function fetchMapData() {
  const response = await fetch("/api/map")
  if (!response.ok) {
    throw new Error("Failed to fetch map data")
  }
  return response.json()
}

export async function fetchCities() {
  const response = await fetch("/api/map?type=cities")
  if (!response.ok) {
    throw new Error("Failed to fetch cities")
  }
  return response.json() as Promise<City[]>
}

export async function fetchClimateZones() {
  const response = await fetch("/api/map?type=climate-zones")
  if (!response.ok) {
    throw new Error("Failed to fetch climate zones")
  }
  return response.json()
}

export async function fetchRotterdamRegions() {
  const response = await fetch("/api/map?type=rotterdam-regions")
  if (!response.ok) {
    throw new Error("Failed to fetch Rotterdam regions")
  }
  return response.json() as Promise<MapRegion[]>
}

export async function fetchCompatiblePlants(regionId: string) {
  const response = await fetch(`/api/map/compatible-plants?regionId=${regionId}`)
  if (!response.ok) {
    throw new Error("Failed to fetch compatible plants")
  }
  return response.json()
}
