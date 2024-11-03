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

const place = "52・53号館とその周辺及び中庭と23号館2311講義室";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const gakuseiboshu: ProjectData = {
  // ContentBoxに含まないデータ
  link: "gakuseiboshu", // 複数単語の場合はハイフンつなぎで記述
  name: "学生募集",
  tags: [],
  category: [
    CATEGORY.FAMILY,
    CATEGORY.STUDENT,
    CATEGORY.EXPERIENCE,
    CATEGORY.EXHIBITION,
  ],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: "サークルなどの団体に工大祭に出展していただきます!",
    },
    {
      title: "開催日程",
      content: convertScheduleToReactNode(schedule),
    },
    {
      title: "開催場所",
      content: (
        <ul>
          <li>52・53号館周辺</li>
          <li>中庭</li>
          <li>23号館2311講義室</li>
        </ul>
      ),
    },
  ],
};
