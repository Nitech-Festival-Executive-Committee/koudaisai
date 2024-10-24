/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day2: {
    startDate: createDate({
      date: 2,
      hour: 16,
      minute: 10,
    }),
    endDate: createDate({
      date: 2,
      hour: 18,
      minute: 10,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const kouya: ProjectData = {
  // ContentBoxに含まないデータ
  link: "kouya", // 複数単語の場合はハイフンつなぎで記述
  name: "後夜祭",
  tags: ["抽選会"],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
  ],
  summary: (
    <>
      工大祭の最後を飾るステージ企画です!
      <br />
      最後には第62回工大祭を振り返るプロジェクションマッピングも投影します!
    </>
  ),

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          工大祭の最後を飾るステージ企画です!
          <br />
          豪華景品が当たる抽選会やみんなで踊る名工ダンスなど全員が一体となって楽しめる企画を準備中です。
          <br />
          最後には第62回工大祭を振り返るプロジェクションマッピングも投影します!
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
      title: "注意事項",
      content:
        "ダンスを行う際は周りと十分に距離をとり、怪我をしないようご注意ください。",
    },
    {
      title: "抽選券の配布について",
      content: (
        <p>
          <Underline>
            抽選会で使用する抽選券は後夜祭開始前に2号館ステージ前にて配布を予定しています。
          </Underline>
        </p>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "ステージ局 yusei.hashimoto@koudaisai.com",
    },
  ],
};
