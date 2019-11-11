import connect from "react-redux/es/connect/connect";
import React from "react";
import styled from 'styled-components';
import GridContainer from "../../components/grid/container";
import GridBody from "../../components/grid/body";
import GridArea from "../../components/grid/area";
import {font, layout, viewport} from "../../config/theme";

const MenuBody = styled(GridBody)`
  height: auto;
  
  @media(max-width: ${viewport.large}){
    padding: 50px 0 20px 0;
  }
  
  @media(min-width: ${viewport.large}){
    padding: 30px 0;
  }
`;

const MenuContainer = styled(GridContainer)`
  align-items: flex-start;
  grid-template-rows: repeat(auto-fit);
  grid-template-columns: 1fr;
  height: auto;
  
  @media(max-width: ${viewport.large}){
  }
  
  @media(min-width: ${viewport.large}){
    background-color: ${props => layout.menu.detail[props.mode]};
    
  }
`;

const MenuElement = styled(GridArea)`
  padding: 10px 0;
  margin: 0;
  width: auto;
`;

const MenuTitle = styled(MenuElement)`
  font-size: ${font.size.medium};
  border: 1px solid ${props => layout.menu.border[props.mode]};
  border-radius: 5px;
  margin: 0 30px;
  height: auto;
`;

const MenuDetail = styled(MenuElement)`
  background-color: ${props => layout.menu.detail[props.mode]};
  margin-top: 20px;
`;

const Menu = ({mode, title}) => {

  return (
    <MenuBody>
      <MenuContainer mode={mode}>
        <MenuTitle mode={mode}>
          {title}
        </MenuTitle>
        <MenuDetail mode={mode}>
          temp
        </MenuDetail>
      </MenuContainer>
    </MenuBody>
  );
};

const mapStateToProps = (state) => ({
  mode: state.mode,
  title: state.menu.title,
});

export default connect(
  mapStateToProps
)(Menu);
