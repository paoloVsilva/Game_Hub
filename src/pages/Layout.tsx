import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
