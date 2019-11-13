import styled from "styled-components";
import {font, layout} from "../../config/theme";

const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: unset;
  font-size: ${font.size.small};
  color: ${props => font.color[props.mode]};
  font-family: ${font.family};
`;

export const NavArea = styled(ContainerElement)`
  grid-area: n;
  background-color: ${props => layout.nav.background[props.mode]};
  z-index: 5;
  position: relative;
  top: 0;
`;

export const HeaderArea = styled(ContainerElement)`
  grid-area: h;
  background-color: ${props => layout.header.background[props.mode]};
  height: 800px;
`;

export const ContentArea = styled(ContainerElement)`
  grid-area: c;
  background-color: ${props => layout.content.background[props.mode]};
`;

export const FooterArea = styled(ContainerElement)`
  grid-area: f;
  background-color: ${props => layout.footer.background[props.mode]};
  color: ${props => layout.footer.font.color[props.mode]}
`;
