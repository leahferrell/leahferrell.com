import connect from "react-redux/es/connect/connect";
import React from "react";
import styled from 'styled-components';
import GridContainer from "../components/grid/container";
import GridBody from "../components/grid/body";
import GridArea from "../components/grid/area";
import {font, SHADOWS} from "../config/theme";

const HeaderBody = styled(GridBody)`
  padding: 50px 0 20px 0;
  box-shadow: ${SHADOWS.NONE};
  z-index: 2;
  min-height: 50%;
`;

const HeaderContainer = styled(GridContainer)`
  align-items: center;
`;

const HeaderElement = styled(GridArea)`
  padding: 10px 0;
`;

const HeaderTitle = styled(HeaderElement)`
  font-size: ${font.size.x_large}
`;

const HeaderSubtitle = styled(HeaderElement)`
  font-size: ${font.size.medium}
`;

const Header = ({title, subtitle}) => {
  return (
    <HeaderBody>
      <HeaderContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        <HeaderSubtitle>
          {subtitle}
        </HeaderSubtitle>
      </HeaderContainer>
    </HeaderBody>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  title: state.page.title,
  subtitle: state.page.subtitle
});

export default connect(
  mapStateToProps
)(Header);
