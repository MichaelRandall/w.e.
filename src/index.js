import React from "react";

//Vendor
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Vendor and Custom CSS
import "antd/dist/antd.dark.min.css";
import "./dist/css/app.css";
import "./dist/css/buttons.css";
import "./dist/css/form.css";
import "./dist/css/format.css";

//Custom Components
import App from "./App";

//Redux
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

//Performance Implimentation? Later
//import reportWebVitals from "./reportWebVitals";

const axios = require("axios");

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_API_KEY;
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//Store Provisioning
const store = new configureStore();

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
