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

const place = "23号館前通路";

// TODO: swiper-slideにスライドを追加
export const communityStreet: ProjectData = {
  // ContentBoxに含まないデータ
  link: "community-street",
  name: "コミュニティーストリート",
  tags: [],
  category: [CATEGORY.FAMILY, CATEGORY.EXHIBITION],
  summary: "各テント内に設営されているブース出展を楽しんでください！",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          各テント内に設営されているブース出展を楽しんでください！ <br />
          各ブースに設置されたスタンプをすべて集めると景品と交換できます！
        </p>
      ),
    },
    {
      title: "ルール説明",
      content: (
        <p>
          各ブースにスタンプが置いてあるので、すべてのスタンプを制覇して景品と交換する。
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
      title: "お問い合わせ先",
      content: "地域局 aoto.miura@koudaisai.com",
    },
  ],
};
