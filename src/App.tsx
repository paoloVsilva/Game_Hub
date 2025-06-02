import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/usePlatforms'

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
        <GenreList onSelectGenre={genre => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area='main'>
        <PlatformSelector onSelectPlatform={platform => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
