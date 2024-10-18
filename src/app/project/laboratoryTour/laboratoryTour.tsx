/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";


//TODO: ツアー企画の日程が未定のため後日修正
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
      minute: 0,
    }),
  },
};

// 展示企画とツアー企画受付場所が異なるため修正必要
const place = "19号館";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const laboratoryTour: ProjectData = {
  // ContentBoxに含まないデータ
  link: "laboratoryTour", // 複数単語の場合はハイフンつなぎで記述
  name: "研究室出展企画",
  category: [
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXHIBITION,
  ],
  summary:
    "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          名古屋工業大学の研究内容を展示企画とツアー企画を通じて紹介します。
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
      title: "定員",
      content: "ツアー企画は毎回8名",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              ツアー企画は当日の予約が必要です。
            </Underline>
          </li>
          <li>
            ツアー各回の空き状況は受付で確認できます。
          </li>
          <li>
            対象年齢は高校生以上となります。
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "企画局 Takumi.kawada@koudaisai.com",
    },
    {
      title: "景品",
      content: "",
    },
  ],
};
