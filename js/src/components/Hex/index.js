import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

class Hex extends React.Component {
  getTransform = () => {
    const {x, y} = this.props;
    return `translate(${x + 1},${y + 1})`;
  };

  render() {
    return (
      <polygon
        className={classNames(styles.hex, this.props.className)}
        points="-35,-20 0,-40 35,-20 35,20 0,40 -35,20"
        transform={this.getTransform()}
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
