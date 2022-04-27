import styled from "styled-components";
import {rgba} from "polished";
import CalculatorButton from "./CalculatorButton";
import CalculatorOperand from "./CalculatorOperand";
import {useEffect, useState} from "react";

const Calculator = () => {

    const [values, setValues] = useState<string[]>([]);
    const [currentValue, setCurrentValue] = useState<string>('');
    const [result, setResult] = useState<number | string>();

    const handleOperand = (value: number | string) => {
        setCurrentValue(state => state + value.toString())
    }

    const handleOperation = (operation: string) => {
        if(operation !== '=') {
            setValues(state => [...state, currentValue, operation])
            setCurrentValue('')
            return
        }
        calculateResult()
    }

    const calculateResult = () => {
        let sum
        for(let i = 0; i < values.length - 2; i+3) {
            // sum = parseInt(values[i]) + values[i+1] + parseInt(values[i+2])
        }
        setResult(sum)
    }

    const _renderOperations = () => {
        return (
            <>
                {values.map(value => (
                    <>
                        {value}
                    </>
                ))}
            </>
        )
    }

    const _renderButtons = () => {
        const arr = []
        for(let i = 9; i >= 0; i--) {
            arr.push(<CalculatorButton size={(i === 0) ? 2 : 1} key={`button-${i}`} value={i} onClick={handleOperand}/>)
        }
        arr.push(<CalculatorOperand color={''} value={'.'} operation={'.'} onClick={() => {}} />)
        return arr
    }

    const _renderOperands = () => {
        return [<CalculatorOperand value={'+'} operation={'+'} onClick={handleOperation} />, <CalculatorOperand value={'='} operation={'='} onClick={handleOperation} />]
    }

    return (
        <Wrapper>
            <Header>
                header
            </Header>
            <CalculationZone>
                {_renderOperations()}
                {result}
            </CalculationZone>
            <Actions>
                <NumbersContainer>
                    {_renderButtons()}
                </NumbersContainer>
                <OperandsContainer>
                    {_renderOperands()}
                </OperandsContainer>
            </Actions>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({theme}) => `${rgba(theme.calculator.light.colors.primary, .1)}`};
  backdrop-filter: blur(100px);
`

const Header = styled.div`

`

const CalculationZone = styled.div`

`

const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 140px;
  gap: 10px;
`

const OperandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  gap: 10px;
`

const Actions = styled.div`
  display: flex;
  gap: 10px;
`

export default Calculator;
