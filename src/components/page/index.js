import styled from "styled-components";
import {font} from "../../config/theme";

export const PageBody = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const PageContainer = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  padding: 30px;
`;

export const PageContainerElement = styled.div`
  justify-content: center;
  align-items: center;
  font-size: ${font.size.medium};
  font-family: ${font.family};
  height: auto;
`;
