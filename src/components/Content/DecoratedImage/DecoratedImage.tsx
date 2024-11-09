import styles from "./DecoratedImage.module.scss";

interface DecoratedImageProps {
  img: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function DecoratedImage({
  img,
  alt,
  style,
  className,
}: DecoratedImageProps) {
  return (
    <img
      className={`${styles.decoration} ${className}`}
      src={img}
      alt={alt || ""}
      style={style}
      loading="lazy"
    />
  );
}
