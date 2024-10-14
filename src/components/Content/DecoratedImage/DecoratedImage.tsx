import styles from "./DecoratedImage.module.scss";

interface DecoratedImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
}

export default function DecoratedImage({
  img,
  alt,
  style,
}: DecoratedImageProps) {
  return (
    <img
      className={styles.decoration}
      src={img}
      alt={alt || ""}
      style={style}
      loading="lazy"
    />
  );
}
