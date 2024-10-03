import React from "react";
import styles from "./ProjectTable.module.scss";

export default function ProjectTable({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <table className={styles.projectTable}>{children}</table>
    </>
  );
}
