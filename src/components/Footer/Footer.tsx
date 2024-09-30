import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <p className={styles.copyright}>
        <span>&copy; 2023 名古屋工業大学第61回工大祭実行委員会</span>{" "}
        <span>All Rights Reserved.</span>
      </p>
    </footer>
  );
}
