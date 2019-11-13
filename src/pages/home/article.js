import styled from "styled-components";
import {PageBody, PageContainer, PageContainerElement} from "../../components/page";
import {components, SHADOWS} from "../../config/theme";

export const HomePageBody = styled(PageBody)`
  padding: 0px;
  box-shadow: ${SHADOWS.NONE};
`;

export const HomePageContainer = styled(PageContainer)`
  grid-template-columns: auto;
  grid-template-rows: repeat(auto-fit, 1fr);
  justify-items: center;
  padding: 0;
  grid-gap: 1rem;
`;

export const Article = styled(PageContainerElement)`
  background-color: ${props => components.article.background[props.mode]};
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  box-sizing: border-box;
  
  h2 {
    padding: 1rem;
    margin-bottom: 3rem;
    border-left: 2rem solid ${props => components.article.accent[props.mode]}
    background-color: ${props => components.article.title[props.mode]};
  }
`;
