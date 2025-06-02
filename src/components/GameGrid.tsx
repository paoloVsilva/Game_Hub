import useGames from '../hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import type { Genre } from '../hooks/useGenres'

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre)
  const skeletons = [...Array(10).keys()]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={3} padding={10}>
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
