import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Jokes from "./Pages/Jokes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/joke" component={Jokes} />
      </Switch>
    </BrowserRouter>
  );
}
