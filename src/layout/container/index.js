import styled from "styled-components";
import {layout, viewport} from "../../config/theme";
import GridContainer from "../../components/grid/container";

const Container = styled(GridContainer)`
  background-color: ${props => layout.background[props.mode]};
  min-height: 100%;
  
  @media(max-width: ${viewport.medium}){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto minmax(60%, auto) auto;
    grid-template-areas:
      "n"
      "h"
      "m"
      "c"
      "f";
  }
  
  @media(min-width: ${viewport.medium}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto minmax(55%, auto) auto;
    grid-template-areas:
            "n n n n n n n n n n n n"
            "h h h h h h h h h h h h"
            ". m m m m m m m m m m ."
            ". c c c c c c c c c c ."
            "f f f f f f f f f f f f";
  }
  
  @media(min-width: ${viewport.large}) {
    grid-template-columns: repeat(2, minmax(165px, 1fr)) repeat(10, 1fr);
    grid-template-rows: auto auto minmax(60%, auto) auto;
    grid-template-areas:
            "n n n n n n n n n n n n"
            "h h h h h h h h h h h h"
            ". m m c c c c c c c c ."
            "f f f f f f f f f f f f";
  }
`;

export default Container;
