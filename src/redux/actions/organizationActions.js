import * as types from "./actionTypes";
import * as organizationApi from "../../api/organizationApi";

export function loadOrganizationsSuccess(organizations) {
  return { type: types.LOAD_ORGANIZATIONS_SUCCESS, organizations };
}

// thunk
export function loadOrganizations() {
  return function (dispatch) {
    return organizationApi
      .getOrganizations()
      .then((organizations) => {
        dispatch(loadOrganizationsSuccess(organizations));
      })
      .catch((error) => {
        throw error;
      });
  };
}
