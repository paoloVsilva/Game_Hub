import bullsEye from '../assets/bulls-eye.webp'
import thumbsup from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import type { ImageProps } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '20px' },
    4: { src: thumbsup, alt: 'recommended', boxSize: '20px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '30px' }
  }
  return <Image {...emojiMap[rating]} marginTop={1} />
}

export default Emoji
