import ContentTitle from "../Content/ContentTitle/ContentTitle";
import PageWrapper from "../Content/PageWrapper/PageWrapper";
import styles from "./Announcements.module.scss";
import NewsAccordion from "./NewsAccordion";
import { Announcement } from "@/types/types";

// コメントアウトした上のコードから、下のannouncementへ移植する
export default function Announcements() {
  const announcements: Announcement[] = [
    {
      title: (
        <p>
          <a href="./whats-new" target="_blank" aria-label="What's new?ページ">
            What&apos;s new?ページ
          </a>
          を公開しました!
        </p>
      ),
      content: (
        <p>
          <a href="./whats-new" target="_blank" aria-label="What's new?ページ">
            What&apos;s new?ページ
          </a>
          に62回工大祭ホームページの変更点をまとめました!
        </p>
      ),
      date: "2024-11-11",
    },
    {
      title: <p>工大祭Webサイトをリニューアルしました!</p>,
      content: (
        <p>
          工大祭Webサイトをリニューアルし、新しいロード画面の追加や利便性・パフォーマンスが向上しました!
        </p>
      ),
      date: "2024-11-01",
    },
    {
      title: (
        <p>
          <a href="./project/" target="_blank" aria-label="企画ページ">
            企画情報
          </a>
          を公開しました
        </p>
      ),
      date: "2024-11-01",
    },
    {
      title: (
        <p>
          <a href="./project/tyuya/" target="_blank" aria-label="中夜祭">
            中夜祭のページ
          </a>
          を更新しました
        </p>
      ),
      date: "2024-10-15",
    },
    {
      title: (
        <p>
          <a
            href="./project/seiyu/"
            target="_blank"
            aria-label="声優トークショー"
          >
            声優トークショーのページ
          </a>
          を更新しました
        </p>
      ),
      date: "2024-10-10",
    },
    {
      title: (
        <p>
          <a
            href="https://x.com/nitfes/status/1840949759592558721"
            target="_blank"
            aria-label="パンフレットコンテスト"
          >
            パンフレットコンテストの結果
          </a>
          を発表しました
        </p>
      ),
      date: "2024-10-01",
    },
    {
      title: (
        <p>
          <a href="./pfc/" target="_blank" aria-label="パンフレットコンテスト">
            パンフレットコンテスト決勝戦
          </a>
          を更新しました
        </p>
      ),
      date: "2024-07-28",
    },
    {
      title: (
        <p>
          <a href="./pfc/" target="_blank" aria-label="パンフレットコンテスト">
            パンフレットコンテストのページ
          </a>
          を公開しました
        </p>
      ),
      date: "2024-06-30",
    },
    {
      title: <p>掲載情報を第62回に更新しました</p>,
      date: "2024-06-01",
    },
  ];

  return (
    <>
      <ContentTitle title="お知らせ" size={2} bigTitle />
      <PageWrapper>
        <div className={styles.newsContainer}>
          <div className={styles.accordionContainer}>
            {announcements.map((announcement, index) => (
              <NewsAccordion key={index} {...announcement} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
