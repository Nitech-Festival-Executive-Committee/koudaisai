"use client";
import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import SnsIcon from "./SnsIcon";
import styles from "./SnsIconList.module.scss";

export default function SnsIconList({ pcOnly }: { pcOnly?: boolean }) {
  return (
    <div className={`${styles.snsIconList} ${pcOnly && styles.pcOnly}`}>
      <SnsIcon
        icon={BsTwitterX}
        color="#000000"
        url="https://twitter.com/nitfes"
      />
      <SnsIcon
        icon={BsInstagram}
        color="#FF59E3"
        url="https://www.instagram.com/koudaisai/"
      />
      <SnsIcon
        icon={BsYoutube}
        color="#FF0000"
        url="https://www.youtube.com/channel/UCplFRWLMUlNqYM081KZ7Juw"
      />
    </div>
  );
}
