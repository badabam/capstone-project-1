import styled from 'styled-components/macro'
import movies from '../../movieList.json'
import Button from '../Button/Button'

export default function FilterTag({ onSetGenre, genres }) {
  const allGenres = movies.flatMap(({ genre }) => genre)
  const uniqueTags = [...new Set(allGenres)]
  return (
    <>
      <GenreTitle>Pick your Genre(s):</GenreTitle>
      <TagsWrapper>
        {uniqueTags.map((tag, id) => (
          <Button
            active={genres.includes(tag)}
            key={id}
            onClick={() => onSetGenre(tag)}
          >
            {tag}
          </Button>
        ))}
      </TagsWrapper>
    </>
  )
}

const GenreTitle = styled.p`
  display: grid;
  text-align: center;
  justify-content: center;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`
