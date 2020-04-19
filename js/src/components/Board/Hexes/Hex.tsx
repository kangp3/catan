import * as React from "react";
import * as classNames from "classnames";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import * as styles from "./styles.scss";

export enum ResourceType {
  Brick = "brick",
  Desert = "desert",
  Grain = "grain",
  Ore = "ore",
  Sheep = "sheep",
  Wood = "wood",
}

export interface HexProps {
  coords: AxialCoord;
  resource: ResourceType;
}

class Hex extends React.Component<HexProps> {
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
    const { coords } = this.props;
    const xPos = (-2 * coords.x - coords.y) * HEX_XSTEP;
    const yPos = -3 * coords.y * HEX_YSTEP;
    return `translate(${xPos + 1},${yPos + 1})`;
  };

  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(process.env.API_URL);
  };

  render() {
    return (
      <polygon
        className={classNames(styles.hex, {
          [styles[this.props.resource]]: true,
        })}
        points={this.getPoints()}
        transform={this.getTransform()}
        onClick={this.onClick}
      />
    );
  }
}

export default Hex;
