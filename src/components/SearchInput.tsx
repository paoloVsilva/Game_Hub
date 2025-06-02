import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)
      }}
    >
      <InputGroup flex='1' startElement={<BsSearch />}>
        <Input ref={ref} borderRadius={20} placeholder='Search games ...' variant='subtle'></Input>
      </InputGroup>
    </form>
  )
}

export default SearchInput
