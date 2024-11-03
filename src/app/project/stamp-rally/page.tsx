import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { stampRally as ProjectData } from "./stampRally";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催
    「${ProjectData.name}」の詳細ページです`,
};

export default function StampRally() {
  return <Project projectData={ProjectData} />;
}
