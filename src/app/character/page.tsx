import { CSSProperties } from "react";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentImage from "@/components/Content/ContentImage/ContentImage";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `キャラクター - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - 工大祭には、名工大の一本松古墳に登ると落単するという噂から「落単古墳マン」、鏡張りの2号館の下を歩くと直射日光と鏡の反射が暑すぎて夏には目玉焼きができるという噂が言霊になった妖精「2号館たまごちゃん」、落単古墳マンと同じく一本松古墳をモチーフにした「ハニワくん」の3種類の公式キャラクターがいます。`,
};

const lineStampStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};
const lineStampImageStyle: CSSProperties = {
  width: "30%",
};

export default function Character() {
  return (
    <>
      <ContentTitle title="キャラクター" size={1} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="古墳マン" size={2} />
          <ContentBox title={"落単古墳マンとは?"}>
            <ContentImage
              img="/62nd/character/img/kohunman1.webp"
              decorated={false}
            ></ContentImage>
            <p>
              工大祭の公式マスコットキャラクター「落単古墳マン」
              <br />
              今年も工大祭に遊びに来るよ!
            </p>
          </ContentBox>
          <ContentBox title={"落単古墳マンとは?"}>
            <p>
              名古屋工業大学にある
              <a
                href="https://ja.wikipedia.org/wiki/%E4%B8%80%E6%9C%AC%E6%9D%BE%E5%8F%A4%E5%A2%B3"
                target="_blank"
                aria-label="一本松古墳に関するWikipedaを見る"
              >
                一本松古墳
              </a>
              をモチーフにしたマスコットキャラクター!
              <br />
              生年月日は一本松古墳が出来た5世紀後半頃
              <br />
              毎年単位を落として留年している古墳マン!
              <br />
              数学が得意な古墳マンが、唯一取れている単位は線形代数Ⅰだけ!
              <br />
              名工大の一本松古墳に登ると落単するという噂から、「落単古墳マン」が誕生したよ!
              <br />
            </p>
            <ContentImage img="/62nd/character/img/kohunman2.webp"></ContentImage>
            <ContentBox title={"自己紹介"}>
              <p>
                僕は落単古墳マン!!
                <br />
                名古屋工業大学の一本松古墳の中ではにわ君たちと一緒に暮らしてるんだ～
                <br />
                いつも寝てばっかりの僕と違ってはにわ君たちはちゃんと授業に出て充実した名工LIFEを送っているんだ...
                <br />
                寝てばっかりのせいなのかわからないけど僕は今年も単位が足りなくて卒業できないみたい...
                <br />
                他の大学に編入しようかな...
                <br />
                でもそのおかげで今年も工大祭に参加できるんだ!
                <br />
                今年も盛り上げていくよ～!
              </p>
            </ContentBox>
          </ContentBox>

          <ContentBox title={"X(旧Twitter)"}>
            <p>
              <a
                href="https://twitter.com/rakutan_nitfes"
                target="_blank"
                aria-label="落単古墳マンの工大祭公式X(旧Twitter)を開く"
              >
                古墳マンの公式X(旧Twitter)
              </a>
            </p>
          </ContentBox>

          <ContentTitle title="ハニワくん" size={2} />
          <ContentBox title={"ハニワくんとは?"}>
            <ContentImage
              img="/62nd/character/img/haniwakun1.webp"
              decorated={false}
            ></ContentImage>
            <p>工大祭の公式マスコットキャラクター「ハニワくん」</p>
          </ContentBox>
          <ContentBox title={"プロフィール"}>
            <p>
              (おそらく)第55回工大祭で誕生した落単古墳マンと同じく、名古屋工業大学にある
              <a
                href="https://ja.wikipedia.org/wiki/%E4%B8%80%E6%9C%AC%E6%9D%BE%E5%8F%A4%E5%A2%B3"
                target="_blank"
                aria-label="一本松古墳に関するWikipedaを見る"
              >
                一本松古墳
              </a>
              をモチーフにしたマスコットキャラクター!
              <br />
              古墳マンと同期であり、生年月日は5世紀後半頃
              <br />
              ハニワくんはとても頭が良く、古墳マンに勉強も教えているが、「ハニハニ」しか話せないので、英語の授業だけ落単している。
            </p>
            <ContentImage img="/62nd/character/img/haniwakun2.webp"></ContentImage>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="たまごちゃん" size={2} />
          <ContentBox title={"2号館たまごちゃんとは?"}>
            <ContentImage
              img="/62nd/character/img/tamagochan1.webp"
              decorated={false}
            ></ContentImage>
            <p>
              工大祭の公式マスコットキャラクター「2号館たまごちゃん」
              <br />
              今年も2号館前に出現するかも!?
            </p>
          </ContentBox>
          <ContentBox title={"プロフィール"}>
            <p>
              第59回工大祭で誕生したマスコットキャラクター!
              <br />
              名古屋工業大学御器所キャンパスの2号館は鏡張りになっていて、鏡張りの下を歩くと直射日光と鏡の反射が暑すぎて、夏には目玉焼きができるという噂が言霊になった妖精「2号館たまごちゃん」。
              <br />
              真夏に二号館の下を歩いていたら頭の生卵が目玉焼きになってしまったことが原因で卵の妖精仲間からはぶられてしまい、一人寂しく二号館の下に暮らす女の子。
              <br />
              手先が器用なので指がなく不器用な古墳マンの補佐をしている。
              <br />
              身長7m。
            </p>
            <ContentImage img="/62nd/character/img/tamagochan2.webp"></ContentImage>
          </ContentBox>

          <ContentTitle title="たまごちゃん" size={2} />
          <ContentBox title={"LINEスタンプ"}>
            <p>
              落単古墳マンのスタンプが発売中!!
              <br />
              日常でも使いやすいスタンプが勢ぞろい!
              <br />
              みんなもぜひ買って友達に送ってみてね!!
              <br />
            </p>
            <ContentBox title={"落単古墳マン"}>
              <div style={lineStampStyle}>
                <img
                  src="/62nd/character/img/sticker1_1.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker1_2.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker1_3.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker1_4.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker1_5.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
              </div>
              <a
                href="https://line.me/S/sticker/1697921/?lang=ja&utm_source=gnsh_stickerDetail"
                target="_blank"
                aria-label="LINEスタンプショップを開く"
                style={{ textAlign: "right" }}
              >
                落単古墳マンのLINEスタンプショップ
              </a>
            </ContentBox>
            <ContentBox title={"落単古墳マン2"}>
              <div style={lineStampStyle}>
                <img
                  src="/62nd/character/img/sticker2_1.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker2_2.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker2_3.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker2_4.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
                <img
                  src="/62nd/character/img/sticker2_5.webp"
                  alt=""
                  style={lineStampImageStyle}
                />
              </div>
              <a
                href="https://line.me/S/sticker/11170904/?lang=ja&utm_source=gnsh_stickerDetail"
                target="_blank"
                aria-label="LINEスタンプショップを開く"
                style={{ textAlign: "right" }}
              >
                落単古墳マン2のLINEスタンプショップ
              </a>
            </ContentBox>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
