import React from 'react';
import PropTypes from 'prop-types';

class Game extends React.Component {
  render() {
    return <div className={this.props.className} />;
  }
}

Game.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Game;
