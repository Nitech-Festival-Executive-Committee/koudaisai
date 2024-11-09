import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  decorated?: boolean; // boxshadowをつけるかどうか
}

export default function ContentImage({
  img,
  alt,
  style,
  className,
  decorated = true,
}: ContentImageProps) {
  return (
    <div className={`${styles.contentImage} ${className}`} style={style}>
      {decorated ? (
        <DecoratedImage img={img} alt={alt} />
      ) : (
        <img src={img} alt={alt} loading="lazy" />
      )}
    </div>
  );
}
