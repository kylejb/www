import { createGlobalStyle } from 'styled-components';

import { media } from './_mediaQueries';
import reset from './_reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Roboto-Thin';
    font-style: normal;
    font-weight: 100;
    src: local('Roboto Thin'), local('Roboto-Thin'),
    url('/fonts/roboto-100.woff2') format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto-Light';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'),
    url('/fonts/roboto-300.woff2') format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
    url('/fonts/roboto-400.woff2') format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto-Black';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'), local('Roboto-Black'),
    url('/fonts/roboto-900.woff2') format('woff2');
    font-display: fallback;
  }

  html {
    font-size: 12px;


    ${media.mobileL`
      font-size: 14px;
    `}

    ${media.tablet`
      font-size: 16px;
    `}

    ${media.laptopM`
      font-size: 18px;
    `}

    ${media.desktopM`
      font-size: 20px;
    `}
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow: hidden;
  }

  h1 {
    font-weight: 900;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: fallback;
  }

  ::-webkit-scrollbar {
	  display: none;
  }
`;

export default GlobalStyle;
