import styled from "styled-components";
import {PageContainerElement} from "../page";
import {components} from "../../config/theme";

const ItemBody = styled(PageContainerElement)`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: ${props => components.item.color[props.mode]};
  border: 1px solid ${props => components.item.border.color[props.mode]};
`;

export default ItemBody;
