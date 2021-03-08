import styled from 'styled-components/macro'

export default function Header({ name }) {
  return <HeaderApp>{name}</HeaderApp>
}

const HeaderApp = styled.h1`
  text-align: center;
  text-transform: uppercase;
  background: #ccc;
  padding: 20px;
  position: relative;
  margin-top: 0;
`
