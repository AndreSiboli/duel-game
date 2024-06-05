"use client";

import { GameContext } from "@/@context/GameContext";
import styles from "@/styles/game/Score.module.scss";
import { useContext } from "react";

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      <div className={styles.score_types}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <span>LIZARD</span>
        <span>SPOCK</span>
      </div>
      <div className={styles.score_score}>
        <span className={styles.score_title}>SCORE</span>
        <span className={styles.score_number}>{score}</span>
      </div>
    </div>
  );
}
