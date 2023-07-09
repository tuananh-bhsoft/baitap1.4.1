import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
