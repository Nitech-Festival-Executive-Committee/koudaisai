import React, { ReactNode } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { ImArrowUpRight2 } from "react-icons/im";
import styles from "./SwiperInfo.module.scss";
import SwiperInfoContent from "./SwiperInfoContent";

// スライドがホバーされたときのCSSはSwiperCard.module.scssで定義
// クラス名を受け取ってスタイルを変更する
interface SwiperInfoProps {
  title: string;
  place?: string;
  schedule?: ReactNode;
  swiperNameHoveredClassName: string;
  swiperArrowHoveredClassName: string;
}

export default function SwiperInfo({
  title,
  place,
  schedule,
  swiperNameHoveredClassName,
  swiperArrowHoveredClassName,
}: SwiperInfoProps) {
  return (
    <>
      {/* スライドタイトル */}
      <span className={`${styles.swiperName} ${swiperNameHoveredClassName}`}>
        {title}
        <ImArrowUpRight2
          className={`${styles.swiperArrow} ${swiperArrowHoveredClassName}`}
        />
      </span>
      <br />
      {/* Place */}
      {place && <SwiperInfoContent icon={FiMapPin} content={[place]} />}
      {/* Date */}
      {schedule && (
        <SwiperInfoContent icon={FaRegCalendarAlt} content={schedule} />
      )}
    </>
  );
}
