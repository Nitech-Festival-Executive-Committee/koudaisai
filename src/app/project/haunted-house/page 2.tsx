/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { hauntedHouseProjectData } from "./haunted-house";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${hauntedHouseProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${hauntedHouseProjectData.name}」の詳細ページです`,
};

export default function ProjectHauntedHouse() {
  return <Project projectData={hauntedHouseProjectData}></Project>;
}
