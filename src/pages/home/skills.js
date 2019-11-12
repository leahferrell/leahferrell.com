import React from "react";
import {Article} from "./article";
import {skillContentList} from "../../data/model/article";
import PropTypes from "prop-types";
import styled from "styled-components";
import GridContainer from "../../components/grid/container";
import GridArea from "../../components/grid/area";
import {Tag} from "../../components/words/tag";
import {COLORS, font, SHADOWS, viewport} from "../../config/theme";

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
  background-color: ${COLORS.DARKER_GREY};
  color: ${font.color.dark};
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  align-items: center;
  
  @media(max-height: ${viewport.medium}){
    grid-template-columns: 1fr;
    justify-content: flex-start;
    border-radius: 5px 5px 0 0;
    box-shadow: ${SHADOWS.LIGHT};
    font-size: ${font.size.medium};
  }
`;

const SkillsItems = styled(GridArea)`
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  border: 1px solid ${COLORS.LIGHTER_GREY};
  padding: 5px 0px 5px 10px;
  align-items: center;
  display: flex-inline;
  
  @media(max-height: ${viewport.medium}){
    margin-bottom: 1rem;
    border-radius: 0 0 5px 5px;
    box-shadow: ${SHADOWS.LIGHT};
    border: none;
    
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const Skills = ({title, content}) => {
  return (
    <Article>
      <h2>{title}</h2>
      <SkillsContainer>
        {content.map(c => (
          <>
            <SkillsTitle>{c.name}</SkillsTitle>
            <SkillsItems>{c.items.map(i => <Tag>{i}</Tag>)}</SkillsItems>
          </>
        ))}
      </SkillsContainer>
    </Article>
  );
};

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  content: skillContentList
};

export default Skills;
