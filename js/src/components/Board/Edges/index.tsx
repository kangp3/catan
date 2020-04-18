import * as React from "react";

import { AxialCoord } from "types/Coord";

import Edge from "./Edge";

interface Props {
  edges: [AxialCoord, AxialCoord][];
}

class Edges extends React.Component<Props> {
  render() {
    const edges = this.props.edges.map((edge, key) => (
      <Edge p1Coord={edge[0]} p2Coord={edge[1]} />
    ));
    return <g>{edges}</g>;
  }
}

export default Edges;
