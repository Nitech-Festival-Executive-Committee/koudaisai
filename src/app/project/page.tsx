import React from "react";
import CustomSwiper from "@/components/Swiper/CustomSwiper";
import ProjectCard from "@/components/Project/ProjectCard/ProjectCard";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectCardWrapper from "@/components/Project/ProjectCardWrapper/ProjectCardWrapper";
import styles from "./page.module.scss";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { artfulCampus } from "./artful-campus/artfulCampus";
import { booth } from "./booth/booth";
import { seiyu } from "./seiyu/seiyu";
import { tyuya } from "./tyuya/tyuya";
import { laboratoryTour } from "./laboratory-tour/laboratoryTour";
import { gakuseiboshu } from "./gakuseiboshu/gakuseiboshu";
import { mogi1 } from "./mogi1/mogi1";
import { roomRiddles } from "./room-riddles/roomRiddles";
import { excursionRiddles } from "./excursion-riddles/excursionRiddles";
import { hauntedHouse } from "./haunted-house/hauntedHouse";
import { kidsPark } from "./kids-park/kidsPark";
import { nitechKing } from "./nitech-king/nitechKing";
import { vrCoaster } from "./vr-coaster/vrCoaster";
import { vsDealer } from "./vs-dealer/vsDealer";
import { nitechChallenger } from "./nitech-challenger/nitechChallenger";
import { communityStreet } from "./community-street/communityStreet";
import { shootingGuesser } from "./shooting-guesser/shootingGuesser";
import { spark } from "./spark/spark";
import { stampRally } from "./stamp-rally/stampRally";
import { kouya } from "./kouya/kouya";
import { mogitenPR } from "./mogiten-pr/mogitenPR";
import { zipFM } from "./zip-fm/zipFM";

export const metadata = {
  title: `企画一覧 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭の企画一覧です。`,
};

// ここからSwiperに表示する企画
const guestProjects = [
  seiyu,
  zipFM,
  tyuya,
  booth,
  spark,
  laboratoryTour,
  gakuseiboshu,
  mogi1,
  mogitenPR,
];

const schoolProjects = [
  kouya,
  roomRiddles,
  excursionRiddles,
  nitechChallenger,
  hauntedHouse,
  communityStreet,
  kidsPark,
  booth,
  nitechKing,
  stampRally,
  vrCoaster,
  vsDealer,
  shootingGuesser,
];
// ここまで

// ここから企画一覧に表示する企画
const projectList = [
  artfulCampus,
  booth,
  communityStreet,
  excursionRiddles,
  gakuseiboshu,
  hauntedHouse,
  kidsPark,
  kouya,
  laboratoryTour,
  mogi1,
  mogitenPR,
  nitechChallenger,
  nitechKing,
  nitechPavilion,
  roomRiddles,
  shootingGuesser,
  spark,
  stampRally,
  seiyu,
  tyuya,
  vrCoaster,
  vsDealer,
  zipFM,
];

const stageProject = [
  spark,
  mogitenPR,
  zipFM,
  shootingGuesser,
  nitechKing,
  nitechChallenger,
  tyuya,
  kouya,
];

// ここまで

export default function ProjectPage() {
  return (
    <>
      <CustomSwiper title="ゲスト企画" projects={guestProjects} />
      <CustomSwiper title="学生企画" projects={schoolProjects} />

      <ContentTitle title={"ステージ企画"} size={1} bigTitle />
      <PageWrapper>
        <ProjectCardWrapper>
          <ProjectCard projectList={stageProject} showTime />
        </ProjectCardWrapper>
      </PageWrapper>

      <PageWrapper>
        <SectionBody>
          <ContentTitle title={"1日目"} size={1} />
          <ProjectCardWrapper>
            <ProjectCard
              projectList={projectList.filter(
                // 1日目のみ開催の企画を抽出
                (project) => project.schedule?.day1 && !project.schedule?.day2
              )}
              showTime
            />
          </ProjectCardWrapper>
        </SectionBody>
        <SectionBody>
          <ContentTitle title={"2日目"} size={1} />
          <ProjectCardWrapper>
            <ProjectCard
              projectList={projectList.filter(
                // 2日目のみ開催の企画を抽出
                (project) => project.schedule?.day2 && !project.schedule?.day1
              )}
              showTime
            />
          </ProjectCardWrapper>
        </SectionBody>
      </PageWrapper>

      <ContentTitle title={"両日開催"} size={1} bigTitle />
      <PageWrapper>
        <ProjectCardWrapper>
          <ProjectCard
            projectList={projectList.filter(
              // 両日開催の企画を抽出
              (project) => project.schedule?.day1 && project.schedule?.day2
            )}
          />
        </ProjectCardWrapper>
      </PageWrapper>

      <ContentTitle title={"会場マップ"} size={1} bigTitle />
      <PageWrapper>
        <img
          src={"/62nd/img/map.webp"}
          alt="会場マップ"
          className={styles.map}
          loading="lazy"
        />
      </PageWrapper>
    </>
  );
}
