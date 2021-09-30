import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: #f6faf9; */
    background-color: #fff;
    font-family: 'Work Sans', sans-serif;
    text-align: center;

    & .App {
        text-align: center;
    }
  }
`
