import styled from 'styled-components/macro'

export default styled.button`
  font-size: 0.8rem;
  padding: 8px;
  border-radius: 10px;
  border: none;
  text-align: center;
  justify-content: center;
  background: ${p => (p.active ? '#333' : '#ddd')};
  color: ${p => (p.active ? 'white' : 'black')};
  font-family: inherit;
  margin: 2px 5px;
`
