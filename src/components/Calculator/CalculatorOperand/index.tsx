import { FC } from "react";
import styled from "styled-components";
import CalculatorButton from "../CalculatorButton";

interface Props {
    value: string;
    operation: string;
    onClick: (operation: string) => void;
    color?: string;
}

const CalculatorOperand: FC<Props> = ({value, operation, onClick, color}) => {
    return (
        <CalculatorButton color={color} value={value} onClick={() => onClick(operation)} />
    )
}

export default CalculatorOperand;
