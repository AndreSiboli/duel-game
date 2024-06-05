"use client";

import { useState } from "react";
import styles from "@/styles/game/Rules.module.scss";

import Img from "@/app/components/utils/Img";

import rules from "@/assets/image-rules-bonus.svg";
import { AiOutlineClose } from "react-icons/ai";

export default function Rules() {
  const [isOpen, setIsOpen] = useState(false);

  function toogleRules() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className={`${styles.rules} ${isOpen && styles.active}`}>
        <div className={styles.rules_container}>
          <header className={styles.rules_header}>
            <p>RULES</p>
            <button onClick={toogleRules}>
              <AiOutlineClose />
            </button>
          </header>

          <div className={styles.rules_rule}>
            <Img src={rules} style={{ objectFit: "contain" }} />
          </div>

          <div className={styles.rules_close}>
            <button onClick={toogleRules}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>

      <button className={styles.rules_button} onClick={toogleRules}>RULES</button>
    </>
  );
}
