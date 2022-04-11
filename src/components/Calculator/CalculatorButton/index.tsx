import { rgba } from "polished";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
    value: number;
    onClick: (value: number) => void;
}

const CalculatorButton: FC<Props> = ({value, onClick}) => {
    return (
        <Wrapper onClick={() => onClick(value)}>
            {value}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  border-radius: 50%;
  color: ${({theme}) => theme.calculator.light.colors.primary};
  background-color: ${({theme}) => rgba(theme.calculator.light.colors.primary, .2)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: ${({theme}) => theme.calculator.sizes.button}px;
  height: ${({theme}) => theme.calculator.sizes.button}px;
  transition: background-color, .3s ease-in-out;
  &:hover {
    background-color: ${({theme}) => rgba(theme.calculator.light.colors.primary, .4)};
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 20px white;
  }
  
  &:active {
    &:after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 0;
      opacity: .3;
      transition: 0s;
    }
  }
`

export default CalculatorButton;
