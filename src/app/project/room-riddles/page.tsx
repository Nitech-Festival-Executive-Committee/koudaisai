import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { roomRiddles } from "./roomRiddles";

export const metadata = {
  title: `${roomRiddles.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${roomRiddles.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function RoomRiddles() {
  return <Project projectData={roomRiddles} />;
}
