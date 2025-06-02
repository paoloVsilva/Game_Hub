import { Button, Icon, Menu, Portal, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  // const { data, error, isLoading } = usePlatforms()

  // if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='outline'>
          Order By: Relevance
          <Icon size='sm'>
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>{/* {isLoading && <Spinner />} */}</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector
