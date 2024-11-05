import React from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import { template1 } from "./TemplateProjects/template1";
import { template3 } from "./TemplateProjects/template3";
import { template4 } from "./TemplateProjects/template4";
import { template5 } from "./TemplateProjects/template5";
import { template6 } from "./TemplateProjects/template6";
import { template2 } from "./TemplateProjects/template2";
import styles from "./RecommendedProjects.module.scss";
import SectionBody from "../Content/SectionBody/SectionBody";
import ContentBox from "../Content/ContentBox/ContentBox";
import ContentImage from "../Content/ContentImage/ContentImage";
import { ProjectData } from "@/types/projectInterface";
const projects = [
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
];
const getSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects.filter(
    (project) =>
      project.link !== currentProject.link &&
      project.category.some((cat) => currentProject.category.includes(cat))
  );
};

const getNearbyProjects = (
  currentProject: ProjectData,
  nonSimilarProjects: ProjectData[]
): ProjectData[] => {
  return nonSimilarProjects.filter((project) => {
    if (
      project.link !== currentProject.link &&
      project.schedule.day1 &&
      project.schedule.day2 &&
      currentProject.schedule.day1 &&
      currentProject.schedule.day2
    ) {
      const currentProjectStartDate = currentProject.schedule.day1.startDate;
      const currentProjectEndDate = currentProject.schedule.day2.endDate;
      const projectStartDate = project.schedule.day1.startDate;
      const projectEndDate = project.schedule.day2.endDate;
      const oneHour = 60 * 60 * 1000;
      return (
        (currentProjectStartDate.getTime() - oneHour <=
          projectStartDate.getTime() &&
          currentProjectEndDate.getTime() + oneHour >=
            projectEndDate.getTime()) ||
        (currentProjectStartDate.getTime() + oneHour >=
          projectStartDate.getTime() &&
          currentProjectEndDate.getTime() - oneHour <= projectEndDate.getTime())
      );
    }
    return false;
  });
};

const getNonSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects.filter(
    (project) =>
      project.link !== currentProject.link &&
      !project.category.some((cat) => currentProject.category.includes(cat))
  );
};

const getProjectList = (currentProject: ProjectData): ProjectData[] => {
  const similarProjects = getSimilarProjects(currentProject);
  const nonSimilarProjects = getNonSimilarProjects(currentProject);
  const nearbyProjects = getNearbyProjects(currentProject, nonSimilarProjects);
  return [...similarProjects, ...nearbyProjects];
};

export default function RecommendedProjects() {
  const currentProject = template1;
  const projectList = getProjectList(currentProject);
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} />
      <div className={`${styles.informationBlock}`}>
        <SectionBody style={{ display: "flex", width: "95%" }}>
          {projectList.map((project) => (
            <ContentBox key={project.link} title={project.name}>
              <a href={project.link}>
                <ContentImage img={`/62nd/project/template/brochure.webp`} />
              </a>
            </ContentBox>
          ))}
        </SectionBody>
        <p style={{ textAlign: "center" }}>
          <a href="/project" aria-label="アクセス">
            企画一覧はこちらから
          </a>
        </p>
      </div>
    </div>
  );
}
