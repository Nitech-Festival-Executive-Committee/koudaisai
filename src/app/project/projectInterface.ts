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
  return {
    link: { title: "リンク", content: data.link, isHidden: true },
    name: { title: "プロジェクト名", content: data.name, isHidden: true },
    day1: data.day1
      ? { title: "1日目", content: data.day1, isHidden: false }
      : undefined,
    day2: data.day2
      ? { title: "2日目", content: data.day2, isHidden: false }
      : undefined,
    projectTag: data.projectTag
      ? { title: "企画タグ", content: data.projectTag, isHidden: true }
      : undefined,
    description: {
      title: "企画紹介",
      content: data.description,
      isHidden: false,
    },
    place: { title: "開催場所", content: data.place, isHidden: false },
    capacity: data.capacity
      ? { title: "定員", content: data.capacity, isHidden: false }
      : undefined,
    precautions: {
      title: "注意事項",
      content: data.precautions
        ? Array.isArray(data.precautions)
          ? data.precautions.map((item, index) =>
              isValidElement(item) ? cloneElement(item, { key: index }) : item
            ) // 自動でkeyを付与
          : data.precautions
        : undefined,
      isHidden: false,
    },
    prize: data.prize
      ? { title: "景品", content: data.prize, isHidden: false }
      : undefined,
    contact: { title: "お問合せ先", content: data.contact, isHidden: false },
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
            "projectTag",
            "place",
            "capacity",
            "precautions",
            "prize",
            "contact",
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

// TODO: returnする時、引数の順番を変えないようにしたい
