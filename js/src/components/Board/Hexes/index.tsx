import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import Hex, { HexProps, ResourceType } from "./Hex";

interface Props {
  size: number;
  hexes: HexProps[];
}

class Hexes extends React.Component<Props> {
  getKey = (coords: AxialCoord): string => `(${coords.x},${coords.y})`;

  render() {
    const hexes = this.props.hexes.map(hex => (
      <Hex key={this.getKey(hex.coords)} {...hex} />
    ));
    return <g>{hexes}</g>;
  }
}

export default Hexes;
