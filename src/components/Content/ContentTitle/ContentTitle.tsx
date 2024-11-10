import styles from "./ContentTitle.module.scss";
import { AnimationType } from "@/types/types";
import Animation from "@/components/Animation/Animation";

interface ContentTitleProps {
  title: string;
  size: number;
  bigTitle?: boolean; // タイトルを横幅いっぱいに表示するかどうか
  style?: React.CSSProperties;
  className?: string;
  animation?: AnimationType;
}

export default function ContentTitle({
  title,
  size,
  bigTitle = false,
  style,
  className,
  animation = "center",
}: ContentTitleProps) {
  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <Animation animationType={animation}>
      <HeadingTag
        className={`${styles.contentTitle} ${styles.fontEffect} ${styles.retroShadow} ${bigTitle ? styles.bigTitle : ""} ${className} contentTitle`}
        style={style}
      >
        <span>{title}</span>
      </HeadingTag>
    </Animation>
  );
}
