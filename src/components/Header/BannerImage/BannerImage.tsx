import styles from "./BannerImage.module.scss";
import Image from "next/image";

export default function BannerImage() {
  return (
    <a className={styles["banner-link"]} href="./" aria-label="トップに戻る">
      <Image
        // className={styles.banner}
        src="/img/banner.webp"
        alt=""
        fill={true}
      />
    </a>
  );
}
