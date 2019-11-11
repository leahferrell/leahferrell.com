import {combineReducers} from "redux";
import {ITEM_RESULTS_PAGE} from "../../pages/item-results";
import items, {initialState as initialItems} from "./items";
import {DARK_MODE, DEFAULT_MODE, LIGHT_MODE} from "../../config/theme";
import {TOGGLED_DARK_MODE} from "../actions";

export const initialPage = {
  name: ITEM_RESULTS_PAGE,
  title: "Search Results",
  subtitle: "showing results for xyz"
};

export const initialMenu = {
  title: "Filter"
};

export const initialMode = DEFAULT_MODE;

export const initialState = {
  page: initialPage,
  items: initialItems,
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
  items,
  mode,
  menu
});

export default rootReducer;
