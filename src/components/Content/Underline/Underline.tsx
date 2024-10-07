import React from "react";
import styles from "./Underline.module.scss";

export default function Underline({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className={styles.highlightUnderline}>{children}</span>;
}
