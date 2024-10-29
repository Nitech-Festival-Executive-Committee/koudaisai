import Canvas from "@/components/Canvas/Canvas";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import DecoratedImage from "@/components/Content/DecoratedImage/DecoratedImage";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Underline from "@/components/Content/Underline/Underline";
import PreviousFestival from "@/components/PreviousFestival/PreviousFestival";
import CustomSwiper from "@/components/Swiper/CustomSwiper";

export default function Top() {
  return (
    <div>
      <Canvas />
      {/* countdown */}
      <CustomSwiper title="PICK UP" />
      {/* 速報 */}
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="PROJECTS" size={1} />
          <h1 style={{ textAlign: "center" }}>準備中</h1>

          <ContentTitle title="FAQ" size={1} />
          <ContentBox title={"第62回工大祭の開催日時は?"}>
            <p>
              第62回工大祭「Ignition」は
              <Underline>2024年11月16日(土)・17日(日) 10:00-18:00</Underline>
              に開催予定!!
            </p>
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
        <SectionBody>
          <ContentTitle title="NEWS" size={1} />
          <ContentBox title={"2024.10.15"}>
            <p>
              <a href="./project/tyuya/" target="_blank" aria-label="中夜祭">
                中夜祭のページ
              </a>
              を更新しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.10.10"}>
            <p>
              <a
                href="./project/seiyu/"
                target="_blank"
                aria-label="声優トークショー"
              >
                声優トークショーのページ
              </a>
              を更新しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.10.1"}>
            <p>
              <a
                href="https://x.com/nitfes/status/1840949759592558721"
                target="_blank"
                aria-label="パンフレットコンテスト"
              >
                パンフレットコンテストの結果
              </a>
              を発表しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.7.28"}>
            <p>
              <a
                href="./pfc/"
                target="_blank"
                aria-label="パンフレットコンテスト"
              >
                パンフレットコンテスト決勝戦
              </a>
              を更新しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.6.30"}>
            <p>
              <a
                href="./pfc/"
                target="_blank"
                aria-label="パンフレットコンテスト"
              >
                パンフレットコンテストのページ
              </a>
              を公開しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.6.1"}>
            <p>
              <a
                href="./gakuseistage/"
                target="_blank"
                aria-label="学生ステージ企画"
              >
                学生ステージ企画のページ
              </a>
              を公開しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.6.1"}>
            <p>
              水無月杯の延期が決定しました
              <br />
              水無月杯で開催予定だったソフトボール部門の中止が決定しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.4.8"}>
            <p>
              <a href="./minaduki/" target="_blank" aria-label="水無月杯">
                水無月杯のページ
              </a>
              を公開しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.3.19"}>
            <p>
              <a href="./sinkan/" target="_blank" aria-label="新歓">
                新歓のページ
              </a>
              を公開しました
            </p>
          </ContentBox>
          <ContentBox title={"2024.3.8"}>
            <p>掲載情報を第62回に更新しました</p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>

      <PreviousFestival />
    </div>
  );
}
