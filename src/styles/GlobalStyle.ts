import { createGlobalStyle } from 'styled-components';

export const GloboalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Nanum Gothic' !important;
  box-sizing: border-box;
}
html {
  width: 1440px;
  margin: 0 auto;
}
html, body, div#root {
  height: auto;
}
body {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #fff;
}

`;
