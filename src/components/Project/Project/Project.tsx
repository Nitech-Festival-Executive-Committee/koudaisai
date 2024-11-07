import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import ProjectContent from "../ProjectContent/ProjectContent";
import ProjectLogo from "../ProjectLogo/ProjectLogo";
import ProjectTag from "../ProjectTag/ProjectTag";
import BrochureImage from "../BrochureImage/BrochureImage";
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
  logoPath = "logo.webp", // 何も指定しない場合はlogo.webp, ""を指定すると非表示
  brochurePath = "brochure.webp", // 何も指定しない場合はbrochure.webp, ""を指定すると非表示
  projectTitleSize = 1,
  children,
}: ProjectProps) {
  return (
    <>
      <ContentTitle title={projectData.name} size={projectTitleSize} bigTitle />
      {logoPath !== "" && (
        <ProjectLogo
          img={`/62nd/project/${projectData.link}/${logoPath}`}
          alt="Logo"
        />
      )}
      <PageWrapper>
        <SectionBody>
          {brochurePath !== "" && (
            <BrochureImage
              img={`/62nd/project/${projectData.link}/${brochurePath}`}
              alt="Brochure"
            />
          )}
          <ProjectContent
            projectBoxList={projectData.projectBoxList.filter(
              (box) => box.position === "left" // positionにleftが指定されているもののみ
            )}
          />
        </SectionBody>
        <SectionBody>
          <ContentTitle title="企画詳細" size={2} />
          <ProjectTag
            day1={projectData.schedule.day1 ? true : false}
            day2={projectData.schedule.day2 ? true : false}
            exclusiveText={projectData.tags ? projectData.tags : []}
          />
          <ProjectContent
            projectBoxList={projectData.projectBoxList.filter(
              (box) => !box.position || box.position === "right" // positionを指定していないか、rightが指定されているもののみ
            )}
          />
        </SectionBody>
      </PageWrapper>
      {children}
    </>
  );
}
