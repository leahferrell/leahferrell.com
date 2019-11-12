import React from 'react';
import styled from "styled-components";
import GridBody from "../components/grid/body";
import GridContainer from "../components/grid/container";
import GridArea from "../components/grid/area";
import {COLORS, font, SHADOWS} from "../config/theme";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {IoIosHeart} from "react-icons/io";
import {DefaultLink} from "../components/link";

const FooterBody = styled(GridBody)`
  padding: 50px 30px 20px 30px;
  box-shadow: ${SHADOWS.NONE};
  z-index: 2;
`;

const FooterContainer = styled(GridContainer)`
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterSection = styled(GridArea)`
  text-align: inherit;
  font-size: ${font.size.small}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const FooterLink = styled(DefaultLink)`
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const FooterIcon = styled(FooterLink)`
  font-size: ${font.size.medium};
  margin: 0 10px;
`;

const LeftSection = styled(FooterSection)`
  justify-content: flex-start;
`;

const RightSection = styled(FooterSection)`
  justify-content: flex-end;
`;

const CenterSection = styled(FooterSection)`
  text-align: center;
  color: ${COLORS.LIGHT_BLUE};
`;

const Footer = ({connect, text, source}) => {
  return (
    <FooterBody>
      <FooterContainer>
        <LeftSection>
          <FooterLink href={source}>{text}</FooterLink>
        </LeftSection>
        <CenterSection>
          <IoIosHeart/>
        </CenterSection>
        <RightSection>
          <FooterIcon href={connect.github}>
            <FaGithub/>
          </FooterIcon>
          <FooterIcon href={connect.linkedin}>
            <FaLinkedin/>
          </FooterIcon>
        </RightSection>
      </FooterContainer>
    </FooterBody>
  );
};

export default Footer;
