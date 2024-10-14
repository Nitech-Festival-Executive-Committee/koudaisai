import styles from "./PageWrapper.module.scss";

export default function PageWrapper({
  children,
  style,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}>) {
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
}
