import React from "react";
import styles from "./Canvas.module.scss";
import Image from "next/image";

export default function Canvas() {
  return (
    <div className={styles.canvas}>
      <Image
        className={styles.canvasBackground}
        src="/img/canvas.webp"
        alt="CanvasBackground"
        width={100}
        height={100}
        priority={true}
      />
      <Image
        className={styles.canvasImg}
        src="/img/62ndstartImg.webp"
        alt="CanvasImg"
        layout="intrinsic"
        width={300}
        height={100}
        priority={true}
      />
    </div>
  );
}
