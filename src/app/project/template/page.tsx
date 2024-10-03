import React from "react";
import ContentBox from "@/components/Content/ContentBox/ContentBox";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import ContentImage from "@/components/Content/ContentImage/ContentImage";
import PageWrapper from "@/components/Content/PageWrapper/PageWrapper";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import BochureImage from "@/components/Project/BrochureImage/BochureImage";
import ProjectLogo from "@/components/Project/ProjectLogo/ProjectLogo";
import ProjectTag from "@/components/Project/ProjectTag/ProjectTag";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";

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
        <SectionBody>
          <ContentTitle title="1日目" size={2} />
          <ProjectTable>
            <tr>
              <th>時間</th>
              <td>団体名</td>
              <td>内容</td>
            </tr>
            <tr>
              <th>10:15〜10:45</th>
              <td>名古屋工業大学吹奏楽団</td>
              <td>吹奏楽演奏</td>
            </tr>
            <tr>
              <th>10:45〜10:47</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>10:47〜11:17</th>
              <td>Prego</td>
              <td>アカペラ</td>
            </tr>
            <tr>
              <th>11:17〜11:19</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>11:19〜11:49</th>
              <td>名城大学薬学部奇術部 ROOK</td>
              <td>ジャグリング</td>
            </tr>
            <tr>
              <th>11:49〜11:51</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>11:51〜12:11</th>
              <td>金城学院大学ダンス部 BEAT</td>
              <td>ダンス</td>
            </tr>
          </ProjectTable>
        </SectionBody>
        <SectionBody>
          <ContentTitle title="2日目" size={2} />
          <ProjectTable>
            <tr>
              <th>時間</th>
              <td>団体名</td>
              <td>内容</td>
            </tr>
            <tr>
              <th>10:15〜10:40</th>
              <td>DFC</td>
              <td>ダンス</td>
            </tr>
            <tr>
              <th>10:40〜10:42</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>10:42〜11:12</th>
              <td>勿忘草とフィルム</td>
              <td>アイドルコピーダンス</td>
            </tr>
            <tr>
              <th>11:12〜11:14</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>11:14〜11:44</th>
              <td>名古屋工業大学アカペラサークル Grazie!!</td>
              <td>アカペラ演奏</td>
            </tr>
            <tr>
              <th>11:44〜11:46</th>
              <td colSpan={2}>転換</td>
            </tr>
            <tr>
              <th>11:46〜12:16</th>
              <td>NIT PACOD</td>
              <td>ダンス</td>
            </tr>
          </ProjectTable>
        </SectionBody>
      </PageWrapper>
    </>
  );
}
