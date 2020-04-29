import React from "react";

import { Resource } from "types/Resource";
import { AxialCoord } from "types/Coord";

import Harbor, { DockSide, Props as HarborProps } from "./Harbor";

interface Props {
  harbors: HarborProps[];
}

const getKey = (coords: AxialCoord): string => `(${coords.x},${coords.y})`;

const Harbors = (props: Props) => {
  const harbors = props.harbors.map(hb => (
    <Harbor key={getKey(hb.coords)} {...hb} />
  ));
  return <g>{harbors}</g>;
};

export default Harbors;
