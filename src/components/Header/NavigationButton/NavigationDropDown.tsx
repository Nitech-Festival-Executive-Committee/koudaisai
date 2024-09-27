import { motion } from "framer-motion";
import styles from "./NavigationItem.module.scss";
import { useState } from "react";

interface NavigationDropDownProps {
  text: string;
  items: {
    text: string;
    url: string;
  }[];
}

const dropdownMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
  },
};

export default function NavigationDropDown(props: NavigationDropDownProps) {
  const [dropdownMenuIsVisible, setDropdownMenuIsVisible] = useState(false);
  return (
    <motion.div
      className={`${styles.navItem} nav-item pl-4 pl-md-0`}
      // hover時、クリック時にドロップダウンを表示する
      onHoverStart={() => setDropdownMenuIsVisible(true)}
      onClick={() => setDropdownMenuIsVisible(!dropdownMenuIsVisible)}
      onHoverEnd={() => setDropdownMenuIsVisible(false)}
    >
      <a className={`${styles.navLink} nav-link`} aria-label={props.text}>
        {props.text}
      </a>
      <motion.div
        className={styles.dropdownMenu}
        initial="hidden"
        variants={dropdownMenuVariants}
        animate={dropdownMenuIsVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.dropdownItemContainer}>
          {props.items.map((item) => (
            <a
              key={item.url}
              className={`${styles.dropdownItem} dropdown-item`}
              href={item.url}
              aria-label={item.text}
            >
              {item.text}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
