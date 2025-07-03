import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import type { Game } from '../entities/Game'

const apiClient = new APIClient<Game>('/games')

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 10 * 1000
  })
}

export default useGame
