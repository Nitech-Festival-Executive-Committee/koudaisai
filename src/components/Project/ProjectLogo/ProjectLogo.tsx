import styles from "./ProjectLogo.module.scss";

interface ProjectLogoProps {
  img: string;
  alt?: string;
}

export default function ProjectLogo({ img, alt }: ProjectLogoProps) {
  return (
    <div className={styles.projectLogo}>
      <img src={img} alt={alt} loading="lazy" />
    </div>
  );
}
