import styled from "styled-components";
import {rgba} from "polished";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
    return (
        <Wrapper>
            <Header>
                header
            </Header>
            <CalculationZone>
                calc
            </CalculationZone>
            <Actions>
                <CalculatorButton />
            </Actions>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({theme}) => `${rgba(theme.calculator.light.colors.primary, .1)}`};
  backdrop-filter: blur(200px);
`

const Header = styled.div`

`

const CalculationZone = styled.div`

`

const Actions = styled.div`


`

export default Calculator;
