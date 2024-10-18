/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { nitechKing } from "./nitechKing";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${nitechKing.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${nitechKing.name}」の詳細ページです`,
};

export default function NitechKing() {
  return <Project projectData={nitechKing}></Project>;
}
