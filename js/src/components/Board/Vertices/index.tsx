import * as React from "react";

import { AxialCoord } from "types/Coord";

import Vertex from "./Vertex";

interface Props {
  coords: AxialCoord[];
}

class Vertices extends React.Component<Props> {
  render() {
    const { coords } = this.props;

    const vertices = coords.map((coord, key) => (
      <Vertex key={key} coord={coord} />
    ));

    return <g>{vertices}</g>;
  }
}

export default Vertices;
