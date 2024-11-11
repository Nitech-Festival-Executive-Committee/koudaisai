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
        if (data?.content) {
          return (
            <Animation key={index} animationType={data.position || "right"}>
              {/* positionがleftなら左から、rightなら右からフェードアニメーション */}
              <ContentBox title={data.title}>
                {typeof data.content === "string" ? (
                  // contentがstringの場合は<p>で囲む
                  <p>{data.content}</p>
                ) : (
                  // contentがReactNodeの場合はそのまま表示
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
