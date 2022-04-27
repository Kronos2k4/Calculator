import { FC, ReactElement } from 'react';
import CalculatorButton from '../CalculatorButton';

interface Props {
  value: string;
  operation: string;
  onClick: (operation: string) => void;
  color?: string;
  icon?: ReactElement;
  height?: number;
}

const CalculatorOperand: FC<Props> = ({
  value,
  operation,
  onClick,
  color,
  icon,
  height = 1,
}) => {
  return (
    <CalculatorButton
      height={height}
      icon={icon}
      color={color}
      value={value}
      onClick={() => onClick(operation)}
    />
  );
};

export default CalculatorOperand;
