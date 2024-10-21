/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { spark, sparkScheduleDay1, sparkScheduleDay2 } from "./spark";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";

export const metadata = {
  title: `${spark.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${spark.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Spark() {
  return (
    <Project projectData={spark} brochurePath={""}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={sparkScheduleDay1} />
      </SectionBody>
      <SectionBody>
        <ContentTitle title="2日目" size={2} />
        <ProjectTable tableObject={sparkScheduleDay2} />
      </SectionBody>
    </Project>
  );
}
