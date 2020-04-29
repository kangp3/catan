import React from "react";

import { AxialCoord, keyFromCoord } from "types/Coord";

import Vertex from "./Vertex";

interface Props {
  coords: AxialCoord[];
}

const Vertices = (props: Props) => {
  const vertices = props.coords.map((coord: AxialCoord) => (
    <Vertex key={keyFromCoord(coord)} coord={coord} />
  ));
  return <g>{vertices}</g>;
};

export default Vertices;
