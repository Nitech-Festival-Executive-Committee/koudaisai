/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 12,
      minute: 40,
    }),
    endDate: createDate({
      date: 1,
      hour: 13,
      minute: 40,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 13,
      minute: 0,
    }),
    endDate: createDate({
      date: 2,
      hour: 14,
      minute: 20,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const shootingGuesser: ProjectData = {
  // ContentBoxに含まないデータ
  link: "shooting-guesser", // 複数単語の場合はハイフンつなぎで記述
  name: "Shooting Guesser",
  tags: ["抽選券"],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
  ],
  summary:
    "ステージ上でストラックアウトをやります。投げる人は観客の皆さんのだれかです!投げる人が何番に当てるかを予想してもらいます。",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          ステージ上でストラックアウトをやります。投げる人は観客の皆さんのだれかです!投げる人が何番に当てるかを予想してもらいます。
          <br />
          だれでも参加できる企画になっており、景品も用意しているのでぜひご参加ください!
          <br />
          <Underline>2日とも来るといいことがあるかも...</Underline>
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
      title: "ルール説明",
      content: (
        <p>
          ランダムに参加者の中から一人選んでステージ上でストラックアウトをしてもらいます。選ばれなかった参加者の方には何番に当たるかを予想してもらって、予想が当たった方に得点が与えられます。詳しいルールに関しては企画中に説明します。
          <br />
          <Underline>
            企画開始前に抽選券と得点カードを配布します。得点カードは必ずお受け取りください。抽選券に関してはステージ上でボールを投げたい人のみがお受け取りください。
          </Underline>
        </p>
      ),
    },
    {
      title: "定員",
      content: "150人程度",
    },
    {
      title: "注意事項",
      content:
        "企画中に移動してもらう場面が多くあります。他の方とぶつからないように注意して移動してください。",
    },
    {
      title: "お問い合わせ先",
      content: "ステージ局 ichiro.hayashi@koudaisai.com",
    },
  ],
};
