import {createGlobalStyle} from "styled-components";
import archivo from './assets/fonts/archivo-variablefont_wdth-wght.ttf'

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed';
        src: url(${archivo}) format('truetype')
  }
`
