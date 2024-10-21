/* eslint-disable react/jsx-key */
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
      hour: 15,
      minute: 30,
    }),
  },
};

const place = "4号館";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const booth: ProjectData = {
  // ContentBoxに含まないデータ
  link: "booth", // 複数単語の場合はハイフンつなぎで記述
  name: "ブース展",
  category: [CATEGORY.FAMILY, CATEGORY.EXPERIENCE, CATEGORY.EXHIBITION],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <div>
          <p>学外より企業の方や学生団体をお呼びして様々な体験ができます！</p>
          <ul>
            <li>POLA THE BEAUTY</li>
            <ul>
              <li>ハンドトリートメント</li>
              <li>肌分析(ライト分析)</li>
            </ul>
            <li>椙山女学園易学研究会</li>
            <ul>
              <li>占い(手相, タロット, 筮竹)</li>
            </ul>
            <li>ナゴ校WinDra</li>
            <ul>
              <li>WinDraチャレンジ</li>
            </ul>
            <li>株式会社CRA</li>
            <ul>
              <li>サバゲーフィールドの紹介</li>
              <li>サバゲーで使用するエアガンや装備品などの展示</li>
              <li>エアガンの試射ブース</li>
            </ul>
          </ul>
        </div>
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
      title: "お問い合わせ先",
      content: "渉外局 yusuke.hiramatsu@koudaisai.com",
    },
  ],
};
