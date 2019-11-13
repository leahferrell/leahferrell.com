import home from '../content/home.json';
import React from "react";
import {link, links, LinkType} from "../model/link";
import {NavBarItem, NavBarTitle} from "../../layout/navbar/container-elements";
import {DefaultLink} from "../../components/link";

export const selectLink = (link, isExpanded) => {
  switch(link.type){
    case LinkType.TITLE:
      return (
        <NavBarTitle key={link.name}>
          <DefaultLink href={link.href}>{link.name}</DefaultLink>
        </NavBarTitle>
      );
    default:
      return (
        <NavBarItem isExpanded={link.isExpanded || isExpanded} key={link.name}>
          <DefaultLink href={link.href}>{link.name}</DefaultLink>
        </NavBarItem>
      );
  }
};

export const selectLinks = () => [
  {
    name: home.header.title,
    href: "/",
    type: LinkType.TITLE,
    isExpanded: true
  },
  ...home.navigation.links.map(l => (
    {
      name: l.title,
      href: l.href,
      type: LinkType.DEFAULT,
      isExpanded: false
    }
  ))
];

export const selectNumOfLinks = (links) => ({
  itemsCollapsed: links.filter(l => l.type === LinkType.DEFAULT).length,
  itemsExpanded: links.length + 1
});

selectNumOfLinks.propTypes = links;
selectLink.propTypes = link;
selectLinks.propTypes = links;
