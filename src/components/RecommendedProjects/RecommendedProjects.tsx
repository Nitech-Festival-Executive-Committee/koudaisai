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

// 似ている企画を取得
const getSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects.filter(
    (project) =>
      // 自分自身の企画でない
      project.link !== currentProject.link &&
      // 一致するカテゴリーがある
      project.category.some((cat) => currentProject.category.includes(cat))
  );
};

// 時間帯が近い企画を取得
const getTimeNearbyProjects = (currentProject: ProjectData): ProjectData[] => {
  const currentProjectStartDate = currentProject.schedule.day1?.startDate;
  if (!currentProjectStartDate) return [];
  // 似ていない企画の中から、時間帯が近いものを取得 <- ステージ企画はカテゴリ同じだけど大丈夫?
  return projects
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
  // hint: 例えばrecommendedProjectListからここで4つ取り出して、4つ未満の場合はランダムな企画を選択するとか
  return isStageOrOneday ? timeNearbyProjects : similarProjects; // hint: ここでtimeNearbyProjects * 2, similarProjects * 2ずつ返す or similarProjects * 4返すとかにするといいかも
  // hint: カテゴリに関してはprojectListの並び順で前のほうの企画ばっかり選ばれる可能性があるので、similarProjectsだけランダムにソートしてもいいかも
};

const isStageOrOnedayProject = (currentProject: ProjectData): boolean => {
  return currentProject.category.includes("STAGE");
};
export default function RecommendedProjects({
  currentProject,
}: RecommendedProjectsProps) {
  const isStageOrOneday = isStageOrOnedayProject(currentProject); // ステージ企画か両日開催ではない企画
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
            // hint: recommendedProjectListが4つ未満の可能性は無い?もしあるならその場合はランダムな企画を入れておいてもいいかも。
            showTime
          />
        </ProjectCardWrapper>
      </PageWrapper>
      <p style={{ textAlign: "center", fontWeight: "600" }}>
        <a href="/project" aria-label="企画一覧">
          企画一覧はこちらから
        </a>
      </p>
    </div>
  );
}
