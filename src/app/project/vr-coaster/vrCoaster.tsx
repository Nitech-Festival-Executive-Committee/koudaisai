/* eslint-disable react/jsx-key */
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

const place = "23号館2321講義室";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const vrCoaster: ProjectData = {
  // ContentBoxに含まないデータ
  link: "vr-coaster", // 複数単語の場合はハイフンつなぎで記述
  name: "VRコースター",
  tags: [],
  category: [CATEGORY.STUDENT, CATEGORY.FAMILY, CATEGORY.EXPERIENCE],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          迫力満点のVRコースターに乗ってみませんか⁈仮想現実の世界でスリル満点の体験を、リアルな動きと共に楽しめます！
          <br />
          手作りの木製カートに乗り込み、心臓が高鳴るジェットコースターの世界をお楽しみください‼
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
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>
              心臓に疾患のある方、妊娠中の方、中学生未満の方はご参加をお控えください。
            </Underline>
            VR映像による映像酔いを起こす場合がございます。
          </li>
          <li>
            乗車中、乗車後に映像酔いなどの体調不良などが生じた場合にはスタッフにお声がけください。
          </li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: "企画局 rito.saiki@koudaisai.com",
    },
  ],
};
