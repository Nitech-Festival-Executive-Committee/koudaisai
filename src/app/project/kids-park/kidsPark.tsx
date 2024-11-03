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

const place = "体育館";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const kidsPark: ProjectData = {
  // ContentBoxに含まないデータ
  link: "kids-park", // 複数単語の場合はハイフンつなぎで記述
  name: "キッズパーク",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.EXPERIENCE],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          例年、小さい子供から大人まで楽しめる企画を行っております。
          <br />
          本年は、工作コーナーでシャボン玉作りを行います。その他、射的、ボーリングなどの縁日コーナー、迷路コーナーも行っております。来場してくださった方々が心躍る楽しい企画にいたします。
        </p>
      ),
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
      title: "注意事項",
      content: (
        <ul>
          <li>10時より受付開始です。</li>
          <li>小学生以下は保護者の同伴推奨です。</li>
        </ul>
      ),
    },
  ],
};
