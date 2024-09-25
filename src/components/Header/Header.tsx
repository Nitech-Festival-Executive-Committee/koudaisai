"use client";
import { useState } from "react";
import BannerImage from "./BannerImage/BannerImage";
import styles from "./Header.module.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import NavigationButtonContainer from "./NavigationButtonContainer/NavigationButtonContainer";
import HamburgerContent from "./HamburgerContent/HamburgerContent";

export default function Header() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  function toggleHamburgerMenu() {
    setHamburgerMenuOpen((prev) => !prev);
  }

  // TODO: styles.scrollOn を当てる
  return (
    <header className={styles.header}>
      <div className={`${styles.navigationContainer} bg-light`}>
        <nav
          className={`${styles.navigation} navbar navbar-expand-md navbar-light`}
        >
          <BannerImage />
          <NavigationButtonContainer />
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} />
          {hamburgerMenuOpen && <HamburgerContent />}
        </nav>
      </div>
    </header>
  );
}
