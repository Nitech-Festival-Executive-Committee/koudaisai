import React from "react";
import styles from "./PreviousFestival.module.scss";
import Image from "next/image";

interface SiteData {
  thisHref: string;
  thisImage: string;
}

const PrevFestivalCard: React.FC<SiteData> = ({ thisHref, thisImage }) => {
  return (
    <a
      className={styles.preFestivalThum}
      href={thisHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="第51回工大祭のWebページを開く"
    >
      <Image
        src={thisImage}
        alt="工大祭の画像"
        width={150}
        height={150}
        style={{ objectFit: "contain" }}
      />
    </a>
  );
};

export default PrevFestivalCard;
