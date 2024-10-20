import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule4 = {
  day1: {
    startDate: createDate(1, 13, 0),
    endDate: createDate(1, 15, 0),
  },
  day2: {
    startDate: createDate(2, 13, 0),
    endDate: createDate(2, 15, 0),
  },
};

const place4 = "サイエンスホール";

export const templateProjectData4: ProjectData = {
  link: "science_show",
  name: "不思議な科学の世界",
  tags: ["ファミリー", "サイエンス", "体験型"],
  category: [CATEGORY.FAMILY, CATEGORY.EXPERIENCE],
  summary:
    "親子で楽しめるサイエンスショー。科学の不思議を実験で体験！驚きと発見がいっぱいの2時間です。",

  schedule: schedule4,
  place: place4,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          親子で楽しめるサイエンスショー「不思議な科学の世界」。目の前で行われる実験や体験を通じて、科学の楽しさを感じていただけます。
          <Underline>驚きの科学現象に子供たちは大興奮！</Underline>
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule4),
    },
    {
      title: "開催場所",
      content: place4,
    },
    {
      title: "定員",
      content: "150人",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>小学生以下のお子様は保護者同伴でご参加ください。</li>
          <li>実験中のフラッシュ撮影は禁止です。</li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "サイエンスチーム @familyshow.com",
    },
    {
      title: "参加費",
      content: "無料",
    },
  ],
};
