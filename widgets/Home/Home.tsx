import React from "react";
import Link from "next/link";

import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const [n, setN] = React.useState("3");

  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <div className={styles.n}>
        <p className={styles.text}>{n}</p>
      </div>
      <label htmlFor="selectN">
        <p>Select a board size:</p>
        <input
          id="selectN"
          type="range"
          min="3"
          max="10"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </label>
      <Link href={`/game?n=${n}`}>
        <button className={styles.button}>Go</button>
      </Link>
    </section>
  );
};

export default Home;
