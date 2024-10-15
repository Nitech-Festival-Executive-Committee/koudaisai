/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { miniGame } from "./miniGame";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${miniGame.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${miniGame.name}」の詳細ページです`,
};

export default function MiniGame() {
  return <Project projectData={miniGame} projectTitleSize={3}></Project>;
}
