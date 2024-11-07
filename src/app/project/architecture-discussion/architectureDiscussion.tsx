import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 14,
      minute: 30,
    }),
    endDate: createDate({
      date: 1,
      hour: 16,
      minute: 30,
    }),
  },
};

const place = "NITech Hall 2階 ESPON STUDIO(ラーニング・コモンズ)";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const architectureDiscussion: ProjectData = {
  // ContentBoxに含まないデータ
  link: "architecture-discussion", // 複数単語の場合はハイフンつなぎで記述
  name: "「原寸制作と建築教育」討論会",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.STUDENT, CATEGORY.EXHIBITION],
  timetableDescription: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          「原寸制作と建築教育」をテーマとする討論会が開催されます。名古屋工業大学、名古屋市立大学、同済大学（中国・上海）が、原寸制作課題の実施経験を共有する予定です。
          <br />
          建築学科や現物教育にご興味がある方、ぜひご参加ください！
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
          {place}
          <br />
          NITech Hall
          の正面自動扉からお入りいただき、屋内の階段で2階へお進みください。
        </p>
      ),
    },
    {
      title: "プログラム",
      content: (
        <p>
          14:30~15:35 原寸制作課題実施経験紹介
          <br />
          15:35~ ディスカション
        </p>
      ),
    },
    {
      title: "座長",
      content: "名古屋工業大学  佐藤 篤司 分野長",
    },
    {
      title: "登壇者",
      content: (
        <p>
          名古屋工業大学{"  "}陳 曄 助教
          <br />
          同済大学{"  "}崔 哲 准教授(オンライン)
          <br />
          名古屋市立大学{"  "}太幡 英亮 教授
        </p>
      ),
    },
  ],
};
