import * as React from "react";

import { HEX_XSTEP, HEX_YSTEP, EDGE_WIDTH } from "components/Board/dims";
import { AxialCoord } from "types/Coord";

import * as styles from "./styles.scss";

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

class Edge extends React.Component<Props> {
  getVertexXY = (coord: AxialCoord): [number, number] => {
    const x = (-coord.x - coord.y) * HEX_XSTEP;
    const y = (coord.x - coord.y) * HEX_YSTEP;
    return [x + 1, y + 1];
  };

  getDims = (): Dims => {
    const { p1Coord, p2Coord } = this.props;
    const [end1X, end1Y] = this.getVertexXY(p1Coord);
    const [end2X, end2Y] = this.getVertexXY(p2Coord);

    const xLen = Math.abs(end1X - end2X);
    const yLen = Math.abs(end1Y - end2Y);

    const fullWidth = Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2));
    const width = fullWidth * LENGTH_SCALE_FACTOR;
    const height = EDGE_WIDTH;

    const x = -width / 2;
    const y = -EDGE_WIDTH / 2;
    return { x: x, y: y, width: width, height: height };
  };

  getRotate = (): string => {
    const { p1Coord, p2Coord } = this.props;
    const [end1X, end1Y] = this.getVertexXY(p1Coord);
    const [end2X, end2Y] = this.getVertexXY(p2Coord);

    const xDist = end1X - end2X;
    const yDist = end1Y - end2Y;

    const rotateRad = Math.atan(yDist / xDist);
    const rotateDeg = (rotateRad * 180) / Math.PI;

    return `rotate(${rotateDeg})`;
  };

  getTranslate = (): string => {
    const { p1Coord, p2Coord } = this.props;
    const [end1X, end1Y] = this.getVertexXY(p1Coord);
    const [end2X, end2Y] = this.getVertexXY(p2Coord);

    const x = (end1X + end2X) / 2;
    const y = (end1Y + end2Y) / 2;

    return `translate(${x},${y})`;
  };

  getTransform = (): string => {
    const rotate = this.getRotate();
    const translate = this.getTranslate();
    return `${translate} ${rotate}`;
  };

  render() {
    const { p1Coord, p2Coord } = this.props;
    const { x, y, width, height } = this.getDims();
    return (
      <React.Fragment>
        <rect
          className={styles.beater}
          x={x}
          y={y}
          width={width}
          height={height}
          transform={this.getTransform()}
        />
        <rect
          className={styles.hover}
          x={x}
          y={y}
          width={width}
          height={height}
          transform={this.getTransform()}
        />
      </React.Fragment>
    );
  }
}

export default Edge;
