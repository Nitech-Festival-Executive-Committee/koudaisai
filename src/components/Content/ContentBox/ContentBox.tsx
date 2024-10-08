import styles from "./ContentBox.module.scss";

interface ContentBoxProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function ContentBox({ title, children }: ContentBoxProps) {
  return (
    <div className={styles.contentBox}>
      <span>{title}</span>
      {children}
    </div>
  );
}
