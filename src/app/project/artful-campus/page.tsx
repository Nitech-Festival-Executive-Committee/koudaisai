/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { artfulCampus } from "./artfulCampus";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${artfulCampus.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${artfulCampus.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function ArtfulCampus() {
  return (
    <Project
      projectData={artfulCampus}
      projectTitleSize={4}
      logoPath={""}
    ></Project>
  );
}
