import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        box-sizing: border-box;
        height: 100%;
        background-color: ${({ theme }) => theme.tColors.palette.primary.light};
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    input:-internal-autofill-previewed,
    input:-internal-autofill-selected,
    textarea:-internal-autofill-previewed,
    textarea:-internal-autofill-selected,
    select:-internal-autofill-previewed,
    select:-internal-autofill-selected {
        background-color: white !important;
        background-image: none !important;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;
