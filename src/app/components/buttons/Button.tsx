import styles from "@/styles/buttons/Button.module.scss";

interface PropsType {
  text: string;
  handleGame: () => void;
}

export default function Button(props: PropsType) {
  const { text, handleGame } = props;

  function chosen() {
    handleGame();
  }

  return (
    <button className={styles.button} onClick={chosen}>
      {text}
    </button>
  );
}
