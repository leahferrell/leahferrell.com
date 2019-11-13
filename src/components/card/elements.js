import styled from "styled-components";
import GridArea from "../grid/area";
import {components} from "../../config/theme";

export const Title = styled(GridArea)`
  grid-area: pt;
  text-align: left;
  background-color: ${props => components.card.title.background[props.mode]}
  padding: 0.75rem 1rem;
  border-radius: 5px 5px 0 0;
  font-size: ${components.card.title.font.size};
  box-sizing: border-box;
  color: ${props => components.card.title.font.color[props.mode]};
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  :hover, :focus {
    background-color: ${props => components.card.title.hover.background[props.mode]};
    color: ${props => components.card.title.hover.font[props.mode]};
    cursor: pointer;
  }
`;

export const Description = styled(GridArea)`
  grid-area: pd;
  text-align: left;
  background-color: ${props => components.card.body.color[props.mode]};
  box-sizing: border-box;
  height: auto;
  padding: 20px 15px;
  font-size: ${components.card.body.font.size};
  color: ${props => components.card.body.font.color[props.mode]};
`;

export const Tags = styled(GridArea)`
  grid-area: py;
  background-color: ${props => components.card.body.color[props.mode]};
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid ${props => components.card.tag.border.color[props.mode]};
  padding: 0px 0px 5px 10px;
  min-height: 3rem;
  align-content: center;
`;
