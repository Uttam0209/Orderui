import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter hashType="noslash">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
