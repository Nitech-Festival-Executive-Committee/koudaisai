import styles from "./ContentBox.module.scss";

interface ContentBoxProps {
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ContentBox({
  title,
  children,
  style,
}: ContentBoxProps) {
  return (
    <div className={styles.contentBox} style={style}>
      <span className={styles.contentBoxTitle}>{title}</span>
      {children}
    </div>
  );
}
