import styles from "./SwiperCard.module.scss";
import SwiperProjectTag from "./SwiperProjectTag/SwiperProjectTag";
import React, { ReactNode } from "react";
import SwiperInfo from "./SwiperInfo/SwiperInfo";
import Image from "next/image";

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
      <Image
        src={imageUrl}
        alt={imageAlt ? imageAlt : ""}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          if (target.src.includes("brochure.webp")) {
            // brochure.webpがエラーの場合、logoBrochure.webpに切り替え
            target.src = imageUrl.replace("brochure.webp", "logoBrochure.webp");
          } else if (target.src.includes("logoBrochure.webp")) {
            // logoBrochure.webpがエラーの場合、最終的にnoImage.webpに切り替え
            target.src = `../62nd/project/noImage.webp`;
          }
        }}
        width={100}
        height={100}
      />
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
