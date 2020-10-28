import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as siteActions from "../../redux/actions/siteActions";
import * as organizationActions from "../../redux/actions/organizationActions";
import PropTypes from "prop-types";

function ManageSitePage({ sites, organizations, loadOrganizations, loadSites }) {
  useEffect(() => {
    //const { sites, organizations, loadOrganizations, loadSites } = this.props;

    if (sites.length === 0) {
      loadSites().catch((error) => {
        alert("Loading sites failed" + error);
      });
    }

    if (organizations.length === 0) {
      loadOrganizations().catch((error) => {
        alert("Loading organizations failed" + error);
      });
    }
  },[]);

    return (
        <>
            <h2>Manage Site</h2>
        </>
    );
  
}

ManageSitePage.propTypes = {
  organizations: PropTypes.array.isRequired,
  sites: PropTypes.array.isRequired,
  loadSites: PropTypes.func.isRequired,
  loadOrganizations: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sites: state.sites,
    organizations: state.organizations,
  };
}

const mapDispatchToProps = {
      loadSites: siteActions.loadSites,
      loadOrganizations: organizationActions.loadOrganizations
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSitePage);
