"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./HamburgerIcon.module.scss";

export default function HamburgerIcon({
  toggleHamburgerMenu,
}: {
  toggleHamburgerMenu: () => void;
}) {
  return (
    <button className={`${styles.hamburgerIcon}`} onClick={toggleHamburgerMenu}>
      <RxHamburgerMenu />
    </button>
  );
}
