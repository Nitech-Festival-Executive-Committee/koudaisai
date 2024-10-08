import styles from "./ProjectContent.module.scss";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import { projectBox } from "@/app/project/projectInterface";
import { ReactNode } from "react";

interface ProjectContentProps {
  projectData: Record<string, projectBox>;
}

export default function ProjectContent({ projectData }: ProjectContentProps) {
  return (
    <div className={styles.brochureImg}>
      {Object.keys(projectData).map((key) => {
        const data = projectData[key];

        // 非表示項目の場合
        if (data?.isHidden ?? false) {
          return null;
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
    </div>
  );
}
