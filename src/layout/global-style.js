import {createGlobalStyle} from "styled-components";
import {font, layout, viewport} from "../config/theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${font.rem.mobile};
    
    @media(min-width: ${viewport.medium}){
      font-size: ${font.rem.desktop};
    }
  }
  html, body, body > div {
    box-sizing: border-box;
    background-color: ${props => layout.background[props.mode]};
    height: auto;
    min-height: 100%;
    margin: 0;
    display: block;
  }
`;

export default GlobalStyle;
