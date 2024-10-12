import styles from "./ContentTitle.module.scss";

interface ContentTitleProps {
  title: string;
  size: number;
  bigTitle?: boolean; // タイトルを横幅いっぱいに表示するかどうか
}

export default function ContentTitle({
  title,
  size,
  bigTitle = false,
}: ContentTitleProps) {
  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={`${styles.contentTitle} ${styles.fontEffect} ${styles.retroShadow} ${bigTitle ? styles.bigTitle : ""}`}
    >
      <span>{title}</span>
    </HeadingTag>
  );
}
