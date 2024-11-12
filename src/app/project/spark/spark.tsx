import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 10,
      minute: 15,
    }),
    endDate: createDate({
      date: 1,
      hour: 12,
      minute: 0,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 2,
    }),
    endDate: createDate({
      date: 2,
      hour: 12,
      minute: 15,
    }),
  },
};

const place = "2号館前ステージ";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const spark: ProjectData = {
  // ContentBoxに含まないデータ
  link: "spark", // 複数単語の場合はハイフンつなぎで記述
  name: "spark!!",
  tags: [],
  category: [CATEGORY.STAGE_PROJECT, CATEGORY.STUDENT],
  timetableDescription:
    "大学生を中心とした部活・サークル等の団体がパフォーマンスをする企画を行います! ",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          大学生を中心とした部活・サークル等の団体がパフォーマンスをする企画を行います!
        </p>
      ),
      position: "left",
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule),
      position: "left",
    },
    {
      title: "開催場所",
      content: place,
      position: "left",
    },
    {
      title: "ゲスト",
      content: (
        <p>
          <span>① 名古屋工業大学吹奏楽団</span>
          <br />
          <span>② 金城学院大学アイドルコピーダンスサークル əspoir</span>
          <br />
          <span>③ 紅のナポリタン</span>
          <br />
          <span>④ 金城学院大学ダンス部 BEAT</span>
          <br />
          <span>⑤ DFC</span>
          <br />
          <span>⑥ glitter</span>
          <br />
          <span>⑦ 名古屋工業大学アカペラサークル Grazie!!</span>
          <br />
          <span>⑧ NIT PACOD</span>
        </p>
      ),
      position: "left",
    },
    {
      title: "注意事項",
      content: (
        <>
          <p>以下の行為を禁止とします。</p>
          <ol style={{ paddingLeft: "40px" }}>
            <li>ダイブ・サークル・モッシュなどの危険行為</li>
            <li>飛び入り参加など事前告知がない行為</li>
            <li>食品提供行為</li>
            <li>火を扱う行為</li>
            <li>
              関係者以外が許可なく控えテント・PAテント・ステージなどに立ち入る行為
            </li>
            <li>
              ステージの上、ステージ周辺での布教活動や、許可のない宣伝にあたる行為
            </li>
            <li>グッズを販売する行為</li>
            <li>ステージ上にて20人を超えてのダンス等、激しい動きをする行為</li>
            <li>その他、暴行など明らかな危険行為や、犯罪にあたる行為</li>
          </ol>

          <p>
            また、<Underline>途中で観覧席の移動がございます。</Underline>
            スタッフの指示に従い、ご協力をお願いいたしします。
          </p>
        </>
      ),
    },
  ],
};

export const sparkScheduleDay1 = {
  column: ["時間", "団体名"],
  data: [
    ["10：20〜10：40", "名古屋工業大学吹奏楽団"],
    ["10：40〜10：45", "転換"],
    ["10：45〜11：05", "金城学院大学アイドルコピーダンスサークルəspoir"],
    ["11：05〜11：08", "転換"],
    ["11：08〜11：28", "紅のナポリタン"],
    ["11：28〜11：33", "転換"],
    ["11：33〜11：55", "金城学院大学ダンス部 BEAT"],
  ],

  widthWeight: [2, 5],
};

export const sparkScheduleDay2 = {
  column: ["時間", "団体名"],
  data: [
    ["10：07〜10：34", "DFC"],
    ["10：34〜10：36", "転換"],
    ["10：36〜11：06", "glitter"],
    ["11：06〜11：08", "転換"],
    ["11：08〜11：38", "名古屋工業大学アカペラサークル Grazie!!"],
    ["11：38〜11：40", "転換"],
    ["11：40〜12：10", "NIT PACOD"],
  ],
  widthWeight: [1, 2],
};
