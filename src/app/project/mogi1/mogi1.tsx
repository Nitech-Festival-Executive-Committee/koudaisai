/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 30,
    }),
    endDate: createDate({
      date: 1,
      hour: 15,
      minute: 30,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 30,
    }),
    endDate: createDate({
      date: 2,
      hour: 15,
      minute: 0,
    }),
  },
};

const place = "投票所: 3号館南ゴミステーションテント 表彰: 2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const mogi1: ProjectData = {
  // ContentBoxに含まないデータ
  link: "mogi1", // 複数単語の場合はハイフンつなぎで記述
  name: "MOGI-1 グランプリ",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.STUDENT, CATEGORY.EXHIBITION],
  summary: "模擬店の人気投票を行います",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content:
        " 工大祭来訪者に最も良かった模擬店とメニューを投票してもらい、模擬店部門では1位から3位、メニュー部門では1位を後夜祭で表彰します!",
    },
    {
      title: "開催日程",
      content: (
        <p>
          1日目(11/16(土)): 10:30～15:30
          <br />
          2日目(11/17(日)): 10:30～15:00
          <br />
          表彰は2日目のみ 16:15~16:25
        </p>
      ),
    },
    {
      title: "開催場所",
      content: (
        <p>
          投票所: 3号館南ゴミステーションテント
          <br />
          表彰: 2号館前ステージ
        </p>
      ),
    },
    {
      title: "投票方法",
      content:
        "3号館南ゴミステーションテントの投票所で模擬店部門の投票シールとメニュー部門の投票用紙を配っています。",
    },
  ],
};
