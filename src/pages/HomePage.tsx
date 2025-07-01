import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import { Grid, GridItem, Box, HStack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr'
      }}
    >
      <GridItem area='aside' hideBelow='md' paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area='main'>
        <Box paddingLeft={10}>
          <GameHeading />
          <HStack gap={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage
