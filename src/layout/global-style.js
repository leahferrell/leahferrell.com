import {createGlobalStyle} from "styled-components";
import {layout} from "../config/theme";

const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    box-sizing: border-box;
    background-color: ${props => layout.background[props.mode]};
    height: 100%;
    margin: 0;
    display: block;
  }
`;

export default GlobalStyle;
