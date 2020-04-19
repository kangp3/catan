import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import Hex, { ResourceType } from "./Hex";

interface Props {
  size: number;
}

class Hexes extends React.Component<Props> {
  getCoords = (): AxialCoord[] => {
    const { size } = this.props;
    const radius = size - 1;

    const coords = [];
    for (let x = -radius; x < size; x++) {
      const maxY = Math.min(radius, radius - x);
      const minY = Math.max(-radius, -radius - x);
      for (let y = minY; y <= maxY; y++) {
        coords.push({ x: x, y: y });
      }
    }
    return coords;
  };

  render() {
    const hexes = this.getCoords().map((coord, key) => (
      <Hex key={key} coord={coord} type={ResourceType.Wood} />
    ));
    return <g>{hexes}</g>;
  }
}

export default Hexes;
