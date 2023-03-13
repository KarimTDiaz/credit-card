import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}

body {
    margin: 0;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Space Grotesk', sans-serif;
}
`;

export { GlobalStyle };
