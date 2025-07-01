import { Heading, HStack, Image, Link, List, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {
  const { data, error, isLoading } = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom='2'>
        Genres
      </Heading>
      <List.Root variant='plain'>
        {data?.results.map(genre => (
          <List.Item key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
              />
              <Link
                fontSize='lg'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => {
                  setSelectedGenreId(genre.id)
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
