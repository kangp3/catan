import React from 'react';
import PropTypes from 'prop-types';

import Board from 'components/Board';

class Game extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Board />
      </div>
    );
  }
}

Game.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Game;
