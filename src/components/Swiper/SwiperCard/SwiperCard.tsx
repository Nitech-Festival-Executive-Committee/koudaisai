import styles from "./SwiperCard.module.scss";
import SwiperProjectTag from "./SwiperProjectTag/SwiperProjectTag";
import React, { useEffect } from "react";
import SwiperInfo from "./SwiperInfo/SwiperInfo";
import { Period, Schedule } from "@/types/types";

interface Time {
  date: string;
  time: Period;
}

interface SwiperCardProps {
  href?: string;
  url: string;
  alt?: string;
  schedule: Schedule;
  projectTag?: string[];
  place?: string;
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
  href,
  url,
  alt,
  schedule,
  projectTag,
  place,
}: SwiperCardProps) {
  // 画像が縦長か横長かによってスタイルを変更
  const [cardClassName, setCardClassName] = React.useState<string>(
    styles.swiperCardVertical
  );
  useEffect(() => {
    const setCardClassNameByRatio = async () => {
      const aspectRatio = await getImageAspectRatio(url);
      setCardClassName(
        aspectRatio > 1
          ? styles.swiperCardVertical
          : styles.swiperCardHorizontal
      );
    };
    setCardClassNameByRatio();
  }, []);
  // 処理を楽にするため、day1, day2を配列にまとめる
  // 例: day1="1日目", day2="2日目" -> days=["1日目", "2日目"]
  // 例: day1=undefined, day2="2日目" -> days=["2日目"]
  const days: Time[] = [];
  if (schedule.day1) days.push({ date: "1日目", time: schedule.day1 });
  if (schedule.day2) days.push({ date: "2日目", time: schedule.day2 });

  return (
    <a className={`${styles.swiperCardContainer} ${cardClassName}`} href={href}>
      <img src={url} alt={alt} />
      <div className={styles.swiperSlideMask} />
      <div className={styles.swiperSlideDetail}>
        <SwiperProjectTag schedule={schedule} projectTag={projectTag} />
        <SwiperInfo
          place={place}
          days={days}
          swiperNameHoveredClassName={styles.swiperNameHovered}
          swiperArrowHoveredClassName={styles.swiperArrowHovered}
        />
      </div>
    </a>
  );
}
