/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const timetableData: ProjectData = {
  // ContentBoxに含まないデータ
  link: "timetable", // 複数単語の場合はハイフンつなぎで記述
  name: "タイムテーブル",
  tags: ["タイムテーブル"],
  category: [],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule: {},
  place: "",

  projectBoxList: [],
  swiperOption: {
    href: "/timetable/",
    brochurePath: "62nd/timetable/timetable.webp",
  },
};

// Swipeでタイムテーブルのページへのリンク用のスライド
