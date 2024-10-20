/* eslint-disable react/jsx-key */
import { ProjectData } from "@/types/projectInterface";
import { CATEGORY } from "@/types/types";
import { convertScheduleToReactNode } from "@/utils/converter";
import { createDate } from "@/utils/date";

const schedule = {
  day1: {
    startDate: createDate({
      date: 1,
      hour: 15,
      minute: 15,
    }),
    endDate: createDate({
      date: 1,
      hour: 16,
      minute: 30,
    }),
  },
};

const place = "2号館前ステージ";

export const nitechChallenger: ProjectData = {
  // ContentBoxに含まないデータ
  link: "nitech-challenger",
  name: "NITechへの挑戦者",
  tags: [],
  category: [
    CATEGORY.STAGE_PROJECT,
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
  ],
  summary:
    "ステージ上で開催の本格推理型ミニゲーム企画!!パズルを解き切り、真相を突き止めることはできるのか!?",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          ステージ上で開催の本格推理型ミニゲーム企画!!
          <br />
          果たしてあなたはパズルを解き切り、真相を突き止めることはできるのか!?
          <br />
          見事真相を暴いた方々には、抽選で素敵な景品が贈呈されます!
          <br />
          挑戦者求ム‼
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
      content: "100人程度(用紙が無くなり次第終了です)",
    },
    {
      title: "ルール説明",
      content: (
        <p>
          参加する際には、事前に受付から配布される用紙をお受け取りください。以降の説明はオープニングにて行われます。
          <br />
          持ち物は必要ありません、お気軽にお越しください!!
        </p>
      ),
    },
    {
      title: "注意事項",
      content: <p>小学生以下は保護者同伴推奨です。</p>,
    },
    {
      title: "お問い合わせ先",
      content: "ステージ局 yuma.hirata@koudaisai.com",
    },
  ],
};
