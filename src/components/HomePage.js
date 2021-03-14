import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button/Button'

import Header from './Header/Header'
import User from './User/User'
import UserInput from './UserInput/UserInput'
export default function HomePage({ players, addPlayer }) {
  return (
    <>
      <Header name="Movie Picker" />

      <UserInput
        labelText="Insert your Names:"
        placeholder="John Doe"
        onAddPlayer={addPlayer}
        players={players}
      ></UserInput>
      {players.map(({ name }, index) => (
        <User key={index} player={name} />
      ))}
      <ButtonWrapper>
        <MenuButton as={Link} to="/search">
          Click here to Search for Movies
        </MenuButton>
      </ButtonWrapper>
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
