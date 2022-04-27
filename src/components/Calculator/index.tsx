import styled from 'styled-components';
import { rgba } from 'polished';
import CalculatorButton from './CalculatorButton';
import CalculatorOperand from './CalculatorOperand';
import { useState } from 'react';
import { operandsList } from './operandsList';

const Calculator = () => {
  const [values, setValues] = useState<string[]>([]);
  const [currentValue, setCurrentValue] = useState<string>('');
  const [result, setResult] = useState<number | string>();

  const handleOperand = (value: number | string) => {
    setCurrentValue((state) => state + value.toString());
  };

  const handleOperation = (operation: string) => {
    if (operation !== '=') {
      setValues((state) => [...state, currentValue, operation]);
      setCurrentValue('');
      return;
    }
    calculateResult();
  };

  const calculateResult = () => {
    let sum;
    for (let i = 0; i < values.length - 2; i + 3) {
      // sum = parseInt(values[i]) + values[i+1] + parseInt(values[i+2])
    }
    setResult(sum);
  };

  const _renderOperations = () => {
    return (
      <>
        {values.map((value) => (
          <>{value}</>
        ))}
      </>
    );
  };

  const _renderButtons = () => {
    const arr = [];
    for (let i = 9; i >= 0; i--) {
      arr.push(
        <CalculatorButton
          width={i === 0 ? 2 : 1}
          key={`button-${i}`}
          value={i}
          onClick={handleOperand}
        />,
      );
    }
    arr.push(
      <CalculatorOperand value={'.'} operation={'.'} onClick={() => {}} />,
    );
    return arr;
  };

  const _renderOperands = () => {
    return operandsList.map(({ value, operation, icon, height = 1 }) => (
      <CalculatorOperand
        height={height}
        value={value}
        icon={icon}
        operation={operation}
        onClick={handleOperation}
      />
    ));
  };

  return (
    <Wrapper>
      <Header>header</Header>
      <CalculationZone>
        {_renderOperations()}
        {result}
      </CalculationZone>
      <Actions>
        <Column>
          <MoreOperandsContainer></MoreOperandsContainer>
          <NumbersContainer>{_renderButtons()}</NumbersContainer>
        </Column>
        <Column>
          <OperandsContainer>{_renderOperands()}</OperandsContainer>
        </Column>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) =>
    `${rgba(theme.calculator.light.colors.primary, 0.1)}`};
  backdrop-filter: blur(100px);
`;

const Header = styled.div``;

const CalculationZone = styled.div``;

const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 140px;
  gap: 10px;
`;

const OperandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  gap: 10px;
`;

const MoreOperandsContainer = styled.div`
  height: 40px;
  margin-bottom: 10px;
`;

const Column = styled.div``;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export default Calculator;
