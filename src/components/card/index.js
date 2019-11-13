import React from "react";
import {Description, Tags, Title} from "./elements";
import {CardArea, CardBody, CardContainer} from "./container";
import {Tag} from "../words/tag";

const Card = ({title, link, description, tags, mode}) => {
  return (
    <CardArea>
      <CardBody>
        <CardContainer mode={mode}>
          <Title className="title" mode={mode}><a href={link}>{title}</a></Title>
          <Description mode={mode}>{description}</Description>
          <Tags mode={mode}>{
            tags.map(t =>
              <Tag mode={mode} key={t}>{t}</Tag>
            )
          }</Tags>
        </CardContainer>
      </CardBody>
    </CardArea>
  );
};

export default Card;
