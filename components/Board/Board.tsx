import React from "react";
import cx from "classnames";

import styles from "./Board.module.css";

interface CellProps {
  clickHandler: () => void;
}

export const Cell: React.FC<CellProps> = ({ children, clickHandler }) => {
  const classnames = children ? [styles.cell, styles.activeCell] : [styles.cell];

  return (
    <div className={cx(classnames)}>
      <div className={styles.item}> {children}</div>
      <button
        className={styles.button}
        disabled={!!children}
        onClick={clickHandler}
      >
      </button>
    </div>
  );
};

interface BoardProps {
  n: number;
}

export const Board: React.FC<BoardProps> = ({ children, n }) => {
  const ref = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    if (ref?.current) {
      ref.current.style.setProperty("--n", n.toString());
    }
  }, [n]);

  return (
    <div ref={ref} className={styles.board}>
      {children}
    </div>
  );
};

export default Board;
