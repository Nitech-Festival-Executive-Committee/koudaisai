import styles from "./SectionBody.module.scss";

export default function SectionBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.contentBlock}>
      <div>{children}</div>
    </div>
  );
}
