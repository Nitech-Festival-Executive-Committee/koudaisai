"use client";
import styles from "./HamburgerIcon.module.scss";
import { AnimationProps, motion } from "framer-motion";

interface Props {
  hamburgerMenuIsOpen: boolean;
  toggleHamburgerMenu: () => void;
}

interface LineProps {
  className?: string;
  variants: AnimationProps["variants"];
  isOpen: boolean;
}
const Line = ({ className, variants, isOpen }: LineProps) => {
  return (
    <motion.line
      className={`${styles.line} ${className}`}
      variants={variants}
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
      transition={{ duration: 0.5 }}
      style={{ originX: "center", originY: "center" }} // CSSモジュールで当てると何故か上書きされてしまう
      x1={0}
      x2={24}
      y1={12}
      y2={12}
      stroke={"#000"}
      strokeWidth={1.5}
    />
  );
};

const rotateBaseAngle = 180;

export default function HamburgerIcon({
  hamburgerMenuIsOpen,
  toggleHamburgerMenu,
}: Props) {
  return (
    <div className={`${styles.hamburgerIconContainer}`}>
      <button
        className={styles.hamburgerIconButton}
        onClick={toggleHamburgerMenu}
      />
      <svg className={styles.hamburgerIcon}>
        <Line
          isOpen={hamburgerMenuIsOpen}
          variants={{
            closed: { rotate: 0, translateY: -8 },
            opened: { rotate: 45 + rotateBaseAngle, translateY: 0 },
          }}
        />
        <Line
          isOpen={hamburgerMenuIsOpen}
          variants={{
            closed: { opacity: 1, rotate: 0 },
            opened: { opacity: 0, rotate: rotateBaseAngle },
          }}
        />
        <Line
          isOpen={hamburgerMenuIsOpen}
          variants={{
            closed: { rotate: 0, translateY: 8 },
            opened: { rotate: -45 + rotateBaseAngle, translateY: 0 },
          }}
        />
      </svg>
    </div>
  );
}
