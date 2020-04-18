import * as React from "react";

import { HEX_XSTEP, HEX_YSTEP, VERTEX_R } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import * as styles from "./styles.scss";

interface Props {
  coord: AxialCoord;
}

class Vertex extends React.Component<Props> {
  getXY = (): [number, number] => {
    const { coord } = this.props;
    const x = (-coord.x - coord.y) * HEX_XSTEP;
    const y = (coord.x - coord.y) * HEX_YSTEP;
    return [x + 1, y + 1];
  };

  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("circle");
  };

  render() {
    const [x, y] = this.getXY();
    return (
      <circle
        className={styles.vertex}
        cx={x}
        cy={y}
        r={VERTEX_R}
        fill="blue"
        onClick={this.onClick}
      />
    );
  }
}

export default Vertex;
