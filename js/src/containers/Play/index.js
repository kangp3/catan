import React from 'react';

import Game from 'containers/Game';
import Chat from 'containers/Chat';

import styles from './styles.scss';

class Play extends React.Component {
  render() {
    return (
      <div className={styles.play}>
        <Game className={styles.gamePane} />
        <Chat className={styles.chatPane} />
      </div>
    );
  }
}

export default Play;
