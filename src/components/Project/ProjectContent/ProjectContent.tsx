import ContentBox from "@/components/Content/ContentBox/ContentBox";
import { ProjectBox } from "@/types/projectInterface";

interface ProjectContentProps {
  projectBoxList: ProjectBox[];
}

export default function ProjectContent({
  projectBoxList: projectData,
}: ProjectContentProps) {
  return (
    <>
      {projectData.map((data, index) => {
        // contentが文字列またはReactNodeの場合
        if (data?.content) {
          return (
            <ContentBox key={index} title={data.title}>
              {typeof data.content === "string" ? (
                <p>{data.content}</p>
              ) : (
                data.content
              )}
            </ContentBox>
          );
        }

        return null;
      })}
    </>
  );
}
