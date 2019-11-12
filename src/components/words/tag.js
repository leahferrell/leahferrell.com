import styled from "styled-components";
import {COLORS, font} from "../../config/theme";

export const Tag = styled.span`
  margin-right: 5px;
  margin-top: 5px;
  background-color: ${COLORS.LIGHTER_GREY}
  padding: 5px 10px;
  border-radius: 2px;
  font-size: ${font.size.small}
  display: inline-block;
  
  :hover, :focus {
    background-color: ${COLORS.LIGHT_YELLOW};
    cursor: pointer;
  }
`;
