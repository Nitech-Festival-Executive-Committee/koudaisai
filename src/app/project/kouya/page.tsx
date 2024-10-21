/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { kouya } from "./kouya";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${kouya.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${kouya.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Kouya() {
  return <Project projectData={kouya} brochurePath={""} />;
}
