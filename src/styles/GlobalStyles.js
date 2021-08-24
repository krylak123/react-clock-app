import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyles;
