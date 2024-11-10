import styles from "./ProjectLogo.module.scss";
import Animation from "@/components/Animation/Animation";

interface ProjectLogoProps {
  img: string;
  alt?: string;
}

export default function ProjectLogo({ img, alt }: ProjectLogoProps) {
  return (
    <Animation>
      <div className={styles.projectLogo}>
        <img src={img} alt={alt} loading="lazy" />
      </div>
    </Animation>
  );
}
