import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import {
  spark as ProjectData,
  sparkScheduleDay1,
  sparkScheduleDay2,
} from "./spark";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Spark() {
  return (
    <Project projectData={ProjectData} brochurePath={""}>
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="1日目" size={2} />
          <ProjectTable tableObject={sparkScheduleDay1} />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="2日目" size={2} />
          <ProjectTable tableObject={sparkScheduleDay2} />
        </SectionBody>
      </PageWrapper>
    </Project>
  );
}
