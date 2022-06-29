import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    font-size: 62.5%;
    /* overflow: hidden; */
    /* height: 100%; */
  }

  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: "Avenir Next", 'Acumin', sans-serif;
    /* font-family: sans-serif; */
    background-color: #041222;
    color: #fff;
    width: 100%;
    /* width: 100%;
    height: 100vh; */
  }

  main {
    max-width: 120rem;
    margin: 10rem auto 0;
    padding: 0 1.5rem;
    overflow: hidden;

  }

  button {
    font-family: "Avenir Next", 'Acumin', sans-serif;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

`
