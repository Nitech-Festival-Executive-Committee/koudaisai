import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { templateData } from "./templateData";
import { timeScheduleDay1, timeScheduleDay2 } from "./templateSchedule";
import RecommendedProjects from "@/components/RecommendedProjects/RecommendedProjects";

export default function ProjectTemplate() {
  return (
    <Project projectData={templateData}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay1} />
      </SectionBody>
      <SectionBody>
        <ContentTitle title="2日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay2} />
      </SectionBody>
      <RecommendedProjects />
    </Project>
  );
}
