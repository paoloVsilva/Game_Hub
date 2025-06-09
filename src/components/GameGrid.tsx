import useGames from '../hooks/useGames'
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import type { GameQuery } from '../App'
import React from 'react'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetching, hasNextPage } =
    useGames(gameQuery)
  const skeletons = [...Array(10).keys()]

  return (
    <Box paddingY={5} paddingX={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          disabled={isFetching}
          marginTop={5}
          onClick={() => fetchNextPage()}
        >
          {isFetching ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Box>
  )
}

export default GameGrid
