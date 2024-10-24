/* eslint-disable react/jsx-key */
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
      hour: 16,
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
      hour: 15,
      minute: 30,
    }),
  },
};

const place = "12号館 1221, 1222講義室";

export const hauntedHouse: ProjectData = {
  // ContentBoxに含まないデータ
  link: "haunted-house",
  name: "お化け屋敷",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.EXPERIENCE, CATEGORY.FAMILY],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          今年は仕掛けのレベル別にコースをふたつに分けました！
          <br />
          子供から大人まで、幅広い年齢層の方に楽しんでいただけると思います♪
          <br />
          工大祭での思い出の一つになればうれしいです！
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
      title: "定員",
      content: "1グループ4人まで",
    },
    {
      title: "ルール説明",
      content: <p>クマのぬいぐるみを探せ！めいちゃんに見つかる前に…</p>,
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>小学生未満の方は保護者同伴でのご参加をお願いします。</li>
          <li>大きなお手荷物は受付にてお預かりいたします。</li>
          <li>
            心臓に疾患のある方、1人での移動が困難な方、妊娠中の方はご参加をお控えください。
          </li>
          <li>お化け屋敷内で抱っこ、おんぶはしないでください。</li>
          <li>お化け屋敷内で走ったり、仕掛けに触れたりしないでください。</li>
          <li>
            リタイアを希望する場合は、近くにいるスタッフにお声掛けください。
          </li>
          <li>
            ゴールした後は、懐中電灯を返却し、荷物を預けた場合は荷物を受け取るために受付に戻るようにしてください。
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "企画局 rinako.tomioka@koudaisai.com",
    },
  ],
};
