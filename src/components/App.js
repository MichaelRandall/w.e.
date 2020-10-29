import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import SitesPage from "./sites/SitesPage";
import OrganizationsPage from "./organizations/OrganizationsPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ManageSitePage from "./sites/ManageSitePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/organizations" component={OrganizationsPage} />
        <Route path="/sites" component={SitesPage} />
        <Route path="/site/:slug" component={ManageSitePage} />
        <Route path="/site" component={ManageSitePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
