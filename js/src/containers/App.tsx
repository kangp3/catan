import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "containers/Home";
import Play from "containers/Play";
import NotFound from "containers/NotFound";

const App = () => (
  <Switch>
    <Route path="/play/:gameName">
      <Play />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default App;
