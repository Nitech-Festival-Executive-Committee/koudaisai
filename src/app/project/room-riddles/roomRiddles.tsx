import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 30,
    }),
    endDate: createDate({
      date: 1,
      hour: 15,
      minute: 30,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 30,
    }),
    endDate: createDate({
      date: 2,
      hour: 15,
      minute: 30,
    }),
  },
};
const place = "2331、2341講義室";

export const roomRiddles: ProjectData = {
  // ContentBoxに含まないデータ
  link: "room-riddles", // 複数単語の場合はハイフンつなぎで記述
  name: "謎解き~変化からの脱出~",
  tags: ["予約"],
  category: [CATEGORY.STUDENT, CATEGORY.FAMILY, CATEGORY.EXPERIENCE],
  summary: "制限時間内に、講義室にちりばめられた謎を解き脱出する。",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          制限時間内に、講義室にちりばめられた謎を解き、脱出を目指せ！！
          チームを脱出に導くのはあなたのひらめきかも！？
        </p>
      ),
    },
    {
      title: "開催日程",
      content: (
        <p>
          1日目 10:30～、11:30～、12:30～、13:30～、14:30～
          <br />
          2日目 10:30～、11:30～、12:30～、13:30～、14:30～
        </p>
      ),
    },
    {
      title: "開催場所",
      content: place,
    },
    {
      title: "定員",
      content: (
        <p>
          1グループ10人前後
          <br />
          1日10グループ
        </p>
      ),
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              10:00より謎解き受付（2331講義室前）にて各公演の整理券を配布、なくなり次第終了。当日のみ受付。
            </Underline>
          </li>
          <li>1グループ約10人、1公演約1時間（謎解きの制限時間は40分）</li>
          <li>他の参加者の方々と協力して謎解きをする可能性あり。</li>
          <li>小学生以下は保護者の同伴推奨。</li>
        </ul>
      ),
    },
  ],

  swiperOption: {
    dayTag: { day1: true, day2: true },
    schedule: {
      day1: "初回10:30～",
      day2: "初回10:30～",
    },
  },
};
