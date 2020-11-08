import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.tipography.fontFamily};
        font-size: 16px;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    #root {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
    }
`;
