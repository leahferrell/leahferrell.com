import React from "react";
import {Article} from "./article";

const Learning = ({title, subtitle, content}) => {
  return (
    <Article>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Article>
  );
};

export default Learning;
