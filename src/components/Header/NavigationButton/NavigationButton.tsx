import styles from "./NavigationItem.module.scss";

interface NavigationButtonProps {
  text: string;
  url: string;
}

export default function NavigationButton(props: NavigationButtonProps) {
  return (
    <div
      className={`${styles.navItem} ${styles.nonExpandable} nav-item non-expandable pl-4 pl-md-0`}
    >
      <a
        className={`${styles.navLink} nav-link`}
        href={props.url}
        aria-label={props.text}
      >
        {props.text}
      </a>
    </div>
  );
}
