/* eslint-disable react/jsx-key */
import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { templateProjectData } from "./templateData";
import { timeScheduleDay1, timeScheduleDay2 } from "./templateSchedule";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${templateProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${templateProjectData.name}」の詳細ページです`,
};

export default function ProjectTemplate() {
  return (
    <Project projectData={templateProjectData}>
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
