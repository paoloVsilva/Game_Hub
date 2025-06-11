import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import './index.css'

export interface GameQuery {
  genreId?: number
  platformId?: number
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
        <NavBar
          onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area='aside' hideBelow='md' paddingX={5}>
        <GenreList
          onSelectGenre={genre =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area='main'>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5}>
            <PlatformSelector
              onSelectPlatform={platform =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
