import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  beige: '#FFF8F2',
  darkBeige: '#FFEBD9',
  white: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
`
