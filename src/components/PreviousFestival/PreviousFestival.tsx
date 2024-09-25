import React from "react";
import styles from "./PreviousFestival.module.scss";
import TemplatePrevFestival from "./TemplatePrevFestival";

export default function PreviousFestival() {
  return (
    <div className={styles.preFestival} id="preFestival">
      {/* 下のh4にfadeDownTriggerをあとで追加*/}
      <h4
        className={`${styles.bigTitle} ${styles.preFestivalTitle} ${styles.fontEffect} ${styles.retroshadow}`}
      >
        <span>過去のページ</span>
      </h4>
      {/* 下のdivにfadeDownTriggerをあとで追加*/}
      <div>
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/61st"
          thisImage="./img/61st.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/60th"
          thisImage="./img/60th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/59th"
          thisImage="./img/59th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/58th"
          thisImage="./img/58th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/57th"
          thisImage="./img/57th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/56th"
          thisImage="./img/56th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/55th"
          thisImage="./img/55th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/54th"
          thisImage="./img/54th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/53th"
          thisImage="./img/53th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/52th"
          thisImage="./img/52th.webp"
        />
        <TemplatePrevFestival
          thisHref="https://www.koudaisai.com/51th"
          thisImage="./img/51th.webp"
        />
      </div>
    </div>
  );
}
