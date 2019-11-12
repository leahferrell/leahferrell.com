import React from 'react';
import Container from "./container";
import {ContentArea, FooterArea, HeaderArea, NavArea} from "./container/elements";
import PropTypes from 'prop-types';
import selectPage from "../redux/selectors/page";
import {connect} from "react-redux";
import GlobalStyle from "./global-style";
import NavBar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import {selectLinks} from "../data/selector/link";
import selectFooter from "../data/selector/footer";

const Layout = ({content, mode}) => {
  return (
    <Container mode={mode}>
      <GlobalStyle mode={mode}/>
      <NavArea mode={mode}>
        <NavBar
          links={selectLinks()}
        />
      </NavArea>
      <HeaderArea mode={mode}>
        <Header/>
      </HeaderArea>
      <ContentArea mode={mode}>{content}</ContentArea>
      <FooterArea mode={mode}>
        <Footer {...selectFooter()} />
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
