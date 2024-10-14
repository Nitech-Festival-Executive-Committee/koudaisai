/* eslint-disable react/jsx-key */
import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import Underline from "@/components/Content/Underline/Underline";
import { ProjectBox } from "@/types/types";
import { createProjectData } from "../projectInterface";

// データの順番通りに生成されます
export const templateData: Record<string, ProjectBox | undefined> =
  createProjectData({
    // 必須項目
    link: "human-mining",
    name: "人力ビットコインマイニング",
    projectTag: ["抽選券", "予約"],
    description: (
      <p>
        仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。
        <Underline>SGDsに貢献したとてもエコな企画です。</Underline>
      </p>
    ),
    day1: "10:00～16:00",
    place: "2号館前ステージ",
    capacity: "100人",
    precautions: [
      <Underline>
        マイニングは熱を発生します。熱中症には十分気をつけてください。
      </Underline>,
      "マイニングは過酷な作業です。前日は十分睡眠を取ってから参加してください。",
      "ハッシュ値はSHA-256です。正しいハッシュ値が見つかる確率は1/2^256です。前日に神社にお参りをしてください。",
      <Underline>
        電卓やスマートフォンの使用は禁止です。カンニングが見つかった場合は掲示板に掲載・停学処分となります。
      </Underline>,
    ],
    prize: "1BTC (900万円相当)",
    contact: "局 @koudaisai.com",
    // 追加項目
    mienai: {
      title: "見えない",
      content: "なぜ見えるのだ?",
      isHidden: true,
    },
    kara: {
      title: "中身空っぽだから見えないはず",
      content: "",
    },
    hoge: {
      title: "ほげ",
      content: "ほげ",
    },
  });

export const timeScheduleDay1 = {
  column: ["時間", "団体名", "内容"],
  data: [
    ["10:15〜10:45", "名古屋工業大学吹奏楽団", "吹奏楽演奏"],
    ["10:45〜10:47", "転換"],
    ["10:47〜11:17", "Prego", "アカペラ"],
    ["11:17〜11:19", "転換"],
    ["11:19〜11:49", "名城大学薬学部奇術部 ROOK", "ジャグリング"],
    ["11:49〜11:51", "転換"],
    ["11:51〜12:11", "金城学院大学ダンス部 BEAT", "ダンス"],
  ],
  widthWeight: [2, 5, 3],
};

export const timeScheduleDay2 = {
  column: ["時間", "団体名"],
  data: [
    ["15:15〜15:30", "愛知flavor"],
    ["15:30〜15:40", "Paradox Risk"],
    ["15:40〜15:50", "WONDER SNAKE"],
    ["15:55〜16:10", "幻"],
  ],
  widthWeight: [1, 2],
};

export default function ProjectTemplate() {
  return (
    <Project projectData={templateData}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay1} />
      </SectionBody>
      <SectionBody>
        <ContentTitle title="2日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay2} />
      </SectionBody>
    </Project>
  );
}
