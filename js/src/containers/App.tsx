import React from "react";
import { Route } from "react-router-dom";

import Play from "containers/Play";

const App = () => (
  <React.Fragment>
    <Route path="/play">
      <Play />
    </Route>
    <Route path="/">
      <Play />
    </Route>
  </React.Fragment>
);

export default App;
