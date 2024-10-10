import React from "react";
import { projectBox } from "@/app/project/projectInterface";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectContent from "../ProjectContent/ProjectContent";
import ProjectLogo from "../ProjectLogo/ProjectLogo";
import ProjectTag from "../ProjectTag/ProjectTag";
import BochureImage from "../BrochureImage/BochureImage";

interface ProjectProps {
  projectData: Record<string, projectBox | undefined>;
  logoPath?: string; // 指定が無い場合は logo.webp
  brochurePath?: string; // 指定が無い場合は brochure.webp
  children: React.ReactNode;
}

export default function Project({
  projectData,
  logoPath = "./logo.webp",
  brochurePath = "./brochure.webp",
  children,
}: ProjectProps) {
  return (
    <>
      <ContentTitle title="タイトル" size={1} bigTitle />
      <ProjectLogo img={logoPath} alt="Logo" />
      <PageWrapper>
        <SectionBody>
          <BochureImage img={brochurePath} alt="Brochure" />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="hoge" size={2} />
          <ProjectTag
            day1={projectData.day1 ? true : false}
            day2={projectData.day2 ? true : false}
            exclusiveText={
              Array.isArray(projectData.projectTag?.content)
                ? projectData.projectTag?.content
                : []
            }
          />
          <ProjectContent
            projectData={projectData as Record<string, projectBox>}
          />
        </SectionBody>
        {children}
      </PageWrapper>
    </>
  );
}
