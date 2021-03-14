import styled from 'styled-components/macro'

export default function User({ player }) {
  return (
    <section>
      <Player>
        <PlayerName>{player}</PlayerName>
        <span>X</span>
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
