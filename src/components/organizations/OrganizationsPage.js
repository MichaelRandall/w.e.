import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as organizationActions from "../../redux/actions/organizationActions";
import PropTypes from "prop-types";

import OrganizationList from "./OrganizationList";

function OrganizationsPage({ organizations, loadOrganizations }){
    useEffect(() => {
        if (organizations.length === 0) {
            console.log(`No organizations defined`);
            loadOrganizations().catch((error) => {
              alert("Loading organizations failed" + error);
            });
          }
        },[]);

    
    return (
        <>
        <h2>Organizations</h2>
        <OrganizationList organizations={organizations} />
        </>
    );
}


OrganizationsPage.propTypes = {
    organizations: PropTypes.array.isRequired,
    loadOrganizations: PropTypes.func.isRequired,
  };

function mapStateToProps(state){
    return {
        organizations: state.organizations,
    };
}

const mapDispatchToProps = {
    loadOrganizations: organizationActions.loadOrganizations
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsPage);