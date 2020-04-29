import React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";
import { AxialCoord } from "types/Coord";
import { Resource } from "types/Resource";

import Hex, { Props as HexProps } from "./Hex";

interface Props {
  hexes: HexProps[];
}

const getKey = (coords: AxialCoord): string => `(${coords.x},${coords.y})`;

const Hexes = (props: Props) => {
  const hexes = props.hexes.map(hex => (
    <Hex key={getKey(hex.coords)} {...hex} />
  ));
  return <g>{hexes}</g>;
};

export default Hexes;
