/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day2: {
    startDate: createDate({
      date: 2,
      hour: 14,
      minute: 30,
    }),
    endDate: createDate({
      date: 2,
      hour: 16,
      minute: 0,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const zipFM: ProjectData = {
  // ContentBoxに含まないデータ
  link: "zip-fm", // 複数単語の場合はハイフンつなぎで記述
  name: "ZIP-FM",
  tags: [],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
  ],
  summary: "大人気ラジオ局ZIP-FMと工大祭の内容盛りだくさんのコラボステージ!",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          <Underline>ステージ企画</Underline>
          <br />
          大人気ラジオ局ZIP-FMと工大祭の内容盛りだくさんのコラボステージ!
          <br />
          <br />
          <Underline>スピーカー企画</Underline>
          <br />
          スピーカーから音楽が流れるよ！ぜひ聴いてみてね
        </p>
      ),
    },
    {
      title: "",
      content: (
        <p>
          <Underline>ステージ企画</Underline>
          <br />
          ???
          <br />
          <br />
          <Underline>スピーカー企画</Underline>
          <br />
          52号館南・53号館西・19号館西・4号館前に設置されているスピーカーからラジオや音楽が流れます!
          <br />
          また、聞きたい流したい曲がある方は、「#ZIP×工大祭」をX(旧Twitter)でつけてポストしてください!
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
          <Underline>ステージ企画</Underline>
          <br />
          2号館前ステージ
          <br />
          <br />
          <Underline>スピーカー企画</Underline>
          <br />
          52号館南・53号館西・19号館西・4号館前
        </p>
      ),
    },
    {
      title: "ナビゲーター紹介",
      content: "???",
    },
    {
      title: "注意事項",
      content: (
        <p>
          <Underline>
            録音・録画・写真撮影などは本企画でのいかなる形での記録撮影は工大祭実行委員会が撮影しているのを除き、禁止いたします。
          </Underline>
        </p>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "広報局 yutaka.funahashi@koudaisai.com",
    },
  ],
};
