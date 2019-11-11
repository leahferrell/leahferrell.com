import React, {useState} from 'react';
import {DARK_MODE} from "../../config/theme";
import {IoIosMenu, IoIosMoon, IoIosSunny} from "react-icons/io";
import {TOGGLED_DARK_MODE} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import NavBarBody from "./body";
import NavBarContainer from "./container";
import {
  NavBarItem,
  NavBarLink,
  NavBarMenuButton,
  NavBarModeButton,
  NavBarSearchInput,
  NavBarTitle
} from "./container-elements";

const NavBar = ({links, mode, toggleDarkMode}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <NavBarBody>
      <NavBarContainer isExpanded={isExpanded}>
        <NavBarMenuButton onClick={() => toggleExpansion(!isExpanded)}>
          <IoIosMenu/>
        </NavBarMenuButton>
        {links.map(l =>
          l.isTitle ?
            <NavBarTitle key={l.name}>
              <NavBarLink href={l.href}>{l.name}</NavBarLink>
            </NavBarTitle>
            :
            <NavBarItem isExpanded={isExpanded} key={l.name}>
              <NavBarLink href={l.href}>{l.name}</NavBarLink>
            </NavBarItem>
        )}
        <NavBarSearchInput isExpanded={isExpanded}/>
        <NavBarModeButton
          mode={mode}
          onClick={toggleDarkMode}
        >
          {mode === DARK_MODE ? <IoIosSunny/> : <IoIosMoon/>}
        </NavBarModeButton>
      </NavBarContainer>
    </NavBarBody>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
    isTitle: PropTypes.bool
  })),
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
