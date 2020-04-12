import React from 'react';
import PropTypes from 'prop-types';

import Hex from 'components/Hex';

class Board extends React.Component {
  render() {
    const {size} = this.props;
    return (
      <svg>
        <Hex x={0} y={0} />;
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
