import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    button,
    input,
    a,
    li,
    body {
        all: unset;
    };

    body {
        background-color: white;
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
