import styled from 'styled-components/macro'

export default function SearchInput({
  labelText,
  placeholder,
  searchInputValue,
  setSearchInputValue,
}) {
  return (
    <LabelGrid>
      {labelText}
      <input
        value={searchInputValue}
        placeholder={placeholder}
        type="text"
        onChange={event => setSearchInputValue(event.target.value)}
      />
    </LabelGrid>
  )
}

const LabelGrid = styled.label`
  display: grid;
  gap: 4px;
  justify-content: center;
  input {
    border: 2px solid #bbb;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
`
