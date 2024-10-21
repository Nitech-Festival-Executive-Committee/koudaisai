import React from "react";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import Project from "@/components/Project/Project/Project";
import { stampRally } from "./stampRally";

export const metadata = {
  title: `${stampRally.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催
    「${stampRally.name}」の詳細ページです`,
};

export default function StampRally() {
  return <Project projectData={stampRally} />;
}
