import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";

import Harbors from "./Harbors";
import { DockSide } from "./Harbors/Harbor";
import Hexes from "./Hexes";
import { HexProps, ResourceType } from "./Hexes/Hex";
import Vertices from "./Vertices";
import Edges from "./Edges";

import * as styles from "./styles.scss";

interface Props {
  size: number;
  hexes: HexProps[];
}

class Board extends React.Component<Props> {
  getViewBox = () => {
    const { size } = this.props;
    const width = (2 * size - 1) * HEX_WIDTH;
    const height = HEX_HEIGHT + ((3 * HEX_HEIGHT) / 4) * 2 * (size - 1);
    return `${-width / 2} ${-height / 2} ${width + 2} ${height + 2}`;
  };

  render() {
    const { hexes } = this.props;
    return (
      <svg
        className={styles.board}
        vectorEffect="non-scaling-stroke"
        viewBox={this.getViewBox()}
      >
        <Hexes hexes={hexes} />
        <Vertices coords={[{ x: 0, y: 1 }]} />
        <Edges
          edges={[
            [{ x: 0, y: 1 }, { x: -1, y: 1 }],
            [{ x: 0, y: 1 }, { x: 1, y: 0 }],
            [{ x: 0, y: 1 }, { x: 0, y: 2 }],
          ]}
        />
        <Harbors
          harbors={[
            {
              coords: { x: 0, y: 0 },
              resource: ResourceType.Wildcard,
              dockSide: DockSide.UpRight,
            },
          ]}
        />
      </svg>
    );
  }
}

export default Board;
