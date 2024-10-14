import React from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import ContentBox from "../Content/ContentBox/ContentBox";
import styles from "./RecommendedProjects.module.scss";
import ContentImage from "../Content/ContentImage/ContentImage";
import SectionBody from "../Content/SectionBody/SectionBody";

interface Stage {
  startTime: string;
  endTime: string;
}

interface Project {
  id: number;
  name: string;
  category: string;
  targetAge: string;
  location: string;
  img: string;
  url: string;
  stage: Stage | null;
}

const ProjectData: Project[] = [
  {
    id: 1,
    name: "名工大王",
    category: "体験型",
    targetAge: "全年齢",
    location: "2号館前ステージ",
    img: "/61st/project/the-king-of-nitech/logo.webp",
    url: "https://www.koudaisai.com/61st/project/the-king-of-nitech/",
    stage: {
      startTime: "10:00",
      endTime: "16:00",
    },
  },
  {
    id: 2,
    name: "ZIP-FM",
    category: "体験型",
    targetAge: "子供向け",
    location: "1号館ホール",
    img: "/61st/project/zip-fm/logo.webp",
    url: "https://www.koudaisai.com/61st/project/zip-fm/",
    stage: null,
  },
  {
    id: 3,
    name: "ガチコフン",
    category: "体験型",
    targetAge: "小学生以上",
    location: "体育館",
    img: "/61st/project/gatikohun/logo.webp",
    url: "https://www.koudaisai.com/61st/project/gatikohun/",
    stage: {
      startTime: "11:00",
      endTime: "14:00",
    },
  },
  {
    id: 4,
    name: "お化け屋敷",
    category: "食べ物",
    targetAge: "子供向け",
    location: "1号館ホール",
    img: "/61st/project/haunted-house/logo.webp",
    url: "https://www.koudaisai.com/61st/project/haunted-house/",
    stage: {
      startTime: "16:30",
      endTime: "17:30",
    },
  },
];

//似てる企画
const getSimilarProjects = (CurrentProject: Project): Project[] => {
  return ProjectData.filter(
    (project) =>
      project.id !== CurrentProject.id &&
      (project.category === CurrentProject.category ||
        project.location === CurrentProject.location)
  );
};

//時間が近い企画（前後１時間）
const getNearbyStageProjects = (
  projects: Project[],
  currentProject: Project
): Project[] => {
  if (!currentProject.stage) return [];
  return projects.filter((project) => {
    if (!project.stage) return false;
    if (project.id === currentProject.id) return false;
    const currentStart = new Date(
      `2024-11-01T${currentProject.stage?.startTime}:00`
    ).getTime();
    const currentEnd = new Date(
      `2024-11-01T${currentProject.stage?.endTime}:00`
    ).getTime();

    const oneHour = 3600000;
    const startWindow = currentStart - oneHour;
    const endWindow = currentEnd + oneHour;

    const projectStart = new Date(
      `2024-11-01T${project.stage.startTime}:00`
    ).getTime();
    const projectEnd = new Date(
      `2024-11-01T${project.stage.endTime}:00`
    ).getTime();
    return (
      (projectStart >= startWindow && projectStart <= endWindow) ||
      (projectEnd >= startWindow && projectEnd <= endWindow)
    );
  });
};

//似ていない企画
const excludeSimilarProjects = (currentProject: Project): Project[] => {
  const similarProjects = getSimilarProjects(currentProject);
  const similarProjectsIds = similarProjects.map((project) => project.id);
  return ProjectData.filter(
    (project) => !similarProjectsIds.includes(project.id)
  );
};

//おすすめ企画のリスト
const RecommendedProjectsList = (currentProject: Project): Project[] => {
  const similarProjects = getSimilarProjects(currentProject);
  const nonSimilarProjects = excludeSimilarProjects(currentProject);
  const nearbyStageProjects = getNearbyStageProjects(
    nonSimilarProjects,
    currentProject
  );

  return similarProjects.concat(nearbyStageProjects);
};

export default function RecommendedProjects() {
  const currentProject = ProjectData[0];
  const recommendedProject = RecommendedProjectsList(currentProject);
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} bigTitle />
      <div className={`${styles.informationBlock}`}>
        <SectionBody
          style={{ display: "flex", width: "95%", padding: "0vh 0" }}
        >
          {recommendedProject.map((project) => (
            <ContentBox
              key={project.id}
              title={project.name}
              style={{ padding: "10px 2px 5px" }}
            >
              <a href={project.url}>
                <ContentImage img={project.img} style={{ padding: "0vh 0" }} />
              </a>
            </ContentBox>
          ))}
        </SectionBody>
      </div>
    </div>
  );
}
