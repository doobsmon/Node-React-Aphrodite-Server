// React
import React from "react";
import ReactDOM from "react-dom";

// React Components
import App from "./components/App";

// The BrowserRouter is required to allow URL routing with the Route Object (imported next)
import { BrowserRouter } from "react-router-dom";

// The Route object allows us to load the appropriate React-Object based on the supplied URL.
import { Link, Router, Route, Switch } from "react-router-dom";

// Hydrate the DOM, choosing what to render based on the provided path
ReactDOM.hydrate(
  <div>
    <BrowserRouter>
      <Route exact={true} path="/" component={App} />
    </BrowserRouter>
  </div>,
  document.getElementById("mountnode")
);
