import styled from "styled-components";
import {viewport} from "../../config/theme";
import GridContainer from "../../components/grid/container";

const NavBarContainer = styled(GridContainer)`
  grid-gap: 1em;
  align-items: center;
  
  @media(max-width: ${viewport.medium}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(${props => props.isExpanded ? "4": "1"}, 1fr);
    justify-items: center;
  }
  
  @media(min-width: ${viewport.medium}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: none;
    justify-items: center;
  }
`;

export default NavBarContainer;
