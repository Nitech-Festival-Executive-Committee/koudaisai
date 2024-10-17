import styles from "./SwiperCard.module.scss";
import SwiperProjectTag from "./SwiperProjectTag/SwiperProjectTag";
import React, { ReactNode, useEffect } from "react";
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
}

function getImageAspectRatio(url: string): Promise<number> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img.height / img.width);
    };
  });
}

export default function SwiperCard({
  title,
  href,
  imageUrl,
  imageAlt,
  projectTag,
  place,
  schedule,
}: SwiperCardProps) {
  // 画像が縦長か横長かによってスタイルを変更
  const [cardClassName, setCardClassName] = React.useState<string>(
    styles.swiperCardVertical
  );
  useEffect(() => {
    const setCardClassNameByRatio = async () => {
      const aspectRatio = await getImageAspectRatio(imageUrl);
      setCardClassName(
        aspectRatio > 1
          ? styles.swiperCardVertical
          : styles.swiperCardHorizontal
      );
    };
    setCardClassNameByRatio();
  }, []);

  return (
    <a className={`${styles.swiperCardContainer} ${cardClassName}`} href={href}>
      <img src={imageUrl} alt={imageAlt} />
      <div className={styles.swiperSlideMask} />
      <div className={styles.swiperSlideDetail}>
        <SwiperProjectTag day1 day2 projectTag={projectTag} />
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
