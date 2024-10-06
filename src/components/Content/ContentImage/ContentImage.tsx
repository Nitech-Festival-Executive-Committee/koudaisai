import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
}

export default function ContentImage({ img, alt }: ContentImageProps) {
  return (
    <div className={styles.contentImage}>
      <DecoratedImage img={img} alt={alt} />
    </div>
  );
}
