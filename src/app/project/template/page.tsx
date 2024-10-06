import React from "react";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import BochureImage from "@/components/Project/BrochureImage/BochureImage";
import ProjectLogo from "@/components/Project/ProjectLogo/ProjectLogo";
import ProjectTag from "@/components/Project/ProjectTag/ProjectTag";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { projectData } from "./templateData";

const timeScheduleDay1 = {
  column: ["時間", "団体名", "内容"],
  data: [
    ["10:15〜10:45", "名古屋工業大学吹奏楽団", "吹奏楽演奏"],
    ["10:45〜10:47", "転換"],
    ["10:47〜11:17", "Prego", "アカペラ"],
    ["11:17〜11:19", "転換"],
    ["11:19〜11:49", "名城大学薬学部奇術部 ROOK", "ジャグリング"],
    ["11:49〜11:51", "転換"],
    ["11:51〜12:11", "金城学院大学ダンス部 BEAT", "ダンス"],
  ],
  widthWeight: [2, 5, 3],
};

const timeScheduleDay2 = {
  column: ["時間", "団体名"],
  data: [
    ["15:15〜15:30", "愛知flavor"],
    ["15:30〜15:40", "Paradox Risk"],
    ["15:40〜15:50", "WONDER SNAKE"],
    ["15:55〜16:10", "幻"],
  ],
  widthWeight: [1, 2],
};

export default function ProjectTemplate() {
  return (
    <>
      <ContentTitle title="タイトル" size={1} bigTitle />
      <ProjectLogo img="/img/62ndLogo.png" alt="62nd Logo" />
      <PageWrapper>
        <SectionBody>
          <BochureImage img="/img/canvas.webp" />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="hoge" size={2} />
          <ProjectTag day1 day2 exclusive exclusiveText="抽選券" />

          {Object.keys(projectData).map((key) => {
            const data = projectData[key];
            if (data?.isHidden) {
              return null;
            }
            if (data && typeof data.content === "string") {
              return (
                <ContentBox key={key} title={data.title}>
                  <p>{data.content}</p>
                </ContentBox>
              );
            } else if (data && Array.isArray(data.content)) {
              return (
                <ContentBox key={key} title={data.title}>
                  {data.content.map((item, index) => (
                    <p key={index}>
                      {typeof item === "string" ? item : item.outerHTML}
                    </p>
                  ))}
                </ContentBox>
              );
            } else {
              return null;
            }
          })}
        </SectionBody>
        <SectionBody>
          <ContentTitle title="1日目" size={2} />
          <ProjectTable tableObject={timeScheduleDay1}></ProjectTable>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="2日目" size={2} />
          <ProjectTable tableObject={timeScheduleDay2}></ProjectTable>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
