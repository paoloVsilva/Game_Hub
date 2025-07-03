import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platform'
import APIClient from '../services/api-client'
import type Platform from '../entities/Platform'

const apiClient = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  })

export default usePlatforms
