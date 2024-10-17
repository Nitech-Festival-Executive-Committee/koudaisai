import React from "react";
import styles from "./ProjectTag.module.scss";

interface ProjectTagProps {
  day1?: boolean; // 1日目は開催するか
  day2?: boolean; // 1日目は開催するか
  exclusiveText?: string[];
}

export default function ProjectTag({
  day1 = false,
  day2 = false,
  exclusiveText = [],
}: ProjectTagProps) {
  return (
    <>
      {(day1 || day2 || exclusiveText) && (
        <div className={styles.projectTag}>
          {day1 && day2 ? (
            <span className={styles.projectBothTag}>1・2日目</span>
          ) : day1 ? (
            <span className={styles.projectDay1Tag}>1日目</span>
          ) : (
            <span className={styles.projectDay2Tag}>2日目</span>
          )}
          {exclusiveText.map((text, index) => (
            <span key={index} className={styles.projectExclusiveTag}>
              {text}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
