import React, {useState} from 'react';
import {IoIosMenu, IoIosMoon, IoIosSunny} from "react-icons/io";
import {TOGGLED_DARK_MODE} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import NavBarBody from "./body";
import NavBarContainer from "./container";
import {links as linksPropType} from "../../data/model/link";
import {NavBarMenuButton, NavBarModeButton} from "./container-elements";
import {selectLink, selectNumOfLinks} from "../../data/selector/link";
import {DARK_MODE} from "../../config/theme";

const NavBar = ({links, mode, toggleDarkMode}) => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <NavBarBody>
      <NavBarContainer
        isExpanded={isExpanded}
        {...selectNumOfLinks(links)}
      >
        <NavBarMenuButton onClick={() => toggleExpansion(!isExpanded)}>
          <IoIosMenu/>
        </NavBarMenuButton>
        {links.map(l => selectLink(l, isExpanded))}
        <NavBarModeButton
          mode={mode}
          onClick={toggleDarkMode}
        >
          {mode === DARK_MODE ? <IoIosMoon/> : <IoIosSunny/>}
        </NavBarModeButton>
      </NavBarContainer>
    </NavBarBody>
  );
};

NavBar.propTypes = {
  links: linksPropType,
  mode: PropTypes.string,
  toggleDarkMode: PropTypes.func
};

const mapStateToProps = state => ({
  mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch({type: TOGGLED_DARK_MODE})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
