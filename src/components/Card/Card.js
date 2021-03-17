import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Card({ title, poster, genre }) {
  return (
    <>
      <CardGrid>
        <span>{title}</span>
        <Poster src={poster} alt="" />
        <GenreWrapper>
          {genre.map((item, index) => (
            <Button key={index}>{item}</Button>
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
`
