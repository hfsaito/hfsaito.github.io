import { createGlobalStyle } from 'styled-components'

import { Style } from '../1.atoms'

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
  }
  body {
    background-color: ${Style.color.body.background};
  }
`