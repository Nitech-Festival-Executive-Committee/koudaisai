import React from "react";
import styles from "./PreviousFestival.module.scss";
import PrevFestivalCard from "./PrevFestivalCard";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import PageWrapper from "../Content/PageWrapper/PageWrapper";
import Animaton from "@/components/Animation/Animation";

export default function PreviousFestival() {
  return (
    <>
      <ContentTitle title="過去のページ" size={2} bigTitle />
      <PageWrapper>
        <Animaton>
          <div className={styles.preFestival}>
            <div>
              <PrevFestivalCard
                href="https://www.koudaisai.com/61st"
                src="/img/61st.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/60th"
                src="/img/60th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/59th"
                src="/img/59th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/58th"
                src="/img/58th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/57th"
                src="/img/57th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/56th"
                src="/img/56th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/55th"
                src="/img/55th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/54th"
                src="/img/54th.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/53rd"
                src="/img/53rd.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/52nd"
                src="/img/52nd.webp"
              />
              <PrevFestivalCard
                href="https://www.koudaisai.com/51st"
                src="/img/51st.webp"
              />
            </div>
          </div>
        </Animaton>
      </PageWrapper>
    </>
  );
}
