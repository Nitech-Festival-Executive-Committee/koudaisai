import styles from "./Announcements.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  ListItemText,
  Typography,
} from "@mui/material";
import { Announcement } from "@/types/types";
import { MdExpandMore } from "react-icons/md";

export default function NewsAccordion({
  title,
  content,
  date,
  category = "default",
}: Announcement) {
  const color = category === "default" ? "#FFEF6C" : "#ED1C24";
  return (
    <Accordion>
      <AccordionSummary expandIcon={<MdExpandMore />}>
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
      </AccordionSummary>
      <AccordionDetails>
        <Divider sx={{ borderBottomWidth: "2px", borderStyle: "dashed" }} />
        <div className={styles.accordionDetailWrapper}>
          {content ? content : title}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
