import React from "react";

import styles from "./Board.module.css";

export const Cell: React.FC = ({ children }) => {
  return <div className={styles.cell}>{children}</div>;
};

export const Board: React.FC = ({ children }) => {
  return <div className={styles.board}>{children}</div>;
};

export default Board;
