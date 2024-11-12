import styles from "./BrochureImage.module.scss";
import DecoratedImage from "@/components/Content/DecoratedImage/DecoratedImage";
import Animation from "@/components/Animation/Animation";

interface BrochureImageProps {
  img: string;
  alt?: string;
}

export default function BrochureImage({ img, alt }: BrochureImageProps) {
  return (
    <Animation>
      <div className={styles.brochureImg}>
        <DecoratedImage img={img} alt={alt} />
      </div>
    </Animation>
  );
}
