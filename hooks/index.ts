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

export const useCheckWinner = (n: number) => {
  const [winner, setWinner] = React.useState<CellOption>(null);
  const [count, setCount] = React.useState<Record<string, number>>({});

  const checkWinner = ({ row, col, turn }: CheckWinnerArgs) => {
    setCount((previousCount) => {
      const newCount = { ...previousCount };
      // determine if we should increment or decrement
      const updater = turn === "X" ? 1 : -1;

      // check if the key already exists on count object
      // if not initialise it
      const keys = [`row-${row}`, `col-${col}`];

      keys.forEach((key) => {
        if (!newCount[key]) {
          newCount[key] = 0;
        }

        // either increment or decrement the count property for both row and col
        newCount[key] += updater; 

        // determin if anyone has won
        if (newCount[key] === n) {
          setWinner("X")
        }

        if (newCount[key] === -n) {
          setWinner("O")
        }
      });
      
      return newCount;
    });
  };

  return { winner, checkWinner };
};

export const useGame = (n: number) => {
  const [turn, setTurn] = React.useState<"X" | "O">("X");
  const [board, setBoard] = React.useState<Board>([[]]);

  const { winner, checkWinner } = useCheckWinner(n);

  const playMove = ({ row, col }: PlayMoveArgs) => {
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
    turn,
    winner,
    board,
    playMove,
    reset,
  };
};
