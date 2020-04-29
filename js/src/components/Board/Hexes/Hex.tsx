import React from "react";
import classNames from "classnames";

import { HEX_XSTEP, HEX_YSTEP } from "components/Board/dims";
import { AxialCoord } from "types/Coord";
import { Resource } from "types/Resource";

import styles from "./styles.scss";

export interface Props {
  coords: AxialCoord;
  resource: Resource;
  roll?: number;
}

const getPoints = (): string => {
  return [
    `${-HEX_XSTEP},${-HEX_YSTEP}`,
    `0,${-2 * HEX_YSTEP}`,
    `${HEX_XSTEP},${-HEX_YSTEP}`,
    `${HEX_XSTEP},${HEX_YSTEP}`,
    `0,${2 * HEX_YSTEP}`,
    `${-HEX_XSTEP},${HEX_YSTEP}`,
  ].join(" ");
};

const getCenter = (coords: AxialCoord): [number, number] => {
  const x = (-2 * coords.x - coords.y) * HEX_XSTEP;
  const y = -3 * coords.y * HEX_YSTEP;
  return [x + 1, y + 1];
};

const getTransform = (coords: AxialCoord): string => {
  const [xPos, yPos] = getCenter(coords);
  return `translate(${xPos},${yPos})`;
};

const Hex = (props: Props) => {
  const [x, y] = getCenter(props.coords);
  return (
    <g>
      <polygon
        className={classNames(styles.hex, {
          [styles[props.resource]]: true,
        })}
        points={getPoints()}
        transform={getTransform(props.coords)}
      />
      <text className={styles.rollText} x={x} y={y}>
        {props.roll}
      </text>
    </g>
  );
};

export default Hex;
