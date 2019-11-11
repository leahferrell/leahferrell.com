import styled from "styled-components";
import {font, layout} from "../../config/theme";

const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: unset;
  font-size: ${font.size.large};
  color: ${props => font.color[props.mode]};
  font-family: ${font.family};
`;

export const NavArea = styled(ContainerElement)`
  grid-area: n;
  background-color: ${props => layout.nav[props.mode]};
`;

export const HeaderArea = styled(ContainerElement)`
  grid-area: h;
  background-color: ${props => layout.header[props.mode]};
`;

export const MenuArea = styled(ContainerElement)`
  grid-area: m;
  background-color: ${props => layout.menu[props.mode]};
`;

export const ContentArea = styled(ContainerElement)`
  grid-area: c;
  background-color: ${props => layout.content[props.mode]};
`;

export const FooterArea = styled(ContainerElement)`
  grid-area: f;
  background-color: ${props => layout.footer[props.mode]};
  color: ${props => layout.footer.font[props.mode]}
`;
