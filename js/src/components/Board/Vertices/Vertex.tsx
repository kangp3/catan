import * as React from 'react';

import {HEX_WIDTH} from 'components/Board/dims';

import * as styles from './styles.scss';

interface Props {
  x: number;
  y: number;
}

class Vertex extends React.Component<Props> {
  onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('circle');
  };

  render() {
    return (
      <circle
        className={styles.vertex}
        cx={this.props.x + 1}
        cy={this.props.y + 1}
        r={HEX_WIDTH / 8}
        fill="blue"
        onClick={this.onClick}
      />
    );
  }
}

export default Vertex;
