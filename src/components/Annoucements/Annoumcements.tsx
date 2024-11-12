"use client";
import { useState } from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import PageWrapper from "../Content/PageWrapper/PageWrapper";
import styles from "./Announcements.module.scss";
import { announcements } from "./AnnouncementsData";
import NewsAccordion from "./NewsAccordion/NewsAccordion";
import { Button } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Announcements() {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = () => setExpanded((prev) => !prev);

  if (announcements.length === 0) return null;

  return (
    <>
      <ContentTitle title="お知らせ" size={2} bigTitle />
      <PageWrapper>
        <div className={styles.newsContainer}>
          <div className={styles.accordionContainer}>
            {expanded || announcements.length <= 5 ? (
              <>
                {announcements.map((announcement, index) => (
                  <NewsAccordion key={index} {...announcement} />
                ))}
                {expanded && (
                  <Button
                    className={styles.announcementsButton}
                    onClick={onClickHandler}
                  >
                    閉じる
                    <IoMdArrowDropdown
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </Button>
                )}
              </>
            ) : (
              <>
                {announcements.slice(0, 5).map((announcement, index) => (
                  <NewsAccordion key={index} {...announcement} />
                ))}
                <Button
                  className={styles.announcementsButton}
                  onClick={onClickHandler}
                >
                  もっと見る
                  <IoMdArrowDropdown />
                </Button>
              </>
            )}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
