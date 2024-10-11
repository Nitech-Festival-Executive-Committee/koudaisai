import ContentBox from "@/components/Content/ContentBox/ContentBox";
import { projectBox } from "@/app/project/projectInterface";
import { ReactNode } from "react";

interface ProjectContentProps {
  projectData: Record<string, projectBox>;
}

export default function ProjectContent({ projectData }: ProjectContentProps) {
  let isDateAlreadyGenerated = false;
  // 開催日時
  const date = ["11/16(土)", "11/17(日)"];

  return (
    <>
      {Object.keys(projectData).map((key) => {
        const data = projectData[key];

        // 非表示項目の場合
        if (data?.isHidden ?? false) {
          return null;
        }

        // 例外項目
        if (!isDateAlreadyGenerated && (key === "day1" || key === "day2")) {
          isDateAlreadyGenerated = true;
          return (
            <ContentBox key={key} title="開催日時">
              {projectData?.day1 && (
                <>
                  1日目{`(${date[0]})`}: {projectData.day1.content}
                  <br />
                </>
              )}
              {projectData?.day2 && (
                <>
                  2日目{`(${date[1]})`}: {projectData.day2.content}
                  <br />
                </>
              )}
            </ContentBox>
          );
        }

        // contentが配列の場合
        if (Array.isArray(data?.content)) {
          return (
            <ContentBox key={key} title={data.title}>
              <ul>
                {data.content.map((item: string | ReactNode, index: number) => (
                  <li key={index}>{typeof item === "string" ? item : item}</li>
                ))}
              </ul>
            </ContentBox>
          );
        }

        // contentが文字列またはReactNodeの場合
        if (data?.content) {
          return (
            <ContentBox key={key} title={data.title}>
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
