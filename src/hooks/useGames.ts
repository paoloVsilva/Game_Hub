import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import type { GameQuery } from '../App'
import APIClient from '../services/api-client'
import type { Platform } from './usePlatforms'

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
}

const apiClient = new APIClient<Game>('/games')
const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,

    staleTime: ms('24h')
  })

export default useGames
