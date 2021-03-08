import styled from 'styled-components/macro'

export default function SearchInput({ labelText, placeholder, name }) {
  return (
    <LabelGrid>
      {labelText}
      <input name={name} placeholder={placeholder} type="text" />
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
`
