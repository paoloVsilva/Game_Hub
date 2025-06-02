import { HStack, List, Image, Link, Spinner } from '@chakra-ui/react'
import useGenres, { type Genre } from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <>
      <List.Root variant='plain'>
        {data.map(genre => (
          <List.Item key={genre.id} paddingY='5px'>
            <HStack>
              <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={8} />
              <Link
                fontSize='lg'
                onClick={() => {
                  onSelectGenre(genre)
                }}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  )
}

export default GenreList
