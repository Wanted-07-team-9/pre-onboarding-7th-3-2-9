import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Inter' !important;
  }
  html, body, div#__next {
    height: 100%;
  }
`;
