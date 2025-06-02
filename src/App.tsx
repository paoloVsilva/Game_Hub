import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='aside' hideBelow='md' paddingX={5}>
        <GenreList onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </GridItem>
      <GridItem area='main'>
        <PlatformSelector onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
