import styles from "./BrochureImage.module.scss";
import DecoratedImage from "@/components/Content/DecoratedImage/DecoratedImage";

interface BrochureImageProps {
  img: string;
  alt?: string;
}

export default function BrochureImage({ img, alt }: BrochureImageProps) {
  return (
    <div className={styles.brochureImg}>
      <DecoratedImage img={img} alt={alt} />
    </div>
  );
}
