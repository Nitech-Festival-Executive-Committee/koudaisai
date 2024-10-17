import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
  decorated?: boolean; // boxshadowをつけるかどうか
}

export default function ContentImage({
  img,
  alt,
  style,
  decorated = true,
}: ContentImageProps) {
  return (
    <div className={styles.contentImage} style={style}>
      {decorated ? (
        <DecoratedImage img={img} alt={alt} />
      ) : (
        <img src={img} alt={alt} />
      )}
    </div>
  );
}
