import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
}

export default function ContentImage({ img, alt, style }: ContentImageProps) {
  return (
    <div className={styles.contentImage} style={style}>
      <DecoratedImage img={img} alt={alt} />
    </div>
  );
}
