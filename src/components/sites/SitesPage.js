import React from "react";
import { connect } from "react-redux";
import * as siteActions from "../../redux/actions/siteActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class SitesPage extends React.Component {
  state = {
    site: {
      url: "",
    },
  };

  handleChange = (event) => {
    const site = { ...this.state.site, url: event.target.value };
    this.setState({ site });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createSite(this.state.site);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sites</h2>
        <h3>Add Site</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.site.url}
        />

        <input type="submit" value="Save" />
        {this.props.sites.map((site) => (
          <div key={site.url}>{site.url}</div>
        ))}
      </form>
    );
  }
}

SitesPage.propTypes = {
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    sites: state.sites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(siteActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
