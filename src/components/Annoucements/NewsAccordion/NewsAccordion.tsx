import styles from "./NewsAccordion.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { Announcement } from "@/types/types";
import { MdExpandMore } from "react-icons/md";
import AccordionTitle from "./AccordionTitle";

export default function NewsAccordion({
  title,
  content,
  date,
  category = "default",
}: Announcement) {
  if (!content) {
    return (
      <Accordion className={styles.accordion}>
        <AccordionSummary disabled>
          <AccordionTitle {...{ title, date, category }} />
        </AccordionSummary>
      </Accordion>
    );
  }
  return (
    <Accordion>
      <AccordionSummary expandIcon={<MdExpandMore />}>
        <AccordionTitle {...{ title, date, category }} />
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
