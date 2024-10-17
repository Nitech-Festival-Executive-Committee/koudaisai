/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 0,
    }),
    endDate: createDate({
      date: 1,
      hour: 16,
      minute: 0,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 0,
    }),
    endDate: createDate({
      date: 2,
      hour: 16,
      minute: 0,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const templateProject: ProjectData = {
  // ContentBoxに含まないデータ
  link: "template", // 複数単語の場合はハイフンつなぎで記述
  name: "人力マイニング",
  tags: ["抽選券", "予約"],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
    CATEGORY.EXHIBITION,
  ],
  summary:
    "仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。
          <Underline>SGDsに貢献したとてもエコな企画です。</Underline>
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule),
    },
    {
      title: "開催場所",
      content: place,
    },
    {
      title: "定員",
      content: "100人",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              マイニングは熱を発生します。熱中症には十分気をつけてください。
            </Underline>
          </li>
          <li>
            マイニングは過酷な作業です。前日は十分睡眠を取ってから参加してください。
          </li>
          <li>
            ハッシュ値はSHA-256です。正しいハッシュ値が見つかる確率は1/2^256です。前日に神社にお参りをしてください。
          </li>
          <li>
            <Underline>
              電卓やスマートフォンの使用は禁止です。カンニングが見つかった場合は掲示板に掲載・停学処分となります。
            </Underline>
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "局 @koudaisai.com",
    },
    {
      title: "景品",
      content: "1BTC (900万円相当)",
    },
    {
      title: "中身空っぽだから見えないはず",
      content: "",
    },
    {
      title: "ほげ",
      content: "ほげ",
    },
  ],
};
