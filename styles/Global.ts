import { createGlobalStyle } from 'styled-components'
import { color } from '.'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  :root {
    font-family: 'Manrope', sans-serif;
  }

  body {
    background-color: ${color.white};
  }

  a {
    color: unset;
    text-decoration: none;
  }
`
