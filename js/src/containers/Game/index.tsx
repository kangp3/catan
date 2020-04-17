import * as React from 'react';

import Board from 'components/Board';

interface Props {
  className: string;
}

class Game extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <Board size={3} />
      </div>
    );
  }
}

export default Game;
