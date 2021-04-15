import React from "react";

// [[null, null, null], [null, null, null], [null, null, null]]

type Board = Array<Array<CellOption>>;

type CellOption = "X" | "O" | null;

const createBoard = (n: number) =>
  [...Array(n)].map(() => [...Array(n)].map(() => null));

export const useGame = (n: number) => {
  const [board, setBoard] = React.useState<Board>();

  React.useEffect(() => {
    const newBoard = createBoard(n);
    setBoard(newBoard);
  }, [n]);

  return {
    board,
    playMove: () => {},
    reset: () => {},
  };
};
