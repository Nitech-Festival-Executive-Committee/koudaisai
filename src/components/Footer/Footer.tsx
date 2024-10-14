import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <p className={styles.copyright}>
        <span>
          &copy; {NITFES_YEAR} 名古屋工業大学第{NITFES_EDITION}
          回工大祭実行委員会
        </span>{" "}
        <span>All Rights Reserved.</span>
      </p>
    </footer>
  );
}
