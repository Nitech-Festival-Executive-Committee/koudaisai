import React from "react";
import Project from "@/components/Project/Project/Project";
import { architectureDiscussion as ProjectData } from "./architectureDiscussion";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function architectureDiscussion() {
  return (
    <>
      <Project
        projectData={ProjectData}
        logoPath={""}
        brochurePath={""}
        projectTitleSize={5}
      />
    </>
  );
}
