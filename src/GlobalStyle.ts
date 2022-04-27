import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: ${theme.fonts.archivo};
  }
  
  html {
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
`
