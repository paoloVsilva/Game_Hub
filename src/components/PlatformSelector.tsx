import usePlatforms from '../hooks/usePlatforms'
import { Button, Icon, Menu, Portal, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms()

  if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='outline'>
          Platforms
          <Icon size='sm'>
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {isLoading && <Spinner />}
            {data.map(platform => (
              <Menu.Item key={platform.id} value={platform.name}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector
