import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

export const HEX_WIDTH = 70;
export const HEX_HEIGHT = 80;

class Hex extends React.Component {
  getPoints = () => {
    const xStep = HEX_WIDTH / 2;
    const yStep = HEX_HEIGHT / 4;
    return [
      `${-xStep},${-yStep}`,
      `0,${-2 * yStep}`,
      `${xStep},${-yStep}`,
      `${xStep},${yStep}`,
      `0,${2 * yStep}`,
      `${-xStep},${yStep}`,
    ].join(' ');
  };

  getTransform = () => {
    const {x, y} = this.props;
    return `translate(${x + 1},${y + 1})`;
  };

  onClick = e => {
    e.preventDefault();
    console.log('hi');
  };

  render() {
    return (
      <polygon
        className={classNames(styles.hex, this.props.className)}
        points={this.getPoints()}
        transform={this.getTransform()}
        onClick={this.onClick}
      />
    );
  }
}

Hex.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Hex.defaultProps = {
  className: '',
};

export default Hex;
