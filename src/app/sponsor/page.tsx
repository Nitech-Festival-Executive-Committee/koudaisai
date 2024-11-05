import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `協賛 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭の協賛一覧です。`,
};

export default function Sponsor() {
  return (
    <>
      <ContentTitle title="協賛一覧" size={1} bigTitle />
      <PageWrapper>
        <p
          style={{
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          その他多くの企業様から物品・広告協賛をいただいております。広告協賛は当日パンフレット・会場等に掲載されます。
        </p>
        <SectionBody>
          <ContentTitle title="企業の皆様へ" size={2} />
          <ContentBox title={""}>
            <p>
              工大祭は毎年多くの企業の皆様や地域の皆様、卒業生の皆様のお力添えのもと運営することができています。
              <br />
              今年も工大祭の開催に向け、実行委員一丸となって活動しておりますが、学生のみで運営していることもあり、我々だけでは力が及ばない部分も多くございます。
              <br />
              つきましては、工大祭の存続、さらなる発展のために企業の皆様にご協賛をお願いしております。
              <br />
              なお、皆様から頂いたご協賛はすべて工大祭の運営、また来場者の方々のために使用させていただきます。ご理解とご協力を賜りますよう、お願い申し上げます。
            </p>
          </ContentBox>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="協賛" size={2} />
          <ContentBox title={"協賛の種類"}>
            <ul>
              <li>
                本祭協賛
                <ul>
                  <li>工大祭実行委員会が主催する企画にて提供する物品</li>
                  <li>公式パンフレットへの広告掲載</li>
                  <li>フライヤー広告</li>
                  <li>当日構内の大型看板広告</li>
                  <li>
                    CM協賛
                    <ul>
                      <li>
                        宣伝動画もしくは紹介動画を配信企画の合間(バンドの楽器の転換など)に放送
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                オンライン協賛
                <ul>
                  <li>
                    工大祭実行委員会のTwitterもしくはInstagramへの企業紹介の投稿掲載
                  </li>
                  <li>
                    Web協賛
                    <ul>
                      <li>企業リンクの掲載</li>
                      <li>バナー広告</li>
                      <li>宣伝動画もしくは紹介動画の掲載</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              また、上記の方法以外でのご協賛も対応しております。ご検討いただける企業の方は、
              <a href="../faq" aria-label="お問い合わせ">
                お問い合わせ
              </a>
              の連絡先よりお気軽にお問い合わせください。詳しい資料をお送りいたします。
            </p>
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
