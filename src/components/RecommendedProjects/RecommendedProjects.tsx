import React from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import { ProjectData } from "@/types/projectInterface";
import PageWrapper from "../Content/PageWrapper/PageWrapper";
import ProjectCardWrapper from "../Project/ProjectCardWrapper/ProjectCardWrapper";
import ProjectCard from "../Project/ProjectCard/ProjectCard";
import { projectList as projects } from "@/app/project/page";
interface RecommendedProjectsProps {
  currentProject: ProjectData;
}
const getSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects.filter(
    (project) =>
      //自分自身の企画でない
      project.link !== currentProject.link &&
      //一致するカテゴリーがある
      project.category.some((cat) => currentProject.category.includes(cat))
  );
};

//時間帯が近い企画を取得
const getTimeNearbyProjects = (
  currentProject: ProjectData,
  nonSimilarProjects: ProjectData[]
): ProjectData[] => {
  const currentProjectStartDate = currentProject.schedule.day1?.startDate;
  const currentProjectEndDate = currentProject.schedule.day2?.endDate;

  if (!currentProjectStartDate || !currentProjectEndDate) {
    return [];
  }

  return nonSimilarProjects
    .map((project) => {
      const projectStartDate = project.schedule.day1?.startDate;
      const projectEndDate = project.schedule.day2?.endDate;

      if (!projectStartDate || !projectEndDate) {
        return { project, timeDifference: Infinity };
      }

      const timeDifference = Math.abs(
        currentProjectStartDate.getTime() - projectStartDate.getTime()
      );

      return { project, timeDifference };
    })
    .sort((a, b) => a.timeDifference - b.timeDifference)
    .map((item) => item.project);
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
  const nearbyProjects = getTimeNearbyProjects(
    currentProject,
    nonSimilarProjects
  );
  return [...similarProjects, ...nearbyProjects];
};

export default function RecommendedProjects({
  currentProject,
}: RecommendedProjectsProps) {
  const recommendedProjectList = getProjectList(currentProject);
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} />
      <PageWrapper>
        <ProjectCardWrapper>
          <ProjectCard
            projectList={recommendedProjectList.slice(0, 4)}
            showTime
          />
        </ProjectCardWrapper>
      </PageWrapper>
      <p style={{ textAlign: "center" }}>
        <a href="/project" aria-label="企画一覧">
          企画一覧はこちらから
        </a>
      </p>
    </div>
  );
}
