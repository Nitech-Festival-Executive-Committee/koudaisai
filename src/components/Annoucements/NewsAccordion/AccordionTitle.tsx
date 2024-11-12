import { Announcement } from "@/types/types";
import { ListItemText, Typography } from "@mui/material";
import styles from "./NewsAccordion.module.scss";
import React from "react";

export default function AccordionTitle({
  title,
  date,
  category = "default",
}: Announcement) {
  const color = category === "default" ? "#caf5ff" : "#ffd1d1";

  // 再帰的に<a>タグを探し、onClickを追加
  const addOnClickToLinks = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // <a>タグの場合にonClickを適用
        if (child.type === "a") {
          return React.cloneElement(
            child as React.ReactElement<
              React.HTMLAttributes<HTMLAnchorElement>
            >,
            {
              onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
                // リンクをクリックしたときに展開するのを防ぐために、親要素にイベントを伝播させない
                event.stopPropagation();
              },
            }
          );
        }
        // 他の要素の場合も再帰的に処理してchildrenを追加
        return React.cloneElement(
          child as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
          {
            children: addOnClickToLinks(child.props.children),
          }
        );
      }
      return child;
    });
  };

  return (
    <div className={styles.titleContainer}>
      {/* 日付部分 */}
      <Typography
        className={styles.typography}
        variant="body2"
        style={{
          backgroundColor: color,
          padding: "2px 8px",
          textAlign: "center",
          alignSelf: "center",
          borderRadius: "15px",
        }}
      >
        {date}
      </Typography>
      {/* お知らせのタイトル部分 */}
      <ListItemText
        primary={addOnClickToLinks(title)}
        className={styles.titleLink}
      />
    </div>
  );
}
