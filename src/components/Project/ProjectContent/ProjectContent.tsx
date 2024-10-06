import styles from "./ProjectContent.module.scss";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import { projectBox } from "@/app/project/projectInterface";

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

        // contentが文字列の場合
        if (data?.content && typeof data.content === "string") {
          return (
            <ContentBox key={key} title={data.title}>
              <p>{data.content}</p>
            </ContentBox>
          );
        }

        // contentが配列の場合
        if (data?.content && Array.isArray(data.content)) {
          return (
            <ContentBox key={key} title={data.title}>
              <ul>
                {data.content.map(
                  (item: string | { outerHTML: string }, index: number) => (
                    <li key={index}>
                      {typeof item === "string" ? item : item.outerHTML}
                    </li>
                  )
                )}
              </ul>
            </ContentBox>
          );
        }

        return null;
      })}
    </div>
  );
}
