import type Platform from '@/entities/Platform'
import type Genre from './Genre'
import type Publisher from './Publisher'

export default interface Game {
  description_raw: string
  id: number
  name: string
  slug: string
  genres: Genre[]
  publishers: Publisher[]
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
}
