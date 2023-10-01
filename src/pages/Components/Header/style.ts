import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["gray-700"]};
    height: 12.5rem;
    width: 100vw;

    strong{
        font-size: 2.5rem;
        color: ${props => props.theme.blue};
    }
`