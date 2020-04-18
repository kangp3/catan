import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";

import Hexes from "./Hexes";
import Vertices from "./Vertices";
import Edges from "./Edges";

interface Props {
  size: number;
}

class Board extends React.Component<Props> {
  getViewBox = () => {
    const { size } = this.props;
    const width = (2 * size - 1) * HEX_WIDTH;
    const height = HEX_HEIGHT + ((3 * HEX_HEIGHT) / 4) * 2 * (size - 1);
    return `${-width / 2} ${-height / 2} ${width + 2} ${height + 2}`;
  };

  render() {
    const { size } = this.props;
    return (
      <svg vectorEffect="non-scaling-stroke" viewBox={this.getViewBox()}>
        <Hexes size={size} />
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
  }
}

export default Board;
