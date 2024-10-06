import { motion } from "framer-motion";
import styles from "./NavigationItem.module.scss";

interface NavigationButtonProps {
  text: string;
  url: string;
}

export default function NavigationButton(props: NavigationButtonProps) {
  return (
    <motion.div
      className={`${styles.navItem} ${styles.nonExpandable}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <a className={styles.navLink} href={props.url} aria-label={props.text}>
        {props.text}
      </a>
    </motion.div>
  );
}
