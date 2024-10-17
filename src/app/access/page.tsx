import React, { CSSProperties } from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Underline from "@/components/Content/Underline/Underline";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `アクセス - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭 - 最寄り駅は鶴舞駅で、JR中央線でお越しの方は名大病院口から徒歩約8分、地下鉄鶴舞線でお越しの方は鶴舞公園口から徒歩11分です。`,
};

const StyledIframe: CSSProperties = {
  width: "100%",
  height: "50vh",
  margin: "1vh 0",
  border: 0,
};

export default function Access() {
  return (
    <>
      <ContentTitle title="アクセス" size={1} bigTitle></ContentTitle>
      <PageWrapper>
        <SectionBody>
          <ContentTitle title="場所" size={2} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6681.244952864808!2d136.92073005812458!3d35.157057709660414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x600370971a3cde13%3A0xbb16e801b5651df1!2z5ZCN5Y-k5bGL5bel5qWt5aSn5a2m!5e1!3m2!1sja!2sjp!4v1695572107381!5m2!1sja!2sjp"
            style={StyledIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p style={{ textAlign: "right" }}>
            <a
              href="https://maps.app.goo.gl/bLEH5TFA7pD16uUR6"
              target="_blank"
              aria-label="Google Mapで開く"
            >
              Google Mapで開く
            </a>
          </p>

          <ContentTitle title="FAQ" size={2} />
          <ContentBox title={"駐車場はありますか?"}>
            <p>
              学内に来訪者用の駐車場はございません。近くの有料駐車場、もしくは公共交通機関をご利用ください。
            </p>
          </ContentBox>
          <ContentBox title={"駐輪場はありますか?"}>
            <p>
              2号館裏,
              52号館前にあります。必ず指定場所に駐輪するようにお願いします。
            </p>
          </ContentBox>
          <ContentBox title={"どのエリアを回ることができますか?"}>
            <p>準備中</p>
          </ContentBox>
          <p style={{ textAlign: "right" }}>
            <a href="../faq/" aria-label="アクセス">
              その他のよくある質問はこちらから
            </a>
          </p>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="公共交通機関" size={2} />
          <ContentBox title={"最寄り駅"}>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>
              <Underline>鶴舞駅</Underline>
            </h4>
            <img src="/62nd/access/img/train.webp" alt="" />
            <p style={{ textAlign: "right" }}>
              <a
                href="https://maps.app.goo.gl/En9P1hgB1txHgNTz5"
                target="_blank"
                aria-label="Google Mapで開く"
              >
                Google Mapで開く
              </a>
            </p>
            <ContentBox title={"JR中央線でお越しの方"}>
              <p>
                <Underline>名大病院口から徒歩約8分</Underline>
              </p>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1808.2123376805876!2d136.92446825777978!3d35.15618341756488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d35.157903399999995!2d136.9190041!4m3!3m2!1d35.156490399999996!2d136.9240584!5e1!3m2!1sja!2sjp!4v1695574644151!5m2!1sja!2sjp"
                style={StyledIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p style={{ textAlign: "right" }}>
                <a
                  href="https://maps.app.goo.gl/V95wyhnEEz5R7W9aA"
                  target="_blank"
                  aria-label="Google Mapで開く"
                >
                  Google Mapで開く
                </a>
              </p>
            </ContentBox>
            <ContentBox title={"地下鉄鶴舞線でお越しの方"}>
              <p>
                <Underline>鶴舞公園口から徒歩11分</Underline>
              </p>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d741.6311029273!2d136.91763068513907!3d35.15586113667661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d35.155975!2d136.9172281!4m3!3m2!1d35.1564748!2d136.9241467!5e1!3m2!1sja!2sjp!4v1695574549082!5m2!1sja!2sjp"
                style={StyledIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p style={{ textAlign: "right" }}>
                <a
                  href="https://maps.app.goo.gl/Epm2CgUmDYZEJLYSA"
                  target="_blank"
                  aria-label="Google Mapを開く"
                >
                  Google Mapで開く
                </a>
              </p>
            </ContentBox>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
