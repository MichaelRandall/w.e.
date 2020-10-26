import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/sub_organizations/";

export function getSubOrganizations() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
