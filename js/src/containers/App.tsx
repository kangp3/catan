import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "containers/Home";
import Play from "containers/Play";

const App = () => (
  <Switch>
    <Route path="/play">
      <Play />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default App;
