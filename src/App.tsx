import React from 'react';
import Background from './components/Background';
import Calculator from './components/Calculator';
import styled, {ThemeProvider} from "styled-components";
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';

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
