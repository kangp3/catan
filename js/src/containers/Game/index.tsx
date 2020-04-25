import * as React from "react";

import Board from "components/Board";
import { Props as HexProps } from "components/Board/Hexes/Hex";
import { fetchBody, urlWithParams } from "utils/fetch";

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
  hexes: HexProps[];
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
    const url = urlWithParams(`${process.env.API_URL}/catan/game`);
    fetchBody<GameInfo>(url).then(
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
        {!!gameInfo && <Board size={gameInfo.size} hexes={gameInfo.hexes} />}
      </div>
    );
  }
}

export default Game;
