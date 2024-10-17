/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { templateProjectData } from "../template/templateData";
import {} from "../template/templateSchedule";
import { communityStreetData } from "./communityStreetData";

export const metadata = {
  title: `${communityStreetData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${templateProjectData.name}」の詳細ページです`,
};

export default function CommunityStreetPage() {
  return <Project projectData={communityStreetData} />;
}
