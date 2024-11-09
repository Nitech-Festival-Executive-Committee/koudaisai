import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 16,
      minute: 40,
    }),
    endDate: createDate({
      date: 1,
      hour: 18,
      minute: 30,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const tyuya: ProjectData = {
  // ContentBoxに含まないデータ
  link: "tyuya", // 複数単語の場合はハイフンつなぎで記述
  name: "中夜祭",
  tags: ["抽選券"],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
  ],
  timetableDescription: (
    <>
      今年のゲストは<Underline>ゴー☆ジャスさん</Underline>
      !観客の皆さんも一緒になって楽しめる企画を用意してお待ちしております!
    </>
  ),

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          毎年恒例!
          <br />
          工大祭1日目最後の企画である中夜祭では、
          <Underline>芸人によるネタ披露・ミニゲーム ・抽選会</Underline>
          の3つの企画を行います!
          <br />
          今年のゲストは<Underline>ゴー☆ジャスさん</Underline>
          !観客の皆さんも一緒になって楽しめる企画を用意してお待ちしております!
        </p>
      ),
    },
    {
      title: "ゲスト紹介",
      content: (
        <p>
          <Underline>ゴー☆ジャス</Underline>
          <br />
          サンミュージックプロダクション所属
          <br />
          君のハートにレボ⭐リューション!!!でお馴染み、アンドロメダ3丁目出身の泣く子も黙る宇宙海賊です
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
          <li>
            <Underline>撮影・録音等、記録行為は禁止です。</Underline>
          </li>
          <li>飲酒・喫煙は禁止です。</li>
          <li>
            主催者および出演者は、お荷物の紛失や盗難に対して一切の責任を負いません。
          </li>
          <li>
            主催者および出演者は、お客様同士のトラブルの責任を一切負いません。
          </li>
          <li>
            工大祭スタッフの指示に従わない場合、退場していただく場合や企画を中断または中止する場合があります。
          </li>
        </ul>
      ),
    },
    {
      title: "参加にあたって",
      content: (
        <p>
          <Underline>
            抽選券は2号館前ステージにて17時20分から10分間配布します。
          </Underline>
        </p>
      ),
    },
    {
      title: "景品",
      content: (
        <p>
          <Underline>
            ミニゲームはゴー⭐ジャスさんのサイン
            <br />
            抽選会は豪華景品多数用意してます!
          </Underline>
        </p>
      ),
    },
  ],
};
