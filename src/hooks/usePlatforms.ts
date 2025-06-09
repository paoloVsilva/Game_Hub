import platforms from '../data/platform'
import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}

const apiClient = new APIClient('/platforms/lists/parents')
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
  })

export default usePlatforms
