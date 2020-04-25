import * as React from "react";
import * as classNames from "classnames";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { Resource } from "types/Resource";
import { AxialCoord } from "types/Coord";

import * as styles from "./styles.scss";

export enum DockSide {
  Left,
  UpLeft,
  UpRight,
  Right,
  DownRight,
  DownLeft,
}

export interface Props {
  coords: AxialCoord;
  resource: Resource;
  dockSide: DockSide;
}

class Harbor extends React.Component<Props> {
  getCenter = (): [number, number] => {
    const { coords } = this.props;
    const x = (-2 * coords.x - coords.y) * HEX_XSTEP;
    const y = -3 * coords.y * HEX_YSTEP;
    return [x + 1, y + 1];
  };

  getRotateDeg = (): number => {
    const { dockSide } = this.props;
    return 60 * (dockSide - DockSide.Left);
  };

  getDock1Points = (): string => {
    return [
      `-${HEX_XSTEP},-${HEX_YSTEP}`,
      `-${HEX_XSTEP / 2},-${HEX_YSTEP / 2}`,
      `-${HEX_XSTEP / 2},-${HEX_YSTEP / 6}`,
      `-${HEX_XSTEP},-${(HEX_YSTEP * 2) / 3}`,
    ].join(" ");
  };

  getDock2Points = (): string => {
    return [
      `-${HEX_XSTEP},${HEX_YSTEP}`,
      `-${HEX_XSTEP / 2},${HEX_YSTEP / 2}`,
      `-${HEX_XSTEP / 2},${HEX_YSTEP / 6}`,
      `-${HEX_XSTEP},${(HEX_YSTEP * 2) / 3}`,
    ].join(" ");
  };

  getDockTransform = (): string => {
    const [xPos, yPos] = this.getCenter();
    const rotateDeg = this.getRotateDeg();
    return `translate(${xPos},${yPos}) rotate(${rotateDeg})`;
  };

  getLabelTransform = (): string => {
    const [xPos, yPos] = this.getCenter();
    return `translate(${xPos},${yPos})`;
  };

  render() {
    return (
      <g>
        <pattern id="wildcard" width="1" height="1">
          <rect x="0" y="0" height="20" width="20" fill="#bababa" />
          <text
            x="10"
            y="11"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="smaller"
          >
            ?
          </text>
        </pattern>
        <rect
          x="-10"
          y="-10"
          width="20"
          height="20"
          className={classNames(styles.label, {
            [styles[this.props.resource]]: true,
          })}
          transform={this.getLabelTransform()}
        />
        <g transform={this.getDockTransform()}>
          <polygon className={styles.dock} points={this.getDock1Points()} />
          <polygon className={styles.dock} points={this.getDock2Points()} />
        </g>
      </g>
    );
  }
}

export default Harbor;
