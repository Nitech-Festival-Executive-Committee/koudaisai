import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { ImArrowUpRight2 } from "react-icons/im";
import { LuClock } from "react-icons/lu";
import styles from "./SwiperInfo.module.scss";
import SwiperInfoContent from "./SwiperInfoContent";
import { Period } from "@/types/types";
import { formatPeriod } from "@/utils/formatter";

// スライドがホバーされたときのCSSはSwiperCard.module.scssで定義
// クラス名を受け取ってスタイルを変更する
interface SwiperInfoProps {
  place?: string;
  days: { date: string; time: Period }[];
  swiperNameHoveredClassName: string;
  swiperArrowHoveredClassName: string;
}

export default function SwiperInfo({
  place,
  days,
  swiperNameHoveredClassName,
  swiperArrowHoveredClassName,
}: SwiperInfoProps) {
  return (
    <>
      {/* スライドタイトル */}
      <span className={`${styles.swiperName} ${swiperNameHoveredClassName}`}>
        企画一覧
        <ImArrowUpRight2
          className={`${styles.swiperArrow} ${swiperArrowHoveredClassName}`}
        />
      </span>
      <br />
      {/* Place */}
      {place && <SwiperInfoContent icon={FiMapPin} content={[place]} />}
      {/* Date */}
      {days.length === 1 && (
        <SwiperInfoContent icon={FaRegCalendarAlt} content={[days[0].date]} />
      )}
      {/* Time */}
      {days.length === 1 && (
        <SwiperInfoContent
          icon={LuClock}
          content={[formatPeriod(days[0].time)]}
        />
      )}
      {days.length === 2 && (
        <SwiperInfoContent
          icon={FaRegCalendarAlt}
          content={days.map(
            (schedule) => `${schedule.date}: ${formatPeriod(schedule.time)}`
          )}
        />
      )}
    </>
  );
}
