/*
  A combination of Josh Comeau and Andy Bell's Custom CSS Resets.
  https://www.joshwcomeau.com/css/custom-css-reset/
  https://piccalil.li/blog/a-modern-css-reset/
*/

import {createGlobalStyle} from 'styled-components'

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

  html {
    color-scheme: dark;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 115%;
    background-color: var(--background-color);
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

  #root {
    isolation: isolate;
    height: 100%;
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

  /* CSS Variables */
  :root {
    /* Fonts */
    --font-family: 'Wotfard', Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --font-weight-semibold: 600;
    --font-weight-regular: 400;
    --font-weight-light: 300;

    /* Colors */
    --warm-red: hsl(14, 73%, 53%);
    --cobalt: hsl(8, 78%, 71%);
    --yellow: hsl(45, 91%, 62%);
    --blue: hsl(241, 90%, 64%);
    --blue-tint: hsl(221, 81%, 70%);
    --green: hsl(133, 37%, 48%);
    --purple: hsl(264, 89%, 66%);
    --lavender: hsl(250, 87%, 85%);
    --black: hsl(0, 0%, 5%);
    --white: hsl(100, 100%, 100%);
    --grey: hsl(0, 0%, 90%);
    --background-color: var(--black);

    /* Shadows */
    --shadow-color: 0 0% 0%;
    --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  }
`

export {GlobalStyles}
