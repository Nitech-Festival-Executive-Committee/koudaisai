import { createProjectData } from "../projectInterface";

// const precautionParagraph = Object.assign(document.createElement("Underline"), {
//   textContent:
//     "電卓やスマートフォンの使用は禁止です。カンニングが見つかった場合は掲示板に掲載・停学処分となります。",
// });

export const projectData = createProjectData({
  link: "human-mining",
  name: "人力でビットコインのマイニングしてみた",
  description:
    "仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。SGDsに貢献したとてもエコな企画です。",
  day1: "10:00～16:00",
  place: "2号館前ステージ",
  contact: "局 @koudaisai.com",
  capacity: {
    title: "定員",
    content: "100人",
  },
  precautions: {
    title: "注意事項",
    content: [
      "マイニングは過酷な作業です。前日は十分睡眠を取ってから参加してください。",
      "マイニングは熱を発生します。熱中症には十分気をつけてください。",
      "ハッシュ値はSHA-256です。正しいハッシュ値が見つかる確率は1/2^256です。前日に神社にお参りをしてください。",
      "電卓やスマートフォンの使用は禁止です。カンニングが見つかった場合は掲示板に掲載・停学処分となります。",
      // precautionParagraph,
    ],
  },
  prize: {
    title: "景品",
    content: "1BTC (900万円相当)",
  },
});

console.log(projectData);
