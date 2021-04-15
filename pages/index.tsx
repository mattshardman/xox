import React from "react";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [n, setN] = React.useState("3");

  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <p>{n}</p>
        <input
          type="range"
          min="3"
          max="10"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <Link href={`/game?n=${n}`}>Go</Link>
      </section>
    </div>
  );
}
