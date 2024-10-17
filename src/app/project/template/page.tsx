/* eslint-disable react/jsx-key */
import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { templateProject } from "./templateProject";
import { timeScheduleDay1, timeScheduleDay2 } from "./templateSchedule";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${templateProject.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${templateProject.name}」の詳細ページです`,
};

// 関数名を変更(ex. TemplateProject -> MiniGame)
export default function TemplateProject() {
  return (
    <Project projectData={templateProject}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay1} />
      </SectionBody>
      <SectionBody>
        <ContentTitle title="2日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay2} />
      </SectionBody>
    </Project>
  );
}
