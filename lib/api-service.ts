// Create a new optimized API service
import type { Plant } from "./types"

// In-memory cache for API responses
const cache: Record<string, { data: any; timestamp: number }> = {}
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

/**
 * Fetches data with caching
 */
async function fetchWithCache<T>(url: string, options?: RequestInit): Promise<T> {
  // Check if we have a valid cached response
  const now = Date.now()
  if (cache[url] && now - cache[url].timestamp < CACHE_DURATION) {
    return cache[url].data as T
  }

  // If no cache or expired, fetch new data
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  // Cache the response
  cache[url] = { data, timestamp: now }

  return data as T
}

/**
 * Fetches all plants with caching
 */
export async function fetchPlantsWithCache(): Promise<Plant[]> {
  return fetchWithCache<Plant[]>("/api/plants")
}

/**
 * Fetches specific plants by IDs with caching
 */
export async function fetchPlantsByIds(ids: string[]): Promise<Plant[]> {
  if (ids.length === 0) {
    return []
  }

  // In a real implementation, this would call a specific API endpoint
  // For now, we'll fetch all plants and filter
  const allPlants = await fetchPlantsWithCache()
  return allPlants.filter((plant) => ids.includes(plant.id))
}

/**
 * Fetches a single plant by ID with caching
 */
export async function fetchPlantById(id: string): Promise<Plant | null> {
  if (!id) {
    return null
  }

  const plants = await fetchPlantsByIds([id])
  return plants.length > 0 ? plants[0] : null
}
