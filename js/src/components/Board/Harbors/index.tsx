import * as React from "react";

import { Resource } from "types/Resource";
import { AxialCoord } from "types/Coord";

import Harbor, { DockSide, Props as HarborProps } from "./Harbor";

interface Props {
  harbors: HarborProps[];
}

class Harbors extends React.Component<Props> {
  getKey = (coords: AxialCoord): string => `(${coords.x},${coords.y})`;

  render() {
    const harbors = this.props.harbors.map(hb => (
      <Harbor key={this.getKey(hb.coords)} {...hb} />
    ));
    return <g>{harbors}</g>;
  }
}

export default Harbors;
