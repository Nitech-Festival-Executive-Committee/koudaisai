import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { tyuya } from "@/app/project/tyuya/tyuya";
import { kouya } from "../project/kouya/kouya";

export const metadata = {
  title: `タイムテーブル - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - ステージ企画のタイムテーブルです。`,
};

export default function Timetable() {
  return (
    <>
      <ContentTitle title={"タイムテーブル"} size={2} bigTitle />
      {/* 画像 */}
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="1日目" size={2} />
          <ContentBox title={"time"}>
            <p>
              {tyuya.name}
              <br />
              {tyuya.summary}
            </p>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="2日目" size={2} />
          <ContentBox title={"time"}>
            <p>
              {kouya.name}
              <br />
              {kouya.summary}
            </p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
