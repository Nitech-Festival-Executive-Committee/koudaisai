import React from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import ContentBox from "../Content/ContentBox/ContentBox";
import styles from "./RecommendedProjects.module.scss";
import ContentImage from "../Content/ContentImage/ContentImage";
import SectionBody from "../Content/SectionBody/SectionBody";
import { ProjectData } from "@/types/projectInterface";
import { templateProjectData1 } from "./TemplateRecomProjects/templateData1";
import { templateProjectData2 } from "./TemplateRecomProjects/templateData2";
import { templateProjectData3 } from "./TemplateRecomProjects/templateData3";
import { templateProjectData4 } from "./TemplateRecomProjects/templateData4";
import { templateProjectData5 } from "./TemplateRecomProjects/templateData5";
import { templateProjectData6 } from "./TemplateRecomProjects/templateData6";
import { Schedule } from "@/types/types";

const projects = [
  templateProjectData1,
  templateProjectData2,
  templateProjectData3,
  templateProjectData4,
  templateProjectData5,
  templateProjectData6,
];

// 似てる企画
const getSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  return projects.filter(
    (project) =>
      project.link !== currentProject.link &&
      project.category.some((cat) => currentProject.category.includes(cat))
  );
};

//時間帯の近い企画
const getNearbyStageProjects = (
  projects: ProjectData[],
  currentProject: ProjectData
): ProjectData[] => {
  if (!currentProject.schedule) return [];

  // const oneHour = 3600000;

  const getStartEndTimes = (
    schedule: Schedule
  ): {
    day1Start?: Date;
    day1End?: Date;
    day2Start?: Date;
    day2End?: Date;
  } => {
    // day1 のスケジュール
    const day1Start = schedule.day1?.startDate;
    const day1End = schedule.day1?.endDate;

    // day2 のスケジュール
    const day2Start = schedule.day2?.startDate;
    const day2End = schedule.day2?.endDate;

    return { day1Start, day1End, day2Start, day2End };
  };

  const {
    day1Start: currentDay1Start,
    day1End: currentDay1End,
    day2Start: currentDay2Start,
    day2End: currentDay2End,
  } = getStartEndTimes(currentProject.schedule);
  // if (!currentTimes) return [];

  return projects.filter((project) => {
    // if (!project.schedule) return false;
    if (project.link === currentProject.link) return false;

    const projectTimes = getStartEndTimes(project.schedule);
    // if (!projectTimes) return false;

    // const {
    //   day1Start: currentDay1Start,
    //   day1End: currentDay1End,
    //   day2Start: currentDay2Start,
    //   day2End: currentDay2End,
    // } = currentTimes;
    const {
      day1Start: projectDay1Start,
      day1End: projectDay1End,
      day2Start: projectDay2Start,
      day2End: projectDay2End,
    } = projectTimes;

    const startWindowDay1 = currentDay1Start
      ? new Date(currentDay1Start)
      : undefined;
    if (startWindowDay1) {
      startWindowDay1.setHours(startWindowDay1.getHours() + 1);
    }
    const endWindowDay1 = currentDay1End ? new Date(currentDay1End) : undefined;
    if (endWindowDay1) {
      endWindowDay1.setHours(endWindowDay1.getHours() + 1);
    }
    const startWindowDay2 = currentDay2Start
      ? new Date(currentDay2Start)
      : undefined;
    if (startWindowDay2) {
      startWindowDay2.setHours(startWindowDay2.getHours() + 1);
    }
    const endWindowDay2 = currentDay2End ? new Date(currentDay2End) : undefined;
    if (endWindowDay2) {
      endWindowDay2.setHours(endWindowDay2.getHours() + 1);
    }

    return (
      (projectDay1Start &&
        startWindowDay1 &&
        endWindowDay1 &&
        startWindowDay1 <= projectDay1Start &&
        projectDay1Start <= endWindowDay1) ||
      (projectDay1End &&
        startWindowDay1 &&
        endWindowDay1 &&
        projectDay1End >= startWindowDay1 &&
        projectDay1End <= endWindowDay1) ||
      (projectDay2Start &&
        startWindowDay2 &&
        endWindowDay2 &&
        projectDay2Start >= startWindowDay2 &&
        projectDay2Start <= endWindowDay2) ||
      (projectDay2End &&
        startWindowDay2 &&
        endWindowDay2 &&
        projectDay2End >= startWindowDay2 &&
        projectDay2End <= endWindowDay2)
    );
  });
};

// 似ていない企画
const excludeSimilarProjects = (currentProject: ProjectData): ProjectData[] => {
  const similarProjects = getSimilarProjects(currentProject);
  const similarProjectsLinks = similarProjects.map((project) => project.link);
  return projects.filter(
    (project) => !similarProjectsLinks.includes(project.link)
  );
};

//おすすめ企画リスト
const RecommendedProjectsList = (
  currentProject: ProjectData
): ProjectData[] => {
  const similarProjects = getSimilarProjects(currentProject);
  const nonSimilarProjects = excludeSimilarProjects(currentProject);
  const nearbyStageProjects = getNearbyStageProjects(
    nonSimilarProjects,
    currentProject
  );
  if (nearbyStageProjects.length === 0) {
    return similarProjects.slice(0, 4);
  }

  return similarProjects.slice(0, 2).concat(nearbyStageProjects.slice(0, 2));
};

export default function RecommendedProjects() {
  const currentProject = templateProjectData1;
  const recommendedProjects = RecommendedProjectsList(currentProject);
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} />
      <div className={`${styles.informationBlock}`}>
        <SectionBody
          style={{ display: "flex", width: "95%", padding: "0vh 0" }}
        >
          {recommendedProjects.slice(0, 4).map((project) => (
            <ContentBox key={project.link} title={project.name}>
              <a href={project.link}>
                <ContentImage
                  img={`/62nd/project/template/brochure.webp`} //テンプレート写真
                  imageStyle={{ border: "none", boxShadow: "none" }}
                />
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
