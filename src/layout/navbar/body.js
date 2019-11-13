import styled from "styled-components";
import {font, SHADOWS} from "../../config/theme";
import GridBody from "../../components/grid/body";

const NavBarBody = styled(GridBody)`
  padding: 20px 0;
  font-size: ${font.size.small};
  box-shadow: ${SHADOWS.LIGHT};
  opacity: 0.9;
  filter: alpha(opacity=90); /* For IE8 and earlier */
  z-index: 5;
  background-color: inherit;
  position: fixed;
`;

export default NavBarBody;
