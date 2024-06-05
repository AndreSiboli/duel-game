"use client";

import { GameContext } from "@/@context/GameContext";
import styles from "@/styles/game/Duel.module.scss";
import { useContext } from "react";
import MessageGame from "./MessageGame";

export default function Duel() {
  const { chosen, cpuChosen, generateToken } = useContext(GameContext);

  return (
    <>
      {chosen && (
        <div className={styles.duel}>
          <div className={styles.duel_player}>
            <p>YOU PICKED</p>
            <div className={styles.duel_token}>{generateToken(chosen)}</div>
          </div>

          <div className={styles.duel_message_desktop}>
            <MessageGame />
          </div>

          <div className={styles.duel_cpu}>
            <p>CPU PICKED</p>
            {!cpuChosen && (
              <div className={styles.duel_cpu_wait}>
                <div className={styles.circle}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            {cpuChosen && (
              <div className={styles.duel_token}>
                {generateToken(cpuChosen)}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.duel_message_mobile}>
        <MessageGame />
      </div>
    </>
  );
}
