import React, { FC } from 'react';
import Background from './components/Background';
import Calculator from './components/Calculator';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { FontStyles } from './FontStyles';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FontStyles />
      <Background>
        <CalculatorWrapper>
          <Calculator />
        </CalculatorWrapper>
      </Background>
    </ThemeProvider>
  );
};

const CalculatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export default App;
