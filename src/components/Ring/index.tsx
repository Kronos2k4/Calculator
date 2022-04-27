import styled from 'styled-components';
import { rgba } from 'polished';
import { FC } from 'react';

interface Props {
  ring: {
    id: number;
    position: {
      x: string;
      y: string;
    };
    size: number;
    color: string;
    depth: number;
    thickness: number;
  };
}

const Ring: FC<Props> = ({ ring }) => {
  return <RingContainer ring={ring} />;
};

const RingContainer = styled.div<Props>`
  position: absolute;
  left: ${({ ring }) => ring.position.x};
  margin-left: ${({ ring }) => `calc(-${ring.size}px / 2)`};
  top: ${({ ring }) => ring.position.y};
  width: ${({ ring }) => ring.size}px;
  height: ${({ ring }) => ring.size}px;
  background: ${({ ring }) =>
    `linear-gradient(0deg, ${rgba(ring.color, 0)} 0%, ${rgba(
      ring.color,
      1,
    )} 100%)`};
  border-radius: 50%;
  filter: ${({ ring }) => `blur(${(ring.depth - 1) * 20}px)`};
  opacity: ${({ ring }) => `calc(1 / ${ring.depth})`};
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: ${({ ring }) => `${-(ring.size / 2) + ring.thickness}px`};
    margin-top: ${({ ring }) => `${-(ring.size / 2) + ring.thickness}px`};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: ${({ ring }) => `${ring.size - ring.thickness * 2}px`};
    height: ${({ ring }) => `${ring.size - ring.thickness * 2}px`};
  }
`;

export default Ring;
