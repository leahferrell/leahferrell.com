import styled from "styled-components";
import GridArea from "../grid/area";
import GridBody from "../grid/body";
import GridContainer from "../grid/container";
import {components, SHADOWS} from "../../config/theme";

export const CardArea = styled(GridArea)`
  width: 100%;
  display: flex;
  border-radius: 5px;
`;

export const CardBody = styled(GridBody)`
  border-radius: 5px;
  width: 100%;
  box-shadow: ${SHADOWS.MEDIUM};
  
  :hover, :focus {
    box-shadow: ${SHADOWS.BOLD};
  }
`;

export const CardContainer = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "pt pt pt"
    "pd pd pd"
    "py py py";
  background-color: ${props => components.card.body.color[props.mode]};
  margin-bottom: 1rem;
  border-radius: 5px;
  align-items: flex-start;
  width: 100%;
  
  :last-child {
    margin-bottom: 0;
  }
  
  :hover .title {
    background-color: ${props => components.card.title.hover.background[props.mode]};
  }
`;
