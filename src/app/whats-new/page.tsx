import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Animation from "@/components/Animation/Animation";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import styles from "./page.module.scss";
import WhatsNewCard from "@/components/WhatsNewCard/WhatsNewCard";

export const metadata = {
  title: `What's new? - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - 第61回からWebサイトで何が変わったかをご紹介します`,
};

export default function Faq() {
  return (
    <>
      <ContentTitle title="What's new?" size={2} bigTitle />
      <Animation>
        <h2 className={styles.title}>
          第61回のサイトからの変更点をご紹介します
        </h2>
      </Animation>
      <PageWrapper>
        <SectionBody>
          <WhatsNewCard
            title="HTML/CSS/JavaScript -> Next.js/SCSS/TypeScriptへの移行"
            text={
              <>
                以前の工大祭Webサイトと比べ、より高速に表示されるようになりました。
                <br />
                また、より洗練されたデザインの使用や統一されたページの効率的な開発が可能になりました。
              </>
            }
          />
          <WhatsNewCard
            title="3Dマップの作成"
            text="当日の企画開催場所をより視覚的に紹介します!"
            // 公開後に表示
            // linkText="3Dマップに移動"
            // link={"https://shika174.github.io/Nitech_3D-MAP/"}
          />
          <WhatsNewCard
            title="お知らせの表示変更"
            text="お知らせ表示がコンパクトになり、より見やすくなりました!"
            img="/62nd/whats-new/announcement.webp"
            linkText="トップページに移動"
            link={"../"}
          />
          <WhatsNewCard
            title="企画カードの改善"
            text="企画の表示を変更し、去年よりも見やすく・おしゃれになりました!"
            img={"/62nd/whats-new/projectCard.webp"}
            linkText="企画ページに移動"
            link={"../project"}
          />
        </SectionBody>

        <SectionBody>
          <WhatsNewCard
            title="企画ページの特別デザイン作成"
            text="一部ページにおいて特殊なデザインが適用されました!"
            img={"/62nd/whats-new/hauntedHouse.webp"}
            linkText="お化け屋敷ページに移動"
            link={"../project/haunted-house"}
          />
          <WhatsNewCard
            title="おすすめ機能の最適化"
            text="開催時間やカテゴリ分けに基づいて、より関連した企画がおすすめに表示されるようになりました!"
            // TODO: おすすめ機能が実装されたら画像を追加
          />
          <WhatsNewCard
            title="企画ページのレイアウト変更"
            text="企画ページのレイアウトを改善し、PC・スマホのどちらでもより見やすく、探している情報に到達しやすくなりました!"
            linkText="企画ページに移動"
            link={"../project"}
          />
          <WhatsNewCard
            title="カウントダウンエフェクトの改善"
            text="カウントダウンが0になった時のエフェクトが改善されました!"
            linkText="トップページに移動"
            link={"../"}
          />
          <WhatsNewCard
            title="アニメーションの更新"
            text="新たなアニメーションを追加し、ヘッダーやコンポーネントのアニメーションを改善しました!"
          />
          <WhatsNewCard
            title="開発環境の大幅な改善"
            text="昨年のサイトをベースに、言語の変更・コンポーネントの再利用・GitHubによるバージョン管理やCIの導入・ドキュメントの整備などを行い、開発効率・コードの品質を向上させ、長期的な運用を見据えた環境の整備を行いました。"
          />
          {/* 特殊デザインの追加、お化け屋敷ページのこと */}
        </SectionBody>
      </PageWrapper>
      <Animation>
        <p className={styles.lastYear}>
          <a href="/61st">昨年(第61回)のページを見に行く</a>
        </p>
      </Animation>

      <ContentTitle title="協力" size={1} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title={"62回 Web"} size={3} />
          <WhatsNewCard
            title={"村川 卓也"}
            text={
              <>
                第61回web担当
                <br />
                第60・61回広報局
              </>
            }
            link={"https://github.com/MurakawaTakuya"}
            linkText={"GitHub"}
            underText={"201 commits"}
            flexButton
          />
          <WhatsNewCard
            title={"鐘ヶ江 航"}
            link={"https://github.com/senntou"}
            text={"エンジニア協力"}
            linkText={"GitHub"}
            underText={"71 commits"}
            flexButton
          />
          <WhatsNewCard
            title={"梅原 ヒロユキ"}
            link={"https://github.com/ViniciusBrJp"}
            text={"エンジニア協力"}
            linkText={"GitHub"}
            underText={"13 commits"}
            flexButton
          />
          <WhatsNewCard
            title={"大原 一将"}
            text={
              <>
                第60回web担当
                <br />
                第59・60・61回広報局
              </>
            }
            underText={"7 commits"}
          />
          <WhatsNewCard
            title={"小林 央河"}
            text={"第60・61回広報局"}
            underText={"3 commits"}
          />
        </SectionBody>
        <SectionBody>
          <ContentTitle title={"3Dマップ"} size={3} />
          <WhatsNewCard
            title={"北中 智也"}
            text={"第61回企画局・第62回広報局"}
            link={"https://github.com/Shika174"}
            linkText={"GitHub"}
          />
        </SectionBody>
      </PageWrapper>
    </>
  );
}
