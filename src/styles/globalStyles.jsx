import { createGlobalStyle } from 'styled-components'
import reset from './_reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Typography */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: local('Roboto Thin'), local('Roboto-Thin'),
    url('/fonts/roboto-100.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'),
    url('/fonts/roboto-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
    url('/fonts/roboto-400.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'), local('Roboto-Black'),
    url('/fonts/roboto-900.woff2') format('woff2');
  }

  html {
    font-size: 16px;
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
    height: auto;
  }

  ::-webkit-scrollbar {
	  display: none;
  }
`;

export default GlobalStyle;
