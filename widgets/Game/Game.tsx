import React from "react";

import { Board , Cell } from "components/Board";

import { useGame } from "hooks";

export const Game: React.FC = () => {
  const { board } = useGame(3);

  return <div>
    <Board>
      <Cell />
    </Board>
  </div>;
};

export default Game;
