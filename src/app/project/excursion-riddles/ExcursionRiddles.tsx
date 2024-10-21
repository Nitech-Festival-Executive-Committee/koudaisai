/* eslint-disable react/jsx-key */
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
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
      hour: 15,
      minute: 50,
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
      minute: 10,
    }),
  },
};

const place = "名工大全域";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const excursionRiddles: ProjectData = {
  // ContentBoxに含まないデータ
  link: "excursion-riddles", // 複数単語の場合はハイフンつなぎで記述
  name: "謎解き-周遊型-",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.STUDENT, CATEGORY.EXPERIENCE],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          謎解き-周遊型- 隠されし秘宝を追え！
          <br />
          <Underline>名工大全域を使った謎解き企画!</Underline>
          <br />
          皆さんの工大祭をちょっと豊かに、工大祭を楽しみながらおまけで遊べます！
          <br />
          ちりばめられた謎を解くのはあなたのひらめきかも！？
        </p>
      ),
    },
    {
      title: "開催日程",
      content: (
        <p>
          11月16日(土) 10:00～15:50 (キット配布 15:10まで)
          <br />
          11月17日(日) 10:00～15:10 (キット配布 14:40まで)
        </p>
      ),
    },
    {
      title: "開催場所",
      content: (
        <p>
          キット配布場所および受付：正門インフォメーション横
          <br />
          開催場所：名工大全域
        </p>
      ),
    },
    {
      title: "定員",
      content: "各日約1000組 (キットがなくなり次第終了)",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              23号館で開催される謎解き(ルーム型)とは別企画です。
            </Underline>
            <br />
            こちらは予約不要ですが謎解き(ルーム型)は要予約です。
            <br />
            詳しくは<a href="../room-riddles">謎解き(ルーム型)</a> まで
          </li>
          <li>所要時間: 約40分 (移動時間込み)</li>
          <li>キットがなくなり次第終了です。</li>
          <li>キットは1組あたり1セットまで、原則再配布はございません。</li>
          <li>謎の難易度上、小学生以下は保護者の同伴推奨</li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "企画局 junsei.tsuchida@koudaisai.com",
    },
  ],
};
