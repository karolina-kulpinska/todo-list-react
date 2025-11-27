import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .html {
        box-sizing: border-box;
}

*,
    ::after, ::before {
    box-sizing: inherit;
}

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;     
        background-color: ${({ theme }) => theme.color.gray};
        word-break: break-word;
}
`;