import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
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
import Loader from "@/components/Loader/Loader";

export const metadata: Metadata = {
  title: `第${NITFES_EDITION}回 工大祭 ${NITFES_YEAR}`,
  description: `名古屋工業大学の大学祭「工大祭」の公式HP! 第${NITFES_EDITION}回工大祭「${NITFES_THEME}」は${NITFES_YEAR}年${NITFES_DATE_TEXT.BOTH}に開催予定!! 是非お越しください!!`,
  keywords: `工大祭,第${NITFES_EDITION}回工大祭,名工祭,名古屋工業大学,名工大`,
  authors: [{ name: "名古屋工業大学第62回工大祭実行委員会" }],
  other: {
    copyright:
      "Copyright (C) 2024 名古屋工業大学第62回工大祭実行委員会 All Rights Reserved.",
  },

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Playball&family=Open+Sans:wght@400;500;600&family=Roboto:wght@300;400;500&family=Mochiy+Pop+P+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Open+Sans:wght@400;500;600&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Loader />
        <Header />
        <main>{children}</main>
        <SnsIconList pcOnly />
        <PageTop />
        <Footer />

        <GoogleTagManager gtmId="G-Z9XM0B1SGL" />
        <GoogleAnalytics gaId="G-Z9XM0B1SGL" />
      </body>
    </html>
  );
}
