import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)

  const setSearchText = useGameQueryStore(s => s.setSearchText)

  return (
    <Box flex='1'>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (ref.current) setSearchText(ref.current.value)
        }}
      >
        <InputGroup startElement={<BsSearch />}>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder='Search games ...'
            variant='subtle'
          ></Input>
        </InputGroup>
      </form>
    </Box>
  )
}

export default SearchInput
