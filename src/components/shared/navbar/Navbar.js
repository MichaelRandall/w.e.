import React, { useState } from "react";

//Vendor
import { Avatar, Dropdown, Menu } from "antd";

//Redux
import { connect } from "react-redux";

//Custom CSS
import "./navbar.css";

function Navbar({ user }) {
  return (
    <Menu mode="horizontal">
      <Dropdown className="nav-item" overlay={ProfileMenu}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Dropdown>
    </Menu>
  );
}

function ProfileMenu() {
  return (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/profile">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item danger>Signout</Menu.Item>
    </Menu>
  );
}

function mapStateTopProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {};

export default connect(mapStateTopProps, mapDispatchToProps)(Navbar);
