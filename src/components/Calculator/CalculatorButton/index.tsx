import { rgba } from "polished";
import {FC, ReactElement} from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

interface Props {
    value: number | string;
    onClick: (value: number | string) => void;
    size?: number;
    color?: string;
    icon?: ReactElement;
}

const CalculatorButton: FC<Props> = ({value, onClick, size = 1, color = theme.calculator.light.colors.primary, icon}) => {
    return (
        <Wrapper onClick={() => onClick(value)} size={size} color={color}>
            {icon ? icon : value}
        </Wrapper>
    )
}

const Wrapper = styled.div<{size: number; color: string;}>`
  position: relative;
  font-variation-settings: "wght" 600;
  -webkit-font-smoothing: none;
  border-radius: 20px;
  color: ${({theme}) => theme.calculator.light.colors.primary};
  background-color: ${({color}) => rgba(color, .2)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: ${({theme, size}) => theme.calculator.sizes.button * size + (10 * (size - 1))}px;
  height: ${({theme}) => theme.calculator.sizes.button}px;
  transition: background-color, .3s ease-in-out;
  &:hover {
    background-color: ${({theme}) => rgba(theme.calculator.light.colors.primary, .4)};
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 20px;
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
      border-radius: 20px;
      left: 0;
      top: 0;
      opacity: .3;
      transition: 0s;
    }
  }
`

export default CalculatorButton;
