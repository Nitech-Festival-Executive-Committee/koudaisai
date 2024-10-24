import styles from "./ContentBox.module.scss";
import { AnimationType } from "@/types/types";
import Animation from "@/components/Animation/Animation";

interface ContentBoxProps {
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  animation?: AnimationType;
}

export default function ContentBox({
  title,
  children,
  style,
  animation = "center",
}: ContentBoxProps) {
  return (
    <Animation animationType={animation}>
      <div className={styles.contentBox} style={style}>
        <span className={styles.contentBoxTitle}>{title}</span>
        {children}
      </div>
    </Animation>
  );
}
