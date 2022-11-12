import { createGlobalStyle } from 'styled-components';
import { reset } from './css';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  }
  :root{
    --color-black : #051528;
    --color-white :#ffffff;
    --color-blue : #468FF7;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    background-color:#F0F2F5;
  }
  body {
    /* font-family: 'Noto Serif KR', serif; */
  }
`;