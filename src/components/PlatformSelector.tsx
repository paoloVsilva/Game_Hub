import { Button, Icon, Menu, Portal, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { type Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms()
  const selectedPlatform = usePlatform(selectedPlatformId)

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
            {data?.results.map(platform => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform)}
              >
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
