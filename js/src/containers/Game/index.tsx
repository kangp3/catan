import * as React from "react";

import Board from "components/Board";

interface Props {
  className: string;
}

interface State {
  loading: boolean;
  error: string;
  gameInfo: GameInfo | null;
}

interface GameInfo {
  size: number;
}

class Game extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      error: "",
      gameInfo: null,
    };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/catan/game`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          loading: false,
          gameInfo: data,
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  }

  render() {
    const { gameInfo } = this.state;
    return (
      !!gameInfo && (
        <div className={this.props.className}>
          <Board size={gameInfo.size} />
        </div>
      )
    );
  }
}

export default Game;
