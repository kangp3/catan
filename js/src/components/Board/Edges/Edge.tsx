import React from "react";

import { HEX_XSTEP, HEX_YSTEP, EDGE_WIDTH } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import styles from "./styles.scss";

const LENGTH_SCALE_FACTOR = 0.6;

interface Props {
  p1Coord: AxialCoord;
  p2Coord: AxialCoord;
}

interface Dims {
  x: number;
  y: number;
  width: number;
  height: number;
}

const getVertexXY = (coord: AxialCoord): [number, number] => {
  const x = (-coord.x - coord.y) * HEX_XSTEP;
  const y = (coord.x - coord.y) * HEX_YSTEP;
  return [x + 1, y + 1];
};

const getDims = (p1Coord: AxialCoord, p2Coord: AxialCoord): Dims => {
  const [end1X, end1Y] = getVertexXY(p1Coord);
  const [end2X, end2Y] = getVertexXY(p2Coord);

  const xLen = Math.abs(end1X - end2X);
  const yLen = Math.abs(end1Y - end2Y);

  const fullWidth = Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2));
  const width = fullWidth * LENGTH_SCALE_FACTOR;
  const height = EDGE_WIDTH;

  const x = -width / 2;
  const y = -EDGE_WIDTH / 2;
  return { x: x, y: y, width: width, height: height };
};

const getRotate = (p1Coord: AxialCoord, p2Coord: AxialCoord): string => {
  const [end1X, end1Y] = getVertexXY(p1Coord);
  const [end2X, end2Y] = getVertexXY(p2Coord);

  const xDist = end1X - end2X;
  const yDist = end1Y - end2Y;

  const rotateRad = Math.atan(yDist / xDist);
  const rotateDeg = (rotateRad * 180) / Math.PI;

  return `rotate(${rotateDeg})`;
};

const getTranslate = (p1Coord: AxialCoord, p2Coord: AxialCoord): string => {
  const [end1X, end1Y] = getVertexXY(p1Coord);
  const [end2X, end2Y] = getVertexXY(p2Coord);

  const x = (end1X + end2X) / 2;
  const y = (end1Y + end2Y) / 2;

  return `translate(${x},${y})`;
};

const getTransform = (p1Coord: AxialCoord, p2Coord: AxialCoord): string => {
  const rotate = getRotate(p1Coord, p2Coord);
  const translate = getTranslate(p1Coord, p2Coord);
  return `${translate} ${rotate}`;
};

const Edge = (props: Props) => {
  const { p1Coord, p2Coord } = props;
  const { x, y, width, height } = getDims(p1Coord, p2Coord);
  return (
    <React.Fragment>
      <rect
        className={styles.beater}
        x={x}
        y={y}
        width={width}
        height={height}
        transform={getTransform(p1Coord, p2Coord)}
      />
      <rect
        className={styles.hover}
        x={x}
        y={y}
        width={width}
        height={height}
        transform={getTransform(p1Coord, p2Coord)}
      />
    </React.Fragment>
  );
};

export default Edge;
