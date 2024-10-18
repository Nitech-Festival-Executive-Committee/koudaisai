import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectContent from "../ProjectContent/ProjectContent";
import ProjectLogo from "../ProjectLogo/ProjectLogo";
import ProjectTag from "../ProjectTag/ProjectTag";
import BochureImage from "../BrochureImage/BochureImage";
import { ProjectData } from "@/types/projectInterface";

interface ProjectProps {
  projectData: ProjectData;
  logoPath?: string; // 指定が無い場合は logo.webp
  brochurePath?: string; // 指定が無い場合は brochure.webp
  projectTitleSize?: number; // 初期値は1(h1)
  children?: React.ReactNode;
}

export default function Project({
  projectData,
  logoPath,
  brochurePath,
  projectTitleSize = 1,
  children,
}: ProjectProps) {
  return (
    <>
      <ContentTitle title={projectData.name} size={projectTitleSize} bigTitle />
      <ProjectLogo
        img={
          logoPath ? logoPath : `/62nd/project/${projectData.link}/logo.webp`
        }
        alt="Logo"
      />
      <PageWrapper>
        <SectionBody>
          <BochureImage
            img={
              brochurePath
                ? brochurePath
                : `/62nd/project/${projectData.link}/brochure.webp`
            }
            alt="Brochure"
          />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="hoge" size={2} />
          <ProjectTag
            day1={projectData.schedule.day1 ? true : false}
            day2={projectData.schedule.day2 ? true : false}
            exclusiveText={projectData.tags ? projectData.tags : []}
          />
          <ProjectContent projectBoxList={projectData.projectBoxList} />
        </SectionBody>
        {children}
      </PageWrapper>
    </>
  );
}
