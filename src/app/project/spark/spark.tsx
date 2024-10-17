/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

// TODO:サマリー確認
// TODO:タグ確認

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 14,
    }),
    endDate: createDate({
      date: 1,
      hour: 12,
      minute: 0,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 6,
    }),
    endDate: createDate({
      date: 2,
      hour: 12,
      minute: 10,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const spark: ProjectData = {
  // ContentBoxに含まないデータ
  link: "spark", // 複数単語の場合はハイフンつなぎで記述
  name: "spark!!",
  tags: [],
  category: [CATEGORY.STAGE_PROJECT, CATEGORY.STUDENT],
  summary:
    "大学生を中心とした部活・サークル等の団体がパフォーマンスをする企画を行います！ ",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          大学生を中心とした部活・サークル等の団体がパフォーマンスをする企画を行います！
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
      content: (
        <>
          <p>以下の行為を禁止とします。</p>
          <ol>
            <li>ダイブ・サークル・モッシュなどの危険行為</li>
            <li>飛び入り参加など事前告知がない行為</li>
            <li>食品提供行為</li>
            <li>火を扱う行為</li>
            <li>
              関係者以外が許可なく控えテント・PAテント・ステージなどに立ち入る行為
            </li>
            <li>
              ステージの上、ステージ周辺での布教活動や、許可のない宣伝にあたる行為
            </li>
            <li>グッズを販売する行為</li>
            <li>ステージ上にて20人を超えてのダンス等、激しい動きをする行為</li>
            <li>その他、暴行など明らかな危険行為や、犯罪にあたる行為</li>
          </ol>
        </>
      ),
    },
  ],
};
