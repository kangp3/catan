import React from "react";

import { HEX_XSTEP, HEX_YSTEP, VERTEX_R } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import styles from "./styles.scss";

interface Props {
  coord: AxialCoord;
}

const getXY = (coord: AxialCoord): [number, number] => {
  const x = (-coord.x - coord.y) * HEX_XSTEP;
  const y = (coord.x - coord.y) * HEX_YSTEP;
  return [x + 1, y + 1];
};

const Vertex = (props: Props) => {
  const [x, y] = getXY(props.coord);
  return (
    <circle className={styles.vertex} cx={x} cy={y} r={VERTEX_R} fill="blue" />
  );
};

export default Vertex;
