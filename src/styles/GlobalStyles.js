// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import TitilliumWebLight from '../assets/font/TitilliumWeb-Light.ttf';


import architectFont from '../assets/font/architect-font1.ttf';
import signatureFont from '../assets/font/signature.otf';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "TitilliumWeb-Light";
    src: url(${TitilliumWebLight}) format("truetype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "architect-font";
    src: url(${architectFont}) format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "signature-font";
    src: url(${signatureFont}) format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  html, 
  body, 
  #root {
    height: 100%;
    margin: 0;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: rgba(241,235,235,255);
    margin: 0;
    font-family: "TitilliumWeb-Light", sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;