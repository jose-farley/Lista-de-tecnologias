import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        overflow-y: auto;
        overflow-x: hidden;
        background-color: ${props => props.theme["gray-600"]};
    }
    body, input, text-area, button {
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme["gray-100"]};
    }
`