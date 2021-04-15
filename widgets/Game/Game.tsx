import React from "react";
import Link from "next/link";

import { Board, Cell } from "components/Board";

import { useGame } from "hooks";

import styles from "./Game.module.css";

interface Props {
  n: number;
}

export const Game: React.FC<Props> = ({ n }) => {
  const { board, playMove, winner, reset } = useGame(n);

  if (winner === "draw") {
    return (
      <div>
        <p className={styles.text}>It's a draw!</p>
        <div className={styles.buttons}>
          <div className={styles.buttons}>
            <Link href="/">
              <button className={styles.button}>Home</button>
            </Link>
            <button className={styles.button} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (winner) {
    return (
      <div>
        <p className={styles.text}>{winner} won!</p>
        <div className={styles.buttons}>
          <div className={styles.buttons}>
            <Link href="/">
              <button className={styles.button}>Home</button>
            </Link>
            <button className={styles.button} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
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
      <div className={styles.buttons}>
        <Link href="/">
          <button className={styles.button}>Home</button>
        </Link>
        <button className={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
