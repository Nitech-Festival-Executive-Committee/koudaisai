/* eslint-disable react/jsx-key */
import React from "react";
import Underline from "@/components/Content/Underline/Underline";
import { createProjectData } from "../projectInterface";

export const projectData = createProjectData({
  // 必須項目
  link: "human-mining",
  name: <span>人力でビットコインのマイニングしてみた</span>,
  description: (
    <p>
      仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。
      <Underline>SGDsに貢献したとてもエコな企画です。</Underline>
    </p>
  ),
  day1: "10:00～16:00",
  place: "2号館前ステージ",
  contact: "局 @koudaisai.com",
  projectTag: ["抽選券", "予約"],
  // 追加項目
  capacity: {
    title: "定員",
    content: "100人",
  },
  precautions: {
    title: "注意事項",
    content: [
      <Underline>
        マイニングは熱を発生します。熱中症には十分気をつけてください。
      </Underline>,
      "マイニングは過酷な作業です。前日は十分睡眠を取ってから参加してください。",
      "ハッシュ値はSHA-256です。正しいハッシュ値が見つかる確率は1/2^256です。前日に神社にお参りをしてください。",
      <Underline>
        電卓やスマートフォンの使用は禁止です。カンニングが見つかった場合は掲示板に掲載・停学処分となります。
      </Underline>,
    ],
  },
  prize: {
    title: "景品",
    content: "1BTC (900万円相当)",
  },
  mienai: {
    title: "見えない",
    content: "なぜ見えるのだ?",
    isHidden: true,
  },
  kara: {
    title: "中身空っぽだから見えないはず",
    content: "",
  },
});
