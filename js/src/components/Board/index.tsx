import React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";
import { Resource } from "types/Resource";

import Harbors from "./Harbors";
import { Props as HarborProps } from "./Harbors/Harbor";
import Hexes from "./Hexes";
import { Props as HexProps } from "./Hexes/Hex";
import Vertices from "./Vertices";
import Edges from "./Edges";

import styles from "./styles.scss";

interface Props {
  size: number;
  hexes: HexProps[];
  harbors: HarborProps[];
}

const getViewBox = (size: number) => {
  const width = 2 * size * HEX_WIDTH;
  const height = HEX_HEIGHT + ((3 * HEX_HEIGHT) / 4) * 2 * size;
  return `${-width / 2} ${-height / 2} ${width + 2} ${height + 2}`;
};

const Board = (props: Props) => (
  <svg
    className={styles.board}
    vectorEffect="non-scaling-stroke"
    viewBox={getViewBox(props.size)}
  >
    <Harbors harbors={props.harbors} />
    <Hexes hexes={props.hexes} />
    <Vertices coords={[{ x: 0, y: 1 }]} />
    <Edges
      edges={[
        [{ x: 0, y: 1 }, { x: -1, y: 1 }],
        [{ x: 0, y: 1 }, { x: 1, y: 0 }],
        [{ x: 0, y: 1 }, { x: 0, y: 2 }],
      ]}
    />
  </svg>
);

export default Board;
