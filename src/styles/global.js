import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'sofiapro' ;
    src: url('/sofiapro.ttf') format('truetype');
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: #ffffff;
    --pink: #fe2c55;
    --black: #000;
    --black-border: rgba(0,0,0,0.08);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem sofiapro, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`