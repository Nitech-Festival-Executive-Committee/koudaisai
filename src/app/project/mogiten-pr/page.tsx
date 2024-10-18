import React from "react";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import Project from "@/components/Project/Project/Project";
import { mogitenPR } from "./mogitenPR";

export const metadata = {
  title: `${mogitenPR.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催
    「${mogitenPR.name}」の詳細ページです`,
};

export default function MogitenPR() {
  return <Project projectData={mogitenPR} brochurePath={""} logoPath={""} />;
}
