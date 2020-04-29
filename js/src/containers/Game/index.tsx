import React, { useState, useEffect } from "react";

import Board from "components/Board";
import { Props as HexProps } from "components/Board/Hexes/Hex";
import { Props as HarborProps } from "components/Board/Harbors/Harbor";
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
  harbors: HarborProps[];
}

const Game = (props: Props) => {
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = urlWithParams(`${process.env.API_URL}/catan/game`);
    fetchBody<GameInfo>(url).then(
      data => {
        setLoading(false);
        setGameInfo(data);
      },
      err => {
        setLoading(false);
        setError(err);
      }
    );
  }, []);

  return (
    <div className={props.className}>
      {!!gameInfo && (
        <Board
          size={gameInfo.size}
          hexes={gameInfo.hexes}
          harbors={gameInfo.harbors}
        />
      )}
    </div>
  );
};

export default Game;
