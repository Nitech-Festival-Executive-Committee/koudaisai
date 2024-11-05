import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule2 = {
  day1: {
    startDate: createDate({ date: 1, hour: 14, minute: 0 }),
    endDate: createDate({ date: 1, hour: 16, minute: 0 }),
  },
};

const place2 = "講義室101";

export const template2: ProjectData = {
  link: "ai_talk",
  name: "AIと未来の社会",
  tags: ["AI", "テクノロジー", "講演"],
  category: [CATEGORY.STUDENT, CATEGORY.EXPERIENCE],
  summary:
    "AIの技術がどのように未来の社会を変革していくのか、専門家による講演とディスカッションを行います。",

  schedule: schedule2,
  place: place2,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          AI技術の進化がどのように社会に影響を与え、未来を形作るのかを専門家が解説します。
          <Underline>ディスカッション形式のセッションもあります。</Underline>
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule2),
    },
    {
      title: "開催場所",
      content: place2,
    },
    {
      title: "定員",
      content: "80人",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>講演中は静かにご着席ください。</li>
          <li>
            <Underline>
              事前予約が必要です。予約フォームからお申し込みください。
            </Underline>
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "テックサポート @aitalk.com",
    },
    {
      title: "参加費",
      content: "無料",
    },
  ],
};
