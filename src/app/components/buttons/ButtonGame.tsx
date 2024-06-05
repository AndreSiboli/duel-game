import { CSSProperties } from "react";
import styles from "@/styles/buttons/ButtonGame.module.scss";

import { StaticImageData } from "next/image";
import Img from "../utils/Img";

interface PropsType {
  src: StaticImageData | string;
  customClass: string;
  style?: CSSProperties
}

export default function ButtonGame(props: PropsType) {
  const { src, customClass, style } = props;

  return (
    <div className={`${styles.token} ${styles[customClass]}`} >
      <div className={styles.token_wrapper} style={style}>
        <div className={styles.token_image}>
          <Img src={src} style={{ objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}
