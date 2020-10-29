import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";

/* Supporting Metadata */
function organization(state = initialState.app.metadata.organization, action) {
  switch (action.type) {
    case types.ARCHIVE_ORGANIZAION_SUCESS:
      return {};
    case types.CREATE_ORGANIZATION_SUCCESS:
      return action.organization;
    case types.DELETE_ORGANIZATION_SUCCESS:
      return {};
    case types.GET_ORGANIZATIONS_SUCCESS:
      return action.organization;
    case types.UPDATE_ORGANIZATION_SUCCESS:
      return { ...state, ...action.organization };
    default:
      return state;
  }
}

function organizations(
  state = initialState.app.metadata.organizations,
  action
) {
  switch (action.type) {
    case types.ARCHIVE_ORGANIZAION_SUCESS:
      return reduxMethods.single.removeMatchCase(state, action, "organization");
    case types.CREATE_ORGANIZATION_SUCCESS:
      return reduxMethods.single.addResource(state, action, "organization");
    case types.DELETE_ORGANIZATION_SUCCESS:
      return reduxMethods.single.updateMatchCase(state, action, "organization");
    case types.GET_ORGANIZATIONS_SUCCESS:
      return reduxMethods.join(state, action);
    case types.UPDATE_ORGANIZATION_SUCCESS:
      return reduxMethods.updateMatchCase(state, action, "organization");
    default:
      return state;
  }
}

function website(state = initialState.app.metadata.website, action) {
  switch (action.type) {
    case types.ARCHIVE_WEBSITE_SUCESS:
      return {};
    case types.CREATE_WEBSITE_SUCCESS:
      return action.website;
    case types.DELETE_WEBSITE_SUCCESS:
      return {};
    case types.GET_WEBSITES_SUCCESS:
      return action.website;
    case types.UPDATE_WEBSITE_SUCCESS:
      return { ...state, ...action.website };
    default:
      return state;
  }
}

function websites(state = initialState.app.metadata.websites, action) {
  switch (action.type) {
    case types.ARCHIVE_WEBSITE_SUCESS:
      return reduxMethods.single.removeMatchCase(state, action, "website");
    case types.CREATE_WEBSITE_SUCCESS:
      return reduxMethods.single.addResource(state, action, "website");
    case types.DELETE_WEBSITE_SUCCESS:
      return reduxMethods.single.updateMatchCase(state, action, "website");
    case types.GET_WEBSITES_SUCCESS:
      return reduxMethods.join(state, action);
    case types.UPDATE_WEBSITE_SUCCESS:
      return reduxMethods.updateMatchCase(state, action, "website");
    default:
      return state;
  }
}

const metadata = combineReducers({
  organization,
  organizations,
  website,
  websites
});

/* Search Related Options */
function search(state = initialState.app.search, action) {
  switch (action.type) {
    case types.RESET_SEARCH_SUCCESS:
      return {};
    case types.UPDATE_SEARCH_SUCCESS:
      return {
        ...state,
        ...action.search
      };
    default:
      return state;
  }
}

const app = combineReducers({
  metadata,
  search
});

export default app;
