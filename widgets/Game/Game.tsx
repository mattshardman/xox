import React from "react";

import { Board, Cell } from "components/Board";

import { useGame } from "hooks";

interface Props {
  n: number;
}

export const Game: React.FC<Props> = ({ n }) => {
  const { board, playMove, winner } = useGame(n);

  if (winner) {
    return (
      <div>
        <p>{winner} won!</p>
      </div>
    );
  }

  return (
    <div>
      <Board n={n}>
        {board.map((row, rowI) =>
          row.map((cell, colI) => (
            <Cell
              key={`${rowI}-${colI}`}
              clickHandler={() => playMove({ row: rowI, col: colI })}
            >
              {cell}
            </Cell>
          ))
        )}
      </Board>
    </div>
  );
};

export default Game;
