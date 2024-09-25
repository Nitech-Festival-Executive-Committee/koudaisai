import styles from "./NavigationItem.module.scss";

interface NavigationDropDownProps {
  text: string;
  items: {
    text: string;
    url: string;
  }[];
}
export default function NavigationDropDown(props: NavigationDropDownProps) {
  return (
    <div className={`${styles.navItem} nav-item pl-4 pl-md-0`}>
      <a className={`${styles.navLink} nav-link`} aria-label={props.text}>
        {props.text}
      </a>
      <div className={`${styles.dropdownMenu}`}>
        {props.items.map((item) => (
          <a
            key={item.url}
            className={`${styles.dropdownItem} dropdown-item`}
            href={item.url}
            aria-label={item.text}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
