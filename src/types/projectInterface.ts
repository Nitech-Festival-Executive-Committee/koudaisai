import { ReactNode } from "react";
import { CategoryType, Schedule } from "./types";

// 事前に用意された項目と任意の項目のどちらも、下の要素が全て設定されていることを保証する
export interface ProjectBox {
  title: string;
  content: string | ReactNode;
}

export interface ProjectData {
  // ContentBoxとしては表示しないデータ
  link: string;
  name: string;
  tags?: string[];
  category: CategoryType[]; // ENUM
  summary: string;

  // ProjectBoxに変換する必要があるデータ
  schedule: Schedule;
  place: string;

  // 任意のデータ(こちらも企画ページにしか表示しない)
  projectBoxList: ProjectBox[];
}
