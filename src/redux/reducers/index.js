import {combineReducers} from "redux";
import {DARK_MODE, DEFAULT_MODE, LIGHT_MODE} from "../../config/theme";
import {TOGGLED_DARK_MODE} from "../actions";
import {HOME_PAGE} from "../../pages/home";

export const initialPage = {
  name: HOME_PAGE,
  title: "Leah Ferrell",
  subtitle: "Software Engineer; Cat Lover; Artist; Lego Fanatic"
};

export const initialMenu = {
  title: "Filter"
};

export const initialMode = DEFAULT_MODE;

export const initialState = {
  page: initialPage,
  mode: initialMode,
  menu: initialMenu
};

const menu = (state=initialMenu, action) => {
  return state;
};

const mode = (state = initialMode, action) => {
  switch(action.type){
    case TOGGLED_DARK_MODE:
      return state === DARK_MODE ? LIGHT_MODE : DARK_MODE;
    default:
      return state;
  }
};

const page = (state = initialPage, action) => {
  return state;
};

const rootReducer = combineReducers({
  page,
  mode,
  menu
});

export default rootReducer;
