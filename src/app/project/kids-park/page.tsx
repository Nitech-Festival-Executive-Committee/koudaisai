/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { kidsPark } from "./kidsPark";

export const metadata = {
  title: `${kidsPark.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${kidsPark.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function KidsPark() {
  return <Project projectData={kidsPark} />;
}
