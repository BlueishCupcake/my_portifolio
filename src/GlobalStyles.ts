import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --gray-1: #333333;
    --gray-2: #212121;
    --gray-3: #828282;
    --black: #171717;
    --white: #F9F9F9;
    --pink-1: #C90266;
    --pink-2: #8f0047;
  }

  *{
    box-sizing: border-box;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  html,
  body { 
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
    scroll-behavior: smooth;

    width: 100%;
    overflow-x: hidden;

    font-family: 'DM Sans', sans-serif;
  }
  `;

export const SectionTitle = styled.h2`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.6rem;
  text-align: center;
  color: var(--white);
  margin: 1.8rem;
`;
