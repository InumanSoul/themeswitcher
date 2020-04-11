import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        font-size: 1rem;
        color: ${(props) => props.theme.colors.text};
        font-family: sans-serif;
    }

    h1{
        font-size: 2.2rem;
    }

    h2{
        font-size: 2rem;
    }

    h3{
        font-size: 1.75rem;
    }

    a{
        color: ${(props) => props.theme.colors.primary};
    }

    .mt4{
        margin-top: 1.2rem;
    }

    .text-primary {
        color: ${(props) => props.theme.colors.primary};
    }
`;