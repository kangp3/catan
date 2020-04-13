import React from 'react';
import PropTypes from 'prop-types';

import {HEX_WIDTH, HEX_HEIGHT} from 'components/Board/dims';
import Hex from './Hex';

class Hexes extends React.Component {
  getNextPos = (currPos, sideIdx) => {
    const nextPos = currPos;
    switch (sideIdx) {
      case 0:
        // Diagonal up and right
        nextPos.x += HEX_WIDTH / 2;
        nextPos.y -= (HEX_HEIGHT * 3) / 4;
        break;
      case 1:
        // Right
        nextPos.x += HEX_WIDTH;
        break;
      case 2:
        // Diagonal down and right
        nextPos.x += HEX_WIDTH / 2;
        nextPos.y += (HEX_HEIGHT * 3) / 4;
        break;
      case 3:
        // Diagonal down and left
        nextPos.x -= HEX_WIDTH / 2;
        nextPos.y += (HEX_HEIGHT * 3) / 4;
        break;
      case 4:
        // Left
        nextPos.x -= HEX_WIDTH;
        break;
      case 5:
        // Diagonal up and left
        nextPos.x -= HEX_WIDTH / 2;
        nextPos.y -= (HEX_HEIGHT * 3) / 4;
        break;
    }
    return nextPos;
  };

  render() {
    const {size} = this.props;

    const hexes = [];
    let key = 0;
    for (let ringSize = 0; ringSize < size; ringSize++) {
      if (ringSize === 0) {
        hexes.push(<Hex key={key} x={0} y={0} />);
        key++;
        continue;
      }
      let currPos = {
        x: -ringSize * HEX_WIDTH,
        y: 0,
      };
      let sideIdx = 0;
      for (let hexIdx = 0; hexIdx < 6 * ringSize; hexIdx++) {
        hexes.push(<Hex key={key} x={currPos.x} y={currPos.y} />);
        currPos = this.getNextPos(currPos, sideIdx);
        key++;
        if ((hexIdx + 1) % ringSize === 0) {
          sideIdx++;
        }
      }
    }

    return <g>{hexes}</g>;
  }
}

Hexes.propTypes = {
  size: PropTypes.number,
};

Hexes.defaultProps = {
  size: 3,
};

export default Hexes;
