import { Announcement } from "@/types/types";
import { ListItemText, Typography } from "@mui/material";
import styles from "./NewsAccordion.module.scss";

export default function AccordionTitle({
  title,
  date,
  category = "default",
}: Announcement) {
  const color = category === "default" ? "#FFEF6C" : "#FF7070";
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
        }}
      >
        {date}
      </Typography>
      {/* お知らせのタイトル部分 */}
      <ListItemText primary={title} />
    </div>
  );
}
