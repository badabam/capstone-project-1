import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function User({ name, onHandleDelete }) {
  return (
    <section>
      <Player>
        <PlayerName>{name}</PlayerName>
        <Button onClick={onHandleDelete}>X</Button>
      </Player>
    </section>
  )
}

export const Player = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ddd;
  background: white;
`
export const PlayerName = styled.div`
  display: flex;
  align-items: center;
`
