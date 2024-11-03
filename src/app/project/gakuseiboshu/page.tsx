import React from "react";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { gakuseiboshu as ProjectData } from "./gakuseiboshu";
import { guest1, guest2 } from "./guest";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Gakuseiboshu() {
  return (
    <Project projectData={ProjectData}>
      <SectionBody>
        <ProjectTable tableObject={guest1} />
      </SectionBody>
      <SectionBody>
        <ProjectTable tableObject={guest2} />
      </SectionBody>
    </Project>
  );
}
