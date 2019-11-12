import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import Learning from "./learning";
import Blog from "./blog";
import Contact from "./contact";
import {selectArticle} from "../../data/selector/article";
import {HomePageBody, HomePageContainer} from "./article";

export const HOME_PAGE = "HOME_PAGE";

const HomePage = () => {
  return (
    <HomePageBody>
      <HomePageContainer>
        <Skills {...selectArticle("skills")}/>
        <Projects {...selectArticle("projects")}/>
        <Learning {...selectArticle("learning")}/>
        <Blog {...selectArticle("blog")}/>
        <Contact {...selectArticle("contact")}/>
      </HomePageContainer>
    </HomePageBody>
  );
};

export default HomePage;
