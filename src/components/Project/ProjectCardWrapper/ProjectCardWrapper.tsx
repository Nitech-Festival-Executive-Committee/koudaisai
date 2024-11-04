import React from "react";
import styles from "./ProjectCardWrapper.module.scss";

interface ProjectCardWrapperProps {
  children: React.ReactNode;
}

export default function ProjectCardWrapper({
  children,
}: ProjectCardWrapperProps) {
  return <div className={styles.cardWrapper}>{children}</div>;
}
