import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 0,
    }),
    endDate: createDate({
      date: 1,
      hour: 16,
      minute: 0,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 0,
    }),
    endDate: createDate({
      date: 2,
      hour: 15,
      minute: 30,
    }),
  },
};

const place = "2号館前、各企画場所";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const stampRally: ProjectData = {
  // ContentBoxに含まないデータ
  link: "stamp-rally", // 複数単語の場合はハイフンつなぎで記述
  name: "スタンプラリー",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.FAMILY, CATEGORY.EXPERIENCE],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: <p>工大祭の企画をまわってスタンプを集めて景品をゲットしよう!</p>,
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule),
    },
    {
      title: "開催場所",
      content: place,
    },
    {
      title: "ルール説明",
      content: (
        <ul>
          <li>各企画場所をまわってスタンプを集める。</li>
          <li>パンフレットのスタンプラリーのページにスタンプを押す。</li>
          <li>最後に2号館前の交換所で景品をもらう。</li>
        </ul>
      ),
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>景品はスタンプを集めた方のみにお渡しします。</li>
          <li>景品は1人1つまでです。</li>
          <li>景品の数には限りがございます。ご了承ください。</li>
        </ul>
      ),
    },
  ],
};
