import usePlatforms, { type Platform } from '../hooks/usePlatforms'
import { Button, Icon, Menu, Portal, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms()

  if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='outline'>
          {selectedPlatform?.name || 'Platforms'}
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
              <Menu.Item key={platform.id} value={platform.name} onClick={() => onSelectPlatform(platform)}>
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
