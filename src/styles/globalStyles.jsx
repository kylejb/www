import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

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
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
    margin: 0;
    padding: 0;
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

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
	  display: none;
  }
`;

export default GlobalStyle;
