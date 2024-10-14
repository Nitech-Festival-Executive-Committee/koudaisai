import React from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import ContentBox from "../Content/ContentBox/ContentBox";
import styles from "./RecommendedProjects.module.scss";
import ContentImage from "../Content/ContentImage/ContentImage";

export default function RecommendedProjects() {
  const RecommendedProjects = [
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
      category: "食べ物",
      targetAge: "子供向け",
      location: "1号館ホール",
      img: "/61st/project/zip-fm/logo.webp",
      url: "https://www.koudaisai.com/61st/project/zip-fm/",
      stage: null,
    },
    {
      id: 3,
      name: "ガチコフン",
      category: "競技",
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
      stage: null,
    },
  ];
  return (
    <div>
      <ContentTitle title="おすすめ" size={2} bigTitle />
      <div className={`${styles.informationBlock}`}>
        <div
          className={`${styles.informationContent} ${styles.informationContentFlex}`}
        >
          {RecommendedProjects.map((project) => (
            <ContentBox key={project.id} title={project.name}>
              <a href={project.url}>
                <ContentImage img={project.img} />
              </a>
            </ContentBox>
          ))}
        </div>
      </div>
    </div>
  );
}
