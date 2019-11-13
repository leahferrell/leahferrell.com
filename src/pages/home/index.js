import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import Learning from "./learning";
import Blog from "./blog";
import Contact from "./contact";
import {selectArticle} from "../../data/selector/article";
import {HomePageBody, HomePageContainer} from "./article";
import {connect} from "react-redux";

export const HOME_PAGE = "HOME_PAGE";

const HomePage = ({mode}) => {
  return (
    <HomePageBody>
      <HomePageContainer>
        <Skills {...selectArticle("skills")} mode={mode} />
        <Projects {...selectArticle("projects")} mode={mode} />
        <Learning {...selectArticle("learning")} mode={mode} />
        <Blog {...selectArticle("blog")} mode={mode} />
        <Contact {...selectArticle("contact")} mode={mode} />
      </HomePageContainer>
    </HomePageBody>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode
});

export default connect(
  mapStateToProps
)(HomePage);
