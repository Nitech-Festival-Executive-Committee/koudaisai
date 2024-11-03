/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const allProject: ProjectData = {
  // ContentBoxに含まないデータ
  link: "all-project", // 複数単語の場合はハイフンつなぎで記述
  name: "企画一覧",
  tags: ["企画"],
  category: [],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule: {},
  place: "",

  projectBoxList: [],
  swiperOption: {
    href: "/project/",
    brochurePath: "62nd/project/projectTop.webp",
  },
};

// Swiperで企画ページへのリンク用のスライド
