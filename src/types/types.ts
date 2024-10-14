import { ReactNode } from "react";

// 期待するフィード形式
export interface BaseProjectData {
  link: ProjectBox; // project以下のリンク(ex. seiyu)
  name: ProjectBox; // プロジェクト名
  projectTag: ProjectBox | undefined; // 企画タグ(追加分)
  description: ProjectBox; // 企画紹介
  day1: ProjectBox | undefined; // 開催時刻。開催しない場合は空欄
  day2: ProjectBox | undefined; // 開催時刻。開催しない場合は空欄
  place: ProjectBox; // 開催場所
  capacity: ProjectBox | undefined; // 定員
  precautions: ProjectBox; // 注意事項
  prize: ProjectBox | undefined; // 景品
  contact: ProjectBox; // お問合せ先
  [key: string]: ProjectBox | undefined; // 任意のフィード
}

// 事前に用意された項目と任意の項目のどちらも、下の要素が全て設定されていることを保証する
export interface ProjectBox {
  title: string;
  content: string | ReactNode | (string | ReactNode)[];
  isHidden: boolean; // データを企画ページに通常通り標示するのではなく、加工したり他のページに表示する場合
}

export interface OptionalProjectBox {
  title: string;
  content: string | ReactNode | (string | ReactNode)[];
  isHidden?: boolean;
}
