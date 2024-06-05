"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { options } from "@/data/tokens";
import { chosenType } from "@/@types/GameTypes";

import ButtonGame from "../app/components/buttons/ButtonGame";

interface GameContextTypes {
  clearStates: () => void;
  generateToken: (chosen: chosenType) => ReactNode;
  chosenOne: (chosen: chosenType) => void;
  message: string;
  chosen: chosenType;
  cpuChosen: chosenType;
  score: number;
}

export const GameContext = createContext({} as GameContextTypes);

export function GameProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState<chosenType>("");
  const [cpuChosen, setCpuChosen] = useState<chosenType>("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!cpuChosen) return;

    setTimeout(() => {
      const res = compare();

      if (res === 1) {
        setMessage("YOU WIN");
        setScore((prevState) => prevState + 1);
      } else if (res === -1) {
        setMessage("YOU LOSE");
        setScore((prevState) => prevState - 1);
      } else setMessage("DRAW");
      //   messageAnimation(true);
    }, 1000);
  }, [cpuChosen]);

  function generateToken(chosen: chosenType) {
    if (!chosen) return;
    const ch = options.filter((op) => op.name === chosen)[0];
    return <ButtonGame src={ch.src} customClass={ch.customClass} />;
  }

  function chosenOne(chosen: chosenType) {
    setChosen(chosen);
    cpuChosen2();
  }

  function cpuChosen2() {
    const opt = ["scissors", "spock", "paper", "lizard", "rock"];
    const random = Math.floor(Math.random() * 5);
    const chosen = opt[random] as chosenType;
    setTimeout(() => {
      setCpuChosen(chosen);
    }, 1500);
  }

  function compare() {
    const player = chosen;
    const cpu = cpuChosen;

    if (player === "rock") {
      const wins = ["scissors", "lizard"];
      const loses = ["paper", "spock"];
      if (wins.includes(cpu)) return 1;
      if (loses.includes(cpu)) return -1;
    } else if (player === "paper") {
      const wins = ["rock", "spock"];
      const loses = ["scissors", "lizard"];
      if (wins.includes(cpu)) return 1;
      if (loses.includes(cpu)) return -1;
    } else if (player === "scissors") {
      const wins = ["paper", "lizard"];
      const loses = ["rock", "spock"];
      if (wins.includes(cpu)) return 1;
      if (loses.includes(cpu)) return -1;
    } else if (player === "lizard") {
      const wins = ["spock", "paper"];
      const loses = ["rock", "scissors"];
      if (wins.includes(cpu)) return 1;
      if (loses.includes(cpu)) return -1;
    } else if (player === "spock") {
      const wins = ["scissors", "rock"];
      const loses = ["paper", "lizard"];
      if (wins.includes(cpu)) return 1;
      if (loses.includes(cpu)) return -1;
    }

    return 0;
  }

  function clearStates() {
    setChosen("");
    setCpuChosen("");
    setMessage("");
  }
  return (
    <GameContext.Provider
      value={{
        clearStates,
        message,
        chosen,
        cpuChosen,
        generateToken,
        chosenOne,
        score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
