import React from "react";
import styles from "./PreviousFestival.module.scss";

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
      <img src={thisImage} alt="工大祭の画像" loading="lazy" />
    </a>
  );
};

export default PrevFestivalCard;
