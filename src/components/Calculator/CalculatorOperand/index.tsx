import { FC } from "react";
import styled from "styled-components";

interface Props {
    value: string;
    operation: string;
    onClick: (operation: string) => void;
}

const CalculatorOperand: FC<Props> = ({value, operation, onClick}) => {
    return (
        <Wrapper onClick={() => onClick(operation)}>
            {value}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default CalculatorOperand;
