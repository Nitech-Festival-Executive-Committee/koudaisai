import React from "react";
import Project from "@/components/Project/Project/Project";
import { zipFM as projectData } from "./zipFM";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentImage from "@/components/Content/ContentImage/ContentImage";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import styles from "./page.module.scss";

export const metadata = {
  title: `${projectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${projectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function ZipFM() {
  return (
    <Project projectData={projectData} logoPath={""}>
      <ContentTitle title={"ナビゲーター紹介"} size={2} bigTitle />
      <PageWrapper>
        {/* ナビゲーター3人を横に並べるためにwidthを変更 */}
        <SectionBody className={styles.zipFMSectionBody}>
          <ContentBox title={"Hillary"}>
            <ContentImage
              img={"/62nd/project/zip-fm/Hillary.webp"}
              alt={"Hillary"}
            />
            <ul>
              <li>⽣年⽉⽇: 7⽉22⽇</li>
              <li>出⾝: 愛知県 瀬戸市</li>
              <li>
                趣味: サバイバルゲーム、ロードバイク、
                映画鑑賞、スイーツ作り、弾き語り、歌を歌うこと、カメラ
              </li>
              <li>特技: ネイル</li>
              <li>
                経歴:
                アメリカ・ニューヨーク生まれ、日本育ちの現役大学生。インターナショナルスクールに通っていたが、小学5年生の時に「日本の中学校に通いたい!」という想いから日本語を勉強し始める。2017年からラジオサンキューにて月曜夕方パーソナリティーとして活動を開始する。2018年から「ハイスクールテリア」というJK番組のメインパーソナリティーを担当。チャレンジ精神旺盛、現役大学生ナビゲーター!
              </li>
            </ul>
          </ContentBox>
        </SectionBody>
        <SectionBody className={styles.zipFMSectionBody}>
          <ContentBox title={"まるり"}>
            <ContentImage
              img={"/62nd/project/zip-fm/Maruri.webp"}
              alt={"まるり"}
            />
            <ul>
              <li>⽣年⽉⽇: 3⽉4⽇</li>
              <li>出⾝: 福岡県 春日市</li>
              <li>趣味: カメラ、FEELCYCLE</li>
              <li>特技: モノマネ</li>
              <li>
                経歴:
                幼少期から高校3年生まで合唱団に所属。声楽を学びながら音楽と隣り合わせの生活を送り、数々のステージに出演。2018
                年 4
                月より男女デュオ「まるりとりゅうが」として活動。2022年4月からはソロ・アーティストとして始動し、5月に優里作詞・作曲の
                1st Digital
                Single「好きだよ」でソロデビュー。抜群の歌唱力はもちろん、動画やインスタライブで見せる、飾らず親しみやすいキャラクターと愛らしいルックスで、同世代の男女からの絶大な支持を集めている。2022年8/31(水)に配信リリースした「ホントの私」で、ビクターエンタテインメントからメジャーデビュー。
              </li>
            </ul>
          </ContentBox>
        </SectionBody>
        <SectionBody className={styles.zipFMSectionBody}>
          <ContentBox title={"中川大輔"}>
            <ContentImage
              img={"/62nd/project/zip-fm/Nakagawa.webp"}
              alt={"中川大輔"}
            />
            <ul>
              <li>⽣年⽉⽇: 4⽉5⽇</li>
              <li>出⾝: 愛知県名古屋市</li>
              <li>
                趣味:
                ハンバーガー食べ歩き・アウトドア&BBQ・旅先でのショットグラス収集
              </li>
              <li>特技： 剣道二段・バスケットボール・英会話(TOEIC 920点)</li>
              <li>
                経歴:
                南山大学経営学部卒業大学在学中にアメリカ・アリゾナ州立大学へ留学、心と身体のサイズをアメリカナイズされる海外留学中、勉強しながら聞いたラジオをきっかけに、
                ラジオの「リスナーとの距離の近さ・親しみやすさ」に惹かれる帰国後はZIP-FMナビゲータースクールに通い、ラジオDJ/MC業を目指すテレビ局でADとして勤務後、コミュニティラジオでDJキャリアをスタートZIP-FMでADを経て、2017年4月にミュージック・ナビゲーターデビュー!目標は「たくさん人の心を動かせるナビゲーター」
              </li>
            </ul>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </Project>
  );
}
