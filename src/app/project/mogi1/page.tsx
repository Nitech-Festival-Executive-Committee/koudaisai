import React from "react";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import Project from "@/components/Project/Project/Project";
import { mogi1 } from "./mogi1";

export const metadata = {
  title: `${mogi1.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催
    「${mogi1.name}」の詳細ページです`,
};

export default function Mogi1() {
  return <Project projectData={mogi1} />;
}
