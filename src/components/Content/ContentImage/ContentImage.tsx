import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export default function ContentImage({
  img,
  alt,
  style,
  imageStyle,
}: ContentImageProps) {
  return (
    <div className={styles.contentImage} style={style}>
      <DecoratedImage img={img} alt={alt} style={imageStyle} />
    </div>
  );
}
