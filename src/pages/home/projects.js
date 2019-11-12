import React from "react";
import {Article} from "./article";
import {projectContentList} from "../../data/model/article";
import PropTypes from "prop-types";
import styled from "styled-components";
import GridContainer from "../../components/grid/container";
import Card from "../../components/card";

const ProjectContainer = styled(GridContainer)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  padding: 0;
  grid-gap: 1rem;
  width: auto;
`;

const Projects = ({title, subtitle, content}) => {
  return (
    <Article>
      <h2>{title}</h2>
      <ProjectContainer>
        {content.map(c => (
          <Card
            key={c.title} title={c.title}
            description={c.description}
            link={c.link} tags={c.technologies}
          />
          ))}
      </ProjectContainer>
    </Article>
  );
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: projectContentList
};

export default Projects;
