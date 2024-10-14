import type { Metadata } from "next";
import "@/styles/style.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SnsIconList from "@/components/Sns/SnsIconList";
import PageTop from "@/components/PageTop/PageTop";
import {
  NITFES_DATE_TEXT,
  NITFES_EDITION,
  NITFES_THEME,
  NITFES_YEAR,
} from "@/const/const";

// TODO: authorとcopyrightを作成
// author: "名古屋工業大学第62回工大祭実行委員会",
// copyright: "Copyright (C) 2024 名古屋工業大学第62回工大祭実行委員会 All Rights Reserved.",
export const metadata: Metadata = {
  title: `第${NITFES_EDITION}回 工大祭 ${NITFES_YEAR}`,
  description: `名古屋工業大学の大学祭「工大祭」の公式HP! 第${NITFES_EDITION}回工大祭「${NITFES_THEME}」は${NITFES_YEAR}年${NITFES_DATE_TEXT}に開催予定!! 是非お越しください!!`,
  keywords: `工大祭,第${NITFES_EDITION}回工大祭,名工祭,名古屋工業大学,名工大`,

  // icon
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "icon/android-chrome-192x192.png", type: "image/webp" },
    ],
    apple: "/icon/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#f7791e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <SnsIconList pcOnly />
        <PageTop />
        <Footer />
      </body>
    </html>
  );
}
