import styled from "styled-components";
import {font, viewport} from "../../config/theme";
import GridBody from "../../components/grid/body";

const NavBarBody = styled(GridBody)`
  padding: 20px 0;
  
  @media(max-width: ${viewport.medium}){
    font-size: ${font.size.med_large}
  }
  
  @media(min-width: ${viewport.medium}){
    font-size: ${font.size.medium}
  }
`;

export default NavBarBody;
