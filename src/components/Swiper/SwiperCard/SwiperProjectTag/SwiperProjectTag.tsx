import { Schedule } from "@/types/types";
import styles from "./SwiperProjectTag.module.scss";
import React from "react";

interface SwiperProjectTagProps {
  schedule: Schedule;
  projectTag?: string[];
}

export default function SwiperProjectTag({
  schedule,
  projectTag,
}: SwiperProjectTagProps) {
  let date: string | undefined;
  let dateTagClassName: string | undefined;
  if (schedule.day1 && schedule.day2) {
    date = "1・2日目";
    dateTagClassName = styles.swiperDayBothTag;
  } else if (schedule.day1) {
    date = "1日目";
    dateTagClassName = styles.swiperDay1Tag;
  } else if (schedule.day2) {
    date = "2日目";
    dateTagClassName = styles.swiperDay2Tag;
  }

  return (
    <>
      {/* Date tag */}
      {date && (
        <span className={`${styles.swiperTag} ${dateTagClassName}`}>
          {date}
        </span>
      )}
      <br />
      {/* Project tag */}
      {projectTag?.map((tag, index) => (
        <React.Fragment key={index}>
          <span className={`${styles.swiperTag} ${styles.swiperProjectTag}`}>
            {tag}
          </span>
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
