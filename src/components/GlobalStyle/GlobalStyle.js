import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;  
  font-size: 112.5%;
  margin: 0 auto;

}
input,
button {
  font-size: inherit;
}
input {
  padding: 5px;
}
`
