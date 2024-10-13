import styles from "./SectionBody.module.scss";

export default function SectionBody({
  children,
  style,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}>) {
  return (
    <div className={styles.contentBlock} style={style}>
      {children}
    </div>
  );
}
