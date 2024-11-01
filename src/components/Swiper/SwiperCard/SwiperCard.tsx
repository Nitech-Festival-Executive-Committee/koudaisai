import styles from "./SwiperCard.module.scss";
import SwiperProjectTag from "./SwiperProjectTag/SwiperProjectTag";
import React, { ReactNode } from "react";
import SwiperInfo from "./SwiperInfo/SwiperInfo";

export interface SwiperCardProps {
  title: string;
  href?: string;
  imageUrl: string;
  imageAlt?: string;
  day1?: boolean;
  day2?: boolean;
  projectTag?: string[];
  place?: string;
  schedule: ReactNode;
  brochureMini?: boolean;
}

export default function SwiperCard({
  title,
  href,
  imageUrl,
  imageAlt,
  day1,
  day2,
  projectTag,
  place,
  schedule,
}: SwiperCardProps) {
  return (
    <a
      className={`${styles.swiperCardContainer} ${styles.swiperCardHorizontal}`}
      href={href}
    >
      <img src={imageUrl} alt={imageAlt} />
      <div className={styles.swiperSlideMask} />
      <div className={styles.swiperSlideDetail}>
        <SwiperProjectTag day1={day1} day2={day2} projectTag={projectTag} />
        <SwiperInfo
          title={title}
          place={place}
          schedule={schedule}
          swiperNameHoveredClassName={styles.swiperNameHovered}
          swiperArrowHoveredClassName={styles.swiperArrowHovered}
        />
      </div>
    </a>
  );
}
