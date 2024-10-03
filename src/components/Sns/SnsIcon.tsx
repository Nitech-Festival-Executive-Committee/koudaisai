"use client";
import styles from "./SnsIconList.module.scss";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  icon: IconType;
  color: string;
  url: string;
}

export default function SnsIcon({ icon: Icon, color, url }: Props) {
  const backgroundColor = "#FFFFFF";
  const variants = {
    initial: { opacity: 0, scale: 0.8, color, backgroundColor },
    animate: { opacity: 1, scale: 1, color, backgroundColor },
    hover: {
      opacity: 1,
      scale: 1.1,
      color: backgroundColor,
      backgroundColor: color,
    },
  };
  return (
    <motion.div
      className={`${styles.snsIconContainer}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
      onClick={() => window.open(url, "_blank")}
    >
      <Icon size={18} />
    </motion.div>
  );
}
