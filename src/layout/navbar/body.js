import styled from "styled-components";
import {font, SHADOWS} from "../../config/theme";
import GridBody from "../../components/grid/body";

const NavBarBody = styled(GridBody)`
  padding: 20px 0;
  font-size: ${font.size.small};
  box-shadow: ${SHADOWS.LIGHT};
  z-index: 5;
  background-color: inherit;
  position: fixed;
`;

export default NavBarBody;
