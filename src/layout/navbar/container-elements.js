import styled from "styled-components";
import {font, viewport} from "../../config/theme";
import {IconButton, MenuButton} from "../../components/button";
import GridArea from "../../components/grid/area";

export const NavBarItem = styled(GridArea)`
  font-size: ${font.size.small};

  @media(max-width: ${viewport.large}) {
    grid-column: 1 / -1;
    display: ${props => props.isExpanded ? "flex": "none"}
  }
  
  @media(min-width: ${viewport.large}) {
    display: flex;
  }
`;

export const NavBarMenuButton = styled(MenuButton)`
  @media(max-width: ${viewport.large}) {
    grid-column: 1;
    display: flex;
  }
`;

export const NavBarTitle = styled(NavBarItem)`
  width: 100%;
  font-size: ${font.size.medium};
  grid-column: 2;
  
  @media(max-width: ${viewport.large}) {
    grid-column: 2;
    display: flex;
  }
`;

export const NavBarModeButton = styled(IconButton)`
  font-size: ${font.size.medium};
  grid-column: -3;

  @media(max-width: ${viewport.large}) {
    grid-column: 3;
    grid-row: 1;
    display: flex;
  }
`;

export const NavBarLink = styled.a`
  text-decoration: none;
  color: inherit;
  
  :hover {
    text-decoration: underline;
  }
`;
