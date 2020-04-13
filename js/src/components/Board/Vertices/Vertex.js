import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {HEX_WIDTH} from 'components/Board/dims';

import styles from './styles.scss';

class Vertex extends React.Component {
  onClick = e => {
    e.preventDefault();
    console.log('circle');
  };

  render() {
    return (
      <circle
        className={classNames(styles.vertex, this.props.className)}
        cx={this.props.x + 1}
        cy={this.props.y + 1}
        r={HEX_WIDTH / 8}
        fill="blue"
        onClick={this.onClick}
      />
    );
  }
}

Vertex.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Vertex.defaultProps = {
  className: '',
};

export default Vertex;
