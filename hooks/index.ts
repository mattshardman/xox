import React from "react";

type Board = Array<Array<CellOption>>;

type CellOption = "X" | "O" | null;

interface PlayMoveArgs {
  row: number;
  col: number;
}

interface CheckWinnerArgs extends PlayMoveArgs {
  turn: "X" | "O";
}

const createBoard = (n: number) =>
  [...Array(n)].map(() => [...Array(n)].map(() => null));

const winnerInit = null;
const countInit = { totalCount: 0 };

export const useCheckWinner = (n: number) => {
  const [winner, setWinner] = React.useState<CellOption | "draw">(winnerInit);
  const [_count, setCount] = React.useState<Record<string, number>>(countInit);

  const checkWinner = ({ row, col, turn }: CheckWinnerArgs) => {
    setCount((previousCount) => {
      const newCount = { ...previousCount };
      newCount.totalCount += 1;
      // determine if we should increment or decrement
      const updater = turn === "X" ? 1 : -1;

      // if not initialise it
      const keys = [`row-${row}`, `col-${col}`];

      // check if up diagonal
      if (col + row === n - 1) {
        keys.push("up");
      }

      // check if down diagonal
      if (col === row) {
        keys.push("down");
      }

      keys.forEach((key) => {
        // check if the key already exists on count object
        if (!newCount[key]) {
          newCount[key] = 0;
        }

        // either increment or decrement the count property for both row and col
        newCount[key] += updater;

        // determin if anyone has won
        if (newCount[key] === n) {
          setWinner("X");
          return newCount;
        }

        if (newCount[key] === -n) {
          setWinner("O");
          return newCount;
        }

        if (newCount.totalCount === n * n) {
          setWinner("draw");
          return newCount;
        }
      });

      return newCount;
    });
  };

  const resetWinner = () => {
    setWinner(winnerInit)
    setCount(countInit);
  }

  return { winner, checkWinner, resetWinner };
};

export const useGame = (n: number) => {
  const [turn, setTurn] = React.useState<"X" | "O">("X");
  const [board, setBoard] = React.useState<Board>([[]]);

  const { winner, checkWinner, resetWinner } = useCheckWinner(n);

  const playMove = ({ row, col }: PlayMoveArgs) => {
    setBoard((current) => {
      const newBoard = [...current];

      setTurn((currentTurn) => {
        checkWinner({ row, col, turn: currentTurn });
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
    resetWinner();
  };

  React.useEffect(() => {
    const newBoard = createBoard(n);
    setBoard(newBoard);
  }, [n]);

  return {
    turn,
    winner,
    board,
    playMove,
    reset,
  };
};
