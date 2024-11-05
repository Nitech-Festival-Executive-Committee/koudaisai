import React from "react";
import styles from "./PreviousFestival.module.scss";

interface SiteData {
  href: string;
  src: string;
}

export default function PrevFestivalCard({ href, src }: SiteData) {
  return (
    <a
      className={styles.preFestivalThum}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="第51回工大祭のWebページを開く"
    >
      <img src={src} alt="工大祭の画像" loading="lazy" />
    </a>
  );
}
