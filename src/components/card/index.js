import React from "react";
import {Description, Tags, Title} from "./elements";
import {CardArea, CardBody, CardContainer} from "./container";
import {Tag} from "../words/tag";

const Card = ({title, link, description, tags}) => {
  return (
    <CardArea>
      <CardBody>
        <CardContainer>
          <Title className="title"><a href={link}>{title}</a></Title>
          <Description>{description}</Description>
          <Tags>{
            tags.map(t =>
              <Tag key={t}>{t}</Tag>
            )
          }</Tags>
        </CardContainer>
      </CardBody>
    </CardArea>
  );
};

export default Card;
