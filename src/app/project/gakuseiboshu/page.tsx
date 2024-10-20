/* eslint-disable react/jsx-key */
import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { gakuseiboshu } from "./gakuseiboshu";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { guest } from "./guest";

export const metadata = {
  title: `${gakuseiboshu.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${gakuseiboshu.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Gakuseiboshu() {
  return (
    <Project projectData={gakuseiboshu}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={guest} />
      </SectionBody>
    </Project>
  );
}
