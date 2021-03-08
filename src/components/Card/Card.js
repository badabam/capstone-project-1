import styled from 'styled-components/macro'

export default function Card({ title, poster, id, genre }) {
  return (
    <>
      <CardGrid>
        <p>{title}</p>

        <Poster src={poster} alt="" />
        {/* <span>{genre}</span> */}
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
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ddd;
`

const Poster = styled.img`
  border-radius: 10px;
`
