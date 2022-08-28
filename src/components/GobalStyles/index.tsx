/*
  A combination of Josh Comeau and Andy Bell's Custom CSS Resets.
  https://www.joshwcomeau.com/css/custom-css-reset/
  https://piccalil.li/blog/a-modern-css-reset/
*/

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  html, body {
    height: 100%;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;