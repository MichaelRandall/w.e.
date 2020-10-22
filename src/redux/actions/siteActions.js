import * as types from "./actionTypes";

export function createSite(site) {
  return { type: types.CREATE_SITE, site };
}
