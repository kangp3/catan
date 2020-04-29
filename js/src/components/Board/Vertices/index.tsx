import React from "react";

import { AxialCoord } from "types/Coord";

import Vertex from "./Vertex";

interface Props {
  coords: AxialCoord[];
}

const getKey = (coords: AxialCoord): string => `(${coords.x},${coords.y})`;

const Vertices = (props: Props) => {
  const vertices = props.coords.map((coord: AxialCoord) => (
    <Vertex key={getKey(coord)} coord={coord} />
  ));
  return <g>{vertices}</g>;
};

export default Vertices;
