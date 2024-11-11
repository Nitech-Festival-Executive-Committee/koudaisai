import Canvas from "@/components/Canvas/Canvas";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import DecoratedImage from "@/components/Content/DecoratedImage/DecoratedImage";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Underline from "@/components/Content/Underline/Underline";
import Flipdown from "@/components/Flipdown/Flipdown";
import PreviousFestival from "@/components/PreviousFestival/PreviousFestival";
import CustomSwiper from "@/components/Swiper/CustomSwiper";
import ProjectCard from "@/components/Project/ProjectCard/ProjectCard";
import ProjectCardWrapper from "@/components/Project/ProjectCardWrapper/ProjectCardWrapper";
import { allProject } from "./project/allProjectData";
import { timetableData } from "./project/timetableData";
import { tyuya } from "./project/tyuya/tyuya";
import { seiyu } from "./project/seiyu/seiyu";
import { roomRiddles } from "./project/room-riddles/roomRiddles";
import { excursionRiddles } from "./project/excursion-riddles/excursionRiddles";
import { vsDealer } from "./project/vs-dealer/vsDealer";
import { vrCoaster } from "./project/vr-coaster/vrCoaster";
import { gakuseiboshu } from "./project/gakuseiboshu/gakuseiboshu";
import { nitechKing } from "./project/nitech-king/nitechKing";
import { hauntedHouse } from "./project/haunted-house/hauntedHouse";
import { kouya } from "./project/kouya/kouya";
import {
  NITFES_EDITION,
  NITFES_THEME,
  NITFES_YEAR,
  NITFES_MONTH,
  NITFES_DATE1,
  NITFES_DAY1,
  NITFES_TIME_DATE1,
  NITFES_DATE2,
  NITFES_DAY2,
  NITFES_TIME_DATE2,
} from "@/const/const";
import { zipFM } from "./project/zip-fm/zipFM";
import Announcements from "@/components/Annoucements/Annoumcements";
import Loader from "@/components/Loader/Loader";

const pickupProjects = [
  allProject,
  timetableData,
  tyuya,
  seiyu,
  zipFM,
  roomRiddles,
  excursionRiddles,
  vsDealer,
  vrCoaster,
  gakuseiboshu,
  nitechKing,
  hauntedHouse,
];

export default function Top() {
  return (
    <>
      <Loader /> {/* これを消すとトップでロード画面を流さないように出来る */}
      <Canvas />
      <PageWrapper>
        <Flipdown year={2024} month={11} day={16} hour={10}></Flipdown>
      </PageWrapper>
      <Announcements />
      <CustomSwiper title="PICK UP" projects={pickupProjects} />
      {/* 速報 */}
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="PROJECTS" size={1} />
          <ProjectCardWrapper>
            <ProjectCard
              projectList={[
                seiyu,
                tyuya,
                kouya,
                hauntedHouse,
                roomRiddles,
                excursionRiddles,
              ]}
              linkOffset={"./project"}
              showTime
            />
          </ProjectCardWrapper>
          <p style={{ textAlign: "right" }}>
            <a href="./project">その他の企画ページはこちらから</a>
          </p>
        </SectionBody>

        <SectionBody>
          <ContentTitle title="FAQ" size={1} />
          <ContentBox title={`第${NITFES_EDITION}回工大祭の開催日時は?`}>
            <p>
              第{NITFES_EDITION}回工大祭「{NITFES_THEME}」は
              <Underline>
                {`${NITFES_YEAR}年${NITFES_MONTH}月${NITFES_DATE1}日(${NITFES_DAY1})${NITFES_TIME_DATE1}、${NITFES_DATE2}日(${NITFES_DAY2})${NITFES_TIME_DATE2}`}
              </Underline>
              に開催!!
            </p>
          </ContentBox>
          <ContentBox title={"来場予約や整理券は必要ですか?"}>
            <p>
              <Underline>来場予約は不要です!</Underline>
              是非ご来場ください!
              <br />
              また、<Underline>一部企画は整理券が必要です。</Underline>
              <br />
              詳しくは
              <a href="../project/" aria-label="企画一覧を開く">
                企画一覧
              </a>
              をご覧ください
            </p>
          </ContentBox>
          <ContentBox title={"どのエリアを回ることができますか?"}>
            <p>
              <a href="./project">企画一覧はこちらから</a>
            </p>
            <DecoratedImage img="/62nd/img/map.webp" alt="エリア" />
          </ContentBox>
          <ContentBox title={"駐車場はありますか?"}>
            <p>
              学内に来訪者用の駐車場はございません。近くの有料駐車場、もしくは公共交通機関をご利用ください。公共交通機関は
              <a href="../access/">アクセス</a>をご覧ください。
            </p>
          </ContentBox>
          <p style={{ textAlign: "right" }}>
            <a href="../faq/" aria-label="アクセス">
              その他のよくある質問はこちらから
            </a>
          </p>
        </SectionBody>
      </PageWrapper>
      <PreviousFestival />
    </>
  );
}
