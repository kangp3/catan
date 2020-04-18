import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT, Direction } from "components/Board/dims";

import Edge from "./Edge";

interface Props {
  size: number;
}

class Edges extends React.Component<Props> {
  render() {
    return <Edge x={0} y={0} angle={Direction.Up} />;
  }
}

export default Edges;
