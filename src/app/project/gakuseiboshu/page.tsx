import React from "react";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { gakuseiboshu as ProjectData } from "./gakuseiboshu";
import { guest1, guest2 } from "./guest";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentImage from "@/components/Content/ContentImage/ContentImage";

export const metadata = {
  title: `${ProjectData.name} - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭開催「${ProjectData.name}」の詳細ページです`,
};

// 関数名を変更(ex. MiniGame)
export default function Gakuseiboshu() {
  const half = Math.ceil(guestInformationList.length / 2);
  const firstHalf = guestInformationList.slice(0, half);
  const secondHalf = guestInformationList.slice(half);

  return (
    <Project projectData={ProjectData}>
      <PageWrapper>
        <SectionBody>
          <ProjectTable tableObject={guest1} />
        </SectionBody>
        <SectionBody>
          <ProjectTable tableObject={guest2} />
        </SectionBody>
      </PageWrapper>

      <ContentTitle title="団体詳細" size={2} bigTitle />
      <PageWrapper>
        <SectionBody>{renderGuestList(firstHalf)}</SectionBody>

        <SectionBody>{renderGuestList(secondHalf)}</SectionBody>
      </PageWrapper>
    </Project>
  );
}

const renderGuestList = (guestList: GuestInformation[]) => {
  return guestList.map((guest, index) => (
    <React.Fragment key={index}>
      <ContentTitle title={guest.name} size={guest.nameSize} />
      <ContentBox title={"企画名"}>
        <p>{guest.title}</p>
      </ContentBox>
      <ContentBox title={"企画場所"}>
        <p>{guest.place}</p>
      </ContentBox>
      <ContentBox title={"企画日時"}>
        <p>{guest.time}</p>
      </ContentBox>
      <ContentBox title={"団体紹介"}>
        <p>{guest.Description}</p>
        <ContentImage img={guest.img} />
      </ContentBox>
      <ContentBox title={"SNS"}>
        <p>{guest.link}</p>
      </ContentBox>
    </React.Fragment>
  ));
};

interface GuestInformation {
  name: string;
  title: string;
  nameSize: number;
  place: string;
  time: string | React.ReactNode;
  Description: string;
  link: string | React.ReactNode;
  img: string;
}

const guestInformationList: GuestInformation[] = [
  {
    name: "SAZANKA",
    nameSize: 2,
    title: "レスキューロボットを操縦してみよう!!",
    place: "5214講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "こんにちは!レスキューロボットプロジェクトSAZANKAです!私たちは災害地で活躍するレスキューロボットを制作しています!ロボットを操縦してみたい方はぜひ来てください!",
    link: (
      <>
        <a href="https://nitsazanka.studio.site/">Web</a>
        <br />
        <a href="https://x.com/nit_sazanka">X: @NIT_SAZANKA</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/sazanka.webp",
  },
  {
    name: "ロボット研究会",
    nameSize: 4,
    title: "ロボットを操縦してみよう!!",
    place: "5214講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "こんにちは!ロボット研究会です!私たちはロボットを制作しています!ロボットを操縦してみたい方はぜひ来てください!",
    link: (
      <>
        <a href="https://nitrobotics.studio.site/">Web</a>
        <br />
        <a href="https://x.com/nit_robotics">X: @NIT_ROBOTICS</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/robot.webp",
  },
  {
    name: "ハッカソン",
    nameSize: 2,
    title: "ハッカソンに参加してみよう!!",
    place: "5212講義室",
    time: (
      <>
        1日目: 10:00~16:00
        <br />
        2日目: 10:00~15:30
      </>
    ),
    Description:
      "こんにちは!ハッカソンです!私たちはハッカソンを開催しています!ハッカソンに参加してみたい方はぜひ来てください!",
    link: (
      <>
        <a href="https://nithackathon.studio.site/">Web</a>
        <br />
        <a href="https://x.com/nit_hackathon">X: @NIT_HACKATHON</a>
      </>
    ),
    img: "/62nd/project/gakuseiboshu/guest/hackathon.webp",
  },
];
