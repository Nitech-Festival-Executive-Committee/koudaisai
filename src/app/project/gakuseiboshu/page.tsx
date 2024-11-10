import React from "react";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { gakuseiboshu as ProjectData } from "./gakuseiboshu";
import { guest1, guest2 } from "./guest";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentImage from "@/components/Content/ContentImage/ContentImage";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Gakuseiboshu() {
  const half = Math.ceil(guestInformationList.length / 2);
  const firstHalf = guestInformationList.slice(0, half);
  const secondHalf = guestInformationList.slice(half);

  return (
    <Project projectData={ProjectData}>
      <PageWrapper>
        <SectionBody>
          <ProjectTable tableObject={guest1} />
        </SectionBody>
        <SectionBody>
          <ProjectTable tableObject={guest2} />
        </SectionBody>
      </PageWrapper>

      <ContentTitle title="団体詳細" size={2} bigTitle />
      <PageWrapper>
        <SectionBody>{renderGuestList(firstHalf)}</SectionBody>

        <SectionBody>{renderGuestList(secondHalf)}</SectionBody>
      </PageWrapper>
    </Project>
  );
}

const renderGuestList = (guestList: GuestInformation[]) => {
  return guestList.map((guest, index) => (
    <React.Fragment key={index}>
      <ContentTitle title={guest.name} size={guest.nameSize} />
      <ContentBox title={"企画名"}>
        <p>{guest.title}</p>
      </ContentBox>
      <ContentBox title={"企画場所"}>
        <p>{guest.place}</p>
      </ContentBox>
      <ContentBox title={"企画日時"}>
        <p>{guest.time}</p>
      </ContentBox>
      <ContentBox title={"団体紹介"}>
        <p>{guest.Description}</p>
        {guest.img && <ContentImage img={guest.img} />}
        {guest.img2 && <ContentImage img={guest.img2} />}
      </ContentBox>
      <ContentBox title={"SNS"}>
        <p>{guest.link}</p>
      </ContentBox>
    </React.Fragment>
  ));
};

interface GuestInformation {
  name: string;
  title: string;
  nameSize: number;
  place: string;
  time: string | React.ReactNode;
  Description: string;
  link: string | React.ReactNode;
  img: string;
  img2: string;
}

const guestInformationList: GuestInformation[] = [
  {
    name: "レスキューロボットSAZANKA",
    nameSize: 6,
    title: "レスキューロボットを操縦してみよう!!",
    place: "5214講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "こんにちは!レスキューロボットプロジェクトSAZANKAです!私たちは災害地で活躍するレスキューロボットを制作しています!ロボットを操縦してみたい方はぜひ来てください!",
    link: (
      <>
        <a href="https://nitsazanka.studio.site/">Web</a>
        <br />
        <a href="https://x.com/nit_sazanka">X: @NIT_SAZANKA</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/sazanka.webp",
    img2: "",
  },
  {
    name: "漫画研究部",
    nameSize: 3,
    title: "漫研部誌配布会",
    place: "5215講義室",
    time: (
      <>
        1日目: 11:00~15:00
        <br />
        2日目: 11:00~14:00
      </>
    ),
    Description:
      "漫研部員が作成したイラスト集を部誌として無料配布します！今年のテーマは「夏」と「メイド」！部長のミスで季節外れのテーマですが、秋でも夏を感じる一冊が出来上がりました！無くなり次第終了します。",
    link: (
      <>
        <a href="https://twitter.com/nit_sm">X: @nit_sm</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgManga.webp",
    img2: "",
  },
  {
    name: "シミュレーションゲーム友の会",
    nameSize: 6,
    title: "世界のボードゲーム展示会",
    place: "5217講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "世界のボードゲームを展示します。お好きなものを鑑賞したり遊んだりして楽しんで下さい。スタッフがやり方を教えたり、人が足りなければ混じったりしますので気軽にご参加ください。",
    link: (
      <>
        <a href="https://x.com/nit_slg_bodoge">X: @nit_slg_bodoge</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgSimulation.webp",
    img2: "",
  },
  {
    name: "美術部",
    nameSize: 2,
    title: "美術部展示会",
    place: "5218講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "美術部員が制作した絵などを展示しています。また、工大祭当日大学内でポスターを複数種類掲示させていただきます。どれが誰の作品か当ててみてください！",
    link: (
      <>
        <a href="https://x.com/artclub_NIT">X: @artclub_NIT</a>
      </>
    ),
    img: "",
    img2: "",
  },
  {
    name: "コンピュータ俱楽部",
    nameSize: 5,
    title: "ゲームセンターNITMic",
    place: "5221講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "NITMic (にとみく) ゲームセンターでは、部員が制作したゲームを実際に遊んで体験できます! 今年もNITMic部誌 ”Archives” を頒布します! (C0deとの共同執筆! ) 是非遊びに来てね!",
    link: (
      <>
        <a href="https://nitmic.club.nitech.ac.jp/">Web</a>
        <br />
        <a href="https://x.com/nitmic_twi">X: @nitmic_twi</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/nitmic.webp",
    img2: "",
  },
  {
    name: "クイズ研究会",
    nameSize: 3,
    title: "早押し体験会",
    place: "5222講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "クイズ研究会では早押しクイズ体験会を行います。YouTubeなどで見るようなボタンを使って早押しクイズに参加することができます。シンプルな早押しクイズに加え、イントロクイズやなぞなぞクイズなどのクイズの知識が無くても楽しめるような企画もやります。ぜひ5222講義室に遊びに来てください！",
    link: (
      <>
        <a href="https://www.instagram.com/nitecq/">Instagram: @nitecq</a>
        <br />
        <a href="https://x.com/nitech_niq">X: @nitech_niq</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgQuiz.webp",
    img2: "",
  },
  {
    name: "鉄道研究会",
    nameSize: 3,
    title: "ミニSL乗車体験，鉄道模型走行，機関誌頒布",
    place: "5223講義室, 52号館中庭",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "5223講義室にて鉄道模型の展示走行、運転体験ができます。当会が発行している機関誌「連接車」の頒布もあります。52号館中庭にてミニSLの乗車体験もおこなっています。",
    link: (
      <>
        <a href="https://x.com/nit_rfc">X: @nit_rfc</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgTrain.webp",
    img2: "",
  },
  {
    name: "写真サークル",
    nameSize: 3,
    title: "「#nitechphoto」写真展＆撮影会＆活動記録",
    place: "5225講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "名工大の写真サークルです！写真展ではサークル・名工大内から集まった写真を展示します！撮影会では工大祭の来場記念フォトスポットを開設し、撮影したデータをお渡しします！活動記録では機材紹介としてサークル員の撮影機材や、名古屋の撮影スポット紹介、ヲタ芸撮影動画の上映を行います！",
    link: (
      <>
        <a href="https://www.instagram.com/nitechphoto/">
          Instagram: @nitechphoto
        </a>
        <br />
        <a href="https://x.com/nitechphoto">X: @nitechphoto</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgPhoto.webp",
    img2: "",
  },
  {
    name: "名工大模型同好会",
    nameSize: 4,
    title: "Nitech模型展示会",
    place: "5226講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "模型同好会では，メンバーが制作した模型の展示会を開催します！力作ばかりです！！気軽に見に来て下さい！！",
    link: (
      <>
        <a href="https://x.com/NitechMC285">X: @NitechMC285</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgMokei.webp",
    img2: "",
  },
  {
    name: "名古屋工業大学水泳部",
    nameSize: 5,
    title: "名工大V（バーチャル）水泳～序章～",
    place: "5227講義室",
    time: <>2日目: 10:00~15:30</>,
    Description:
      "名古屋工業大学水泳部です。初めての出展でドキドキのワクワクです。V（バーチャル）とありますが、今年度はVR厳しいので来年に乞うご期待という意を込めて序章にしてあります。ぜひお立ち寄りください。",
    link: (
      <>
        <a href="https://nitswimmingteam.club.nitech.ac.jp">Web</a>
        <br />
        <a href="https://www.instagram.com/nit_swim/">Instagram: @nit_swim</a>
        <br />
        <a href="https://x.com/NitSwimmingTeam">X: @NitSwimmingTeam</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgSwim1.webp",
    img2: "/62nd/project/gakuseiboshu/guest/imgSwim2.webp",
  },
  {
    name: "名工大ポケモンサークルNitPoke",
    nameSize: 6,
    title: "League NitPoke 2024",
    place: "5231講義室",
    time: <>1日目: 10:00~16:00</>,
    Description:
      "ポケモンスカーレット・バイオレットにおけるシングル対戦企画です。サークル員のタイプマスターとチャンピオンに勝利することができれば、景品を獲得することができます!お気に入りのポケモンで挑戦しよう!詳しいルールはXの方をご覧ください。",
    link: (
      <>
        <a href="https://x.com/nitechpc">X: @nitechpc</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgPoke.webp",
    img2: "",
  },
  {
    name: "マジックサークルNIT",
    nameSize: 5,
    title: "マジックショー",
    place: "5232講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "トランプを使ったクローズアップマジックを中心に日頃の練習の成果をお客様に披露させていただきます。マジックに少しでも興味がありましたら、足を運んでくださると嬉しいです。",
    link: (
      <>
        <a href="https://x.com/Magic_NIT2">X: @Magic_NIT2</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgMagic.webp",
    img2: "",
  },
  {
    name: "体育会系自動車部",
    nameSize: 4,
    title: "体育会系自動車部 運転シミュレーター＆車両展示",
    place: "5233講義室, 52号館南口",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "体育会系自動車部です！普段は整備やジムカーナという競技を主に行っています！工大祭では昨年と同様にグランツーリスモ７を用いたシミュレーター体験を行います！ハンドルコントローラーを用いた体験なのでよりリアルに近い体験ができるのではないでしょうか！参加者でタイムを競ってみてはいかがですか？５２号館前では部員の個人車も展示しています！部員にこだわりポイントなど普段あまりしない車の話をしてみませんか？謙遜されがちな部活ですが工大祭を機に興味を持っていただけたら嬉しいです！！",
    link: (
      <>
        <a href="https://www.instagram.com/nitech_406/">
          Instagram: @nitech_406
        </a>
        <br />
        <a href="https://x.com/nitech_406">X: @nitech_406</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgCar.webp",
    img2: "",
  },
  {
    name: "フォーミュラプロジェクト",
    nameSize: 6,
    title: "名古屋工業大学フォーミュラプロジェクト車両N.I.T-22車両展示",
    place: "52号館南口",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "名古屋工業大学ものつくりテクノセンター所属、フォーミュラプロジェクトです。私たちは学生フォーミュラ日本大会に出場しているチームで、過去には総合優勝を経験した古豪のチームです。本年度はEV部門で2年連続2位を獲得することができました。",
    link: (
      <>
        <a href="https://www.qitc.nitech.ac.jp/formula/">Web</a>
        <br />
        <a href="https://x.com/NIT_Formula">X: @NIT_Formula</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgFormular1.webp",
    img2: "/62nd/project/gakuseiboshu/guest/imgFormular2.webp",
  },
  {
    name: "アカペラサークルGrazie!!",
    nameSize: 6,
    title: "アカペラ教室ライブ",
    place: "2311講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "アカペラは、楽器を使わずに声だけで音楽を作り上げるスタイルです！私たちは5~7人で「バンド」を組み、全員の声を合わせて音楽を楽しんでいます。今回は、その声だけで生まれる一体感を感じていただけたら嬉しいです！ぜひ、アカペラの魅力を一緒に楽しみましょう！！",
    link: (
      <>
        <a href="https://instagram.com/nit_grazie">Instagram: @nit_grazie</a>
        <br />
        <a href="https://x.com/nitech_grazie">X: @nitech_grazie</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/imgGrazie.webp",
    img2: "",
  },
];
