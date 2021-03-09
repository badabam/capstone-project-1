import styled from 'styled-components/macro'

export default function Header({ name }) {
  return <HeaderApp>{name}</HeaderApp>
}

const HeaderApp = styled.header`
  text-align: center;
  text-transform: uppercase;
  background: #ccc;
  padding: 20px;
  margin-bottom: 20px;
`
