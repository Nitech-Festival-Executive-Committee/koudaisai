import React from "react";
import PreviousFestival from "@/components/PreviousFestival/PreviousFestival";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import Underline from "@/components/Content/Underline/Underline";
import ContentImage from "@/components/Content/ContentImage/ContentImage";

export default function About() {
  return (
    <>
      <ContentTitle title="工大祭について" size={2} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="工大祭とは" size={2} />
          <ContentBox title={""}>
            <p>
              工大祭実行委員会が主催する、名古屋工業大学で行われる大学祭、通称「工大祭」です。
            </p>
          </ContentBox>
          <ContentBox title={"第62回工大祭の開催日時は?"}>
            <p>
              第62回工大祭「Ignition」は
              <Underline>2024年11月16日(土)・17日(日) 10:00-18:00</Underline>
              に開催予定!!
            </p>
          </ContentBox>
          <ContentBox title={"今年の工大祭のテーマは何ですか?"}>
            <p>第62回工大祭のテーマは「Ignition」!</p>
          </ContentBox>
          <ContentBox title={"来場予約や整理券は必要ですか?"}>
            <p>
              今年から<Underline>来場予約は不要です!</Underline>
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
            <p>準備中</p>
          </ContentBox>
          <ContentBox title={"駐車場はありますか?"}>
            <p>
              学内に来訪者用の駐車場はございません。近くの有料駐車場、もしくは公共交通機関をご利用ください。公共交通機関は
              <a href="../access/">アクセス</a>をご覧ください。
            </p>
          </ContentBox>

          <ContentTitle title="役割分担" size={2} />
          <ContentBox title={"委員長会"}>
            <p>
              工大祭実行委員会のまとめ役で、委員長1人と副委員長4人の5人組で構成されています!
              <br />
              工大祭委員の企画を行う上での財務管理をしたり、委員1人1人の仕事の進捗具合を確認したりしています。
            </p>
          </ContentBox>
          <ContentBox title={"企画局"}>
            <p>
              企画局は、自分たちで工大祭で行う企画を考えて、工大祭当日の企画運営を行います!
              <br />
              学年問わずにみんなと企画の準備、運営を一緒に行っています!
              <br />
              参加者の方に必ず楽しんでもらえる企画で工大祭を盛り上げます!
            </p>
          </ContentBox>
          <ContentBox title={"広報局"}>
            <p>
              広報局はSNSやビラ・ポスター、ラジオのようなメディアなどを通して工大祭の宣伝活動をしています!
              <br />
              宣伝するための看板やパンフレットのデザインを自分たちで一から作ります!
              <br />
              また、工大祭の
              <a href="../character/" aria-label="マスコット">
                マスコットキャラである「落単古墳マン」、「2号館たまごちゃん」
              </a>
              と一緒に活動しています!
            </p>
          </ContentBox>
          <ContentBox title={"渉外局"}>
            <p>
              渉外局は、協賛金や協賛品をいただくために、企業の方々とやりとりをしています!
              <br />
              例年では実際に企業に来ていただき出展もしていただいたり、他大学と交流をしたり大学祭のボランティアとして働いたりもします。
            </p>
          </ContentBox>
          <ContentBox title={"ステージ局"}>
            <p>
              ステージ局は名前の通り、学祭の花、ステージを設営・運営する局です。
              <br />
              学生のステージパフォーマンスも見逃せません!
            </p>
          </ContentBox>
          <ContentBox title={"装飾局"}>
            <p>
              装飾局は、工大祭を飾り付けてより華やかにするための装飾物を作ります!
              <br />
              段ボールやペンキなど様々なものを使い、自分たちで考えて作っていきます!
              <br />
              当日に来場できない方も楽しめるようにオンライン企画でも盛り上げます!
            </p>
          </ContentBox>
          <ContentBox title={"総務局"}>
            <p>
              総務局は工大祭の備品の管理を主に行っており、企画者と一緒に準備を行うなど直接お手伝いしています!
              <br />
              備品の貸し借りの為に他大学に行ったりもします!
            </p>
          </ContentBox>
          <ContentBox title={"内務局"}>
            <p>
              内務局は大学とのやりとりや企画書のチェックなどをして、全ての企画を裏からサポートしています!
              <br />
              工大祭全体を把握し、他局のお手伝いにも駆けつけます!!
            </p>
          </ContentBox>
          <ContentBox title={"地域局"}>
            <p>
              地域局は名工大周辺の地域住民の方や地域の団体と工大祭との繋がりを強くする局です!
              <br />
              普段の活動では、他局からの協力も得ながら、地域貢献のため、ゴミ拾いやトワイライト、伝承遊びをしています!
            </p>
          </ContentBox>
          <ContentBox title={"模擬局"}>
            <p>
              模擬局は、模擬店に関することや工大祭に出店してくれる学生団体の取りまとめなどを行っています!
              <br />
              工大祭では模擬店の管理や、模擬店出店者さんたちを楽しませるための企画、他大学への模擬店の出店などを行っています!
              <br />
              学生団体による出店では例年名工大内外の多くの部活、サークル等が出店してくださっています!
            </p>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="活動内容" size={2} />
          <ContentBox title={"3月・4月"}>
            <p>新入生歓迎会</p>
            <ContentImage img="/62nd/about/img/sinkan.webp"></ContentImage>
          </ContentBox>
          <ContentBox title={"5月"}>
            <p>
              <a
                href="https://www.instagram.com/daidodaisai/"
                target="_blank"
                aria-label="大同大学大学祭公式Instagramを開く"
              >
                大同大学
              </a>
              当日ボランティア
            </p>
          </ContentBox>
          <ContentBox title={"6月"}>
            <p>水無月杯</p>
          </ContentBox>
          <ContentBox title={"7月"}>
            <p>納涼祭り</p>
            <ContentImage img="/62nd/about/img/nouryou1.webp"></ContentImage>
            <ContentImage img="/62nd/about/img/nouryou2.webp"></ContentImage>
            <ContentImage img="/62nd/about/img/nouryou3.webp"></ContentImage>
          </ContentBox>
          <ContentBox title={"8月"}>
            <p>備品制作</p>
            <p>にっぽんど真ん中祭り当日ボランティア</p>
            <p>子供企画</p>
            <ContentImage img="/62nd/about/img/kodomokikaku.webp"></ContentImage>
          </ContentBox>
          <ContentBox title={"9月"}>
            <p>備品制作</p>
            <p>名古屋女子大学当日ボランティア</p>
          </ContentBox>
          <ContentBox title={"10月"}>
            <p>秋祭り</p>
            <ContentImage img="/62nd/about/img/akimaturi.webp"></ContentImage>
            <p>
              <a
                href="https://www.kinjo-fes.com/"
                target="_blank"
                aria-label="金城学院大学大学大学祭公式ページを開く"
              >
                金城学院大学
              </a>
              当日ボランティア
            </p>
            <p>椙山女学園大学当日ボランティア</p>
            <p>
              <a
                href="https://twitter.com/toukaisai"
                target="_blank"
                aria-label="東海学園大学公式twitterを開く"
              >
                東海学園大学
              </a>
              当日ボランティア
            </p>
          </ContentBox>
          <ContentBox title={"11月"}>
            <p>
              <a
                href="https://twitter.com/shidaisai_ncu"
                target="_blank"
                aria-label="名古屋市立大学大学祭公式twitterを開く"
              >
                名古屋市立大学
              </a>
              当日ボランティア
            </p>
          </ContentBox>
          <ContentBox title={"11/18(土), 19(日)"}>
            <p>工大祭当日</p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>

      <PreviousFestival />
    </>
  );
}
