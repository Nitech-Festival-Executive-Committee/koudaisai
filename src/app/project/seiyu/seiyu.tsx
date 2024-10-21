/* eslint-disable react/jsx-key */
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
      minute: 0,
    }),
    endDate: createDate({
      date: 2,
      hour: 15,
      minute: 0,
    }),
  },
};

const place = "Nitech Hall";

// 変数名を変更(ex. templateProject -> miniGame)
// ファイル名も変更(ex. templateProject.tsx -> miniGame.tsx)
export const seiyu: ProjectData = {
  // ContentBoxに含まないデータ
  link: "seiyu", // 複数単語の場合はハイフンつなぎで記述
  name: "声優トークショー",
  tags: ["チケット"],
  // 当てはまるカテゴリを選択
  category: [CATEGORY.FAMILY, CATEGORY.STUDENT, CATEGORY.EXPERIENCE],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "",
      content: (
        <p>
          <Underline>山根綺トークショー－sparkle!!－</Underline>
          <br />
          今年の声優トークショーは、
          <Underline>山根綺さん</Underline>
          に出演していただきます!
        </p>
      ),
    },
    {
      title: "ゲスト紹介",
      content: (
        <>
          <p>
            <Underline>山根綺(やまねあや)</Underline>
            <br />
            神奈川県出身、2月4日生まれ
            <br />
            「アイドルマスター シャイニーカラーズ」緋田美琴役
            <br />
            「Re:ゼロから始める異世界生活」リリアナ・マスカレード役
            <br />
            「女神のカフェテラス」月島流星役など多数のアニメ、ゲームで活躍する声優
          </p>
          <ContentImage img="/62nd/project/seiyu/seiyu.webp" alt="山根綺" />
        </>
      ),
    },
    {
      // TODO: SwiperOptionが実装されたら変更
      title: "開催日程",
      content: (
        <p>
          2日目(11/17(日))
          <br />
          13時開場、14時開演、15時閉演
        </p>
      ),
    },
    {
      title: "開催場所",
      content: place,
    },
    {
      title: "定員",
      content: "382名",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>撮影・録音などの記録行為は禁止とします。</Underline>
          </li>
          <li>
            公演中、携帯電話などの電子機器は電源をお切りいただくか、マナーモードにするなど周りのお客様へのご配慮をお願いします。
          </li>
          <li>会場内での水分補給を除く飲食は禁止です。</li>
          <li>会場内での飲酒・喫煙は禁止です。</li>
          <li>
            主催者および出演者は、会場内外でのお荷物の紛失や盗難に対して一切の責任を負いません。
          </li>
          <li>
            工大祭STAFF
            の指示に従わない場合は、退場していただく場合や公演を中断または中止する場合もございます。
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "ステージ局 kakeru.adachi@koudaisai.com",
    },
  ],
};
