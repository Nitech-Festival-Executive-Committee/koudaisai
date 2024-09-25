import React from "react";
import styles from "./PreviousFestival.module.scss";
import Image from "next/image";

interface SiteData {
  thisHref: string;
  thisImage: string;
}

const TemplatePrevFestival: React.FC<SiteData> = ({ thisHref, thisImage }) => {
  return (
    <div>
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
          width={150} // widthを調整
          height={150} // heightを調整
          style={{ objectFit: "contain" }} // objectFitをstyleで設定
        />
      </a>
    </div>
  );
};

export default TemplatePrevFestival;
