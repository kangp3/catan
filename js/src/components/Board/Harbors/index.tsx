import * as React from "react";

import { ResourceType } from "components/Board/Hexes/Hex";

import Harbor, { DockSide } from "./Harbor";

class Harbors extends React.Component {
  render() {
    return (
      <Harbor
        coords={{ x: 0, y: 0 }}
        resource={ResourceType.Wildcard}
        dockSide={DockSide.DownLeft}
      />
    );
  }
}

export default Harbors;
