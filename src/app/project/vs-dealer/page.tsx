import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { vsDealer } from "./vsDealer";

export const metadata = {
  title: `${vsDealer.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${vsDealer.name}」の詳細ページです`,
};

export default function VsDealer() {
  return <Project projectData={vsDealer} />;
}
