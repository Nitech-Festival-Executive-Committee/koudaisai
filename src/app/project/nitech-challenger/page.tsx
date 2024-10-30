/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { nitechChallenger } from "./nitechChallenger";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `${nitechChallenger.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${nitechChallenger.name}」の詳細ページです`,
};

export default function NitechChallenger() {
  return (
    <Project
      projectData={nitechChallenger}
      brochurePath={""}
      projectTitleSize={3}
    />
  );
}
