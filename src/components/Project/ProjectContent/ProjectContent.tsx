import ContentBox from "@/components/Content/ContentBox/ContentBox";
import { ProjectBox } from "@/types/projectInterface";
import Animation from "@/components/Animation/Animation";

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
            <Animation key={index} animationType={data.position || "right"}>
              <ContentBox title={data.title}>
                {typeof data.content === "string" ? (
                  <p>{data.content}</p>
                ) : (
                  data.content
                )}
              </ContentBox>
            </Animation>
          );
        }

        return null;
      })}
    </>
  );
}
