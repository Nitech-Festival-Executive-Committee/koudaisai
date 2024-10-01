import React from "react";
import styles from "./ProjectTag.module.scss";

interface ProjectTagProps {
  day1?: boolean; // 1日目は開催するか
  day2?: boolean; // 1日目は開催するか
  exclusive?: boolean; // 自由なテキストを入れたい場合
  exclusiveText?: string; // 表示したいテキスト
}

export default function ProjectTag({
  day1 = false,
  day2 = false,
  exclusive = false,
  exclusiveText = "",
}: ProjectTagProps) {
  return (
    <>
      {(day1 || day2 || exclusive) && (
        <div className={styles.projectTag}>
          {day1 && day2 ? (
            <span className={styles.projectBothTag}>1・2日目</span>
          ) : day1 ? (
            <span className={styles.projectDay1Tag}>1日目</span>
          ) : (
            <span className={styles.day2}>2日目</span>
          )}
          {exclusive && (
            <span className={styles.projectExclusiveTag}>{exclusiveText}</span>
          )}
        </div>
      )}
    </>
  );
}
