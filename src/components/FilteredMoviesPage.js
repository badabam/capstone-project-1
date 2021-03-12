import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import Card from './Card/Card'
import Header from './Header/Header'

export default function FilteredMoviesPage({
  filteredMovies,
  searchInputValue,
}) {
  return (
    <>
      <Header name="Movie Picker" />
      <ButtonWrapper>
        <Button as={Link} to="/">
          Back to Search Page
        </Button>
      </ButtonWrapper>
      {filteredMovies
        .filter(item =>
          item.title.toLowerCase().includes(searchInputValue.toLowerCase())
        )
        .map(({ id, title, poster, genre }) => (
          <Card key={id} title={title} poster={poster} genre={genre} />
        ))}
    </>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 35px;
`
