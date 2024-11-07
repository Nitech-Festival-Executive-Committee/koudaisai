import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 14,
      minute: 30,
    }),
    endDate: createDate({
      date: 1,
      hour: 16,
      minute: 30,
    }),
  },
};

const place = "NITech Hall 2階 ラーニング・コモンズ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const architectureDiscussion: ProjectData = {
  // ContentBoxに含まないデータ
  link: "architectureDiscussion", // 複数単語の場合はハイフンつなぎで記述
  name: "「原寸制作と建築教育」討論会",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.STUDENT, CATEGORY.EXHIBITION],
  summary:
    "仮想通貨ビットコインを人力でマイニングします。GPUより高速でハッシュを見つけよう。",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          NITech
          Pavilionは名古屋工業大学建築・デザイン分野の学部1年生向けの原寸制作課題です。
          <br />
          2024年度の設計テーマ「与誰同座」は蘇軾(そ・しょく、蘇東坡)の漢詩『点絳唇・閑倚胡床』の一節「与誰同座，明月清風我」（「誰と共に座るか、明るい月と爽やかな風と私だ」）から引用しています。詩の最後には詩人の友人も登場し、風月を分かち合う情景が描かれています。
          <br />
          パビリオンには座席が設けられており、活動に参加したり友人を待ったり、疲れた時には休憩の場としてもご利用いただけます。ぜひ気軽に立ち寄り、座ってみてください。
          <br />
          また、11月16日(土)午後には「原寸制作と建築教育」をテーマとする討論会が開催されます。名古屋工業大学、名古屋市立大学、同済大学（中国・上海）が、原寸制作課題の実施経験を共有する予定です。
          <br />
          建築学科や現物教育にご興味がある方、ぜひご参加ください！
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule),
    },
    {
      title: "開催場所",
      content: (
        <p>
          {place}
          <br />
          NITech Hall
          の正面自動扉からお入りいただき、屋内の階段で2階へお進みください。
        </p>
      ),
    },
    {
      title: "プログラム",
      content: (
        <p>
          14:30~15:35 原寸制作課題実施経験紹介
          <br />
          15:35~ ディスカション
        </p>
      ),
    },
  ],
};
