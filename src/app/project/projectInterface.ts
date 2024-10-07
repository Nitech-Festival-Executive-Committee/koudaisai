import { ReactNode, isValidElement, cloneElement } from "react";

export interface projectBox {
  title: string;
  content: string | ReactNode | (string | ReactNode)[];
  isHidden?: boolean;
}

// 期待するフィード形式
export interface baseProjectData {
  link: projectBox; // project以下のリンク(ex. seiyu)
  name: projectBox; // プロジェクト名
  description: projectBox; // 企画紹介
  day1?: projectBox; // 開催時刻。開催しない場合は空欄
  day2?: projectBox; // 開催時刻。開催しない場合は空欄
  place: projectBox; // 開催場所
  contact: projectBox; // お問合せ先
  projectTag?: projectBox; // 企画タグ
  [key: string]: projectBox | undefined; // 任意のフィード
}

export const createProjectData = (data: {
  link: string | ReactNode;
  name: string | ReactNode;
  description: string | ReactNode;
  day1?: string | ReactNode;
  day2?: string | ReactNode;
  place: string | ReactNode;
  contact: string | ReactNode;
  projectTag?: (string | ReactNode)[];
  [key: string]: string | projectBox | ReactNode | undefined;
}): baseProjectData => {
  return {
    // 必須フィードを設定
    link: { title: "リンク", content: data.link, isHidden: true },
    name: { title: "プロジェクト名", content: data.name, isHidden: true },
    description: {
      title: "企画紹介",
      content: data.description,
      isHidden: false,
    },
    day1: data.day1
      ? { title: "1日目", content: data.day1, isHidden: false }
      : undefined,
    day2: data.day2
      ? { title: "2日目", content: data.day2, isHidden: false }
      : undefined,
    place: { title: "開催場所", content: data.place, isHidden: false },
    contact: { title: "お問合せ先", content: data.contact, isHidden: false },
    projectTag: data.projectTag
      ? { title: "企画タグ", content: data.projectTag, isHidden: true }
      : undefined,
    // 任意のフィールドにも同様に設定
    ...Object.keys(data).reduce(
      (acc, key) => {
        if (
          ![
            "link",
            "name",
            "description",
            "day1",
            "day2",
            "place",
            "contact",
            "projectTag",
          ].includes(key)
        ) {
          const customField = data[key] as projectBox;
          acc[key] = {
            title: customField.title,
            content: Array.isArray(customField.content)
              ? customField.content.map((item, index) =>
                  isValidElement(item)
                    ? cloneElement(item, { key: index })
                    : item
                ) // 自動でkeyを付与
              : customField.content,
            isHidden: customField.isHidden ?? false, // isHiddenが設定されていない場合はfalseを設定
          };
        }
        return acc;
      },
      {} as Record<string, projectBox | undefined>
    ),
  };
};
