"use client";

import { useContext } from "react";
import { GameContext } from "@/@context/GameContext";
import { options } from "@/data/tokens";
import { chosenType } from "@/@types/GameTypes";
import styles from "@/styles/game/Game.module.scss";

import ButtonGame from "@/app/components/buttons/ButtonGame";
import Img from "@/app/components/utils/Img";

import pentagon from "@/assets/bg-pentagon.svg";

export default function Game() {
  const { chosen, chosenOne } = useContext(GameContext);

  return (
    <>
      {!chosen && (
        <div className={styles.game}>
          <div className={styles.game_wrapper}>
            {options.map((op) => (
              <button
                className={`${styles.button_wrapper} ${styles[op.customClass]}`}
                onClick={() => chosenOne(op.name as chosenType)}
                key={op.name}
                aria-label={op.name}
              >
                <ButtonGame src={op.src} customClass={op.customClass} />
              </button>
            ))}

            <div className={styles.pentagon}>
              <Img src={pentagon} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
