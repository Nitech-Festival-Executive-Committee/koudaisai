"use client";

import styles from "./PageTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function PageTop() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <button
      className={styles.pageTop}
      style={isScrolled ? {} : { opacity: "0" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
      <span>PAGE TOP</span>
    </button>
  );
}
