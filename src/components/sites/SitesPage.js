import React from "react";
import { connect } from "react-redux";
import * as siteActions from "../../redux/actions/siteActions";
import * as organizationActions from "../../redux/actions/organizationActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import SiteList from "./SiteList";

class SitesPage extends React.Component {
  componentDidMount() {
    if (this.props.sites.length === 0) {
      this.props.actions.loadSites().catch((error) => {
        alert("Loading sites failed" + error);
      });
    }

    if (this.props.organizations.length === 0) {
      this.props.actions.loadOrganizations().catch((error) => {
        alert("Loading organizations failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Sites</h2>
        <SiteList sites={this.props.sites} />
      </>
    );
  }
}

SitesPage.propTypes = {
  organizations: PropTypes.array.isRequired,
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    sites:
      state.organizations.length === 0
        ? []
        : state.sites.map((site) => {
            return {
              ...site,
              organizationName: state.organizations.find(
                (o) => o.organization_id === site.organization
              ).organization,
            };
          }),
    organizations: state.organizations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSites: bindActionCreators(siteActions.loadSites, dispatch),
      loadOrganizations: bindActionCreators(
        organizationActions.loadOrganizations,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
