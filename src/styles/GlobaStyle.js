import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    transition: color .3s;
    &::-webkit-scrollbar{
        display: none;
    }
}

html{
    font-size: 62.5%;
}

body{
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};;
}
`;
