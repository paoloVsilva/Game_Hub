import { HStack, Switch, Text } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <Switch.Root checked={colorMode === 'dark'} onCheckedChange={toggleColorMode} colorPalette='green' variant='solid'>
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
      <Text whiteSpace='nowrap'> Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
