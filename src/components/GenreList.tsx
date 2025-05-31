import { HStack, List, Image, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url'

const GenreList = () => {
  const { data } = useGenres()
  return (
    <List.Root variant='plain'>
      {data.map(genre => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={8} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList
