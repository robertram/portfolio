import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  font: {
    slabo: 'Slabo 13px',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    //font-family: ${({ theme }) => theme.font.slabo};
    font-size: 16px;
    color: '#1a202c';
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
  }
`