import React from "react";

type Board = Array<Array<CellOption>>;

type CellOption = "X" | "O" | null;

interface PlayMoveProps {
  row: number;
  col: number;
}

const createBoard = (n: number) =>
  [...Array(n)].map(() => [...Array(n)].map(() => null));

export const useGame = (n: number) => {
  const [turn, setTurn] = React.useState<"X" | "O">("X");
  const [board, setBoard] = React.useState<Board>([[]]);

  const playMove = ({ row, col }: PlayMoveProps) => {
    setBoard((current) => {
      const newBoard = [...current];

      setTurn((currentTurn) => {
        newBoard[row][col] = currentTurn;

        if (currentTurn === "X") {
          return "O";
        }

        return "X";
      });

      return current;
    });
  };

  const reset = () => {
    const newBoard = createBoard(n);
    setBoard(newBoard);
  };

  React.useEffect(() => {
    const newBoard = createBoard(n);
    setBoard(newBoard);
  }, [n]);

  return {
    board,
    playMove,
    reset,
  };
};
