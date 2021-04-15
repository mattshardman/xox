import Head from "next/head";
import { useRouter } from "next/router";

import Game from "widgets/Game";

import styles from "../styles/Home.module.css";

export default function GamePage() {
  const { query } = useRouter();
  const n = query?.n;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe - Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Game />
      </section>
    </div>
  );
}
