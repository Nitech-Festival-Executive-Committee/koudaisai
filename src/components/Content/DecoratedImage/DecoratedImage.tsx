import styles from "./DecoratedImage.module.scss";

interface DecoratedImageProps {
  img: string;
  alt?: string;
}

export default function DecoratedImage({ img, alt }: DecoratedImageProps) {
  return (
    <img
      className={styles.decoration}
      src={img}
      alt={alt || ""}
      loading="lazy"
    />
  );
}
