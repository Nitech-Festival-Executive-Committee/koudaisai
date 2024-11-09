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

const place = "52号館1階ゆめルーム";

export const vsDealer: ProjectData = {
  // ContentBoxに含まないデータ
  link: "vs-dealer",
  name: "VS ディーラー",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.EXPERIENCE],
  timetableDescription: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          ルーレット、ブラックジャック、ポーカー、バカラと、人気のゲームが勢ぞろい!
          初心者でも楽しめるよう、ルール説明やサポートも充実しています!
        </p>
      ),
    },
    {
      title: "開催日程",
      content: (
        <p>
          11月16日(土) 10:30～、11:30～、12:30～、13:30～、14:30～
          <br />
          11月17日(日) 10:30～、11:30～、12:30～、13:30～、14:30～
        </p>
      ),
    },
    {
      title: "開催場所",
      content: place,
    },
    {
      title: "定員",
      content: (
        <p>
          1回24人 <br />
          1日5グループ
        </p>
      ),
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            10:00より52号館1階ゆめルームにて各回の整理券を配布。なくなり次第終了。当日のみ受付。
          </li>
          <li>1回24人、所要時間約1時間</li>
          <li>
            各回4組、6人ずつで分かれてもらうので他の参加者と同じ組になる可能性があります。
          </li>
          <li>
            <Underline>
              小学生未満の方は参加できません。ご了承ください。
            </Underline>
          </li>
        </ul>
      ),
    },
  ],

  swiperOption: {
    brochureMini: true,
  },
};
