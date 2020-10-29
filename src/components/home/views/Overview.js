import React from "react";

//Custom Components
import Information from "../cards/Information";

//Custom Metadata
import { categories } from "../shared/support.js";

//Custom CSS
import "./style.css";

function Overview({ user }) {
  const actions = {};

  return (
    <div className="overview container">
      {categories.map((props, i) => (
        <Information
          actions={actions}
          details={props}
          key={`information-card-${i}`}
        />
      ))}
    </div>
  );
}

export default Overview;
