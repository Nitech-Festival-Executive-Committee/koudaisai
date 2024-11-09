import ContentImage from "@/components/Content/ContentImage/ContentImage";
import Underline from "@/components/Content/Underline/Underline";
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
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
  timetableDescription:
    "特設ステージで大人気ラジオ局ZIP-FMと工大祭の内容盛りだくさんのコラボステージ!ナビゲーターのHillaryとまるり、そしてMCとして中川大輔が登場し、来場者参加型の企画や、GENZの公開録音を実施します",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <>
          <p>
            <Underline>ステージ企画</Underline>
            <br />
            特設ステージで大人気ラジオ局ZIP-FMと内容盛りだくさんのコラボステージを開催します!
            <br />
            <Underline>
              ステージ企画はHillaryチーム VS まるりチームの対決型
            </Underline>
            で、そこに来訪者が各ナビゲーターのチームに参加する形となります!
            <br />
            行う企画は、「以心伝心ゲーム」「50:50アンケート」や「〇×クイズ」「Beef
            or Chicken」の4つです!ZIP-FMのナビゲーターの方と共に対決しよう!
            <br />
            また、企画に参加していただいた方は、もれなく、豪華な参加賞や景品がもらえます!
            <br />
            <Underline>
              なんと、1万円分のプリペイドカードが当たるゲームもあるとか…!
            </Underline>
            <br />
            みなさんのご来場、お待ちしています!
            <br />
            <br />
            <Underline>スピーカー企画</Underline>
            <br />
            スピーカーから音楽が流れるよ!ぜひ聴いてみてね
            {/* TODO:できたら画像をビラの下に表示 */}
          </p>
          <ContentImage img="/62nd/project/zip-fm/speaker.webp" />
        </>
      ),
    },
    {
      title: "",
      content: (
        <p>
          <Underline>ステージ企画</Underline>
          <br />
          <Underline>
            ZIP-FM×工大祭 SPECIAL TALK LIVE supported by アドバンス電気工業
          </Underline>
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
      content: (
        <p>
          <Underline>ステージ企画</Underline>
          <br />
          2日目(11/17(日)): 14:30～16:00
          <br />
          <br />
          <Underline>スピーカー企画</Underline>
          <br />
          1日目(11/16(土)): 10:00～16:30
          <br />
          2日目(11/17(日)): 10:00～16:00
        </p>
      ),
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
      title: "参加ナビゲーター",
      content: (
        <ul>
          <li>中川大輔さん</li>
          <li>Hillaryさん</li>
          <li>まるりさん</li>
        </ul>
      ),
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
  ],
};
