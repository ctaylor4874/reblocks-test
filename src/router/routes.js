import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TestComponent from "../components/testComponent";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={TestComponent} />
    </div>
  </BrowserRouter>
);

export default Routes;
