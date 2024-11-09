import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Animation from "@/components/Animation/Animation";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import styles from "./page.module.scss";

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
            title="HTML/css/js -> Next.js/scss/tsへの移行"
            text="なんかええ感じの文章、chatGPTに頼んだら書いてくれるかも"
          />
          <WhatsNewCard
            title="ページパフォーマンス最適化"
            text="あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"
          />
        </SectionBody>
        <SectionBody>
          <WhatsNewCard
            title="3Dマップの作成"
            text="hogefuga3D fuga fuga ganbatta fuga"
          />
          <WhatsNewCard
            title="ページパフォーマンス最適化"
            text="あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"
            linkText="企画ページに移動"
          />
        </SectionBody>
      </PageWrapper>

      <ContentTitle title="協力" size={1} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentTitle title={"62回 Web作成"} size={3} />
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
            style={{ flexDirection: "row" }}
          />
          <WhatsNewCard
            title={"鐘ヶ江 航"}
            link={"https://github.com/senntou"}
            linkText={"GitHub"}
            style={{ flexDirection: "row" }}
          />
          <WhatsNewCard
            title={"梅原 ヒロユキ"}
            link={"https://github.com/ViniciusBrJp"}
            linkText={"GitHub"}
            style={{ flexDirection: "row" }}
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
          />
          <WhatsNewCard title={"小林 央河"} text={"第60・61回広報局"} />
        </SectionBody>
        <SectionBody>
          <ContentTitle title={"3Dマップ作成"} size={3} />
          <WhatsNewCard
            title={"北中 智也"}
            text={"第61回企画局・第62回広報局"}
            link={"https://github.com/Shika174"}
            linkText={"GitHub"}
            style={{ flexDirection: "row" }}
          />
        </SectionBody>
      </PageWrapper>
    </>
  );
}

function WhatsNewCard({
  title = "",
  text = "",
  img,
  link,
  linkText,
  style,
}: {
  title?: string;
  text?: string | React.ReactNode;
  img?: string;
  link?: string;
  linkText?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Animation>
      <Card
        sx={{
          margin: "10px 5px 20px",
          background:
            "linear-gradient(150deg, #ffead8 0%, #ffffff 80%, #ffead8)",
          boxShadow: "6px 6px 8px 0px #dcdcdc",
          ...style,
        }}
      >
        <div>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-sm">{text}</Typography>
        </div>
        {img && (
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={img} srcSet={img} loading="lazy" alt="" />
          </AspectRatio>
        )}
        {linkText && (
          <CardContent orientation="horizontal">
            <Button
              variant="outlined"
              size="md"
              color="primary"
              sx={{
                ml: "auto",
                alignSelf: "center",
                fontWeight: 600,
                color: "var(--theme-color)",
                borderColor: "var(--theme-color)",
                "&:hover": {
                  backgroundColor: "#ffeded",
                },
                transition: ".2s",
              }}
              component="a"
              href={link}
              target="_blank"
            >
              {linkText}
            </Button>
          </CardContent>
        )}
      </Card>
    </Animation>
  );
}
