import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root,
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @font-face{
    font-family: 'Selima';
    src: url('selima_-webfont.woff') format('woff'),
  }
`;

export default GlobalStyle;
