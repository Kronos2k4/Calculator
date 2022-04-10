import styled from "styled-components";

interface Props {
    ring: {
        id: number,
        position: {
            x: string,
            y: string,
        },
        size: number,
        color: string,
        depth: number,
        thickness: number
    },
}

const Ring = ({ring}: Props) => {
    return (
        <RingContainer ring={ring} />
    )
}

const RingContainer = styled.div<Props>`
  position: absolute;
  left: ${({ring}) => ring.position.x};
  margin-left: ${({ring}) => `calc(-${ring.size}px / 2)`};
  top: ${({ring}) => ring.position.y};
  width: ${({ring}) => ring.size}px;
  height: ${({ring}) => ring.size}px;
  border: ${({ring}) => `${ring.thickness}px solid ${ring.color}`};
  border-radius: 50%;
  filter: ${({ring}) => `blur(${(ring.depth - 1) * 20}px)`};
  opacity: ${({ring}) => `calc(1 / ${ring.depth})`};
`

export default Ring;
