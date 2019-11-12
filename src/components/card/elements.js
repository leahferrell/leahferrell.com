import styled from "styled-components";
import GridArea from "../grid/area";
import {COLORS, font} from "../../config/theme";

export const Title = styled(GridArea)`
  grid-area: pt;
  text-align: left;
  background-color: ${COLORS.DARKER_GREY}
  padding: 0.75rem 1rem;
  border-radius: 5px 5px 0 0;
  font-size: ${font.size.medium};
  box-sizing: border-box;
  
  a {
    text-decoration: none;
    color: ${font.color.dark};
  }
  
  :hover, :focus {
    background-color: ${COLORS.LIGHT_BLUE};
    cursor: pointer;
  }
`;

export const Description = styled(GridArea)`
  grid-area: pd;
  text-align: left;
  background-color: transparent;
  box-sizing: border-box;
  height: auto;
  padding: 20px 15px;
  font-size: ${font.size.small};
`;

export const Tags = styled(GridArea)`
  grid-area: py;
  background-color: transparent;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid ${COLORS.LIGHTER_GREY};
  padding: 0px 0px 5px 10px;
  min-height: 3rem;
  align-content: center;
`;
