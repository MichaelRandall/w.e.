import React from "react";

//Vendor
//import { Link } from "react-router-dom";

//Custom Components
import Navbar from "../../shared/navbar/Navbar";
import Overview from "./Overview";
import Search from "../../shared/search/Container";

//Custom CSS
import "./style.css";

function HomePage() {
  return (
    <div className="search-layout">
      <Navbar />
      <Search />
      <Overview />
    </div>
  );
}

export default HomePage;
