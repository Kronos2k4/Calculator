import styled from "styled-components";
import {FC} from "react";

const Background: FC = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`

export default Background;
