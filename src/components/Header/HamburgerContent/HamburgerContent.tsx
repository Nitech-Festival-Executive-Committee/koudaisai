import { motion } from "framer-motion";
import { useState } from "react";
import NavigationButton from "../NavigationButton/NavigationButton";
import NavigationDropDown from "../NavigationButton/NavigationDropDown";
import styles from "./HamburgerContent.module.scss";

interface Props {
  open: boolean;
}

export default function HamburgerContent({ open }: Props) {
  const [contentIsVisible, setContentIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{
        height: open ? "auto" : 0,
      }}
      transition={{ duration: 0.5 }}
      onAnimationStart={() => setContentIsVisible(false)}
      onAnimationComplete={() => setContentIsVisible(open)}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.98, transition: { duration: 0.13 } },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
        }}
        initial="hidden"
        animate={contentIsVisible ? "visible" : "hidden"}
        className={`${styles.hamburgerContent} `}
      >
        <NavigationButton text="工大祭とは" url="/about/" />
        <NavigationDropDown
          text="企画"
          items={[
            {
              text: "企画一覧",
              url: "/project/",
            },
            {
              text: "タイムテーブル",
              url: "/timetable/",
            },
          ]}
        />
        <NavigationButton text="アクセス" url="/access/" />
        <NavigationButton text="キャラクター" url="/character/" />
        <NavigationButton text="スポンサー" url="/sponsor" />
        <NavigationButton text="FAQ" url="/faq/" />
      </motion.div>
    </motion.div>
  );
}
