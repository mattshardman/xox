import React from "react";

import styles from "./Board.module.css";

export const Cell: React.FC = ({ children }) => {
  return <div className={styles.cell}>{children}</div>;
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

  return <div ref={ref} className={styles.board}>{children}</div>;
};

export default Board;
