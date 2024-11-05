import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule6 = {
  day1: {
    startDate: createDate({ date: 1, hour: 9, minute: 0 }),
    endDate: createDate({ date: 1, hour: 12, minute: 0 }),
  },
  day2: {
    startDate: createDate({ date: 2, hour: 13, minute: 0 }),
    endDate: createDate({ date: 2, hour: 17, minute: 0 }),
  },
};

const place6 = "1号館展示室";

export const template6: ProjectData = {
  // ContentBoxに含まないデータ
  link: "robotics",
  name: "Robotics Battle",
  tags: ["エンジニアリング", "ロボット", "対戦"],
  category: [CATEGORY.EXPERIENCE, CATEGORY.STUDENT],
  summary:
    "ロボットバトル大会！各チームが作成した自律型ロボットがリングで対決します。最強のロボットを目指せ！",

  // ProjectBoxに変換する必要があるデータ
  schedule: schedule6,
  place: place6,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          自律型ロボット同士がバトルフィールドで戦う大会です。各チームがプログラムしたロボットが勝敗を決します。AIと機械工学の結晶を目撃しよう！
          <Underline>優勝チームには豪華賞品があります。</Underline>
        </p>
      ),
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule6),
    },
    {
      title: "開催場所",
      content: place6,
    },
    {
      title: "定員",
      content: "50チーム (1チーム最大5人)",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              ロボットのプログラミングは事前に完了させておいてください。当日その場でのコード修正は認められません。
            </Underline>
          </li>
          <li>
            バトル中の破壊行為は禁止されていますが、予期せぬ故障は責任を負いません。
          </li>
          <li>バトルは3ラウンド制、1ラウンド3分で行われます。</li>
          <li>
            参加者は大会ルールを事前に熟読の上、同意したものとみなされます。
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "技術サポートチーム @robobattle.com",
    },
    {
      title: "景品",
      content: "優勝チームには最新のロボット開発キット",
    },
    {
      title: "参加資格",
      content: "学生限定（中学生以上）",
    },
    {
      title: "備考",
      content: "安全のため、観客席とリングはフェンスで隔てられています。",
    },
  ],
};
