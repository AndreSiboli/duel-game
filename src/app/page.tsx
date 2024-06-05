import styles from "./page.module.scss";

import Duel from "@/app/components/game/Duel";
import Game from "@/app/components/game/Game";
import Score from "@/app/components/game/Score";
import Rules from "@/app/components/game/Rules";
import Container from "./components/layout/Container";

export default function Home() {
  return (
    <Container>
      <main className={styles.main}>
        <Score />
        <Game />
        <Duel />
        <Rules />
      </main>
    </Container>
  );
}
