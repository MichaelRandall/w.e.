import React from "react";

//Vendor
import { Avatar, Card, Skeleton } from "antd";

//Custom Components
import SearchInput from "./Input";

//Custom CSS
import "./style.css";

//Images
import BackgroundImage from "../../../dist/img/backgrounds/background1.jpg";
const FallbackImage =
  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

function SearchContainer({ actions, details }) {
  return (
    <div
      className="search container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="title">Website search engine built by you for you</div>
      <div className="sub-title">Search for related websites</div>
      <SearchInput />
    </div>
  );
}

export default SearchContainer;
