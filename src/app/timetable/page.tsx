import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { tyuya } from "@/app/project/tyuya/tyuya";
import { kouya } from "../project/kouya/kouya";
import { formatPeriod } from "@/utils/formatter";
import { shootingGuesser } from "../project/shooting-guesser/shootingGuesser";
import { spark } from "../project/spark/spark";
import { nitechKing } from "../project/nitech-king/nitechKing";
import { nitechChallenger } from "../project/nitech-challenger/nitechChallenger";
import Underline from "@/components/Content/Underline/Underline";
import { Period } from "@/types/types";
import { mogitenPR } from "../project/mogiten-pr/mogitenPR";
import { zipFM } from "../project/zip-fm/zipFM";

export const metadata = {
  title: `タイムテーブル - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - ステージ企画のタイムテーブルです。`,
};

export default function Timetable() {
  const day1StageProjects = [
    spark,
    mogitenPR,
    shootingGuesser,
    nitechKing,
    nitechChallenger,
    tyuya,
  ];

  const day2StageProjects = [spark, mogitenPR, shootingGuesser, zipFM, kouya];

  return (
    <>
      <ContentTitle title={"タイムテーブル"} size={2} bigTitle />
      {/* 画像 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/62nd/timetable/timetable.webp"
          alt={"timetable"}
          style={{ maxWidth: "90%", maxHeight: "65vh" }}
        ></img>
      </div>
      <PageWrapper>
        {[
          { title: "1日目", projects: day1StageProjects },
          { title: "2日目", projects: day2StageProjects },
        ].map((day, dayIndex) => (
          <SectionBody key={dayIndex}>
            <ContentTitle title={day.title} size={2} />
            {day.projects.map((project, index) => (
              <ContentBox
                key={index}
                title={
                  project.schedule[dayIndex === 0 ? "day1" : "day2"] ? (
                    <>
                      {project.schedule[dayIndex === 0 ? "day1" : "day2"]
                        ? formatPeriod(
                            project.schedule[
                              dayIndex === 0 ? "day1" : "day2"
                            ] as Period
                          )
                        : "時間未定"}
                      : <Underline>{project.name}</Underline>
                    </>
                  ) : (
                    <>
                      時間未定{": "}
                      <Underline>{project.name}</Underline>
                    </>
                  )
                }
              >
                <p>
                  {project.summary}
                  <br />
                  詳細はこちらから:{" "}
                  <a href={`../project/${project.link}`}>{project.name}</a>
                </p>
              </ContentBox>
            ))}
          </SectionBody>
        ))}
      </PageWrapper>
    </>
  );
}
