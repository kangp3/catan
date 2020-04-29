import React from "react";

import { AxialCoord } from "types/Coord";

import Edge from "./Edge";

interface Props {
  edges: [AxialCoord, AxialCoord][];
}

const getEdgeKey = (edge: [AxialCoord, AxialCoord]): string => {
  let pt1: AxialCoord;
  let pt2: AxialCoord;
  if (edge[0].x < edge[1].x) {
    pt1 = edge[0];
    pt2 = edge[1];
  } else if (edge[0].x > edge[1].x) {
    pt1 = edge[1];
    pt2 = edge[0];
  } else if (edge[0].y < edge[1].y) {
    pt1 = edge[0];
    pt2 = edge[1];
  } else {
    pt1 = edge[1];
    pt2 = edge[0];
  }
  return `(${pt1.x},${pt1.y}),(${pt2.x},${pt2.y})`;
};

const Edges = (props: Props) => {
  const edges = props.edges.map((edge, key) => (
    <Edge key={getEdgeKey(edge)} p1Coord={edge[0]} p2Coord={edge[1]} />
  ));
  return <g>{edges}</g>;
};

export default Edges;
