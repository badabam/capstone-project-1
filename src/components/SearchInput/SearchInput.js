import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function SearchInput({
  labelText,
  placeholder,
  searchInputValue,
  setSearchInputValue,
  onSearchMovie,
}) {
  return (
    <FormGrid onSubmit={handleSubmit}>
      <label>
        {labelText}
        <input
          name="movie"
          value={searchInputValue}
          placeholder={placeholder}
          type="text"
          maxLength="50"
          onChange={event => setSearchInputValue(event.target.value)}
        />
      </label>
      <Button as={Link} to={'/filteredmovies'}>
        Search
      </Button>
    </FormGrid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { movieName } = form.elements

    onSearchMovie({
      nameOfMovie: movieName.value,
    })
    form.reset()
    movieName.focus()
  }
}

const FormGrid = styled.label`
  display: grid;
  gap: 10px;
  justify-content: center;
  text-align: center;
  label {
    display: grid;
    gap: 10px;
    text-align: center;
  }
  input {
    border: 2px solid #bbb;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
`
