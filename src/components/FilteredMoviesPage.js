import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import Card from './Card/Card'
import Header from './Header/Header'

export default function FilteredMoviesPage({
  movies,
  filterByGenres,
  genres,
  // searchInputValue,
}) {
  const filteredMovies = movies.filter(
    movie =>
      filterByGenres.length === 0 ||
      movie.genre_ids.some(g => filterByGenres.includes(g))
  )

  return (
    <>
      <Header name="Movie Picker" />
      <ButtonWrapper>
        <MenuButton as={Link} to="/">
          Home
        </MenuButton>
        <MenuButton as={Link} to="/search">
          Search Page
        </MenuButton>
      </ButtonWrapper>
      {filteredMovies
        // .filter(item =>
        //   item.title.toLowerCase().includes(searchInputValue.toLowerCase())
        // )
        .map(({ id, title, poster_path, genre_ids }) => (
          <Card
            title={title}
            image={poster_path}
            genresMovie={genre_ids}
            allGenres={genres}
            key={id}
          />
        ))}
    </>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 35px;
`
const MenuButton = styled(Button)`
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
