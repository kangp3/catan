import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT, Direction } from "components/Board/dims";
import Position from "types/Position";

import * as styles from "./styles.scss";

interface Props {
  x: number;
  y: number;
  angle: Direction;
}

class Edge extends React.Component<Props> {
  getEndpoints = (): [Position, Position] => {
    const { x, y, angle } = this.props;

    let pt1: Position = { x: x + 1, y: y + 1 };
    let pt2: Position = { x: x + 1, y: y + 1 };
    switch (angle) {
      case Direction.Up:
      case Direction.Down:
        pt1.y += HEX_HEIGHT / 6;
        pt2.y -= HEX_HEIGHT / 6;
        break;
      case Direction.UpRight:
      case Direction.DownLeft:
        pt1.x -= HEX_WIDTH / 6;
        pt1.y += HEX_HEIGHT / 12;
        pt2.x += HEX_WIDTH / 6;
        pt2.y -= HEX_HEIGHT / 12;
        break;
      case Direction.UpLeft:
      case Direction.DownRight:
        pt1.x -= HEX_WIDTH / 6;
        pt1.y -= HEX_HEIGHT / 12;
        pt2.x += HEX_WIDTH / 6;
        pt2.y += HEX_HEIGHT / 12;
        break;
      default:
        break;
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
