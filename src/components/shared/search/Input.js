import React from "react";

//Vendor
import { Input } from "antd";

//Redux
import { connect } from "react-redux";

function SearchInput({ user }) {
  const { Search } = Input;
  const actions = {
    search: text => {}
  };

  return (
    <div className="input">
      <Search
        onSearch={actions.search}
        placeholder="Search websites, authors, program managers, urls, etc"
        size="large"
        style={{ width: "100%" }}
      />
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    search: state.app.search
  };
}

export default connect(mapStateTopProps)(SearchInput);
