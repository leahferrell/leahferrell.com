import styled from 'styled-components';
import {viewport} from "../../config/theme";

export const NonStyledButton = styled.button`
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  border: none;
  padding: 0;
  
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
    cursor: pointer;
  }
`;

export const CenteredButton = styled(NonStyledButton)`
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const IconButton = styled(CenteredButton)`
  color: inherit;
  align-items: center;
`;

export const MenuButton = styled(CenteredButton)`
  display: none;
  color: inherit;
  text-align: left;
  
  @media(max-width: ${viewport.medium}) {
    display: inherit;
  }
`;
