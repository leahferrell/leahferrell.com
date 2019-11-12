import React from "react";
import {Article} from "./article";
import {skillsContent} from "../../data/model/article";
import PropTypes from "prop-types";

const Skills = ({title, subtitle, content}) => {
  return (
    <Article>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div>
        {content}
      </div>
    </Article>
  );
};

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  content: skillsContent
};

export default Skills;
