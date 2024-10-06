import styles from "./BochureImage.module.scss";
import DecoratedImage from "@/components/Content/DecoratedImage/DecoratedImage";

interface BrochureImageProps {
  img: string;
  alt?: string;
}

export default function BochureImage({ img, alt }: BrochureImageProps) {
  return (
    <div className={styles.brochureImg}>
      <DecoratedImage img={img} alt={alt} />
    </div>
  );
}
