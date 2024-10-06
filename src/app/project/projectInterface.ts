export interface projectBox {
  title: string;
  content: string | HTMLElement | (string | HTMLElement)[];
  isHidden?: boolean;
}

// 期待するフィード
export interface baseProjectData {
  link: projectBox; // project以下のリンク(ex. seiyu)
  name: projectBox; // プロジェクト名
  description: projectBox; // 企画紹介
  day1?: projectBox; // 開催時刻。開催しない場合は空欄
  day2?: projectBox; // 開催時刻。開催しない場合は空欄
  place: projectBox; // 開催場所
  contact: projectBox; // お問合せ先
  [key: string]: projectBox | undefined; // 任意のフィード
}

export const createProjectData = (data: {
  link: string;
  name: string;
  description: string | HTMLElement;
  day1?: string;
  day2?: string;
  place: string | HTMLElement;
  contact: string | HTMLElement;
  [key: string]: string | projectBox | HTMLElement | undefined;
}): baseProjectData => {
  return {
    // 必須フィードを設定
    link: { title: "リンク", content: data.link, isHidden: true },
    name: { title: "プロジェクト名", content: data.name },
    description: { title: "企画紹介", content: data.description },
    day1: data.day1 ? { title: "1日目", content: data.day1 } : undefined,
    day2: data.day2 ? { title: "2日目", content: data.day2 } : undefined,
    place: { title: "開催場所", content: data.place },
    contact: { title: "お問合せ先", content: data.contact },
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
          ].includes(key)
        ) {
          const customField = data[key] as projectBox;
          acc[key] = {
            title: customField.title,
            content: customField.content,
            isHidden: customField.isHidden ?? false, // isHiddenが設定されていない場合はfalseを設定
          };
        }
        return acc;
      },
      {} as Record<string, projectBox | undefined>
    ),
  };
};
