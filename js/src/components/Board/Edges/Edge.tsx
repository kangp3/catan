import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";
import Position from "types/Position";

import * as styles from "./styles.scss";

export enum Direction {
  Up,
  UpRight,
  UpLeft,
}

interface Props {
  x: number;
  y: number;
  angle: Direction;
}

class Edge extends React.Component<Props> {
  getEndpoints = (): [Position, Position] => {
    const { x, y, angle } = this.props;

    let pt1: Position;
    let pt2: Position;
    switch (angle) {
      case Direction.Up:
        pt1 = {
          x: x + 1,
          y: y + HEX_HEIGHT / 6 + 1,
        };
        pt2 = {
          x: x + 1,
          y: y - HEX_HEIGHT / 6 + 1,
        };
        break;
      case Direction.UpRight:
        pt1 = {
          x: x - HEX_WIDTH / 6 + 1,
          y: y + HEX_HEIGHT / 12 + 1,
        };
        pt2 = {
          x: x + HEX_WIDTH / 6 + 1,
          y: y - HEX_HEIGHT / 12 + 1,
        };
      case Direction.UpLeft:
        pt1 = {
          x: x - HEX_WIDTH / 6 + 1,
          y: y - HEX_HEIGHT / 12 + 1,
        };
        pt2 = {
          x: x + HEX_WIDTH / 6 + 1,
          y: y + HEX_HEIGHT / 12 + 1,
        };
    }
    return [pt1, pt2];
  };

  render() {
    const [pt1, pt2] = this.getEndpoints();
    return (
      <line
        className={styles.edge}
        x1={pt1.x}
        y1={pt1.y}
        x2={pt2.x}
        y2={pt2.y}
      />
    );
  }
}

export default Edge;
