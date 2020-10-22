import { combineReducers } from "redux";
import sites from "./siteReducer";

const rootReducer = combineReducers({
  sites: sites,
});

export default rootReducer;
