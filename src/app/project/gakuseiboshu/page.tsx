/* eslint-disable react/jsx-key */
import React from "react";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { gakuseiboshu } from "./gakuseiboshu";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { guest1, guest2 } from "./guest";

export const metadata = {
  title: `${gakuseiboshu.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${gakuseiboshu.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Gakuseiboshu() {
  return (
    <Project projectData={gakuseiboshu}>
      <SectionBody>
        <ProjectTable tableObject={guest1} />
      </SectionBody>
      <SectionBody>
        <ProjectTable tableObject={guest2} />
      </SectionBody>
    </Project>
  );
}
