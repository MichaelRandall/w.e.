import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/sites/";

export function getSites() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveSite(site) {
  return fetch(baseUrl + (site.site_id || ""), {
    method: site.site_id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(site),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSite(siteId) {
  return fetch(baseUrl + siteId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
