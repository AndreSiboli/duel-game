"use client";

import styles from "@/styles/game/MessageGame.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "../buttons/Button";
import { GameContext } from "@/@context/GameContext";

export default function MessageGame() {
  const { clearStates, message } = useContext(GameContext);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!message) return;
    messageAnimation(true);
  }, [message]);

  function resetGame() {
    clearStates();
    messageAnimation(false);
  }

  function messageAnimation(is: boolean) {
    if (!messageRef.current) return;
    if (is) {
      messageRef.current.className = `${styles.message} ${styles.animation}`;
      return;
    }
    messageRef.current.className = `${styles.message}`;
  }

  return (
    <div className={styles.message} ref={messageRef}>
      <p>{message}</p>
      <Button text="PLAY AGAIN" handleGame={resetGame} />
    </div>
  );
}
