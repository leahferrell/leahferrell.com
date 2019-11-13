import styled from "styled-components";
import {BORDER_RADII, components} from "../../config/theme";

export const Tag = styled.span`
  margin-right: 5px;
  margin-top: 5px;
  background-color: ${props => components.card.tag.color[props.mode]};
  padding: 5px 10px;
  border-radius: ${BORDER_RADII.SMALL};
  font-size: ${components.card.tag.font.size};
  color: ${props => components.card.tag.font.color[props.mode]};
  display: inline-block;
  
  :hover, :focus {
    background-color: ${props => components.card.tag.hover.background[props.mode]};
    color: ${props => components.card.tag.hover.font[props.mode]};
    cursor: pointer;
  }
`;
