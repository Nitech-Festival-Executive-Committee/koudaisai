import React from "react";
import styles from "./PreviousFestival.module.scss";
import Image from "next/image";
const FiftyFirst: React.FC = () => {
  return (
    <div>
      <a
        className={styles.preFestivalThum}
        href="https://www.koudaisai.com/51st/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="第51回工大祭のWebページを開く"
      >
        <Image src="/img/51th.webp" alt="" width={200} height={200} />;
      </a>
    </div>
  );
};

export default FiftyFirst;
