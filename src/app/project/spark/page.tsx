/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import {} from "../template/templateSchedule";
import { spark } from "./spark";

export const metadata = {
  title: `${spark.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${spark.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Spark() {
  return <Project projectData={spark} />;
}
