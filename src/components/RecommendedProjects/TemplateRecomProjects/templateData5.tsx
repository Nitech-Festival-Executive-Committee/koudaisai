import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule5 = {
  day1: {
    startDate: createDate(1, 10, 0),
    endDate: createDate(1, 12, 0),
  },
};

const place5 = "家庭科室";

export const templateProjectData5: ProjectData = {
  link: "cooking_workshop",
  name: "世界の料理を作ろう！",
  tags: ["料理", "ワークショップ", "体験型"],
  category: [CATEGORY.EXPERIENCE, CATEGORY.FAMILY],
  summary:
    "世界の各地の料理を学びながら、一緒に調理体験ができるワークショップ。家族や友達と一緒に楽しめます！",

  schedule: schedule5,
  place: place5,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          「世界の料理を作ろう！」では、様々な国の代表的な料理を学び、実際に調理体験ができます。シェフの指導のもと、楽しく料理を学びましょう！
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule5),
    },
    {
      title: "開催場所",
      content: place5,
    },
    {
      title: "定員",
      content: "30人",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>調理器具や食材はすべてこちらで準備します。</li>
          <li>
            <Underline>
              食物アレルギーをお持ちの方は、事前にご連絡ください。
            </Underline>
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "ワークショップチーム @cookingworld.com",
    },
    {
      title: "参加費",
      content: "500円 (材料費込み)",
    },
  ],
};
