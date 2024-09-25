"use client";
import { useEffect, useState } from "react";
import BannerImage from "./BannerImage/BannerImage";
import styles from "./Header.module.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import NavigationButtonContainer from "./NavigationButtonContainer/NavigationButtonContainer";
import HamburgerContent from "./HamburgerContent/HamburgerContent";

export default function Header() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("start-style");
  function toggleHamburgerMenu() {
    setHamburgerMenuOpen((prev) => !prev);
  }

  // スクロールイベントを追加
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 200) {
        setHeaderClass(styles.scrollOn);
        console.log("scrollOn");
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.navigationContainer} ${headerClass} bg-light`}>
        <nav
          className={`${styles.navigation} navbar navbar-expand-md navbar-light`}
        >
          <BannerImage />
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} />
          <NavigationButtonContainer />
          <HamburgerContent open={hamburgerMenuOpen} />
        </nav>
      </div>
    </header>
  );
}
