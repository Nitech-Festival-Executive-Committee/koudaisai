/* eslint-disable react/jsx-key */
import React from "react";
import Project from "@/components/Project/Project/Project";
import { seiyu } from "./seiyu";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import Underline from "@/components/Content/Underline/Underline";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import Button from "@mui/material/Button";

export const metadata = {
  title: `${seiyu.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${seiyu.name}」の詳細ページです`,
};

// 関数名を変更(ex. TemplateProject -> MiniGame)
export default function Seiyu() {
  return (
    <>
      <Project projectData={seiyu} projectTitleSize={2} />
      <ContentTitle title="チケット" size={2} bigTitle />
      <PageWrapper>
        <SectionBody>
          <ContentBox title={"名工大生"}>
            <p>
              販売開始日時: 10月13日(日) 10時
              <br />
              価格: 2,000円
            </p>
            <ul>
              <li>
                <Underline>
                  名工大生チケットを購入した方は、当日学生証の提示が必要です。
                </Underline>
                名工大生と確認が取れなかった場合は差額をお支払いいただきます
              </li>
              <li>名工大生チケットの不正購入には厳正に対応します。</li>
            </ul>
            <Button
              variant="outlined"
              href="https://forms.gle/Lv63W4T4AcrinboC9"
              target="_blank"
              style={{ width: "50%", margin: "10px auto", fontWeight: 800 }}
            >
              名工大生はこちら
            </Button>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentBox title={"一般"}>
            <p>
              販売開始日時: 10月13日(日) 10時
              <br />
              価格: 2,500円
            </p>
            <Button
              variant="outlined"
              href="https://eplus.jp/sf/detail/4196190001-P0030001"
              target="_blank"
              style={{ width: "50%", margin: "10px auto", fontWeight: 800 }}
            >
              一般の方はこちら
            </Button>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
