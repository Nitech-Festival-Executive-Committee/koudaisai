import React from "react";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ProjectCardWrapper from "@/components/Project/ProjectCardWrapper/ProjectCardWrapper";
import ProjectCard from "@/components/Project/ProjectCard/ProjectCard";
import Animation from "@/components/Animation/Animation";
import { ProjectData } from "@/types/projectInterface";
import { projectList as projects } from "@/app/project/page";

interface RecommendedProjectsProps {
  currentProject: ProjectData;
}

// 似ている企画を取得
const getSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects
    .filter(
      (project) =>
        // 自分自身の企画でない
        project.link !== currentProject.link &&
        // 一致するカテゴリーがある
        project.category.some((cat) => currentProject.category.includes(cat))
    )
    .sort(() => Math.random() - 0.5); // ランダムにソート
};

// 時間帯が近い企画を取得
const getTimeNearbyProjects = (currentProject: ProjectData): ProjectData[] => {
  const currentProjectStartDate = currentProject.schedule.day1?.startDate;
  if (!currentProjectStartDate) return [];
  const nonSimilarProjects = projects.filter((project) => {
    return !project.category.some((cat) =>
      currentProject.category.includes(cat)
    );
  });
  return nonSimilarProjects
    .map((project) => {
      if (project.link === currentProject.link)
        return { project, timeDifference: Infinity };
      const projectStartDate1 = project.schedule.day1?.startDate;
      const projectStartDate2 = project.schedule.day2?.startDate;

      const timeDifference = Math.abs(
        projectStartDate1
          ? currentProjectStartDate.getTime() - projectStartDate1.getTime()
          : projectStartDate2
            ? currentProjectStartDate.getTime() - projectStartDate2.getTime()
            : Infinity
      );
      return { project, timeDifference };
    })
    .sort((a, b) => a.timeDifference - b.timeDifference)
    .map((item) => item.project);
};

//おすすめの企画のリストを作成
const getProjectList = (
  currentProject: ProjectData,
  isStageOrOneday: boolean
): ProjectData[] => {
  const similarProjects = getSimilarProjects(currentProject); // カテゴリが同じ企画
  const timeNearbyProjects = getTimeNearbyProjects(currentProject); // 開催時刻が近い企画

  const combinedProjects = isStageOrOneday
    ? [...timeNearbyProjects.slice(0, 2), ...similarProjects.slice(0, 2)]
    : similarProjects.slice(0, 4);

  // 4つ未満の場合はランダムな企画を追加
  while (combinedProjects.length < 4) {
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    if (
      !combinedProjects.includes(randomProject) &&
      randomProject.link !== currentProject.link
    ) {
      combinedProjects.push(randomProject);
    }
  }

  return combinedProjects;
};

const isStage = (currentProject: ProjectData): boolean => {
  return currentProject.category.includes("STAGE");
};

export default function RecommendedProjects({
  currentProject,
}: RecommendedProjectsProps) {
  const isStageOrOneday = isStage(currentProject); // ステージ企画か両日開催ではない企画
  const recommendedProjectList = getProjectList(
    currentProject,
    isStageOrOneday
  ); // おすすめの企画のリストを取得
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} bigTitle />
      <PageWrapper>
        <ProjectCardWrapper>
          <ProjectCard
            projectList={recommendedProjectList.slice(0, 4)}
            showTime
            linkOffset={"../"}
          />
        </ProjectCardWrapper>
      </PageWrapper>
      <Animation>
        <p style={{ textAlign: "center", fontWeight: "600" }}>
          <a href="/project" aria-label="企画一覧">
            企画一覧はこちらから
          </a>
        </p>
      </Animation>
    </div>
  );
}
