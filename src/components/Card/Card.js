import styled from 'styled-components/macro'

export default function Card({ title, poster, id }) {
  return (
    <>
      <CardGrid>
        <span>{title}</span>

        <Poster src={poster} alt="" />
      </CardGrid>
    </>
  )
}

const CardGrid = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  margin: 10px;
  gap: 10px;
`

const Poster = styled.img`
  border-radius: 10px;
`
