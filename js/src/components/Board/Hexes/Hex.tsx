import * as React from "react";

import { HEX_WIDTH, HEX_HEIGHT } from "components/Board/dims";

import * as styles from "./styles.scss";

interface Props {
  x: number;
  y: number;
}

class Hex extends React.Component<Props> {
  getPoints = (): string => {
    const xStep = HEX_WIDTH / 2;
    const yStep = HEX_HEIGHT / 4;
    return [
      `${-xStep},${-yStep}`,
      `0,${-2 * yStep}`,
      `${xStep},${-yStep}`,
      `${xStep},${yStep}`,
      `0,${2 * yStep}`,
      `${-xStep},${yStep}`,
    ].join(" ");
  };

  getTransform = (): string => {
    const { x, y } = this.props;
    return `translate(${x + 1},${y + 1})`;
  };

  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("hi");
  };

  render() {
    return (
      <polygon
        className={styles.hex}
        points={this.getPoints()}
        transform={this.getTransform()}
        onClick={this.onClick}
      />
    );
  }
}

export default Hex;
