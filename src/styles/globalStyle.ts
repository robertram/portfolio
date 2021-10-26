import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Slabo 13px', 'Mulish';
    //font-family: '${theme.font.main}';
    //font-size: ${theme.fontSize['6xl']};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: #f7fafc;
  }
`