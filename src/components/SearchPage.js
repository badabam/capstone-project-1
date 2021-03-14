import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'
import FilterTag from './FilterTag/FilterTag'
import Header from './Header/Header'
import SearchInput from './SearchInput/SearchInput'

export default function SearchPage({
  searchInputValue,
  setSearchInputValue,
  genres,
  onSetGenre,
}) {
  return (
    <>
      <Header name="Movie Picker" />
      <SearchInput
        labelText="Choose your Movie:"
        placeholder="Movie Name"
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <FilterTag genres={genres} onSetGenre={onSetGenre} />

      <ButtonWrapper>
        <MenuButton as={Link} to="/">
          Home
        </MenuButton>
        <MenuButton as={Link} to="/filteredmovies">
          Check out your Filtered Movies
        </MenuButton>
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 35px;
`
const MenuButton = styled(Button)`
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 10px;
`
