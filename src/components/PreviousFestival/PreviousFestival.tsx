import React from "react";
import FiftyFirst from "./FiftyFirst";
import styles from "./PreviousFestival.module.scss";

export default function PreviousFestival() {
  return (
    <div className={styles.preFestival} id="preFestival">
      <h4 className="big-title pre-festival-title font-effect retroshadow fadeDownTrigger">
        <span>過去のページ</span>
      </h4>
      <div>
        <FiftyFirst />
      </div>
    </div>
  );
}
