import React from "react";
import {Article} from "./article";
import styled from "styled-components";
import GridContainer from "../../components/grid/container";
import Card from "../../components/card";
import PropTypes from "prop-types";
import {projectContentList} from "../../data/model/article";

const BlogContainer = styled(GridContainer)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  padding: 0;
  grid-gap: 1rem;
  width: auto;
`;

const Blog = ({title, subtitle, content}) => {
  return (
    <Article>
      <h2>{title}</h2>
      <BlogContainer>
        {content.map((c,i) => (
          <Card
            key={i + "-" + c.title} title={c.title}
            description={c.snippet}
            link={c.link} tags={c.tags}
          />
        ))}
      </BlogContainer>
    </Article>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: projectContentList
};

export default Blog;
