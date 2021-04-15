import Head from "next/head";

import Home from "widgets/Home";

import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
