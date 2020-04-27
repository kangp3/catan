import * as React from "react";
import classNames from "classnames";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { AxialCoord } from "types/Coord";
import { Resource } from "types/Resource";

import * as styles from "./styles.scss";

export interface Props {
  coords: AxialCoord;
  resource: Resource;
  roll?: number;
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

  getCenter = (): [number, number] => {
    const { coords } = this.props;
    const x = (-2 * coords.x - coords.y) * HEX_XSTEP;
    const y = -3 * coords.y * HEX_YSTEP;
    return [x + 1, y + 1];
  };

  getTransform = (): string => {
    const [xPos, yPos] = this.getCenter();
    return `translate(${xPos},${yPos})`;
  };

  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(process.env.API_URL);
  };

  render() {
    const [x, y] = this.getCenter();
    return (
      <g>
        <polygon
          className={classNames(styles.hex, {
            [styles[this.props.resource]]: true,
          })}
          points={this.getPoints()}
          transform={this.getTransform()}
          onClick={this.onClick}
        />
        <text className={styles.rollText} x={x} y={y}>
          {this.props.roll}
        </text>
      </g>
    );
  }
}

export default Hex;
