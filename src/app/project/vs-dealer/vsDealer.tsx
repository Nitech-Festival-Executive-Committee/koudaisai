import { ProjectData } from "@/types/projectInterface";
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
      hour: 15,
      minute: 0,
    }),
  },
  day2: {
    startDate: createDate({
      date: 2,
      hour: 10,
      minute: 30,
    }),
    endDate: createDate({
      date: 2,
      hour: 15,
      minute: 0,
    }),
  },
};

const place = "52号館1階ゆめルーム";

// TODO: タグの追加
// TODO: カテゴリーの追加
export const vsDealer: ProjectData = {
  // ContentBoxに含まないデータ
  link: "vs-dealer",
  name: "VS ディーラー",
  tags: [],
  category: [],
  summary: "",

  // ProjectBoxに変換する必要があるデータ
  schedule,
  place,

  projectBoxList: [
    {
      title: "企画紹介",
      content: (
        <p>
          ルーレット、ブラックジャック、ポーカー、バカラと、人気のゲームが勢ぞろい！
          初心者でも楽しめるよう、ルール説明やサポートも充実しています！
        </p>
      ),
    },
    {
      title: "開催日程",
      content: (
        <p>
          11月16日(土) 10:00～、10:30～、11:30～、12:30～、13:30～、14:30～
          <br />
          11月17日(日)10:30～、11:30～、12:30～、13:30～、14:30～
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
          <li>小学生未満の方は参加できません。ご了承ください。</li>
        </ul>
      ),
    },
    {
      title: "お問い合わせ先",
      content: (
        <p>
          名古屋工業大学第62回工大祭実行委員会企画局 野本意織
          <br />
          メールアドレス:iori.nomoto@koudaisai.com
        </p>
      ),
    },
  ],

  swiperOption: {
    dayTag: {
      day1: true,
      day2: true,
    },
    schedule: {
      day1: "初回10:00～",
      day2: "初回10:30～",
    },
  },
};
