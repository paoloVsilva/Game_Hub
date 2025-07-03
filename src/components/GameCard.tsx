import { Card, Heading, HStack, Image } from '@chakra-ui/react'
import type { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../services/image-url'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} />
      <Card.Body>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='xl'>
          <Link to={'/games/' + game.slug}> {game.name}</Link>{' '}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard
