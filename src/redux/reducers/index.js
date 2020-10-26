import { combineReducers } from "redux";
import sites from "./siteReducer";
import organizations from "./organizationReducer";

const rootReducer = combineReducers({
  sites: sites,
  organizations: organizations,
});

export default rootReducer;
