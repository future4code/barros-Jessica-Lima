import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --pink: #ff1493;
        --pink-secondary: #870c3d;
        --white: #f2f2f2;
        --gray: #2e2e2e;
    }
    h1{
        font-family: 'Ubuntu';
        color: var(--pink);
        font-size: 26px;
    }

    p{
        font-family: 'Ubuntu';
        color: var(--gray);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`