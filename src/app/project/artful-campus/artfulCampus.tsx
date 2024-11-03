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
      minute: 0,
    }),
    endDate: createDate({
      date: 1,
      hour: 17,
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
      hour: 17,
      minute: 0,
    }),
  },
};

const place = "2号館1階 F＋GALLERY（0211教室横）";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const artfulCampus: ProjectData = {
  // ContentBoxに含まないデータ
  link: "artful-campus", // 複数単語の場合はハイフンつなぎで記述
  name: "アートフルキャンパス成果展示",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.EXPERIENCE, CATEGORY.EXHIBITION],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          <Underline>アートフルキャンパスF+LAB成果展示</Underline>
          <br />
          アートフルキャンパス「F+LAB」の一環として、愛知県立芸術大学（陶磁専攻）の佐藤研究室と名古屋工業大学メディア情報分野の田口研究室は
          <Underline>「DigitalとPrimitiveが出会う」</Underline>
          というテーマで共創研究を行っています。これは、｛土を掘る｝・｛炎で焼く｝といったプリミティブなプロセスから創作へと展開していく陶磁器制作と、人工知能や画像処理・複合現実といったテクノロジーが出会うことにより、相互の表現の可能性を広げるとともに、創出された作品と触れ合い、体験することで理解を深め、新たな可能性を追求していくことを目的としています。今回の成果展示では、陶芸が持つプリミティブな魅力を体験できる複合現実ワークショップを開催いたします。
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
  ],
};
