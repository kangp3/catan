import React from 'react';
import PropTypes from 'prop-types';

import {HEX_WIDTH, HEX_HEIGHT} from 'components/Board/dims';

import Vertex from './Vertex';

class Vertices extends React.Component {
  getSideVerticesPos = (sideIdx, ringSize, firstPos, firstKey) => {
    const currPos = {...firstPos};
    const posList = [{...currPos}];
    switch (sideIdx) {
      case 0:
        // Diagonal up and right
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.y = currPos.y - HEX_HEIGHT / 2;
          } else {
            currPos.x = currPos.x + HEX_WIDTH / 2;
            currPos.y = currPos.y - HEX_HEIGHT / 4;
          }
          posList.push({...currPos});
        }
        break;
      case 1:
        // Right
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.x = currPos.x + HEX_WIDTH / 2;
            currPos.y = currPos.y - HEX_HEIGHT / 4;
          } else {
            currPos.x = currPos.x + HEX_WIDTH / 2;
            currPos.y = currPos.y + HEX_HEIGHT / 4;
          }
          posList.push({...currPos});
        }
        break;
      case 2:
        // Diagonal down and right
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.x = currPos.x + HEX_WIDTH / 2;
            currPos.y = currPos.y + HEX_HEIGHT / 4;
          } else {
            currPos.y = currPos.y + HEX_HEIGHT / 2;
          }
          posList.push({...currPos});
        }
        break;
      case 3:
        // Diagonal down and left
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.y = currPos.y + HEX_HEIGHT / 2;
          } else {
            currPos.x = currPos.x - HEX_WIDTH / 2;
            currPos.y = currPos.y + HEX_HEIGHT / 4;
          }
          posList.push({...currPos});
        }
        break;
      case 4:
        // Left
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.x = currPos.x - HEX_WIDTH / 2;
            currPos.y = currPos.y + HEX_HEIGHT / 4;
          } else {
            currPos.x = currPos.x - HEX_WIDTH / 2;
            currPos.y = currPos.y - HEX_HEIGHT / 4;
          }
          posList.push({...currPos});
        }
        break;
      case 5:
        // Diagonal up and left
        for (let ptIdx = 0; ptIdx < 2 * ringSize + 1; ptIdx++) {
          if (ptIdx % 2 === 0) {
            currPos.x = currPos.x - HEX_WIDTH / 2;
            currPos.y = currPos.y - HEX_HEIGHT / 4;
          } else {
            currPos.y = currPos.y - HEX_HEIGHT / 2;
          }
          posList.push({...currPos});
        }
        break;
    }
    return posList;
  };

  render() {
    const {size} = this.props;

    const vertices = [];
    let key = 0;
    for (let ringSize = 0; ringSize < size; ringSize++) {
      let currPos = {
        x: -HEX_WIDTH / 2 - HEX_WIDTH * ringSize,
        y: HEX_HEIGHT / 4,
      };
      for (let sideIdx = 0; sideIdx < 6; sideIdx++) {
        const posList = this.getSideVerticesPos(
          sideIdx,
          ringSize,
          currPos,
          key,
        );
        console.log(posList);
        vertices.push(
          ...posList
            .slice(0, -1)
            .map(({x, y}, idx) => <Vertex key={key + idx} x={x} y={y} />),
        );
        key = vertices.length;
        currPos = {...posList[posList.length - 1]};
      }
    }
    return <g>{vertices}</g>;
  }
}

Vertices.propTypes = {
  size: PropTypes.number,
};

Vertices.defaultProps = {
  size: 3,
};

export default Vertices;
