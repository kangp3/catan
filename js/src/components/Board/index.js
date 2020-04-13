import React from 'react';
import PropTypes from 'prop-types';

import {HEX_WIDTH, HEX_HEIGHT} from 'components/Board/dims';

import Hexes from './Hexes';
import Vertices from './Vertices';

class Board extends React.Component {
  getViewBox = () => {
    const {size} = this.props;
    const width = (2 * size - 1) * HEX_WIDTH;
    const height = HEX_HEIGHT + ((3 * HEX_HEIGHT) / 4) * 2 * (size - 1);
    return `${-width / 2} ${-height / 2} ${width + 2} ${height + 2}`;
  };

  render() {
    const {size} = this.props;
    return (
      <svg vectorEffect="non-scaling-stroke" viewBox={this.getViewBox()}>
        <Hexes size={size} />
        <Vertices size={size} />
      </svg>
    );
  }
}

Board.propTypes = {
  size: PropTypes.number,
};

Board.defaultProps = {
  size: 3,
};

export default Board;
