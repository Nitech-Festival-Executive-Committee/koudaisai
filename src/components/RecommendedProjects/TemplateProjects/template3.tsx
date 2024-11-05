import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule3 = {
  day1: {
    startDate: createDate({ date: 1, hour: 11, minute: 0 }),
    endDate: createDate({ date: 1, hour: 17, minute: 0 }),
  },
  day2: {
    startDate: createDate({ date: 2, hour: 11, minute: 0 }),
    endDate: createDate({ date: 2, hour: 17, minute: 0 }),
  },
};

const place3 = "美術館ホール";

export const template3: ProjectData = {
  link: "art_exhibition",
  name: "未来へのデザイン",
  tags: ["アート", "デザイン", "展示"],
  category: [CATEGORY.EXHIBITION],
  summary:
    "未来の都市、建築、プロダクトデザインをテーマにした展示会。次世代のクリエイティブを体感してください。",

  schedule: schedule3,
  place: place3,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          「未来へのデザイン」は、次世代の都市や建築、プロダクトデザインをテーマにした展示会です。
          新進気鋭のデザイナーたちのアイデアとビジョンが詰まった作品をご覧ください。
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule3),
    },
    {
      title: "開催場所",
      content: place3,
    },
    {
      title: "定員",
      content: "特に定員はありません",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>写真撮影は禁止されています。</li>
          <li>
            <Underline>飲食物の持ち込みはご遠慮ください。</Underline>
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "展示会運営 @artshow.com",
    },
    {
      title: "特別企画",
      content: "ゲストによるトークセッション (13:00~14:00)",
    },
  ],
};
