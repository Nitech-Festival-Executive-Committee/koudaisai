import styles from "./BannerImage.module.scss";

export default function BannerImage() {
  return (
    <a className={styles.bannerLink} href="/" aria-label="トップに戻る">
      <img className={styles.banner} src="/img/banner.webp" />
    </a>
  );
}
