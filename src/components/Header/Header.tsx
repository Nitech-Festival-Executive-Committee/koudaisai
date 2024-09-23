import BannerImage from "./BannerImage/BannerImage";
import TextButton from "./TextButton/TextButton";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.navigation_container}>
        <nav className={styles.navigation}>
          <BannerImage />
          <div>
            <TextButton text="工大祭とは" />
          </div>
        </nav>
      </div>
    </header>
  );
}
