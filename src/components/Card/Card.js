import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Card({ title, image, genresMovie, allGenres }) {
  const IMG_API = 'https://image.tmdb.org/t/p/'

  const genresNames = allGenres
    .filter(g => genresMovie.includes(g.id))
    .map(g => g.name)

  return (
    <>
      <CardGrid>
        <span>{title}</span>
        <Poster src={`${IMG_API}w185${image}`} alt="" />
        <GenreWrapper>
          {genresNames.map((genre, index) => (
            <Button key={index}>{genre}</Button>
          ))}
        </GenreWrapper>
      </CardGrid>
    </>
  )
}

const CardGrid = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  margin: 10px;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ddd;
`

const Poster = styled.img`
  border-radius: 10px;
  margin: auto;
`
const GenreWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
