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

const place = "19号館1階ゆめ空間(日東工業ラウンジ)";

// 変数名を変更(ex. miniGame)
// ファイル名も変更(ex. miniGame.tsx)
export const laboratoryTour: ProjectData = {
  // ContentBoxに含まないデータ
  link: "laboratory-tour", // 複数単語の場合はハイフンつなぎで記述
  name: "研究室出展企画",
  tags: ["予約"],
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
          研究室出展企画では、工大祭で名古屋工業大学に興味を持った来場者の方に各研究室で行われている研究について知ってもらう機会を作るため、研究室の見学ツアーや研究室の研究成果を示す展示企画を行います。
        </p>
      ),
    },
    {
      title: "開催日程",
      content: (
        <p>
          1日目(11/16(土)): 10:30～, 11:30～, 13:30～, 14:30～
          <br />
          2日目(11/17(日)): 10:30～, 11:30～, 13:30～, 14:30～
        </p>
      ),
    },
    {
      title: "開催場所",
      content: (
        <p>
          展示企画: 19号館1階ゆめ空間(日東工業ラウンジ)
          <br />
          ツアー企画受付: 19号館前テント
        </p>
      ),
    },
    {
      title: "研究室一覧",
      content: (
        <ul>
          <li>柴田研究室</li>
          <li>早川研究室</li>
          <li>小坂・松盛研究室</li>
          <li>河辺・伊藤研究室</li>
          <li>高須研究室</li>
          <li>加藤正史研究室</li>
          <li>岩本・本多研究室</li>
          <li>尾形・小林研究室</li>
          <li>橋本研究室</li>
          <li>水文気候研究室</li>
        </ul>
      ),
    },
    {
      title: "定員",
      content: "ツアー企画は毎回8名",
    },
    {
      title: "注意事項",
      content: (
        <ul>
          <li>
            <Underline>ツアー企画は当日の予約が必要です。</Underline>
          </li>
          <li>ツアー各回の空き状況は受付で確認できます。</li>
          <li>対象年齢は高校生以上となります。</li>
        </ul>
      ),
    },
  ],
};
