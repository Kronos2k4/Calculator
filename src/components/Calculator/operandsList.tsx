import { EqualsIcon, MinusIcon, MultiplyIcon, PlusIcon } from '../Icons';

export const operandsList = [
  {
    value: '*',
    operation: '*',
    icon: <MultiplyIcon />,
  },
  {
    value: '-',
    operation: '-',
    icon: <MinusIcon />,
  },
  {
    value: '+',
    operation: '+',
    icon: <PlusIcon />,
  },
  {
    value: '=',
    operation: '=',
    icon: <EqualsIcon />,
    height: 2,
  },
];
