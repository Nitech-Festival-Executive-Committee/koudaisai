import styles from "./PageWrapper.module.scss";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.wrapper}>{children}</div>;
}
