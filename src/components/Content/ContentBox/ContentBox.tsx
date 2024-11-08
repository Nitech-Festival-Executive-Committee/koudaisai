import styles from "./ContentBox.module.scss";
import { AnimationType } from "@/types/types";
import Animation from "@/components/Animation/Animation";
import { AnimationConfigs } from "@/types/types";

interface ContentBoxProps {
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  animation?: AnimationType;
}

export default function ContentBox({
  title,
  children,
  style,
  className,
  animation = "center",
  ...configs
}: ContentBoxProps & AnimationConfigs) {
  return (
    <Animation animationType={animation} {...configs}>
      <div className={`${styles.contentBox} ${className}`} style={style}>
        <span className={styles.contentBoxTitle}>{title}</span>
        {children}
      </div>
    </Animation>
  );
}
