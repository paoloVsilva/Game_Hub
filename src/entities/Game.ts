import type { Platform } from '@/entities/Platform'

export interface Game {
  description_raw: string
  id: number
  name: string
  slug: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
}
