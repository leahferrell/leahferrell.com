import React from 'react';
import Container from "./container";
import {ContentArea, FooterArea, HeaderArea, MenuArea, NavArea} from "./container/elements";
import PropTypes from 'prop-types';
import selectPage from "../redux/selectors/page";
import {connect} from "react-redux";
import GlobalStyle from "./global-style";
import NavBar from "./navbar";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

const Layout = ({content, mode}) => {
  return (
    <Container mode={mode}>
      <GlobalStyle mode={mode}/>
      <NavArea mode={mode}>
        <NavBar
          links={[
            {
              href: "/",
              name: "LEGO",
              isTitle: true
            },
            {
              href: "/account",
              name: "ACCOUNT",
              isTitle: false
            },
            {
              href: "/collection",
              name: "COLLECTION",
              isTitle: false
            }
          ]}
        />
      </NavArea>
      <HeaderArea mode={mode}>
        <Header/>
      </HeaderArea>
      <MenuArea mode={mode}>
        <Menu/>
      </MenuArea>
      <ContentArea mode={mode}>{content}</ContentArea>
      <FooterArea mode={mode}>
        <Footer/>
      </FooterArea>
    </Container>
  );
};

Layout.propTypes = {
  content: PropTypes.object,
  mode: PropTypes.string
};

const mapStateToProps = (state) => ({
  content: selectPage(state.page.name),
  mode: state.mode
});

export default connect(
  mapStateToProps
)(Layout);
