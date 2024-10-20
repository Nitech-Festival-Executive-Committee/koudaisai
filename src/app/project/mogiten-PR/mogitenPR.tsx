/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

// TODO: タグ確認
// TODO:企画紹介文の!!確認

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 12,
      minute: 10,
    }),
    endDate: createDate({
      date: 1,
      hour: 12,
      minute: 30,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 12,
      minute: 20,
    }),
    endDate: createDate({
      date: 2,
      hour: 12,
      minute: 50,
    }),
  },
};

const place = " 2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const mogitenPR: ProjectData = {
  // ContentBoxに含まないデータ
  link: "mogiten-PR", // 複数単語の場合はハイフンつなぎで記述
  name: "模擬店 PR",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.EXHIBITION],
  summary: "模擬店出店者がステージで模擬店をPRする",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: "模擬店出店者がステージ上で模擬店のPRを行います！",
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
      content: "模擬局　中野貴博　takahiro.nakano@koudaisai.com",
    },
  ],
};
