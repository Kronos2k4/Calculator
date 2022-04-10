import React from 'react';
import Background from './components/Background';
import Calculator from './components/Calculator';
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
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
            <CalculatorWrapper>
              <Calculator />
            </CalculatorWrapper>
        </Background>
      </ThemeProvider>
  );
}

const CalculatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`

export default App;
