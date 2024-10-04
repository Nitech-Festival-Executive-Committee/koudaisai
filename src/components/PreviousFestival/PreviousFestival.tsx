import React from "react";
import styles from "./PreviousFestival.module.scss";
import PrevFestivalCard from "./PrevFestivalCard";
import ContentTitle from "../Content/ContentTitle/ContentTitle";

export default function PreviousFestival() {
  return (
    <div className={styles.preFestival} id="preFestival">
      {/*TODO 下のh4にfadeDownTriggerをあとで追加*/}
      <ContentTitle title="過去のページ" size={1} bigTitle />
      {/*TODO 下のdivにfadeDownTriggerをあとで追加*/}
      <div>
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/61st"
          thisImage="/img/61st.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/60th"
          thisImage="/img/60th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/59th"
          thisImage="/img/59th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/58th"
          thisImage="/img/58th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/57th"
          thisImage="/img/57th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/56th"
          thisImage="/img/56th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/55th"
          thisImage="/img/55th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/54th"
          thisImage="/img/54th.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/53rd"
          thisImage="/img/53rd.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/52nd"
          thisImage="/img/52nd.webp"
        />
        <PrevFestivalCard
          thisHref="https://www.koudaisai.com/51st"
          thisImage="/img/51st.webp"
        />
      </div>
    </div>
  );
}
