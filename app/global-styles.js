import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif !important;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif !important;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;