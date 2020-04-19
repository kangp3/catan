import * as React from "react";

import Board from "components/Board";
import { fetchBody } from "utils/fetch";

interface Props {
  className: string;
}

interface State {
  loading: boolean;
  error: string;
  gameInfo?: GameInfo;
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
    };
  }

  componentDidMount() {
    fetchBody<GameInfo>(`${process.env.API_URL}/catan/game`).then(
      data => {
        this.setState({
          loading: false,
          gameInfo: data,
        });
      },
      err => {
        this.setState({
          loading: false,
          error: err,
        });
      }
    );
  }

  render() {
    const { gameInfo } = this.state;
    return (
      <div className={this.props.className}>
        {!!gameInfo && <Board size={gameInfo.size} />}
      </div>
    );
  }
}

export default Game;
