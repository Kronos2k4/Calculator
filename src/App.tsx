import React from 'react';
import Background from './components/Background';
import Calculator from './components/Calculator';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  
  html {
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
`

function App() {
  return (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Background>
          <Calculator />
        </Background>
      </ThemeProvider>
  );
}

export default App;
