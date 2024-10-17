import styles from "./SwiperProjectTag.module.scss";

interface SwiperProjectTagProps {
  day1?: boolean;
  day2?: boolean;
  projectTag?: string[];
}

export default function SwiperProjectTag({
  day1,
  day2,
  projectTag,
}: SwiperProjectTagProps) {
  let date: string | undefined;
  let dateTagClassName: string | undefined;
  if (day1 && day2) {
    date = "1・2日目";
    dateTagClassName = styles.swiperDayBothTag;
  } else if (day1) {
    date = "1日目";
    dateTagClassName = styles.swiperDay1Tag;
  } else if (day2) {
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
        <>
          <span
            key={index}
            className={`${styles.swiperTag} ${styles.swiperProjectTag}`}
          >
            {tag}
          </span>
          <br />
        </>
      ))}
    </>
  );
}
