import React from "react";
import Project from "@/components/Project/Project/Project";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { communityStreet } from "./communityStreet";

export const metadata = {
  title: `${communityStreet.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${communityStreet.name}」の詳細ページです`,
};

export default function CommunityStreet() {
  return <Project projectData={communityStreet} projectTitleSize={4} />;
}
