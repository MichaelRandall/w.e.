import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function organizationReducer(state = initialState.organizations, action) {
  switch (action.type) {
    case types.LOAD_ORGANIZATIONS_SUCCESS:
      return action.organizations;
    default:
      return state;
  }
}
