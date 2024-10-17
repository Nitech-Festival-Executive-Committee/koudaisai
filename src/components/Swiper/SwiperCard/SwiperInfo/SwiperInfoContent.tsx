import React from "react";
import styles from "./SwiperInfo.module.scss";
import { IconType } from "react-icons";

interface SwiperInfoContentProps {
  icon: IconType;
  content: string[];
}

export default function SwiperInfoContent({
  icon: Icon,
  content,
}: SwiperInfoContentProps) {
  return (
    <p className={styles.swiperInfoWrapper}>
      <Icon />
      <span className={styles.swiperInfo}>
        {content.map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </span>
    </p>
  );
}
