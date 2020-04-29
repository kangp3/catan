import React from "react";
import classNames from "classnames";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { Resource } from "types/Resource";
import { AxialCoord } from "types/Coord";

import styles from "./styles.scss";

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

const getCenter = (coords: AxialCoord): [number, number] => {
  const x = (-2 * coords.x - coords.y) * HEX_XSTEP;
  const y = -3 * coords.y * HEX_YSTEP;
  return [x + 1, y + 1];
};

const getRotateDeg = (dockSide: DockSide): number => {
  return 60 * (dockSide - DockSide.Left);
};

const getDock1Points = (): string => {
  return [
    `-${HEX_XSTEP},-${HEX_YSTEP}`,
    `-${HEX_XSTEP / 2},-${HEX_YSTEP / 2}`,
    `-${HEX_XSTEP / 2},-${HEX_YSTEP / 6}`,
    `-${HEX_XSTEP},-${(HEX_YSTEP * 2) / 3}`,
  ].join(" ");
};

const getDock2Points = (): string => {
  return [
    `-${HEX_XSTEP},${HEX_YSTEP}`,
    `-${HEX_XSTEP / 2},${HEX_YSTEP / 2}`,
    `-${HEX_XSTEP / 2},${HEX_YSTEP / 6}`,
    `-${HEX_XSTEP},${(HEX_YSTEP * 2) / 3}`,
  ].join(" ");
};

const getDockTransform = (coords: AxialCoord, dockSide: DockSide): string => {
  const [xPos, yPos] = getCenter(coords);
  const rotateDeg = getRotateDeg(dockSide);
  return `translate(${xPos},${yPos}) rotate(${rotateDeg})`;
};

const getLabelTransform = (coords: AxialCoord): string => {
  const [xPos, yPos] = getCenter(coords);
  return `translate(${xPos},${yPos})`;
};

const Harbor = (props: Props) => (
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
        [styles[props.resource]]: true,
      })}
      transform={getLabelTransform(props.coords)}
    />
    <g transform={getDockTransform(props.coords, props.dockSide)}>
      <polygon className={styles.dock} points={getDock1Points()} />
      <polygon className={styles.dock} points={getDock2Points()} />
    </g>
  </g>
);

export default Harbor;
