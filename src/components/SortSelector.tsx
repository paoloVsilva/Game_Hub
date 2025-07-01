import { Button, Icon, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ]

  const setSortOrder = useGameQueryStore(s => s.setSortOrder)
  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const currentSortOrder = sortOrders.find(
    order => order.value === selectedSortOrder
  )
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='outline'>
          Order By: {currentSortOrder?.label || 'Relevenace'}
          <Icon size='sm'>
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map(sortOrder => (
              <Menu.Item
                value={sortOrder.value}
                key={sortOrder.value}
                onClick={() => setSortOrder(sortOrder.value)}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector
