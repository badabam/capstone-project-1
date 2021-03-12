import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import Card from './Card/Card'
import Header from './Header/Header'

export default function HomePage({ movies }) {
  return (
    <>
      <Header name="Movie Picker" />
      <ButtonWrapper>
        <Button as={Link} to="/search">
          Click here to Search for Movies
        </Button>
      </ButtonWrapper>
      {movies.map(({ id, title, poster, genre }) => (
        <Card key={id} title={title} poster={poster} genre={genre} />
      ))}
    </>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 35px;
`
