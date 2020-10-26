import * as types from "./actionTypes";
import * as siteApi from "../../api/siteApi";

export function createSite(site) {
  return { type: types.CREATE_SITE, site };
}

export function loadSiteSuccess(sites) {
  return { type: types.LOAD_SITES_SUCCESS, sites };
}

export function loadSites() {
  return function (dispatch) {
    return siteApi
      .getSites()
      .then((sites) => {
        dispatch(loadSiteSuccess(sites));
      })
      .catch((error) => {
        throw error;
      });
  };
}
