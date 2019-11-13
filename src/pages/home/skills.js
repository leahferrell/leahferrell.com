import React from "react";
import {Article} from "./article";
import {skillContentList} from "../../data/model/article";
import PropTypes from "prop-types";
import styled from "styled-components";
import GridContainer from "../../components/grid/container";
import GridArea from "../../components/grid/area";
import {Tag} from "../../components/words/tag";
import {components, SHADOWS, viewport} from "../../config/theme";

const SkillsContainer = styled(GridContainer)`
  grid-template-columns: 1fr 5fr;
  justify-items: center;
  padding: 0;
  grid-gap: 1rem 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${SHADOWS.NONE};
  
  @media(max-height: ${viewport.medium}){
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const SkillsTitle = styled(GridArea)`
  justify-content: flex-end;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  background-color: ${props => components.card.title.background[props.mode]};
  color: ${props => components.card.title.font.color[props.mode]};
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  align-items: center;
  
  @media(max-height: ${viewport.medium}){
    grid-template-columns: 1fr;
    justify-content: flex-start;
    border-radius: 5px 5px 0 0;
    box-shadow: ${SHADOWS.LIGHT};
    font-size: ${components.card.title.font.size};
  }
`;

const SkillsItems = styled(GridArea)`
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  border: 1px solid ${props => components.card.tag.border.color[props.mode]};
  padding: 5px 0px 5px 10px;
  align-items: center;
  display: flex-inline;
  background-color: transparent;
  
  @media(max-height: ${viewport.medium}){
    margin-bottom: 2rem;
    border-radius: 0 0 5px 5px;
    box-shadow: ${SHADOWS.LIGHT};
    border: none;
    
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const Skills = ({title, content, mode}) => {
  return (
    <Article mode={mode}>
      <h2>{title}</h2>
      <SkillsContainer>
        {content.map(c => (
          <>
            <SkillsTitle mode={mode}>{c.name}</SkillsTitle>
            <SkillsItems mode={mode}>{c.items.map(i => <Tag mode={mode}>{i}</Tag>)}</SkillsItems>
          </>
        ))}
      </SkillsContainer>
    </Article>
  );
};

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  content: skillContentList,
  mode: PropTypes.string
};

export default Skills;
