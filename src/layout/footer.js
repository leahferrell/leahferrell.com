import React from 'react';
import styled from "styled-components";
import GridBody from "../components/grid/body";
import GridContainer from "../components/grid/container";
import GridArea from "../components/grid/area";
import {font} from "../config/theme";

const FooterBody = styled(GridBody)`
  padding: 50px 0 20px 0;
`;

const FooterContainer = styled(GridContainer)`
  align-items: center;
`;

const FooterElement = styled(GridArea)`
  padding: 10px 0;
`;

const FooterTitle = styled(FooterElement)`
  font-size: ${font.size.med_large}
`;

const FooterSubtitle = styled(FooterElement)`
  font-size: ${font.size.medium}
`;

const Footer = () => {
  return (
    <FooterBody>
      <FooterContainer>
        <FooterTitle>
          footer title
        </FooterTitle>
        <FooterSubtitle>
          footer subtitle
        </FooterSubtitle>
      </FooterContainer>
    </FooterBody>
  );
};

export default Footer;
