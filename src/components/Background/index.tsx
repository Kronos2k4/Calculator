import styled from "styled-components";
import {FC} from "react";
import Ring from "../Ring";
import { ringsConfig } from "./ringConfig";

const Background: FC = ({children}) => {
    return (
        <Wrapper>
            {children}
            {ringsConfig.map(ring => <Ring key={`ring-${ring.id}`} ring={ring} />)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`

export default Background;
