import { render } from "react-dom"
//! Components
import { createGlobalStyle } from "styled-components"
import App from "./App"
//* Image
import bgImage from "./img/bg.jpg"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url(${bgImage}) #000;
    background-size: cover;
    background-position: center;
  }
`

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector("#app")
)
