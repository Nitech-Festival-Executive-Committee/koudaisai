import { ReactNode, isValidElement, cloneElement } from "react";

// 事前に用意された項目と任意の項目のどちらも、下の要素が全て設定されていることを保証する
export interface projectBox {
  title: string;
  content: string | ReactNode | (string | ReactNode)[];
  isHidden: boolean;
}

export interface optionalProjectBox {
  title: string;
  content: string | ReactNode | (string | ReactNode)[];
  isHidden?: boolean;
}

// 期待するフィード形式
export interface baseProjectData {
  link: projectBox; // project以下のリンク(ex. seiyu)
  name: projectBox; // プロジェクト名
  day1: projectBox | undefined; // 開催時刻。開催しない場合は空欄
  day2: projectBox | undefined; // 開催時刻。開催しない場合は空欄
  projectTag: projectBox | undefined; // 企画タグ(追加分)
  description: projectBox; // 企画紹介
  place: projectBox; // 開催場所
  capacity: projectBox | undefined; // 定員
  precautions: projectBox; // 注意事項
  prize: projectBox | undefined; // 景品
  contact: projectBox; // お問合せ先
  [key: string]: projectBox | undefined; // 任意のフィード
}

export const createProjectData = (data: {
  link: string;
  name: string;
  day1?: string | ReactNode;
  day2?: string | ReactNode;
  projectTag?: (string | ReactNode)[];
  description: string | ReactNode;
  place: string | ReactNode;
  capacity?: string | ReactNode;
  precautions?: string | ReactNode | (string | ReactNode)[];
  prize?: ReactNode;
  contact: string | ReactNode;
  [key: string]: string | optionalProjectBox | ReactNode | undefined;
}): baseProjectData => {
  // 必須項目の定義
  const requiredFields: Record<string, { title: string; hidden: boolean }> = {
    link: { title: "リンク", hidden: true },
    name: { title: "プロジェクト名", hidden: true },
    day1: { title: "1日目", hidden: false },
    day2: { title: "2日目", hidden: false },
    projectTag: { title: "企画タグ", hidden: true },
    description: { title: "企画紹介", hidden: false },
    place: { title: "開催場所", hidden: false },
    capacity: { title: "定員", hidden: false },
    precautions: { title: "注意事項", hidden: false },
    prize: { title: "景品", hidden: false },
    contact: { title: "お問合せ先", hidden: false },
  };

  // データがテンプレートで指定された順序で処理されるように、順序を保持
  const orderedData: Partial<baseProjectData> = {};

  // テンプレートの項目の順番に従って処理
  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (key in requiredFields) {
      // 必須項目の処理
      orderedData[key] = {
        title: requiredFields[key].title,
        content: value as string | ReactNode | (string | ReactNode)[],
        isHidden: requiredFields[key].hidden,
      };
    } else {
      // 任意項目の処理
      const customField = value as optionalProjectBox;
      if (
        customField &&
        typeof customField === "object" &&
        "content" in customField
      ) {
        orderedData[key] = {
          title: customField.title,
          content: Array.isArray(customField.content)
            ? customField.content.map((item, index) =>
                isValidElement(item) ? cloneElement(item, { key: index }) : item
              )
            : customField.content,
          isHidden: customField.isHidden ?? false,
        };
      }
    }
  });

  return orderedData as baseProjectData;
};
