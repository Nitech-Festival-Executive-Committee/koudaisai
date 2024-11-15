import { ProjectData } from "@/types/projectInterface";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const threeDimentionMmap: ProjectData = {
  // ContentBoxに含まないデータ
  link: "all-project", // 複数単語の場合はハイフンつなぎで記述
  name: "3Dマップ",
  tags: [""],
  category: [],
  timetableDescription: "",

  // ProjectBoxに変換する必要があるデータ
  schedule: {},
  place: "",

  projectBoxList: [],
  swiperOption: {
    href: "https://shika174.github.io/Nitech_3D-MAP/",
    brochurePath: "/62nd/whats-new/3dmap.webp",
  },
};

// Swiperで3Dマップへのリンク用のスライド
