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

export const metadata = {
  title: `企画一覧 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭の企画一覧です。`,
};

const guestProjects = [
  seiyu,
  tyuya,
  booth,
  laboratoryTour,
  gakuseiboshu,
  mogi1,
];

const schoolProjects = [
  artfulCampus,
  booth,
  roomRiddles,
  excursionRiddles,
  hauntedHouse,
  kidsPark,
  nitechKing,
  vrCoaster,
  vsDealer,
];

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
  roomRiddles,
  shootingGuesser,
  spark,
  stampRally,
  seiyu,
  tyuya,
  vrCoaster,
  vsDealer,
];

export default function ProjectPage() {
  return (
    <>
      <CustomSwiper title="ゲスト企画" projects={guestProjects} />
      <CustomSwiper title="学生企画" projects={schoolProjects} />

      <ContentTitle title={"両日開催"} size={1} bigTitle />
      <PageWrapper>
        <ProjectCardWrapper>
          <ProjectCard
            projectList={projectList.filter(
              (project) => project.schedule?.day1 && project.schedule?.day2
            )}
          />
        </ProjectCardWrapper>
      </PageWrapper>
      <PageWrapper>
        <SectionBody>
          <ContentTitle title={"1日目"} size={1} />
          <ProjectCardWrapper>
            <ProjectCard
              projectList={projectList.filter(
                (project) => project.schedule?.day1 && !project.schedule?.day2
              )}
            />
          </ProjectCardWrapper>
        </SectionBody>
        <SectionBody>
          <ContentTitle title={"2日目"} size={1} />
          <ProjectCardWrapper>
            <ProjectCard
              projectList={projectList.filter(
                (project) => project.schedule?.day2 && !project.schedule?.day1
              )}
            />
          </ProjectCardWrapper>
        </SectionBody>
      </PageWrapper>
      <ContentTitle title={"会場マップ"} size={1} bigTitle />
      <PageWrapper>
        <img
          src={"/62nd/img/map.webp"}
          alt="会場マップ"
          className={styles.map}
        />
      </PageWrapper>
    </>
  );
}
