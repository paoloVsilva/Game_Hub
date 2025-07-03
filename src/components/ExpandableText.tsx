import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const LIMIT = 300

  const [expanded, setExpanded] = useState(false)

  if (!children) return null
  if (children.length <= LIMIT) return <Text>{children}</Text>

  const summary = children.slice(0, LIMIT) + ' ... '
  return (
    <>
      <Text>
        {expanded ? children : summary}
        <Button
          size='xs'
          fontWeight='bold'
          colorPalette='yellow'
          height={6}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      </Text>
    </>
  )
}

export default ExpandableText
