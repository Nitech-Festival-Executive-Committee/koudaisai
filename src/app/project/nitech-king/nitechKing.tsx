import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 13,
      minute: 50,
    }),
    endDate: createDate({
      date: 1,
      hour: 15,
      minute: 5,
    }),
  },
};

const place = "2号館前ステージ";

export const nitechKing: ProjectData = {
  // ContentBoxに含まないデータ
  link: "nitech-king",
  name: "名工大王",
  tags: [],
  category: [CATEGORY.STAGE_PROJECT, CATEGORY.STUDENT],
  summary: "4名の挑戦者が、名工大王の座をかけてクイズに挑戦します。",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          4名の挑戦者が、名工大王の座をかけてクイズに挑戦します。
          <br />
          2代目名工大王予想で景品ゲットのチャンス!
          <br />
          さらに、観覧者向けのオンラインクイズでも豪華景品が!?
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
      title: "景品",
      content: "◯◯のペアチケット",
    },
    {
      title: "参加方法",
      content: (
        <p>
          2号館ステージ前で配布されるシートに記載のQRコードを読み取ることで、オンラインクイズにアクセスできます。
          <br />
          また、シートの半券を投票箱に投票することで名工大王予想に参加できます。
          <br />
          ペアチケット、ギフトカードなど豪華景品ゲットのチャンス!!
        </p>
      ),
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>名工大王予想の投票は予選の途中で締め切らせていただきます。</li>
          <li>オンラインクイズは予選中のみ参加可能です。</li>
        </ul>
      ),
    },
  ],
};
