import { Grid, GridItem } from '@chakra-ui/react'

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`
      }}
    >
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <GridItem area='aside' bg='gold' hideBelow='md'>
        Aside
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
