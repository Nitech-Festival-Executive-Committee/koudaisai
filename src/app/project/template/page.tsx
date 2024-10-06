import React from "react";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentImage from "@/components/Content/ContentImage/ContentImage";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import BochureImage from "@/components/Project/BrochureImage/BochureImage";
import ProjectLogo from "@/components/Project/ProjectLogo/ProjectLogo";
import ProjectTag from "@/components/Project/ProjectTag/ProjectTag";

export default function ProjectTemplate() {
  return (
    <>
      <ContentTitle title="タイトル" size={1} bigTitle />
      <ProjectLogo img="/img/62ndLogo.png" alt="62nd Logo" />
      <PageWrapper>
        <SectionBody>
          <BochureImage img="/img/canvas.webp" />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="hoge" size={2} />
          <ProjectTag day1 day2 exclusive exclusiveText="抽選券" />
          <ContentBox title={"test"}>
            <p>aiueo</p>
          </ContentBox>
          <ContentBox title={"aiueo"}>
            <ContentImage img="/img/62ndLogo.png" />
          </ContentBox>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
