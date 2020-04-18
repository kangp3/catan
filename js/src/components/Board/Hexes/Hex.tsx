import * as React from "react";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import * as styles from "./styles.scss";

interface Props {
  coord: AxialCoord;
}

class Hex extends React.Component<Props> {
  getPoints = (): string => {
    return [
      `${-HEX_XSTEP},${-HEX_YSTEP}`,
      `0,${-2 * HEX_YSTEP}`,
      `${HEX_XSTEP},${-HEX_YSTEP}`,
      `${HEX_XSTEP},${HEX_YSTEP}`,
      `0,${2 * HEX_YSTEP}`,
      `${-HEX_XSTEP},${HEX_YSTEP}`,
    ].join(" ");
  };

  getTransform = (): string => {
    const { coord } = this.props;
    const xPos = (-2 * coord.x - coord.y) * HEX_XSTEP;
    const yPos = -3 * coord.y * HEX_YSTEP;
    return `translate(${xPos + 1},${yPos + 1})`;
  };

  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("hi");
  };

  render() {
    return (
      <polygon
        className={styles.hex}
        points={this.getPoints()}
        transform={this.getTransform()}
        onClick={this.onClick}
      />
    );
  }
}

export default Hex;
