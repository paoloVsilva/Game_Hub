import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import './index.css'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
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
        <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <GridItem area='aside' hideBelow='md' paddingX={5}>
        <GenreList onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </GridItem>
      <GridItem area='main'>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5}>
            <PlatformSelector onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
            <SortSelector onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })} selectedSortOrder={gameQuery.sortOrder} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
