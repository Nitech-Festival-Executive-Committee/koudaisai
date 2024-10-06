"use client";
import { useEffect, useState } from "react";
import BannerImage from "./BannerImage/BannerImage";
import styles from "./Header.module.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import NavigationButtonContainer from "./NavigationButtonContainer/NavigationButtonContainer";
import HamburgerContent from "./HamburgerContent/HamburgerContent";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [onTransition, setOnTransition] = useState(false);

  function toggleHamburgerMenu() {
    if (onTransition) return;
    setHamburgerMenuOpen((prev) => !prev);
  }

  // スクロールイベントを追加
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.navigationContainer} ${isScrolled && styles.scrollOn}`}
      >
        <nav className={styles.navigation}>
          <div className={styles.headerMain}>
            <BannerImage />
            <HamburgerIcon
              hamburgerMenuIsOpen={hamburgerMenuIsOpen}
              toggleHamburgerMenu={toggleHamburgerMenu}
            />
            <NavigationButtonContainer />
          </div>
          <AnimatePresence>
            {hamburgerMenuIsOpen && (
              <HamburgerContent setOnTransition={setOnTransition} />
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
