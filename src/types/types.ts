import { ReactNode } from "react";

export interface Period {
  startDate: Date;
  endDate: Date;
}
export interface Schedule {
  day1?: Period;
  day2?: Period;
}

export const CATEGORY = {
  STAGE_PROJECT: "STAGE", // ステージ企画
  FAMILY: "FAMILY", // 親子向け
  STUDENT: "STUDENT", // 学生向け
  EXPERIENCE: "EXPERIENCE", // 体験型
  EXHIBITION: "EXHIBITION", // 展示
} as const;
export type CategoryType = (typeof CATEGORY)[keyof typeof CATEGORY];

export const animationTypes = [
  "left",
  "right",
  "center",
  "bottom",
  "top",
] as const;
export type AnimationType = (typeof animationTypes)[number];

export interface AnimationConfigs {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number; // アニメーションの移動距離(ex. 右に100px移動しながらフェードイン)
  margin?: number; // 画面に入ってから何px超えたら表示するか
}

export interface Announcement {
  title: string | ReactNode;
  content?: string | ReactNode;
  date: string;
  category?: "important" | "default";
}
