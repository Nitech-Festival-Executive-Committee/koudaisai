import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { templateProject as ProjectData } from "./templateProject";
import { timeScheduleDay1, timeScheduleDay2 } from "./templateSchedule";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import RecommendedProjects from "@/components/RecommendedProjects/RecommendedProjects";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function TemplateProject() {
  return (
    <>
      <Project projectData={ProjectData} />

      <ContentTitle title="hogefuga" size={2} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="1日目" size={2} />
          <ProjectTable tableObject={timeScheduleDay1} />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="2日目" size={2} />
          <ProjectTable tableObject={timeScheduleDay2} />
        </SectionBody>
      </PageWrapper>
      <RecommendedProjects />
    </>
  );
}
