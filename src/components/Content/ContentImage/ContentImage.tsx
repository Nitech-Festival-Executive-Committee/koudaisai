import Image from "next/image";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
}

export default function ContentImage({img, alt}: ContentImageProps) {
  return (
    <div className={styles.contentImage}>
      <img className={styles.decoration} src={img} alt={alt || ""} loading="lazy" />
    </div>
  );
}
