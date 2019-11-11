import styled from "styled-components";
import {viewport} from "../../config/theme";
import {IconButton, MenuButton} from "../../components/button";
import GridArea from "../../components/grid/area";
import InputTextBox from "../../components/input/textbox";

export const NavBarItem = styled(GridArea)`
  @media(max-width: ${viewport.medium}) {
    grid-column: 1 / -1;
    display: ${props => props.isExpanded ? "flex": "none"}
  }
  
  @media(min-width: ${viewport.medium}) {
    display: flex;
  }
`;

export const NavBarMenuButton = styled(MenuButton)`
  @media(max-width: ${viewport.medium}) {
    grid-column: 1;
    display: flex;
  }
`;

export const NavBarTitle = styled(NavBarItem)`
  width: 100%;
  
  @media(max-width: ${viewport.medium}) {
    grid-column: 2;
    display: flex;
  }
`;

export const NavBarModeButton = styled(IconButton)`
  @media(max-width: ${viewport.medium}) {
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

export const NavBarSearchInput = styled(InputTextBox)`
  justify-content: center;
  justify-items: center;
  display: flex;
  
  @media(max-width: ${viewport.medium}) {
    grid-column: 1 / -1;
    display: ${props => props.isExpanded ? "flex": "none"}
  }
`;
