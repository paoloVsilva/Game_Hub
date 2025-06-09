import platforms from '../data/platform'
import { useQuery } from '@tanstack/react-query'
import type { FetchResponse } from '../services/api-client'
import apiClient from '../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
  })

export default usePlatforms
