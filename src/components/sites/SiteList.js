import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SiteList = ({ sites }) => (
  <table className="table">
    <thead>
      <tr>
        <th>URL</th>
        <th>Organization</th>
        <th>Path</th>
      </tr>
    </thead>
    <tbody>
      {sites.map((site) => {
        return (
          <tr key={site.site_id}>
            <td>
              <Link to={"/site/" + site.url}>{site.url}</Link>
            </td>
            <td>{site.organizationName}</td>
            <td>{site.path}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

SiteList.propTypes = {
  sites: PropTypes.array.isRequired,
};

export default SiteList;
