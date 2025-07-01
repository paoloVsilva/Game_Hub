import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()
  const skeletons = [...Array(10).keys()]

  const fetchedGameCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        next={fetchNextPage}
        dataLength={fetchedGameCount}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          paddingY={5}
          paddingX={10}
        >
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
      </InfiniteScroll>
    </>
  )
}

export default GameGrid
