import React from "react";

import { Resource } from "types/Resource";
import { AxialCoord, keyFromCoord } from "types/Coord";

import Harbor, { DockSide, Props as HarborProps } from "./Harbor";

interface Props {
  harbors: HarborProps[];
}

const Harbors = (props: Props) => {
  const harbors = props.harbors.map(hb => (
    <Harbor key={keyFromCoord(hb.coords)} {...hb} />
  ));
  return <g>{harbors}</g>;
};

export default Harbors;
