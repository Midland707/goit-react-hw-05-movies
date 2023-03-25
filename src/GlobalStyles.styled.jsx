import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import-normalize; /* bring in normalize.css styles */

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
  margin-top: 0;
  margin-bottom: 0;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
`;
