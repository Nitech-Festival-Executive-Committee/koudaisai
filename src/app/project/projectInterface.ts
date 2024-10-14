import { BaseProjectData, OptionalProjectBox } from "@/types/types";
import { ReactNode, isValidElement, cloneElement } from "react";

export const createProjectData = (data: {
  link: string;
  name: string;
  projectTag?: (string | ReactNode)[];
  description: string | ReactNode;
  day1?: string | ReactNode;
  day2?: string | ReactNode;
  place: string | ReactNode;
  capacity?: string | ReactNode;
  precautions?: string | ReactNode | (string | ReactNode)[];
  prize?: ReactNode;
  contact: string | ReactNode;
  [key: string]: string | OptionalProjectBox | ReactNode | undefined;
}): BaseProjectData => {
  // 必須項目の定義
  const requiredFields: Record<string, { title: string; hidden: boolean }> = {
    link: { title: "リンク", hidden: true },
    name: { title: "プロジェクト名", hidden: true },
    projectTag: { title: "企画タグ", hidden: true },
    description: { title: "企画紹介", hidden: false },
    day1: { title: "1日目", hidden: false },
    day2: { title: "2日目", hidden: false },
    place: { title: "開催場所", hidden: false },
    capacity: { title: "定員", hidden: false },
    precautions: { title: "注意事項", hidden: false },
    prize: { title: "景品", hidden: false },
    contact: { title: "お問合せ先", hidden: false },
  };

  // データがテンプレートで指定された順序で処理されるように、順序を保持
  const orderedData: Partial<BaseProjectData> = {};

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
      const customField = value as OptionalProjectBox;
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

  return orderedData as BaseProjectData;
};
